<script setup lang="ts">
import {useChatSessionApiStore} from '../../stores/chatSessionStore';
import {useRouter} from 'vue-router';
import {ref, Ref} from 'vue';
import Remove from '../../assets/remove.png'

const sessionApiStore = useChatSessionApiStore()
const router = useRouter()
const historyList: Ref<HTMLUListElement | null> = ref(null)
const hoverIndex = ref(-1)
let liLoadedCount = 0


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
    console.log(session_id)
    if(session_id) {
        await sessionApiStore.deleteSession(session_id)
        router.push({name: 'chat'});
    }
}
</script>

<template>
    <div class="sidepanel">
        <div class="user">
            <img class="mask-group" src="../../assets/test_image.png" />
            <h4>Yossi Molcho</h4>
            <div class="user-sub">Pro</div>
        </div>
        <button class="newChat-button" @click="startNewChat"><span>+</span>New chat</button>
        <TransitionGroup name="list" tag="ul" class="chat-history" @enter="onEnter" :ref="historyList">
            <li @mouseover="hoverIndex = index" @mouseleave="hoverIndex = -1"
                v-for="session, index in sessionApiStore.sessionsList" :key="index" class="chat-titel"
                :class="{'selected-session': sessionApiStore.currentSession && sessionApiStore.currentSession?._id == session._id}"
                @click="() => navigateToSession(session._id)">
                <div class="titel-text">{{ session.session_title }}</div>
                <button v-show="hoverIndex == index" class="remove-button"><img :src="Remove" alt="RM"
                        @click="() => deleteChat(session._id)"></button>
            </li>
        </TransitionGroup>
    </div>
</template>

<style scoped lang="scss">
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
    transform: translateX(30px);
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
    cursor: pointer;

    img {
        width: 17px;
        height: 17px;
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