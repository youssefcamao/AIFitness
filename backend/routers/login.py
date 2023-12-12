from backend.models.endpoint_models import TokenData, User
from backend.services.user_service import (authenticate_user,
                                           create_access_token, get_user)
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter()

@router.post("/login", response_model=TokenData)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(get_user, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=30)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}
