from typing import List
from enum import Enum


class ChatRole(Enum):
    ai = 0,
    user = 1,
    system = 2


class ChatMessage:
    def __init__(self, role: ChatRole, content: str):
        self.role = role.name
        self.content = content


class ChatSession:
    def __init__(self, session_id: str):
        self.session_id = session_id
        self.messages = []

    def add_ai_message(self, content: str):
        self.messages.append(ChatMessage(role=ChatRole.ai, content=content))

    def add_user_message(self, content: str):
        self.messages.append(ChatMessage(role=ChatRole.user, content=content))

    def get_messages_with_system_instruction(self, system_instruction: str):
        messages = [ChatMessage(
            role=ChatRole.system, content=system_instruction)] + self.messages
        return [(msg.role, msg.content) for msg in messages]

    def get_latest_response(self):
        return self.messages[-1].content if self.messages else ""
