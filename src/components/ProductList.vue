<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { Product } from './../types/Product';

import ProductCard from './../components/ProductCard.vue';

const props = defineProps<{
    products: Product[];
    loading: boolean;
}>();

const skeletons = ref<number>(9);


</script>

<template>

    <Transition name="fade">
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8" v-if="!loading">
            <ProductCard v-for="product in props.products" :key="product.id" :product="product" />
        </ul>
    </Transition>
    <Transition name="fade">
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8" v-if="loading">
            <li v-for="( index) in skeletons" :key="index"
                class="p-4 list-none rounded-lg border border-gray-100 bg-gray-100/75 aspect-square">
            </li>
        </ul>
    </Transition>
</template>

<style scoped>
.fade-enter-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>