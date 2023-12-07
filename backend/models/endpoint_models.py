from .chat_session import ChatSession
from pydantic import BaseModel
from beanie import PydanticObjectId


class CreateNewChat(BaseModel):
    session_id: str
    session_title: str
    response: str


class HandleChat(BaseModel):
    session_id: str
    response: str
