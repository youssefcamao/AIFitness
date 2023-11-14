<script setup lang="ts">
</script>

<template>
    <div class="features-section">
        <div class="card">
            <img src="../../assets/report_white.png" alt="Icon">
            <h3>Personalized Fitness Plans</h3>
            <p>Tailor-made workouts just for you. Adapts in real-time based on your progress and feedback.</p>
        </div>
        <div class="card">
            <img src="../../assets/mind_white.png" alt="Icon">
            <h3>Interactive Exercise Routines</h3>
            <p>Engaging AI trainers guide you through exercises, making sure your form and technique are correct.</p>
        </div>
        <div class="card">
            <img src="../../assets/nutrition_white.png" alt="Icon">
            <h3>Nutrition Guidance on Demand</h3>
            <p>Instant access to customized nutritional advice that aligns with your fitness goals and dietary preferences.
            </p>
        </div>
        <div class="card">
            <img src="../../assets/calendar_white.png" alt="Icon">
            <h3>Track Your Fitness Journey</h3>
            <p>Monitor your progress, celebrate milestones, and adjust your goals as you evolve.</p>
        </div>
        <div class="card">
            <img src="../../assets/barbell_white.png" alt="Icon">
            <h3>Motivation When You Need It</h3>
            <p>Receive motivating messages and reminders to keep you on track
                and get inspired</p>
        </div>
        <div class="card">
            <img src="../../assets/weights_white.png" alt="Icon">
            <h3>Diverse Workout Library</h3>
            <p>A wide range of exercises and routines to ensure your workouts are varied, effective, and enjoyable.</p>
        </div>
    </div>
</template>

<style lang="scss">
.features-section {
    display: grid;
    font-family: 'Euclid Regular', sans-serif;
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
</style>