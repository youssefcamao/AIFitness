from backend.models.chat_session import User
from fastapi import HTTPException


class SignupService:
    @staticmethod
    def create_user(user: User):
        existing_user = SignupService.get_user(user.username)
        if existing_user is not None:
            raise HTTPException(status_code=400, detail="Username already exists.")
        else:
            new_user = User(**user.dict())
            new_user.save()
            return {"message": "User created successfully."}

    @staticmethod
    def get_user(username: str):
        user = User.find_one({"username": username})
        return user
