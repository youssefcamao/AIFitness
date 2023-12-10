<script setup lang="ts">
import {ref} from 'vue';
import {onBeforeRouteUpdate} from 'vue-router';
import SendIcon from '../../assets/send.png'
import {useChatSessionApiStore} from '../../stores/chatSessionStore';
import Logo from '../../assets/logo.png'
import NewChat from './NewChat.vue'


const textareaRef = ref<HTMLTextAreaElement | null>(null)
const messagesContainer = ref<HTMLUListElement | null>(null);
const messageText = ref('')
const sessionApiStore = useChatSessionApiStore();


onBeforeRouteUpdate(async (to, from) => {
    const sessionId = to.params.sessionId as string;
    if(to.params.sessionId !== from.params.sessionId) {
        // Perform the async operation
        await sessionApiStore.SetCurrentSession(sessionId);
    }
    if(messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
});


const handleInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    target.style.height = 'auto'
    target.style.height = `${Math.min(target.scrollHeight, 120)}px`

    const parent = textareaRef.value?.parentNode as HTMLElement | null;
    if(parent) {
        parent.dataset.replicatedValue = target.value;
    }
}

const sendMessage = async () => {
    if(messageText.value.trim()) {
        const newMessage = messageText.value.trim();
        await sessionApiStore.SendMessageAndFetchResponse(newMessage)
        // Optionally, update the backend with the new message
        messageText.value = '';
    }
}

const handleKeydown = (event: KeyboardEvent) => {
    if(event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        sendMessage()
        messageText.value = ''
    }
}
</script>
<template>
    <div class="chat-container"
        :class="{'new-chat-grid': !sessionApiStore.currentSession, 'normal-grid-row': sessionApiStore.currentSession}">
        <div v-if="sessionApiStore.currentSession" class="header-section">
            <div class="chat-header">
                <span class="chat-title">
                    {{ sessionApiStore.currentSession?.session_title ?? "New Chat With" }}
                </span>
                <img v-if="!sessionApiStore.currentSession" :src="Logo" />
            </div>
        </div>
        <NewChat v-else />
        <div class="chat-interface">
            <!-- Chat messages -->
            <ul v-if="sessionApiStore.currentSession" class="chat-messages" ref="messagesContainer">
                <li v-for="message in sessionApiStore.currentSession?.messages" :key="message.id"
                    :class="{'message': true, 'user-message': message.role === 'user', 'ai-message': message.role === 'ai'}">
                    <div class="initials-box" :class="{'ai-initials-box': message.role === 'ai'}">{{ message.role === 'ai'
                        ?
                        'AI' : 'Y' }}</div>
                    <div class="message-bubble"
                        :class="{'message': true, 'user-message_text': message.role === 'user', 'ai-message_text': message.role === 'ai'}">
                        <span class="message-output" v-html="message.content"></span>
                    </div>
                </li>
            </ul>
            <!-- Chat input -->
            <form>
                <div v-if="!sessionApiStore.currentSession" class="suggestion-list">
                    <h3 class="suggestion">Create a custom fitness plan for me</h3>
                    <h3 class="suggestion">Design a beginner's workout routine</h3>
                    <h3 class="suggestion">Develop a weight loss and toning program</h3>
                    <h3 class="suggestion">Enhance my existing workout routine</h3>
                </div>
                <div class="input-wrapper">
                    <div class="chat-input">
                        <div class="grow-wrap">
                            <textarea class="input-field" v-model="messageText" placeholder="Send a message" type="text"
                                rows="1" :onInput="handleInput" @keydown="handleKeydown" />
                        </div>
                    </div>
                    <button class="send-button" :disabled="!messageText.trim()">
                        <img class="send-icon" :src="SendIcon">
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped lang="scss">
.message-output {
    display: flex;
    flex-direction: column;
    list-style-position: inside;

    &::v-deep h2 {
        margin-bottom: 20px;
    }

    &::v-deep h3 {
        margin: 12px 0px 6px;
    }

    &::v-deep li {
        display: flex;
        flex-direction: column;
        margin-block: 10px;
    }

    &::v-deep p {
        margin: 5px 0px;
    }
}

