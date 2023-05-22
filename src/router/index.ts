import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FormsManagment from '@/views/FormsManagment.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: FormsManagment
    },
    {
        path: '/form-actions',
        name: 'form-actions',
        component: () => import('@/views/CreateForm.vue'),
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})

export default router
