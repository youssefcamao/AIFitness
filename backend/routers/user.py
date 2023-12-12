from backend.services.user_service import UserService
from fastapi import APIRouter, HTTPException

router = APIRouter()
user_service = UserService()

@router.post("/user/signup")
async def signup(username: str, password: str):
    user = await user_service.signup(username, password)
    if user:
        return {"message": "Signup successful"}
    else:
        raise HTTPException(status_code=400, detail="Signup failed")

@router.post("/user/login")
async def login(username: str, password: str):
    token = await user_service.login(username, password)
    if token:
        return {"token": token}
    else:
        raise HTTPException(status_code=400, detail="Login failed")
