<script setup lang="ts">
</script>

<template>
    <div id="pricing-panel" class="block-main-text">
        <div class="main-title">We're in beta,
            <br>so it is free for now
        </div>
        <div class="lead-block">
            <div class="sub-text">We are a self-funded team with the intention to reinvent remote
                <br>communication. While we develop core stuff, Convy is free to use.
            </div>
        </div>
    </div>
    <div class="neon neon_pricing_blue"></div>
    <div class="flex-container--background-grey">
        <div class="flex-container--pricing-header">
            <h1>Here's how we see our future of pricing</h1>
        </div>
        <div class="flex-container--pricing-subtitle">
            AI Fitness will have 3 plans, each including a 30-day trial
        </div>
        <div class="flex-container--divider">
        </div>
        <div class="flex-container--pricing-grid">
            <div class="grid-container--pricing-card">
                <h2>Guest</h2>
                <br>
                <h3>Free</h3>
                <p>Use all features besides creating new groups and chats</p>
            </div>
            <div class="grid-container--pricing-card">
                <h2>Member</h2>
                <br>
                <h3>6 € / month</h3>
                <p>Create groups and chats in your personal space, invite unlimited guests</p>
            </div>
            <div class="grid-container--pricing-card">
                <h2>Group</h2>
                <br>
                <h3>6 € / user / month</h3>
                <p>Chat with no limits in a team space, invite unlimited guests and clients</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.sub-text {
    color: #ddd;
    font-size: 20px;
    font-family: Euclid, sans-serif;
    text-align: center;
}

.neon_pricing_blue {
    background-color: #7af;
    top: 0%;
    bottom: auto;
    left: auto;
    right: 0%;
    animation: MoveNeonBluePricing 15s infinite;
}

.flex-container--background-grey {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 20px;
    width: 65vw;
    max-width: 1200px;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: rgba(221, 221, 221, .08);
    border: 1px solid rgba(221, 221, 221, .08);
}

.flex-container--pricing-header {
    box-sizing: border-box;
    color: rgb(221, 221, 221);
    line-height: 20px;
    margin-left: 50px;
    margin-right: 50px;
    width: 50%;

    h1 {
        font-size: 48px;
        line-height: 60px;
        letter-spacing: -1px;
        text-align: center;
        font-family: 'Euclid SemiBold', sans-serif;
    }
}

.flex-container--pricing-subtitle {
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    color: #DDD;
    text-align: center;
    font-family: 'Euclid Regular', sans-serif;
    font-size: 18px;
}

.flex-container--divider {
    width: 90%;
    height: 1px;
    background-color: rgba(221, 221, 221, .08);
    color: rgba(221, 221, 221, .08);
    margin: 75px 0;
}

.flex-container--pricing-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 50px;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: center;

    .grid-container--pricing-card {
        box-sizing: border-box;
        color: #DDD;

        h2 {
            font-size: 40px;
            line-height: 50px;
            font-family: 'Euclid SemiBold', sans-serif;
        }

        h3 {
            font-size: 22px;
            line-height: 30px;
            font-weight: 300;
            font-family: 'Euclid Regular', sans-serif;
        }

        p {
            font-size: 22px;
            line-height: 28px;
            color: rgba(221, 221, 221, 0.3);
            font-family: 'Euclid Regular', sans-serif;
        }
    }


    @keyframes MoveNeonBluePricing {

        0%,
        100% {
            transform: translate3d(0, 0, 0);
        }

        33% {
            transform: translate3d(-60vw, 10vh, 0);
        }

        66% {
            transform: translate3d(0, 20vh, 0);
        }
    }
}
</style>