<script setup lang="ts">
import {useChatSessionApiStore} from '../../stores/chatSessionStore';
import {useRouter} from 'vue-router';

const sessionApiStore = useChatSessionApiStore();
const router = useRouter();

const navigateToSession = (sessionId: string | undefined) => {
    router.push({name: 'chatSession', params: {sessionId}});
};
const startNewChat = () => {
    router.push({name: 'chat'});
};
</script>
<template>
    <div class="sidepanel">
        <div class="user">
            <img class="mask-group" src="../../assets/test_image.png" />
            <h4>Yossi Molcho</h4>
            <div class="user-sub">Pro</div>
        </div>
        <button class="newChat-button" @click="startNewChat"><span>+</span>New chat</button>
        <div class="chat-history">
            <div v-for="session in sessionApiStore.sessionsList" :key="session._id" class="chat-titel"
                @click="() => navigateToSession(session._id)">
                <div class="titel-text">{{ session.session_title }}</div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.chat-history {
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: column-reverse;
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
        text-overflow: ellipsis;
        height: 20px;
        overflow: hidden;
        white-space: nowrap;
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
    min-width: 250px;
    border-right: 2px solid rgba(221, 221, 221, .08);
}
</style>