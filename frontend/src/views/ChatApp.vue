<script setup lang="ts">
import SidePanel from '../components/chat-app/SidePanel.vue';
import ChatInterface from '../components/chat-app/ChatInterface.vue'
import {useChatSessionApiStore} from '../stores/chatSessionStore'
import {onMounted} from 'vue';
import {useAuthStore} from '../stores/authStore'


var authStore = useAuthStore()
var sessionApiStore = useChatSessionApiStore()

onMounted(async () => {
    let authToken = authStore.currentAccessToken
    await sessionApiStore.loadAllSession(authToken)
    let session = sessionApiStore.currentSession
    console.log("this is the result:")
    console.log(session)
})
</script>

<template>
    <div class="main-chat">
        <div class="chat-neon"></div>
        <div class="chat-content">
            <SidePanel />
            <ChatInterface />
        </div>
    </div>
</template>
  
<style scoped lang="scss">
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
    animation: scale-up-bl 10s ease-in-out infinite;
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


@keyframes scale-up-bl {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }
}
</style>