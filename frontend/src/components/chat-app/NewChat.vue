<script setup lang="ts">
</script>
<template>
    <div class="new-chat-header">
        <div class="big-ai-logo">
            AI
        </div>
        <h1>How can i help you today?</h1>
        <span class="top lime-color"></span>
        <span class="right lime-color"></span>
        <span class="bottom green-color"></span>
        <span class="left green-color"></span>
    </div>
</template>
<style scoped lang="scss">
.new-chat-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    overflow: hidden;

    span {
        position: absolute;
        border-radius: 100vmax;
    }

    .big-ai-logo {
        box-sizing: border-box;
        font-family: Zian, sans-serif;
        font-size: 100px;
        padding: 50px;
        margin-bottom: 15px;
        background-color: rgba(221, 221, 221, .04);
        border: 1px solid rgba(221, 221, 221, .08);
    }
}

.top {
    top: 0;
    left: 0;
    width: 0;
    height: 5px;
    animation: animateTop 3s ease-in-out infinite;
}

.bottom {
    right: 0;
    bottom: 0;
    height: 5px;
    animation: animateBottom 3s ease-in-out infinite;
}

.right {
    top: 0;
    right: 0;
    width: 5px;
    height: 0;
    animation: animateRight 3s ease-in-out infinite;
}

.left {
    left: 0;
    bottom: 0;
    width: 5px;
    height: 0;
    animation: animateLeft 3s ease-in-out infinite;
}

lime-color {
    background: linear-gradient(180deg,
            transparent 30%,
            rgba(0, 255, 255, 0.5),
            rgb(0, 255, 255));
}

green-color {
    background: linear-gradient(180deg,
            transparent 30%,
            rgba(0, 255, 255, 0.5),
            rgb(0, 255, 255));
}

@keyframes animateTop {
    25% {
        width: 100%;
        opacity: 1;
    }

    30%,
    100% {
        opacity: 0;
    }
}

@keyframes animateBottom {

    0%,
    50% {
        opacity: 0;
        width: 0;
    }

    75% {
        opacity: 1;
        width: 100%;
    }

    76%,
    100% {
        opacity: 0;
    }
}

@keyframes animateRight {

    0%,
    25% {
        opacity: 0;
        height: 0;
    }

    50% {
        opacity: 1;
        height: 100%;
    }

    55%,
    100% {
        height: 100%;
        opacity: 0;
    }
}

@keyframes animateLeft {

    0%,
    75% {
        opacity: 0;
        bottom: 0;
        height: 0;
    }

    100% {
        opacity: 1;
        height: 100%;
    }
}
</style>