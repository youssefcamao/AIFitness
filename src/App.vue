<script setup lang="ts">
</script>

<template>
  <div class="main">
    <div class="content">
      <div class="backgroud-layer">
        <div class="neon neon_green"></div>
        <div class="neon neon_orange"></div>
        <div class="neon neon_blue"></div>
        <div class="neon neon_pink"></div>
      </div>
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
        <a href="https://app.convy.chat/" target="_blank" class="button main-button">
          Join the beta
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

.main-button {
  border-radius: 20px;
  margin-top: 50px;
  padding: 16px 32px;
  font-size: 16px;
  text-decoration: none;
}

.button {
  color: #000;
  border-style: none;
  align-self: center;
  font-weight: 600;
  display: inline-block;
  letter-spacing: 0px;
  transition: all .2s cubic-bezier(.654, .045, .355, 1);
}

.lead-block {
  margin-top: 24px;
}

.under-text {
  color: rgba(221, 221, 221, .4);
  font-size: 20px;
  text-align: center;
}

.main-title {
  color: #ddd;
  text-align: center;
  -webkit-text-fill-color: inherit;
  mix-blend-mode: normal;
  background-color: transparent;
  background-clip: border-box;
  align-self: auto;
  font-family: Inter, sans-serif;
  font-size: 80px;
  font-weight: 500;
  line-height: 100%;
  overflow: visible;
}

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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

.label-logo {
  font-family: Zian, sans-serif;
  color: #ddd;

  :first-child {
    color: #CF0;
    margin-right: 13px;
  }
}

.content {
  margin-top: 50ch;
  z-index: 0;
  width: 100%;
  max-width: 1440px;
  height: 1503px;
  flex-direction: column;
  align-items: center;
  padding: 76px;
  display: flex;
  position: relative;
}

.neon {
  width: 40vh;
  border-radius: 100%;
  filter: blur(24vh);
  position: absolute;
  padding-top: 40vh;
  overflow: visible;
}

.neon_green {
  background-color: #cf0;
  top: 0%;
  bottom: auto;
  left: auto;
  right: 0%;
  animation: moveNeonGreen 10s infinite;
}

.neon_orange {
  background-color: #ffa537;
  top: auto;
  bottom: 40%;
  left: auto;
  right: 0%;
  animation: moveNeonOrange 10s infinite;
}

.neon_blue {
  background-color: #7af;
  top: auto;
  bottom: 50%;
  left: 0%;
  right: auto;
  animation: moveNeonBlue 10s infinite;
}

.neon_pink {
  background-color: #fbc;
  top: 10%;
  left: 10%;
  animation: moveNeonPink 10s infinite;
}

body {
  border: 0;
  background-color: #000000;
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
