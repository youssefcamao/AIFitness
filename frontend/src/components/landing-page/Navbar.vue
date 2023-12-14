<script setup lang="ts">
import Logo from '../../assets/logo.png'
import {onMounted, onUnmounted, ref} from 'vue';
import {useRouter} from 'vue-router'

const router = useRouter()

const handleChat = () : void => {
    router.push('/chat')
}

const navbar = ref<HTMLDivElement | null>(null)
const isSticky = ref(false)
const isButtonWhite = ref(false)

const scrollToSection = (sectionId: string) : void => {
    const element = document.getElementById(sectionId)
    if(element) {
        element.scrollIntoView({behavior: 'smooth'})
    }
}

const handleScroll = () : void => {
    if(navbar.value) {
        if(window.scrollY > navbar.value.offsetTop + 80) {
            if(window.scrollY > navbar.value.offsetTop + 630) {
                isButtonWhite.value = true
            } else {
                isButtonWhite.value = false
            }
            isSticky.value = true
        }
        else {
            isSticky.value = false
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
    <nav ref="navbar" class="navbar navbar-sticky">
        <div class="logo">
            <img :src="Logo">
            <h1 class="logo-text" :class="{'logo-animation': isSticky}">Fitness</h1>
        </div>
        <div class="navbar-titles">
            <a class="navbar-link" @click="scrollToSection('pricing-panel')">Pricing</a>
            <a class="navbar-link" @click="scrollToSection('features')">Features</a>
            <a class="navbar-link" @click="scrollToSection('newsletter')">Newsletter</a>
            <a class="join-button" :class="{'button-white': isButtonWhite, 'button-grey': !isButtonWhite}"
                @click="handleChat">Try it now</a>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.logo-animation {
    transform: translate3d(0px, -56px, 0px);
}

.logo-text {
    text-align: center;
    font-size: 20px;
    margin-left: 20px;
    font-family: 'Zian', sans-serif;
    color: #DDD;
    letter-spacing: 2px;
    opacity: 95%;
    transition: all .4s cubic-bezier(.645, .045, .355, 1);
}

.navbar-sticky {
    top: 0;
    position: fixed;
}

.placeHolder {
    width: 100%;
    height: 78.6px;
}

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
    }

    .navbar-titles {
        display: flex;
        flex-direction: row;

        .navbar-link {
            color: rgba(221, 221, 221, .5);
            font-weight: bold;
            font-family: 'Euclid Regular', sans-serif;
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
            cursor: pointer;

            &:hover {
                color: #FFFFFF;
                transform: scale(1.1);
            }
        }

        .button-white {
            background-color: rgb(221, 221, 221);
            color: rgb(0, 0, 0);
        }

        .button-grey {
            background-color: rgba(221, 221, 221, 0.1);
            color: #DDDDDD;
        }

        .join-button {
            border-radius: 12px;
            border-style: none;
            margin-left: 20px;
            padding: 10px 15.8px 11px 16px;
            text-decoration: none;
            font-family: 'Euclid Bold', sans-serif;
            font-size: 15px;
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