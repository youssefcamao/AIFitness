import {createRouter, createWebHistory} from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ChatApp from '../views/ChatApp.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/chat',
            name: 'chat',
            component: ChatApp
        },
        {
            path: '/',
            name: '',
            component: LandingPage,
        }
    ]
}
)
export default router