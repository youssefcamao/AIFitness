<script setup lang="ts">
import SidePanel from '../components/chat-app/SidePanel.vue';
import ChatInterface from '../components/chat-app/ChatInterface.vue'
import {useChatSessionApiStore} from '../stores/chatSessionStore'
import {onMounted} from 'vue';
import {ChatSession, ChatMessage} from '../apis/ChatSessionApi';



var sessionApiStore = useChatSessionApiStore()

onMounted(async () => {
    await sessionApiStore.loadAllSession()
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