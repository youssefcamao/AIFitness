from beanie import PydanticObjectId
from fastapi import APIRouter, Depends, HTTPException

from ..models.user import User, UserSession
from ..services.chat_service import ChatService

router = APIRouter()
chat_service = ChatService()

@router.post("/signup", response_model=UserSession)
async def signup(user: User):
    created_user = await chat_service.create_user(user)
    if created_user:
        return UserSession(user_id=created_user.id, session_id="")
    else:
        raise HTTPException(status_code=400, detail="User already exists")

@router.post("/login", response_model=UserSession)
async def login(user: User):
    validated_user = await chat_service.validate_user(user)
    if validated_user:
        return UserSession(user_id=validated_user.id, session_id="")
    else:
        raise HTTPException(status_code=400, detail="Invalid username or password")
