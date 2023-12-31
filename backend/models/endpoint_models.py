from .chat_session import ChatSession, UserSecurityQuestion
from pydantic import BaseModel, EmailStr
from beanie import PydanticObjectId


class CreateNewChat(BaseModel):
    session_id: str
    session_title: str
    response: str


class HandleChat(BaseModel):
    session_id: str
    response: str


class UserCreate(BaseModel):
    text: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str or None = None


class SuccessfulAuth(BaseModel):
    token: Token
    full_name: str


class SecurityQuestionAnswer(BaseModel):
    intermediate_token: str
    answer: str


class SecurityResponseForm(BaseModel):
    security_question: str
    intermediate_token: str
