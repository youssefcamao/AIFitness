<script setup lang="ts">
import Navbar from './components/landing-page/Navbar.vue'
import Stage from './components/landing-page/Stage.vue'
import Features from './components/landing-page/Features.vue'
import PricingPanel from './components/landing-page/PricingPanel.vue'
import Newsletter from './components/landing-page/Newsletter.vue'
import Footer from './components/landing-page/Footer.vue'
import {ref, onMounted} from 'vue'

const isBrowserFirefox = ref(false)

const detectBrowser = () => {
    const userAgent = navigator.userAgent;
    isBrowserFirefox.value = userAgent.includes("Firefox")
    console.log(isBrowserFirefox)
}

onMounted(() => {
    detectBrowser()
})

</script>

<template>
    <div class="main">
        <Navbar />
        <div class="content">
            <div class="background-layer">
                <div class="neon neon_green" :class="{'neon-moz': isBrowserFirefox}"></div>
                <div class="neon neon_orange" :class="{'neon-moz': isBrowserFirefox}"></div>
                <div class="neon neon_blue" :class="{'neon-moz': isBrowserFirefox}"></div>
                <div class="neon neon_pink" :class="{'neon-moz': isBrowserFirefox}"></div>
            </div>
            <Stage />
            <Features />
        </div>
        <div class="content">
            <PricingPanel />
        </div>
        <div class="content">
            <Newsletter />
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
    margin: 0;
}

body {
    overflow-x: hidden;
    border: 0;
    background-color: #000000;
    font-family: 'Euclid Regular', sans-serif;
}

.background-layer {
    z-index: -1;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    overflow: visible;
}

.section-devider {
    width: 90%;
    height: 1px;
    color: rgba(221, 221, 221, .08);
    background-color: rgba(221, 221, 221, .08);
    position: static;
}

.content {
    z-index: 0;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    flex-direction: column;
    align-items: center;
    display: flex;
    position: relative;
}

.block-main-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    padding-top: 120px;
}

.main-title {
    color: #ddd;
    text-align: center;
    -webkit-text-fill-color: inherit;
    mix-blend-mode: normal;
    background-color: transparent;
    background-clip: border-box;
    align-self: auto;
    font-family: 'Euclid Bold', sans-serif;
    font-size: 80px;
    line-height: 100%;
    overflow: visible;
}

.lead-block {
    margin-top: 24px;
    font-size: 20px;
    color: rgba(221, 221, 221, .4);
}

.neon-moz {
    opacity: 0.6;
}

.neon {
    width: 40vh;
    border-radius: 100%;
    filter: blur(24vh);
    position: absolute;
    padding-top: 40vh;
    overflow: visible;
    z-index: -1;
}

.neon_green {
    background-color: #cf0;
    top: 0%;
    bottom: auto;
    left: auto;
    right: 0%;
    animation: moveNeonGreen 15s infinite;
}

.neon_orange {
    background-color: #ffa537;
    top: auto;
    bottom: 40%;
    left: auto;
    right: 0%;
    animation: moveNeonOrange 15s infinite;
}

.neon_blue {
    background-color: #7af;
    top: auto;
    bottom: 50%;
    left: 0%;
    right: auto;
    animation: moveNeonBlue 15s infinite;
}

.neon_pink {
    background-color: #fbc;
    top: 10%;
    left: 10%;
    animation: moveNeonPink 15s infinite;
}

.main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
}

.label {
    margin-bottom: 25px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    display: block;
    position: relative;
}

@keyframes moveNeonGreen {

    0%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    33% {
        transform: translate3d(-10vw, 50vh, 50px);
    }

    66% {
        transform: translate3d(-60vw, 30vh, 0);
    }
}

@keyframes moveNeonOrange {

    0%,
    100% {
        transform: translate3d(0, 0, 0px);
    }

    33% {
        transform: translate3d(-50vw, -10vh, 0);
    }

    66% {
        transform: translate3d(-76vw, -57vh, 0);
    }
}

@keyframes moveNeonBlue {

    0%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    33% {
        transform: translate3d(10vw, -50vh, 0);
    }

    66% {
        transform: translate3d(48vw, -56vh, 0);
    }
}

@keyframes moveNeonPink {

    0%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    33% {
        transform: translate3d(50vw, -20vh, 0);
    }

    66% {
        transform: translate3d(56vw, 50vh, 0);
    }
}
</style>
