import {createRouter, createWebHistory} from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ChatApp from '../views/ChatApp.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/chat',
            name: 'chat',
            component: ChatApp,
            children: [
                {
                    path: ':sessionId',
                    name: 'chatSession',
                    component: ChatApp,
                    props: true
                },
            ]
        },
        {
            path: '/home',
            name: 'home',
            component: LandingPage,
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound
        }
    ]
}
)
export default router