from typing import Optional

from beanie import Document, PydanticObjectId
from pydantic import BaseModel, Field


class User(Document):
    id: Optional[PydanticObjectId] = Field(default_factory=PydanticObjectId, alias="_id")
    username: str
    password: str

    class Settings:
        collection = "users"


class UserSession(BaseModel):
    user_id: PydanticObjectId
    session_id: str
