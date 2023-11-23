from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from ..models.chat_session import ChatSession
from ..config import settings
from ..llm import prompts
import uuid


class ChatService:
    def __init__(self):
        self.chat_model = ChatOpenAI(
            api_key=settings.OPENAI_API_KEY, model_name=settings.MODEL_NAME)
        self.sessions = {}

    def get_session_fromId(self, session_id: str) -> ChatSession | None:
        if session_id not in self.sessions:
            return None
        return self.sessions[session_id]

    def handle_chat(self, session_id: str, user_message: str) -> str:
        session = self.get_session_fromId(session_id)
        if session is None:
            raise ValueError(f"No session found with ID: {session_id}")
        session.add_user_message(user_message)
        messages = session.get_messages_with_system_instruction(
            prompts.SYS_PROMPT)

        chat_prompt = ChatPromptTemplate.from_messages(messages)
        formatted_messages = chat_prompt.format()
        response = self.chat_model.invoke(
            formatted_messages)
        session.add_ai_message(response.content)

        return session.get_latest_response()

    def create_new_session(self) -> str:
        session_id = str(uuid.uuid4())
        self.sessions[session_id] = ChatSession(session_id)
        return self.sessions[session_id]

    def get_all_sessions(self):
        return self.sessions
