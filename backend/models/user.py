from typing import List

from beanie import Document, PydanticObjectId
from passlib.context import CryptContext
from pydantic import BaseModel, Field

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class User(Document):
    username: str = Field(...)
    password: str = Field(...)
    chat_sessions: List[PydanticObjectId] = []

    def hash_password(self, password: str):
        self.password = pwd_context.hash(password)

    class Settings:
        collection = "users"
