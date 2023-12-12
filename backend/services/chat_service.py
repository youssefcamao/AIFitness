from langchain.chat_models import ChatOpenAI
from langchain.cache import InMemoryCache
from langchain.globals import set_llm_cache
from langchain.prompts import ChatPromptTemplate
from ..models.chat_session import ChatSession
from ..config import settings
from ..llm import prompts
from ..llm.title_creator import TitleLlm
from ..models.chat_session import ChatSession
from beanie import PydanticObjectId
from typing import List, Dict
import asyncio
from ..services.user_service import UserService


class ChatService:
    def __init__(self):
        self.chat_model = ChatOpenAI(
            api_key=settings.OPENAI_API_KEY, model_name=settings.MODEL_NAME)
        set_llm_cache(InMemoryCache())
        self.title_creator = TitleLlm()
        self.sessions = {}

    async def get_session_fromId(self, session_id: PydanticObjectId) -> ChatSession | None:
        session_data = await ChatSession.get(session_id)
        if session_data:
            return session_data
        return None

    async def handle_chat(self, session: ChatSession, user_message: str) -> str:
        await self.run_chat(session, user_message)
        await session.save()
        return session.get_latest_response()

    async def create_new_session(self, initial_message) -> ChatSession:
        session = ChatSession()
        await asyncio.gather(self.run_chat(session, initial_message), self.__setup_title(session, initial_message))
        saved_session = await ChatSession.insert_one(session)
        # Add the created session to the user's list of sessions
        user = await UserService.add_session(user_id=saved_session.user_id, session_id=saved_session.id)
        return saved_session

    async def get_all_sessions(self) -> List[ChatSession]:
        return await ChatSession.find_all().to_list()

    async def delete_session(self, session_to_delete: ChatSession) -> Dict[str, str]:
        await session_to_delete.delete()
        return {"message": "Session deleted"}

    async def run_chat(self, chat_session: ChatSession, user_message):
        chat_session.add_user_message(user_message)
        messages = chat_session.get_messages_with_system_instruction(
            prompts.SYS_PROMPT)

        chat_prompt = ChatPromptTemplate.from_messages(messages)
        formatted_messages = chat_prompt.format()
        response = await self.chat_model.ainvoke(
            formatted_messages)
        chat_session.add_ai_message(response.content)

    async def __setup_title(self, session: ChatSession, initial_message: str):
        title = await self.title_creator.generate_summary(initial_message)
        session.session_title = title
