<script setup lang="ts">
import Logo from '../assets/logo.png'
</script>

<template>
    <nav class="navbar">
        <div class="logo">
            <img :src="Logo">
            <h1>Fitness</h1>
        </div>
        <div class="navbar-titles">
            <a class="navbar-link" href="google.com" target="_blank">Subscription</a>
            <a class="navbar-link" href="google.com" target="_blank">FAQ</a>
            <a class="navbar-link" href="google.com" target="_blank">Contact Us</a>
            <a class="join-button button" type="button">Join the beta</a>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.navbar {
    display: flex;
    padding: 20px 20px 0;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 100px;

    .logo {
        display: flex;
        align-items: center;
        flex-direction: row;

        img {
            height: 13%;
            width: 13%;
        }

        h1 {
            text-align: center;
            font-size: 20px;
            margin-left: 20px;
            font-family: Zian, sans-serif;
            color: white;
            letter-spacing: 2px;
            opacity: 95%;
        }
    }

    .navbar-link {
        color: rgba(221, 221, 221, .5);
        font-weight: bold;
        font-family: Euclid, sans-serif;
        text-align: center;
        font-size: 15px;
        padding: 8px 16px;
        font-weight: 500;
        text-decoration: none;
        transition: all .2s;
        position: relative;
        z-index: 1;
        position: relative;
        overflow: hidden;
        transition: font-size 12s;

        &:hover {
            color: #FFFFFF;
        }
    }

    .join-button {
        border-radius: 12px;
        border-style: none;
        background-color: rgba(221, 221, 221, 0.1);
        margin-left: 20px;
        padding: 10px 15.8px 11px 16px;
        color: #DDDDDD;
        font-family: Euclid, sans-serif;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        z-index: 99;
    }
}
</style>