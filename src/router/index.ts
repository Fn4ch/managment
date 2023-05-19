import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FormsManagment from '@/views/FormsManagment'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: FormsManagment
    },
     {
        path: '/create-form',
         name: 'Create form',
        component: () => import('@/views/CreateForm.vue')
    },
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})

export default router
