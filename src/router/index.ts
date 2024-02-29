import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '@/views/ContactView.vue';
import ProductView from '@/views/ProductView.vue';
import DetailProduct from '@/views/DetailProduct.vue';
import LoginView from '@/views/LoginView.vue';
import EditView from '@/views/EditView.vue';
import CreateView from '@/views/CreateView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/tieu-su',
        name: 'about',
        component: ContactView,
    },
    {
        path: '/san-pham',
        name: 'product',
        component: ProductView,
    },
    {
        path: '/san-pham/:name',
        name: 'detail',
        component: DetailProduct,
    },
    {
        path: '/san-pham/edit/:id',
        name: 'edit',
        component: EditView,
    },
    {
        path: '/dang-nhap',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/san-pham/tao-moi',
        name: 'create',
        component: CreateView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
