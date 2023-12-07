from fastapi import APIRouter, HTTPException
from ..services.chat_service import ChatService
from ..llm.title_creator import TitleLlm
from beanie import PydanticObjectId
from typing import List, Dict
from ..models.chat_session import ChatSession
from ..models.endpoint_models import CreateNewChat, HandleChat

router = APIRouter()
chat_service = ChatService()


@router.post("/chat/{session_id}")
async def chat(session_id: PydanticObjectId, message: str) -> HandleChat:
    if not message:
        raise HTTPException(status_code=400, detail="Message is required")
    if not session_id:
        raise HTTPException(status_code=400, detail="Id is required")
    session = await chat_service.get_session_fromId(session_id)
    if session is None:
        raise HTTPException(
            status_code=404, detail='session not found with the given ID!')
    response = await chat_service.handle_chat(session, message)
    if response is None:
        raise HTTPException(
            status_code=404, detail='session not found with the given ID!')
    return HandleChat(session_id=str(session_id), response=response)


@router.post("/chat")
async def start_new_session(message: str) -> CreateNewChat:
    if not message:
        raise HTTPException(status_code=400, detail="Message is required")
    session = await chat_service.create_new_session(message)
    return CreateNewChat(
        session_id=str(session.id),
        session_title=session.session_title,
        response=session.get_latest_response())


@router.get("/chat")
async def list_sessions() -> List[ChatSession]:
    return await chat_service.get_all_sessions()


@router.get("/chat/{session_id}")
async def list_sessions(session_id: PydanticObjectId) -> ChatSession:
    return await chat_service.get_session_fromId(session_id=session_id)


@router.delete("/chat/{session_id}", status_code=204)
async def delete_session(session_id: PydanticObjectId):
    if not session_id:
        raise HTTPException(status_code=400, detail="Id is required")
    session = await chat_service.get_session_fromId(session_id)
    if session is None:
        raise HTTPException(
            status_code=404, detail='session not found with the given ID!')
    await chat_service.delete_session(session)
