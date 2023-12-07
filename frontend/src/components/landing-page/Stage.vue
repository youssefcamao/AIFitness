<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()

const HandleChat = () => {
    router.push('/chat')
}
</script>

<template>
    <div class="block-main-text">
        <div class="label">
            <div class="label-logo"><span>AI</span><span>Fitness</span></div>
        </div>
        <div class="main-title">Elevate your workout
            <br>with AI assistance
        </div>
        <div class="lead-block">
            <div class="under-text">Personalized, dynamic, and targeted fitness plans</div>
        </div>
        <a class="button-main button" @click="HandleChat">Join the beta</a>
        <div class="lead-block">
            <div class="under-text">69420 people joined already</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.button {
    font-family: 'Euclid SemiBold', sans-serif;
    text-align: center;
    text-transform: none;
    -webkit-text-fill-color: inherit;
    border-radius: 12px;
    font-size: 16px;
    text-decoration: none;
    transition: all .2s cubic-bezier(.645, .045, .355, 1);

    &:hover {
        transform: scale(1.1);
    }
}

.button-main {
    letter-spacing: 2px;
    letter-spacing: normal;
    width: fit-content;
    font-size: 32px;
    font-weight: 500;
    border-radius: 20px;
    background-color: #ddd;
    color: #000;
    font-weight: 500;
    padding: 16px 32px;
    text-decoration: none;
    margin-top: 40px;
    cursor: pointer;
}

.under-text {
    color: rgba(221, 221, 221, .4);
    font-size: 20px;
    font-family: 'Euclid Regular', sans-serif;
    text-align: center;
}

.label-logo {
    font-family: Zian, sans-serif;
    color: #ddd;

    :first-child {
        color: #CF0;
        margin-right: 13px;
    }
}
</style>