.suggestion-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 7px;
    margin-bottom: 10px;
    padding-left: calc((100% - 766px) / 2);
    padding-right: calc(((100% - 766px) / 2));

    .suggestion {
        font-weight: 400;
        font-size: 15px;
        padding: 20px 10px;
        background-color: rgba(#0E1016, 0.1);
        border-radius: 8px;
        border: 1px solid rgba($color: #FFFFFF, $alpha: 0.3);
        color: rgba($color: #FFFFFF, $alpha: 0.7);
        text-align: center;
        cursor: pointer;

        &:hover {
            border: 1px solid rgba($color: #FFFFFF, $alpha: 0.9);
            color: rgba($color: #FFFFFF, $alpha: 1);
        }
    }
}

.send-button:disabled {
    opacity: 0.5;
    cursor: default;
}

textarea::-webkit-scrollbar {
    width: 10px;
}

textarea::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

textarea::-webkit-scrollbar-thumb {
    background-color: rgb(27, 27, 27, 0.7);
    outline: 1px solid rgba($color: #FFFFFF, $alpha: 0.3);
}

.chat-messages::-webkit-scrollbar {
    width: 8px;
}

.chat-messages::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
}

.header-section {
    padding: 0 34px;
}

.chat-messages {

    li {
        margin-bottom: 40px;
    }

    overflow-y: auto;
}

.new-chat-grid {
    grid-template-rows: 1fr auto;
}

.normal-grid-row {
    grid-template-rows: auto 1fr;
}

.chat-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
    width: 100%;
    min-width: 500px;
}

.chat-interface {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    height: 100%;
    overflow: auto;
}

.chat-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    width: 100%;
    border-bottom: 2px solid rgba(221, 221, 221, .08);

    img {
        height: 28px;
        width: 28px;
        margin: -10px 0;
        margin-left: 8px;
    }
}

.chat-title {
    color: white;
    font-weight: bold;
    font-size: 1.125rem;
}

.chat-icon-robot {
    color: white;
}

.chat-messages {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc((100% - 766px) / 2);
    padding-right: calc(((100% - 766px) / 2) - 8px);
    padding-top: 20px;
    overflow-y: scroll;
}

.message {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &.user-message &.ai-message {
        justify-content: flex-end;
    }

    .initials-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        background-color: #262626;
        color: white;
        border-radius: 4px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .ai-initials-box {
        background: linear-gradient(180deg, #D6FA00 0%, #6DDE00 100%);
        font-family: Zian, sans-serif;
        color: black;
    }

    .message-bubble {
        padding: 0.75rem;
        border-radius: 7px;
        color: white;
        font-size: 16px;

        &.user-message_text {
            background-color: rgba($color: black, $alpha: 0.3);
        }

        &.ai-message_text {
            background: linear-gradient(180deg, rgba(214, 250, 0, 0.2) 0%, rgba(109, 222, 0, 0.2) 100%);
        }
    }
}

.input-wrapper {
    position: relative;
    max-width: 766px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 0.5rem 1rem;
    background-color: rgba(#0E1016, 0.7);
    border: 1px solid rgba($color: #FFFFFF, $alpha: 0.3);
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
}

.chat-input {
    display: flex;
    align-items: center;
    background: transparent;
    flex: 1;
    padding: 0.5rem 0;

    .input-icon {
        color: red;
        margin-right: 0.75rem;
    }

    .grow-wrap {
        width: 100%;
        padding-right: 10px;
        display: grid;
    }

    .grow-wrap::after {
        content: attr(data-replicated-value) " ";
        white-space: pre-wrap;
        visibility: hidden;
    }

    .grow-wrap>textarea {
        resize: none;
        overflow: hidden;
        overflow-y: auto;
    }

    .grow-wrap>textarea,
    .grow-wrap::after {
        border: none;
        padding: 0.5rem;
        font: inherit;
        grid-area: 1 / 1 / 2 / 2;
    }

    .input-field {
        background-color: transparent;
        flex: 1;
        border: none;
        resize: none;
        outline: none;
        color: white;
        border: none;
        font-size: 16px;
        font: inherit;
        width: 100%;
        overflow-wrap: break-word;
        overflow-y: auto;
        line-height: 20px;
        max-height: 120px;

        &::placeholder {
            color: rgba(white, 0.5);
        }
    }
}

.send-button {
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 25px;
        height: 25px;
    }
}
</style>