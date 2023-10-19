<script setup lang="ts">
</script>

<template>
  <div class="neon neon_1"></div>
  <div class="neon neon_2"></div>
  <div class="neon neon_3"></div>
  <div class="neon neon_4"></div>
</template>

<style>
.neon {
  width: 35vh;
  border-radius: 100%;
  filter: blur(24vh);
  position: absolute;
  padding-top: 35vh;
  overflow: visible;
}

.neon_1 {
  background-color: #cf0;
  top: 0%;
  bottom: auto;
  left: auto;
  right: 0%;
  animation: moveNeon1 10s infinite;
}

.neon_2 {
  background-color: #ffa537;
  top: auto;
  bottom: 40%;
  left: auto;
  right: 0%;
  animation: moveNeon2 10s infinite;
}

.neon_3 {
  background-color: #7af;
  top: auto;
  bottom: 50%;
  left: 0%;
  right: auto;
  animation: moveNeon3 10s infinite;
}

.neon_4 {
  background-color: #fbc;
  top: 10%;
  left: 10%;
  animation: moveNeon4 10s infinite;
}

body {
  border: 0;
  background-color: #000000;
}



@keyframes moveNeon1 {

  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  33% {
    transform: translate3d(-25%, 50%, 50px);
  }

  66% {
    transform: translate3d(0%, 100%, 0);
  }
}

@keyframes moveNeon2 {

  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  33% {
    transform: translate3d(-25%, -50%, -50px);
  }

  66% {
    transform: translate3d(0%, -100%, 0);
  }
}

@keyframes moveNeon3 {

  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  33% {
    transform: translate3d(25%, -50%, 50px);
  }

  66% {
    transform: translate3d(0%, -100%, 0);
  }
}

@keyframes moveNeon4 {

  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  33% {
    transform: translate3d(25%, 50%, -50px);
  }

  66% {
    transform: translate3d(0%, 100%, 0);
  }
}
</style>
