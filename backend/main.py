from fastapi import FastAPI
from .routers import chat
import uvicorn
from backend.db.database import init_db

app = FastAPI()


@app.on_event('startup')
async def connect():
    await init_db()


app.include_router(chat.router)


# For debugging with breakpoints in vs code
if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0')
