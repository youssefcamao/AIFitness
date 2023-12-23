<script setup lang="ts">
import {useChatSessionApiStore} from '../../stores/chatSessionStore';
import {useRouter} from 'vue-router';
import {ref, Ref, computed} from 'vue';
import Remove from '../../assets/remove.png'
import {useAuthStore} from '../../stores/authStore'
import Logout from '../../assets/logout.png'


var authStore = useAuthStore()
const sessionApiStore = useChatSessionApiStore();
const router = useRouter();
const historyList: Ref<HTMLUListElement | null> = ref(null)
const hoverIndex = ref(-1)
let liLoadedCount = 0;

const formattedFullName = computed(() => {
    return authStore.userFullName
        .split(' ')
        .map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
        .join(' ');
});

const onEnter = (el: Element) => {
    liLoadedCount++
    if(liLoadedCount == sessionApiStore.sessionsList.length) {
        let listElement = el as HTMLLIElement
        let parentElement = el.parentElement as HTMLUListElement

        parentElement.scrollTop = listElement.offsetTop - 1000
    }
}

const navigateToSession = (sessionId: string | undefined) => {
    router.push({name: 'chatSession', params: {sessionId}})
}

const startNewChat = () => {
    router.push({name: 'chat'});
    if(sessionApiStore.currentSession) {
        sessionApiStore.currentSession = null
    }
};
const deleteChat = async (session_id: string | undefined) => {
    router.push({name: 'chat'});
    console.log(session_id)
    if(session_id) {
        let authToken = authStore.currentAccessToken
        await sessionApiStore.deleteSession(session_id, authToken)
    }
}
const ClickLogout = async () => {
    authStore.signout()
    router.push({name: 'login'});
}
</script>

<template>
    <div class="sidepanel">
        <div class="user">
            <div class="mask-group">{{ formattedFullName[0] }}</div>
            <h4>{{ formattedFullName }}</h4>
            <img :src="Logout" @click="ClickLogout">
        </div>
        <button class="newChat-button" @click="startNewChat"><span>+</span>New chat</button>
        <div class="loading list-loading" v-if="sessionApiStore.areSessionsLoading">Loading&#8230;
        </div>
        <TransitionGroup name="list" tag="ul" class="chat-history" @enter="onEnter" :ref="historyList">
            <li @mouseover="hoverIndex = index" @mouseleave="hoverIndex = -1"
                v-for="session, index in sessionApiStore.sessionsList" :key="index" class="chat-titel"
                :class="{'selected-session': sessionApiStore.currentSession && sessionApiStore.currentSession?.session_id == session.session_id}"
                :title="sessionApiStore.currentSession?.session_title" @click="() => navigateToSession(session.session_id)">
                <div class="titel-text">{{ session.session_title }}</div>
                <button v-show="hoverIndex == index" class="remove-button"><img :src="Remove" alt="RM"
                        @click="() => deleteChat(session.session_id)"></button>
            </li>
        </TransitionGroup>
    </div>
</template>

<style scoped lang="scss">
.list-loading {
    margin-top: 40px;
    opacity: 0.5;
}

.remove-button {
    background: none;
    width: fit-content;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.remove-button>img {
    margin: 0;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.chat-history {
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;
}

.chat-history::-webkit-scrollbar {
    width: 5px;
}

.chat-history::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
}

.chat-titel {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    padding: 12px 8px 12px 8px;
    border-radius: 8px;
    width: 200px;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
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

.selected-session {
    background-color: rgb(0, 0, 0, 0.5);
}

.newChat-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 17px;
    font-family: 'Euclid SemiBold', sans-serif;
    letter-spacing: 0.02rem;
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

    .mask-group {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
        background-color: #262626;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
    }

    h4 {
        margin-right: auto;
    }

    img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 23px;
        height: 23px;
        cursor: pointer;
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