from fastapi import APIRouter, HTTPException, Depends
from ..services.chat_service import ChatService
from ..services.user_service import UserService
from typing import List, Dict
from ..models.chat_session import ChatSession, User
from ..models.endpoint_models import CreateNewChat, HandleChat

router = APIRouter()
user_service = UserService()


@router.post("/chat/{session_id}")
async def chat(session_id: str, message: str, current_user: User = Depends(user_service.get_current_user)) -> HandleChat:
    chat_service = ChatService(current_user)
    if not message:
        raise HTTPException(status_code=400, detail="Message is required")
    if not session_id:
        raise HTTPException(status_code=400, detail="Id is required")
    response = await chat_service.handle_chat(session_id, message)
    if response is None:
        raise HTTPException(
            status_code=404, detail='session not found with the given ID!')
    return HandleChat(session_id=session_id, response=response)


@router.post("/chat")
async def start_new_session(message: str, current_user: User = Depends(user_service.get_current_user)) -> CreateNewChat:
    chat_service = ChatService(current_user)
    if not message:
        raise HTTPException(status_code=400, detail="Message is required")
    session = await chat_service.create_new_session(message)
    return CreateNewChat(
        session_id=session.session_id,
        session_title=session.session_title,
        response=session.get_latest_response())


@router.get("/chat")
async def list_sessions(current_user: User = Depends(user_service.get_current_user)) -> List[ChatSession]:
    chat_service = ChatService(current_user)
    return await chat_service.get_all_sessions()


@router.get("/chat")
async def list_sessions(current_user: User = Depends(user_service.get_current_user)) -> List[ChatSession]:
    chat_service = ChatService(current_user)
    return chat_service.get_all_sessions()


@router.delete("/chat/{session_id}", status_code=204)
async def delete_session(session_id: str, current_user: User = Depends(user_service.get_current_user)):
    chat_service = ChatService(current_user)
    if not session_id:
        raise HTTPException(status_code=400, detail="Id is required")
    session = await chat_service.get_session_fromId(session_id)
    if session is None:
        raise HTTPException(
            status_code=404, detail='session not found with the given ID!')
    await chat_service.delete_session(session.session_id)
