<script setup lang="ts">
import {ref} from 'vue';
import SendIcon from '../../assets/send.png'

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const messageText = ref('')

const handleInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    target.style.height = 'auto'
    target.style.height = `${Math.min(target.scrollHeight, 120)}px`

    const parent = textareaRef.value?.parentNode as HTMLElement | null;
    if(parent) {
        parent.dataset.replicatedValue = target.value;
    }
}

const sendMessage = () => {
    if(textareaRef.value) {
        const message = textareaRef.value.value
        console.log("Message sent:", message)
        textareaRef.value.value = ''
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
    <div class="chat-container">
        <div class="chat-header">
            <span class="chat-title">
                New chat with AI
            </span>
        </div>
        <div class="chat-interface">
            <!-- Chat messages -->
            <ul class="chat-messages">
                <li class="message user-message">
                    <div class="initials-box">Y</div>
                    <div class="message-bubble user-message_text">
                        <p>Hi, how are you can you help me out with my gym exercises today?</p>
                    </div>
                </li>
                <li class="message ai-message">
                    <div class="initials-box ai-initials-box">AI</div> <!-- Initials box for AI -->
                    <div class="message-bubble ai-message_text">
                        <p>Hello, I have a couple of suggestions for you &gt;</p>
                    </div>
                </li>
            </ul>
            <!-- Chat input -->
            <form>
                <div class="input-wrapper">
                    <div class="chat-input">
                        <div class="grow-wrap">
                            <textarea class="input-field" v-model="messageText" placeholder="Send a message" type="text"
                                rows="1" :onInput="handleInput" @keydown="handleKeydown" />
                        </div>
                    </div>
                    <button class="send-button">
                        <img class="send-icon" :src="SendIcon">
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped lang="scss">
.chat-messages {
    li {
        margin-block: 20px;
    }
}

.chat-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px;
    height: 100%;
}

.chat-interface {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    width: 80%;
    height: 100%;
}

.chat-header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    width: 100%;
    border-bottom: 2px solid rgba(221, 221, 221, .08);
}

.chat-title {
    color: white;
    font-weight: bold;
    font-size: 1.125rem;
    // equivalent to text-lg
}

.chat-icon-robot {
    color: white;
}

.chat-messages {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 1.5rem;
    flex: 1;
    overflow-y: auto;
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
    display: flex;
    align-items: center;
    border-radius: 8px;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    background-color: rgba(#0E1016, 0.7);
    border: 1px solid rgba($color: #FFFFFF, $alpha: 0.3);
    width: 700px;
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

.chat-container {
    height: 100%;
    flex-grow: 1;
    min-width: 500px;
}
</style>