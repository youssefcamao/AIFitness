from fastapi import APIRouter, HTTPException
from ..services.chat_service import ChatService
from ..llm.title_creator import TitleLlm
from beanie import PydanticObjectId

router = APIRouter()
chat_service = ChatService()
title_creator = TitleLlm()


@router.post("/chat/{session_id}")
async def chat(session_id: PydanticObjectId, message: str):
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
    return {
        "session_id": str(session_id),
        "response": response}


@router.post("/chat")
async def start_new_session(message: str):
    if not message:
        raise HTTPException(status_code=400, detail="Message is required")
    session_title = title_creator.generate_summary(message)
    session = await chat_service.create_new_session(session_title, message)
    return {
        "session_id": str(session.id),
        "title": session.session_title,
        "response": session.get_latest_response()}


@router.get("/chat")
async def list_sessions():
    return {"sessions": await chat_service.get_all_sessions()}


@router.get("/chat/{session_id}")
async def list_sessions(session_id: PydanticObjectId):
    return {"session": await chat_service.get_session_fromId(session_id=session_id)}


@router.delete("/chat/{session_id}")
async def delete_session(session_id: PydanticObjectId):
    if not session_id:
        raise HTTPException(status_code=400, detail="Id is required")
    session = await chat_service.get_session_fromId(session_id)
    if session is None:
        raise HTTPException(
            status_code=404, detail='session not found with the given ID!')
    return await chat_service.delete_session(session)
