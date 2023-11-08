<script setup lang="ts">
import Logo from '../../assets/logo.png'
import { onMounted, onUnmounted, ref } from 'vue';

const navbar = ref<HTMLDivElement | null>(null);

const handleScroll = () => {
  if (navbar.value) {
    if (window.scrollY > navbar.value.offsetTop) {
      navbar.value.style.position = 'fixed';
      navbar.value.style.top = '0';
      navbar.value.style.width = '100%'; // Ensure the navbar spans the full width when fixed
    } else {
      navbar.value.style.position = 'relative';
      navbar.value.style.top = '';
      navbar.value.style.width = ''; // Reset the width
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <nav ref="navbar" class="navbar">
        <div class="logo">
            <img :src="Logo">
            <h1>Fitness</h1>
        </div>
        <div class="navbar-titles">
            <a class="navbar-link" href="https://google.com/" target="_blank">Subscription</a>
            <a class="navbar-link" href="https://google.com/" target="_blank">FAQ</a>
            <a class="navbar-link" href="https://google.com/" target="_blank">Contact Us</a>
            <a class="join-button" href="https://app.convy.chat/" target="_blank">Join the beta</a>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 0;
    width: 100%;
    z-index: 1000;

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

    .navbar-titles {
        display: flex;
        flex-direction: row;

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

            &:hover {
                color: #FFFFFF;
                transform: scale(1.1);
            }
        }

        .join-button {
            border-radius: 12px;
            border-style: none;
            background-color: rgba(221, 221, 221, 0.1);
            margin-left: 20px;
            padding: 10px 15.8px 11px 16px;
            color: #DDDDDD;
            text-decoration: none;
            font-family: Euclid, sans-serif;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
            z-index: 99;
            transition: all .2s cubic-bezier(.645, .045, .355, 1);

            &:hover {
                transform: scale(1.1);
            }
        }
    } 
}
</style>