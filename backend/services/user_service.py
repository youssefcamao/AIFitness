from typing import Optional

from beanie import PydanticObjectId
from jose import JWTError, jwt
from passlib.context import CryptContext

from ..models.user import User

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserService:
    @staticmethod
    async def signup(username: str, password: str) -> User:
        user = User(username=username)
        user.hash_password(password)
        await user.insert_one()
        return user

    @staticmethod
    async def login(username: str, password: str) -> Optional[str]:
        user = await User.find_one({"username": username})
        if user and pwd_context.verify(password, user.password):
            token = jwt.encode({"username": username}, "secret", algorithm="HS256")
            return token
        return None

    @staticmethod
    async def add_session(user_id: PydanticObjectId, session_id: PydanticObjectId) -> User:
        user = await User.get(user_id)
        user.chat_sessions.append(session_id)
        await user.save()
        return user

    @staticmethod
    async def remove_session(user_id: PydanticObjectId, session_id: PydanticObjectId) -> User:
        user = await User.get(user_id)
        user.chat_sessions.remove(session_id)
        await user.save()
        return user
