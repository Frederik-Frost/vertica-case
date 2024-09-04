<script setup lang="ts">
import { defineProps } from 'vue';
import { Product } from './../types/Product';

import ProductCard from './../components/ProductCard.vue';

const props = defineProps<{
    products: Product[];
}>();

</script>

<template>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </ul>
</template>