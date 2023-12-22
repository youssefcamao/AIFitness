import {createRouter, createWebHistory} from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ChatApp from '../views/ChatApp.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/login.vue'
import {useAuthStore} from '../stores/authStore'


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
            meta: {requiresAuth: true},
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
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound
        }
    ]
}
)
router.beforeEach((to, _, next) => {
    if(to.matched.some((r) => r.meta?.requiresAuth)) {
        const store = useAuthStore()
        if(!store.currentAccessToken) {
            next({name: 'login', query: {redirect: to.fullPath}})
            return
        }
    }
    next()
})
export default router