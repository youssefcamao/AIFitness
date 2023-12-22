from datetime import datetime, timedelta
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from jose import JWTError, jwt
from fastapi import HTTPException, status
from ..models.chat_session import User, UserSecurityQuestion
from typing import Optional
from ..models.endpoint_models import TokenData, UserCreate, Token
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

    def create_intermediate_token(self, data: dict, expires_delta: timedelta = timedelta(minutes=5)):
        to_encode = data.copy()
        expire = datetime.utcnow() + expires_delta
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
        return encoded_jwt

    def validate_intermediate_token(self, token: str):
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            if not payload.get("intermediate"):
                raise JWTError("Invalid intermediate token")
            # Return the user's email if the token is valid
            return payload.get("sub")
        except JWTError as e:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail=str(e),
                headers={"WWW-Authenticate": "Bearer"}
            )

    def validate_full_token(self, token: str):
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
            if payload.get("intermediate") == True or not payload.get("sub"):
                raise JWTError("Invalid token")
            return payload.get("sub")
        except JWTError as e:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail=str(e),
                headers={"WWW-Authenticate": "Bearer"}
            )

    async def get_current_user(self, token: str):
        credential_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                             detail="Could not validate credentials", headers={"WWW-Authenticate": "Bearer"})
        try:
            email: str = self.validate_full_token(token)
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
