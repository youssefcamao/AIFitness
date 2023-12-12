from backend.models.endpoint_models import User
from backend.services.user_service import create_user, get_user
from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.post("/signup")
async def signup(user: User):
    existing_user = get_user(user.username)
    if existing_user is None:
        create_user(user)
        return {"message": "User created successfully."}
    else:
        raise HTTPException(status_code=400, detail="Username already exists.")
