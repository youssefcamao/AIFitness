<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="main">
    <Navbar />
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
        <a href="https://app.convy.chat/" target="_blank" class="button-main button">
          Join the beta
        </a>
        <div class="lead-block">
          <div class="under-text">1834 people joined already</div>
        </div>
      </div>
      <div class="features-section">
        <div class="card">
          <img src="./assets/report.png" alt="Icon">
          <h3>Personalized Fitness Plans</h3>
          <p>Tailor-made workouts just for you. Adapts in real-time based on your progress and feedback.</p>
        </div>
        <div class="card">
          <img src="./assets/mind.png" alt="Icon">
          <h3>Interactive Exercise Routines</h3>
          <p>Engaging AI trainers guide you through exercises, making sure your form and technique are correct.</p>
        </div>
        <div class="card">
          <img src="./assets/nutrition.png" alt="Icon">
          <h3>Nutrition Guidance on Demand</h3>
          <p>Instant access to customized nutritional advice that aligns with your fitness goals and dietary preferences.
          </p>
        </div>
        <div class="card">
          <img src="./assets/calendar.png" alt="Icon">
          <h3>Track Your Fitness Journey</h3>
          <p>Monitor your progress, celebrate milestones, and adjust your goals as you evolve.</p>
        </div>
        <div class="card">
          <img src="./assets/barbell.png" alt="Icon">
          <h3>Motivation When You Need It</h3>
          <p>Receive motivating messages and reminders to keep you on track
            and get inspired</p>
        </div>
        <div class="card">
          <img src="./assets/weights.png" alt="Icon">
          <h3>Diverse Workout Library</h3>
          <p>A wide range of exercises and routines to ensure your workouts are varied, effective, and enjoyable.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  overflow-x: hidden;
  font-family: Euclid, sans-serif;
}

.section-devider {
  width: 90%;
  height: 1px;
  color: rgba(221, 221, 221, .08);
  background-color: rgba(221, 221, 221, .08);
  position: static;
}

.features-section {
  display: grid;
  font-family: Euclid, sans-serif;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 80px;
  padding: 80px;
  justify-content: center;
  border-radius: 15px;
  background-color: rgba(221, 221, 221, .08);
  border: 1px solid rgba(221, 221, 221, .08);

  img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }

  h3 {
    color: #DDD;
    margin-bottom: 5px;
    font-size: 21px;
  }

  p {
    color: rgba(221, 221, 221, 0.40);
    font-size: 18px;
  }

}

.block-main-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
}

.button {
  font-family: Euclid, sans-serif;
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
}

.lead-block {
  margin-top: 24px;
  font-size: 20px;
  color: rgba(221, 221, 221, .4);
}

.under-text {
  color: rgba(221, 221, 221, .4);
  font-size: 20px;
  font-family: Euclid, sans-serif;
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
  font-family: Euclid, sans-serif;
  font-size: 80px;
  font-weight: 500;
  line-height: 100%;
  overflow: visible;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: visible;
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
  z-index: 0;
  width: 100%;
  height: 100%;
  max-width: 1440px;
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

body {
  border: 0;
  background-color: #000000;
  font-family: Euclid, 'sans-serif';
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
