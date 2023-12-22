from fastapi import FastAPI
from .routers import chat, auth
import uvicorn
from backend.db.database import init_db
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.on_event('startup')
async def connect():
    await init_db()


app.include_router(auth.router)
app.include_router(chat.router)


# For debugging with breakpoints in vs code
if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0')
