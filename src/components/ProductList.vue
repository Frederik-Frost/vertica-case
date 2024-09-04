<script setup lang="ts">
import { ref, defineProps, onMounted, defineExpose } from 'vue';
import axios from 'axios';

import ProductCard from './../components/ProductCard.vue';

import { Product } from './../types/Product';

const productList = ref<Product[]>([]);
const getProducts = () => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`).then((response) => {
        console.log(response.data);
        productList.value = response.data;
    }).catch((error) => {
        // handle error
        console.log(error);
    });
}

onMounted(() => {
    getProducts();
});


</script>

<template>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <ProductCard v-for="product in productList" :key="product.id" :product="product" />
    </ul>
</template>