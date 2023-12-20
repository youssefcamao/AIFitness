from fastapi import APIRouter, HTTPException, Depends, status
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from models.chat_session import User
from services.user_service import Token, TokenData, UserService

ACCESS_TOKEN_EXPIRE_MINUTES = 30

router = APIRouter()
user_service = UserService()


@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = user_service.authenticate_user(
        db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Incorrect username or password", headers={"WWW-Authenticate": "Bearer"})
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = user_service.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/users/me/", response_model=User)
async def read_users_me(current_user: User = Depends(user_service.get_current_active_user)):
    return current_user


@router.get("/users/me/items")
async def read_own_items(current_user: User = Depends(user_service.get_current_active_user)):
    return [{"item_id": 1, "owner": current_user}]
