from fastapi import APIRouter, HTTPException
from ..services.chat_service import ChatService

router = APIRouter()
chat_service = ChatService()


@router.post("/chat/{session_id}")
async def chat(session_id: str, message: str):
    if not message:
        raise HTTPException(status_code=400, detail="Message is required")
    if not session_id:
        raise HTTPException(status_code=400, detail="Id is required")

    session = chat_service.get_session_fromId(session_id)
    if session is None:
        raise HTTPException(
            status_code=404, detail='session not found with the given ID!')
    session_id, response = chat_service.handle_chat(session_id, message)
    return {
        "session_id": session_id,
        "response": response}


@router.post("/chat")
async def start_new_session(message: str):
    session = chat_service.create_new_session()
    response = chat_service.handle_chat(session.session_id, message)
    return {
        "session_id": session.session_id,
        "response": response}


@router.get("/chat")
async def list_sessions():
    return {"sessions": chat_service.get_all_sessions()}
