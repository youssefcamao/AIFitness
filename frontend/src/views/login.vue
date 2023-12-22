<script setup lang="ts">
import {ref, watch} from 'vue';
import Logo from '../assets/logo.png'
import {useAuthStore} from '../stores/authStore'
import {useRouter} from 'vue-router';


var authStore = useAuthStore()
const router = useRouter();
const emailLogin = ref('');
const passwordLogin = ref('');
const rememberMe = ref(false);

let runIndex = 0;
const signupText = "Hey my name is Ai Fitness, Im your personal assistant, Tell me about yourself, can you provide me with your email and full name"
const signupLiveMessage = ref("")
const textArea = ref<HTMLAreaElement | null>(null)
const signupInput = ref('')
const securityQuestion = ref('')
const securityAsnwer = ref('')
const isLoading = ref(false)


const isLogin = ref(true)
const isLoginStep1 = ref(true)
const isSignupInputHidden = ref(true)
const isSignupError = ref(false)
const isLoginStep1Error = ref(false)
const isLoginStep2Error = ref(false)

const fillLiveMessage = () => {
    if(runIndex < signupText.length) {
        signupLiveMessage.value += signupText.charAt(runIndex);
        runIndex++;
        setTimeout(fillLiveMessage, 20);
    }
    else {
        isSignupInputHidden.value = false
        if(textArea.value) {
            textArea.value.focus()
        }
    }
}
watch(isLogin, () => {
    if(!isLogin.value) {
        fillLiveMessage()
    }
})
const handleKeydown = async (event: KeyboardEvent) => {
    let text = signupInput.value
    if(event.key === 'Enter' && !event.shiftKey && text) {
        event.preventDefault()
        isLoading.value = true
        await authStore.signup(text)
        isLoading.value = false
        if(authStore.signupError) {
            isSignupError.value = true
            return
        }
        if(authStore.currentAccessToken) {
            router.push({name: 'chat'});
        }
    }
}
const doLoginStep1 = async () => {
    isLoginStep1Error.value = false
    authStore.loginError = ''
    if(emailLogin.value && passwordLogin.value) {
        await authStore.loginStep1(emailLogin.value, passwordLogin.value)
        if(authStore.loginError) {
            isLoginStep1Error.value = true
            return
        }
        securityQuestion.value = authStore.securityQuestion
        isLoginStep1.value = false
    }
};
const doLoginStep2 = async () => {
    isLoginStep2Error.value = false
    authStore.loginError = ''
    if(securityAsnwer.value) {
        await authStore.loginStep2(securityAsnwer.value)
        if(authStore.loginError) {
            isLoginStep2Error.value = true
            return
        }
        if(authStore.currentAccessToken) {
            router.push({name: 'chat'});
        }
    }
};

const switchWindow = () => {
    isLogin.value = !isLogin.value
    isLoginStep1Error.value = false
    isLoginStep2Error.value = false
    isSignupError.value = false
}
</script>
<template>
    <div class="main-view">
        <div class="login-neon left-neon" :class="{
            'standard-neon': !isLoginStep1Error && !isLoginStep2Error && !isSignupError && !isLoading,
            'error-neon': isLoginStep1Error || isLoginStep2Error || isSignupError && !isLoading,
            'loading-neon': !isLoginStep1Error && !isLoginStep2Error && !isSignupError && isLoading
        }"></div>
        <div class="login-neon right-neon" :class="{
            'standard-neon': !isLoginStep1Error && !isLoginStep2Error && !isSignupError && !isLoading,
            'error-neon': isLoginStep1Error || isLoginStep2Error || isSignupError && !isLoading,
            'loading-neon': !isLoginStep1Error && !isLoginStep2Error && !isSignupError && isLoading
        }"></div>
        <div class="login-container">
            <div class="login-card" v-if="isLogin && isLoginStep1">
                <h5>WELCOME BACK</h5>
                <h2>Log In to your Account</h2>
                <form @submit.prevent="doLoginStep1">
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="emailLogin" :class="{'error-input': isLoginStep1Error}"
                            placeholder="johnsondoe@nomail.com" required>
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="passwordLogin"
                            :class="{'error-input': isLoginStep1Error}" placeholder="************" required>
                    </div>
                    <div class="checkbox-group">
                        <input type="checkbox" id="remember" v-model="rememberMe">
                        <label for="remember">Remember me</label>
                    </div>
                    <button type="submit" class="login-btn button">Continue</button>
                    <p class="error-text" v-if="isLoginStep1Error">{{ authStore.loginError }}</p>
                    <p class="signup-text">New User? <a @click="switchWindow">Sign up here</a></p>
                </form>
            </div>
            <div class="login-card" v-if="isLogin && !isLoginStep1 && !isLoginStep1Error">
                <h5>Last Step</h5>
                <h2>Security question</h2>
                <form @submit.prevent="doLoginStep2">
                    <div class="input-group">
                        <label for="question">security question</label>
                        <input type="question" id="question" v-model="securityQuestion" disabled>
                    </div>
                    <div class="input-group">
                        <label for="answer">your answer</label>
                        <input type="answer" id="answer" v-model="securityAsnwer"
                            :class="{'error-input': isLoginStep2Error}">
                    </div>
                    <button type="submit" class="login-btn button">Login</button>
                    <p class="error-text" v-if="isLoginStep2Error">{{ authStore.loginError }}</p>
                    <p class="signup-text">New User? <a @click="isLogin = false">Sign up here</a></p>
                </form>
            </div>
            <div class="signup-container" v-if="!isLogin">
                <h2>Signup</h2>
                <div class="ai-signup-message">
                    <img :src="Logo">
                    <p>{{ signupLiveMessage }}</p>
                </div>
                <textarea name="signupText" id="signupText" cols="30" rows="7" spellcheck="false" v-model="signupInput"
                    placeholder="Write about yourself ..." :class="{'hide': isSignupInputHidden}" ref="textArea"
                    @keydown="handleKeydown" :disabled="isLoading"></textarea>
                <p class="error-text" v-if="isSignupError">{{ authStore.signupError }}</p>
                <p class="signup-text">Already have an account? <a @click="switchWindow">LOGIN HERE</a></p>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.signup-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 35px 20px;

    h2 {
        margin-bottom: 50px;
    }
}

