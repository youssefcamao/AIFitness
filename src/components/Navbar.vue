<script setup lang="ts">
import AILogo from '../assets/AI-logo.png'
</script>

<template>
    <nav class="navbar">
        <div class="logo">
           <img :src="AILogo">
        </div>
        <div class="navbar-titles">
            <a class="navbar-link" href="google.com" target="_blank">Subscription</a>
            <a class="navbar-link" href="google.com" target="_blank">FAQ</a>
            <a class="navbar-link" href="google.com" target="_blank">Contact Us</a>
            <input class="join-button" type="button" value="Join the beta">
        </div>
    </nav>
</template>

<style scoped lang="scss">
.navbar {
    display: flex;
    height: 2.7rem;
    align-items: center;
    width: 100%;

    .logo {
        margin-left: 20px;
    }

    .navbar-titles {
        display: inline-block;
        margin-left: auto;
        margin-right: 35px;
        align-items: center;
        gap: 43px;
    }

    .navbar-link {
    color: #DDDDDD;
    text-align: center;
    padding: 8px 16px;
    font-weight: 500;
    text-decoration: none;
    transition: all .2s;
    position: relative;  /* Add this */
    z-index: 1;          /* Default stacking order */
    position: relative;
    overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: inherit; /* or any color you want */
            z-index: -1;
            transition: transform .2s;
            transform: scale(1);
        }

        &:hover::before {
            transform: scale(1.05);
        }
        
        &:hover {
            color: #FFFFFF;
            font-weight: bold;
        }
    }
    .join-button {
        border-radius: 12px;
        border-style: none;
        background-color: #313131;
        padding: 10px 15.8px 11px 16px;
        color: #DDDDDD;
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        font-weight: bold;
        z-index: 99;
    }
}
</style>