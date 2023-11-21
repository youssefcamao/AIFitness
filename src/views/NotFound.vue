<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()

const linkToHome = () => {
    router.push('/home')
}
</script>

<template>
    <div class="main">
        <h1>404 Not Found</h1>
        <button class="home-button" @click="linkToHome">Back to Homepage</button>
    </div>
</template>

<style scoped lang="scss">
* {
    background-color: white;
    font-family: 'Euclid SemiBold', sans-serif;
}

.main {
    height: 100vh;

    h1{
        margin-bottom: 30px;
    }
}

.home-button {
    background-color: black;
    color: #DDD;
    border: none;
    border-radius: 8px;
    padding: 10px 15px;
    font-size: 30px;
    cursor: pointer;
}
</style>