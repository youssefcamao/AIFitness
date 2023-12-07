from typing import List
from enum import Enum
from pydantic import BaseModel
from beanie import Document
from ..config import settings


class ChatRole(Enum):
    ai = 0,
    user = 1,
    system = 2


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatSession(Document):
    session_title: str = 'New Chat with AI'
    messages: List[ChatMessage] = []

    def add_ai_message(self, content: str):
        self.messages.append(ChatMessage(
            role=ChatRole.ai.name, content=content))

    def add_user_message(self, content: str):
        self.messages.append(ChatMessage(
            role=ChatRole.user.name, content=content))

    def get_messages_with_system_instruction(self, system_instruction: str):
        messages = [ChatMessage(
            role=ChatRole.system.name, content=system_instruction)] + self.messages
        return [(msg.role, msg.content) for msg in messages]

    def get_latest_response(self):
        return self.messages[-1].content if self.messages else ""

    class Settings:
        name = settings.DATABASE_NAME

    class Config:
        populate_by_name = True
        json_schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "session_title": "new Chat",
                "messages": [{"role": "ai", "message": "Hello how can i help you"},
                             {"role": "user", "message": "can you give me a fitness plan"}]
            }
        }
