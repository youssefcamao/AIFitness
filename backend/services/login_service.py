from datetime import timedelta

from backend.models.chat_session import User
from backend.services.user_service import (authenticate_user,
                                           create_access_token, get_user)
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm


class LoginService:
    @staticmethod
    def authenticate_user(username: str, password: str) -> User:
        user = get_user(username)
        if not user or not user.verify_password(password):
            raise HTTPException(
                status_code=401,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        return user

    @staticmethod
    def create_access_token(username: str, expires_delta: timedelta = timedelta(minutes=30)) -> str:
        return create_access_token(
            data={"sub": username}, expires_delta=expires_delta
        )

    @staticmethod
    async def login(form_data: OAuth2PasswordRequestForm = Depends()) -> dict:
        user = LoginService.authenticate_user(form_data.username, form_data.password)
        access_token = LoginService.create_access_token(user.username)
        return {"access_token": access_token, "token_type": "bearer"}
