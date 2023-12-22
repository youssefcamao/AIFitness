import {defineStore} from 'pinia'
import {Step1Client, Step2Client, SignupClient, UserCreate, Body_login_step1_token_step1_post, SecurityQuestionAnswer} from "../apis/ChatSessionApi";


const APIBASELINK = import.meta.env.VITE_CHAT_SESSION_API_BASE_URL
let step1Client = new Step1Client(APIBASELINK)
let step2Client = new Step2Client(APIBASELINK)
let signupClient = new SignupClient(APIBASELINK)
let step1Token = ''

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        currentAccessToken: '',
        userFullName: '',
        signupErrorMessage: '',
        loginSignupMessage: '',
        securityQuestion: '',
    }),
    actions: {
        async signup(signupText: string) {
            await signupClient.post(new UserCreate({text: signupText})).then(response => {
                this.currentAccessToken = response.token.access_token
                this.userFullName = response.full_name
            }).catch(error => error)
        },
        async loginStep1(email: string, pass: string) {
            await step1Client.post(new Body_login_step1_token_step1_post({
                username: email, password: pass,
                grant_type: '', client_id: '', client_secret: '', scope: ''
            }))
                .then(response => {
                    this.securityQuestion = response.security_question
                    step1Token = response.intermediate_token
                }).catch(error => error)
        },
        async loginStep2(response: string) {
            await step2Client.post(new SecurityQuestionAnswer({intermediate_token: step1Token, answer: response}))
                .then(response => {
                    this.currentAccessToken = response.token.access_token
                    this.userFullName = response.full_name
                }).catch(error => error)
            step1Token = ''
        }
    }
})