from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    # MODEL_NAME = 'gpt-4-1106-preview'
    MODEL_NAME = 'gpt-3.5-turbo-0301'
    MONGODB_URI = os.getenv("MONGODB_URI")
    DATABASE_NAME = os.getenv("DATABASE_NAME")


settings = Settings()
