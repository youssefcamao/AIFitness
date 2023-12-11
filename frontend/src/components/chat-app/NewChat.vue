<script setup lang="ts">
</script>
<template>
    <div class="new-chat-header">
        <div class="big-ai-logo">
            <div class="logo-text">AI</div>
        </div>

        <h1>How can i help you today?</h1>
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

    @mixin border-gradient($from, $to, $weight: 0) {
        $mix-main: mix($from, $to);
        $mix-sub-from: mix($mix-main, $from);
        $mix-sub-to: mix($mix-main, $to);

        box-shadow: 0 3px 0 $weight rgba($mix-sub-to, .25),
            0 -3px 0 $weight rgba($mix-sub-from, .25),
            3px 0 0 $weight rgba($mix-sub-to, .25),
            -3px 0 0 $weight rgba($mix-sub-from, .25),
            3px -3px 0 $weight rgba($mix-main, .5),
            -3px 3px 0 $weight rgba($mix-main, .5),
            3px 3px 0 $weight rgba($to, .75),
            -3px -3px 0 $weight rgba($from, .75);
    }

    .big-ai-logo {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Zian, sans-serif;
        border-radius: 100%;
        width: 150px;
        height: 150px;
        margin-bottom: 15px;
        background-color: rgba(221, 221, 221, .04);

        .logo-text {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 80px;
            animation: counterRotateThis 3s linear infinite;
        }

        @include border-gradient(#D6FA00, #0085de);

        animation: rotateThis 3s linear infinite;
    }

    @keyframes rotateThis {
        from {
            transform: rotate(0deg) scale(1);
        }

        to {
            transform: rotate(360deg) scale(1);
        }
    }

    @keyframes counterRotateThis {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(-360deg);
        }
    }
}
</style>