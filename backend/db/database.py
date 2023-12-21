from motor.motor_asyncio import AsyncIOMotorClient
from ..config import settings
import beanie
from ..models.chat_session import User


async def init_db():
    MOTOR_CLIENT = AsyncIOMotorClient(settings.MONGODB_URI)
    DATABASE = MOTOR_CLIENT[settings.DATABASE_NAME]
    await beanie.init_beanie(
        database=DATABASE,
        document_models=[User]
    )
