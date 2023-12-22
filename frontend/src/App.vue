<script setup lang="ts">
import {RouterView} from 'vue-router'

</script>

<template>
    <RouterView />
</template>

<style lang="scss">
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
