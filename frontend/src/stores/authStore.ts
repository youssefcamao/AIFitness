import {defineStore} from 'pinia'
import {Step1Client, Step2Client, SignupClient, UserCreate, Body_login_step1_token_step1_post, SecurityQuestionAnswer, ApiException} from "../apis/ChatSessionApi";


const APIBASELINK = import.meta.env.VITE_CHAT_SESSION_API_BASE_URL
let step1Client = new Step1Client(APIBASELINK)
let step2Client = new Step2Client(APIBASELINK)
let signupClient = new SignupClient(APIBASELINK)
let step1Token = ''

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        currentAccessToken: localStorage.getItem('currentAccessToken') || '',
        userFullName: localStorage.getItem('userFullName') || '',
        signupErrorMessage: '',
        loginSignupMessage: '',
        securityQuestion: '',
        signupError: '',
        loginError: ''
    }),
    actions: {
        saveAuthData(token: string, fullName: string) {
            this.currentAccessToken = token;
            this.userFullName = fullName;
            localStorage.setItem('currentAccessToken', token);
            localStorage.setItem('userFullName', fullName);
        },
        signout() {
            localStorage.removeItem('currentAccessToken');
            localStorage.removeItem('userFullName');

            this.currentAccessToken = '';
            this.userFullName = '';
        },
        async signup(signupText: string) {
            this.signupError = ''
            await signupClient.post(new UserCreate({text: signupText})).then(response => {
                this.saveAuthData(response.token.access_token, response.full_name)
            }).catch(error => {
                if(error instanceof ApiException && error.status === 400) {
                    const errorDetails = JSON.parse(error.response);
                    this.signupError = errorDetails.detail;
                } else {
                    this.signupError = "An unexpected error occurred";
                }
            })
        },
        async loginStep1(email: string, pass: string) {
            this.loginError = ''
            await step1Client.post(new Body_login_step1_token_step1_post({
                username: email, password: pass,
                grant_type: '', client_id: '', client_secret: '', scope: ''
            }))
                .then(response => {
                    this.securityQuestion = response.security_question
                    step1Token = response.intermediate_token
                }).catch(error => {
                    if(error instanceof ApiException && error.status === 401) {
                        const errorDetails = JSON.parse(error.response);
                        this.loginError = errorDetails.detail;
                    } else {
                        this.loginError = "An unexpected error occurred";
                    }
                })
        },
        async loginStep2(response: string) {
            this.loginError = ''
            await step2Client.post(new SecurityQuestionAnswer({intermediate_token: step1Token, answer: response}))
                .then(response => {
                    this.saveAuthData(response.token.access_token, response.full_name)
                }).catch(error => {
                    if(error instanceof ApiException && error.status === 401) {
                        const errorDetails = JSON.parse(error.response);
                        this.loginError = errorDetails.detail;
                    } else {
                        this.loginError = "An unexpected error occurred";
                    }
                })
            if(!this.loginError) {
                step1Token = ''
            }
        }
    }
})