.error-input {
    border-color: #d11414;
}

.hide {
    opacity: 0;
}

#signupText {
    background-color: transparent;
    flex: 1;
    border: none;
    resize: none;
    outline: none;
    width: 560px;
    font-size: 15px;
    color: #DDD;

    transition: opacity 0.5s ease;

    &::placeholder {
        font-size: 16px;
    }
}

#signupText::-webkit-scrollbar {
    width: 8px;
}

#signupText::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
}

.ai-signup-message {
    display: flex;
    align-items: flex-start;

    color: #DDD;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22.509px;
    padding: 0 20px;
    border-bottom: 2px solid rgba(221, 221, 221, .08);
    margin-bottom: 20px;
    padding-bottom: 20px;

    p {
        width: 600px;
    }

    img {
        width: 27px;
        height: 27px;
        margin-right: 12px;
    }
}

.main-view {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-neon {
    position: absolute;
    width: 80vw;
    height: 80vh;
    filter: blur(24vh);
    opacity: 0.6;
    border-radius: 100%;
    z-index: -1;
    animation: scale-up-bl 10s ease-in-out infinite;
    transition: background-color 1s ease-in-out;
}

.standard-neon {
    background-color: #1056CB;
}

.loading-neon {
    background-color: #b8e70d;
}

.error-neon {
    background-color: #d11414;
}

.left-neon {
    top: 30%;
    left: -50%;
}

.right-neon {
    bottom: 30%;
    right: -50%;
}

.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(221, 221, 221, .08);
    border: 1px solid rgba(221, 221, 221, .08);
    border-radius: 10px;
}

.login-card {
    padding: 50px;
    width: 400px;
}

h5 {
    color: #fff;
    font-weight: 200;
}

h2 {
    color: #fff;
    font-weight: 500;
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 1rem;

    label {
        display: block;
        color: #aaa;
        margin-bottom: .5rem;
    }

    input {
        width: 100%;
        padding: 0.75rem;
        background-color: rgba(221, 221, 221, .1);
        border: 1px solid rgba(221, 221, 221, .08);
        border-radius: 5px;
        color: #ddd;
    }

}


.checkbox-group {
    margin: 1rem 0;
    display: flex;
    align-items: center;
}

.checkbox-group input {
    margin-right: 0.5rem;
}

.checkbox-group label {
    color: #aaa;
}

label {
    font-size: 14px;
}

.login-btn {
    width: 100%;
    padding: 0.75rem;
    cursor: pointer;
    border-radius: 5px;
    border: none;
}

.signup-text {
    text-align: center;
    color: #aaa;
    margin-top: 1rem;
    font-size: 13px;
}

.error-text {
    text-align: center;
    color: #d11414;
    margin-top: 1rem;
    font-size: 13px;
}

.signup-text a {
    color: #fff;
    /* Link color */
    text-decoration: none;
    cursor: pointer;
}

@keyframes typing {
    from {
        width: 0
    }
}

@keyframes blink {
    50% {
        border-color: transparent
    }
}
</style>