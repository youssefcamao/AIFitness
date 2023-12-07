<script setup lang="ts">
import {ref} from 'vue';

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const messageText = ref('')

const handleInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    target.style.height = 'auto'
    target.style.height = `${Math.min(target.scrollHeight, 120)}px`

    const parent = textareaRef.value?.parentNode as HTMLElement | null;
    if (parent) {
        parent.dataset.replicatedValue = target.value;
    }
}

const sendMessage = () => {
    if (textareaRef.value) {
        const message = textareaRef.value.value
        console.log("Message sent:", message)
        textareaRef.value.value = ''
    }
}

const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        sendMessage()
        messageText.value = ''
    }
}
</script>
<template>
    <div class="main-chat">
        <div class="chat-neon"></div>
        <div class="chat-content">
            <div class="sidepanel">
                <div class="user">
                    <img class="mask-group" src="../assets/test_image.png" />
                    <h4>Yossi Molcho</h4>
                    <div class="user-sub">Pro</div>
                </div>
                <button class="newChat-button"><span>+</span>New chat</button>
                <div class="chat-history">
                    <div class="chat-history">
                        <div class="chat-titel">
                            <img src="../assets/chat.png" />
                            <div class="titel-text">Teach me payton</div>
                        </div>
                        <div class="chat-titel">
                            <img src="../assets/chat.png" />
                            <div class="titel-text">How AI works</div>
                        </div>
                        <div class="chat-titel">
                            <img src="../assets/chat.png" />
                            <div class="titel-text">Help me to get a full diet</div>
                        </div>
                        <div class="chat-titel">
                            <img src="../assets/chat.png" />
                            <div class="titel-text">New copy for my new </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <textarea class="input-field" v-model="messageText" placeholder="Send a message" type="text" rows="1" 
                                    :onInput="handleInput" @keydown="handleKeydown" />
                                </div>
                            </div>
                            <button class="send-button">
                                <img class="send-icon" src="../assets/send.png">
                            </button>
                        </div>
                    </form>
                </div>
            </div>
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
    .grow-wrap > textarea {
        resize: none;
        overflow: hidden;
        overflow-y: auto;
    }
    .grow-wrap > textarea,
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

.chat-history {
    width: 100%;
    margin-top: 25px;
}

.chat-titel {
    display: flex;
    font-size: 15px;
    padding: 12px 8px 12px 8px;
    border-radius: 8px;
    cursor: pointer;

    img {
        width: 16px;
        height: 16px;
        margin-right: 12px;
    }

    .titel-text {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        height: 20px;
        overflow: hidden;
    }

    &:hover {
        background-color: rgb(0, 0, 0, 0.5);
    }
}

.newChat-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    padding: 8px 0 8px 0;
    background-color: #DDDDDD;
    cursor: pointer;
    font-weight: 550;
    border-radius: 4px;
    border: none;

    span {
        margin-right: 10px;
        font-size: 20px;
    }

    &:hover {
        background-color: white;
    }
}

.user {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: 100%;
    padding: 30px 0 30px 0;
    border-bottom: 2px solid rgba(221, 221, 221, .08);
    margin-bottom: 12px;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
    }

    h4 {
        margin-right: auto;
    }

    .user-sub {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F6E6A6;
        color: #8D7324;
        border-radius: 4px;
        padding: 2px 8px;
    }
}

.sidepanel {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px 0;
    height: 100%;
    width: 250px;
    border-right: 2px solid rgba(221, 221, 221, .08);
}

.chat-container {
    height: 100%;
    flex-grow: 1;
    min-width: 500px;
}

.main-chat {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.chat-neon {
    position: absolute;
    top: 30%;
    left: -50%;
    width: 100vw;
    height: 100vh;
    filter: blur(24vh);
    background-color: #1E692C;
    opacity: 0.6;
    border-radius: 100%;
    z-index: -1;
}

.chat-content {
    background-color: rgba(221, 221, 221, .08);
    z-index: 100;
    width: 100vw;
    height: 100vh;
    color: white;
    display: flex;
    overflow: hidden;
}
</style>