<script setup lang="ts">
</script>

<template>
    <div class="flex-container--newsletter">
        <img src="../../assets/mail.png" class="mail-icon">
        <div class="newsletter--description">
            <h1 class="description--title">SUBSCRIBE</h1>
            <h3 class="description--subtitle">Subscribe to our newsletter & stay updated</h3>
        </div>
        <form class="form--mail">
            <input type="email" class="mail-input" max-length="100" placeholder="Enter your email here">
            <input type="submit" class="submit-button" value="Subscribe">
        </form>
    </div>
</template>

<style scoped lang="scss">

.flex-container--newsletter {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
}

.mail-icon {
    width: 160px;
    height: 160px;
    margin-bottom: 30px;
}

.newsletter--description {
    text-align: center;
    color: #ddd;
    margin-bottom: 20px;

    h1 {
        letter-spacing: 4.8px;
        font-family: 'Euclid SemiBold', sans-serif;
        font-size: 50px;
    }

    h3 {
        font-family: 'Euclid Regular', sans-serif;
        font-size: 22px;
        font-weight: 400;
    }
}

.form--mail {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    background-color: rgba(221,221,221,.1);
    border: 1px solid rgba(221,221,221,.08);
    border-radius: 12px;
    padding: 2px;
    width: 500px;

    input:focus{
        outline: none;
    }

    .mail-input {
        height: 100%;
        width: 100%;
        background-color: transparent;
        font-family: 'Euclid Regular', sans-serif;
        color: #ddd;
        font-size: 18px;
        padding: 12px 20px;
        border: none;
    }

    .submit-button {
        background-color: #ddd;
        color: black;
        border: none;
        border-radius: 8px;
        margin-left: auto;
        padding: 10px 15px;
        font-family: 'Euclid SemiBold', sans-serif;
        font-size: 20px;
        cursor: pointer;
    }
}

</style>