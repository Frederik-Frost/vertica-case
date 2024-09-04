import { createWebHistory, createRouter, onBeforeRouteUpdate } from 'vue-router';

import HomeView from './../views/HomeView.vue';
import ProductsView from './../views/ProductsView.vue';
import ProductView from './../views/ProductView.vue';
import axios from 'axios';

const routes = [
  { path: '/', component: HomeView },
  {
    path: '/products/:category?',
    component: ProductsView
  },
  {
    path: '/product/:id',
    component: ProductView,
    props: true,
    beforeEnter: (to: any, from: any, next: any) => {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/products/${to.params.id}`)
        .then((response) => {
          if (response.data.length === 0) return next('/products');
          to.params.product = response.data;
          next();
        })
        .catch(() => {
          next('/products');
        });
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
