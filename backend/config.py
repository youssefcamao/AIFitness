from dotenv import load_dotenv
import os

load_dotenv()


class Settings:
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    MODEL_NAME = 'gpt-4-1106-preview'


settings = Settings()
