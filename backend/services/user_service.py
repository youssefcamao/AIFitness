from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from jose import JWTError, jwt
from fastapi import HTTPException, status
from ..models.chat_session import User, UserSecurityQuestion
from typing import Optional
from ..models.endpoint_models import TokenData, UserCreate
from ..models.llm_models import MatchedSignup


SECRET_KEY = "83daa0256a2289b0fb23693bf1f6034d44396675749244721a2b20e896e11662"
ALGORITHM = "HS256"


class UserService:
    def __init__(self) -> None:
        self.pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
        self.oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

    def verify_password(self, plain_password, hashed_password):
        return self.pwd_context.verify(plain_password, hashed_password)

    def get_password_hash(self, password):
        return self.pwd_context.hash(password)

    async def get_user_by_email(self, email: str) -> User | None:
        user = await User.find_one(User.email == email)
        if user:
            return user
        else:
            return None

    async def authenticate_user(self, email: str, password: str):
        user = await self.get_user_by_email(email)
        if not user:
            return False
        if not self.verify_password(password, user.hashed_password):
            return False

        return user

    def create_access_token(self, data: dict, expires_delta: timedelta or None = None):
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.utcnow() + expires_delta
        else:
            expire = datetime.utcnow() + timedelta(minutes=15)

        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        return encoded_jwt

    async def get_current_user(self, token: str):
        credential_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                             detail="Could not validate credentials", headers={"WWW-Authenticate": "Bearer"})
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            email: str = payload.get("sub")
            if email is None:
                raise credential_exception

            token_data = TokenData(email=email)
        except JWTError:
            raise credential_exception

        user = await self.get_user_by_email(email=token_data.email)
        if user is None:
            raise credential_exception

        return user

    async def signup_user(self, matched_result: MatchedSignup) -> Optional[User]:
        existing_user = await self.get_user_by_email(matched_result.email)
        if existing_user:
            return None

        hashed_password = self.get_password_hash(matched_result.password)
        new_user = User(
            full_name=matched_result.full_name,
            email=matched_result.email,
            hashed_password=hashed_password,
            session_list=[],
            security_question=UserSecurityQuestion(question=matched_result.security.question,
                                                   response=matched_result.security.response)
        )
        await User.insert_one(new_user)
        return new_user
