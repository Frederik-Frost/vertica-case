<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Product } from './../types/Product';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { useCartStore } from './../stores/cart';
import axios from 'axios';

import ProductRatings from './../components/ProductRatings.vue';
import ProductCard from './../components/ProductCard.vue';
import { watch } from 'fs';

const route = useRoute();
// @ts-ignore
const product = ref<Product>(route.params.product);


const cartStore = useCartStore();
const onAddToCart = (product: Product) => {
    cartStore.addProduct(product);
}

const categoryProducts = ref<Product[]>([]);
const getCategoryProducts = () => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/category/${product.value.category}`).then((response) => {
        categoryProducts.value = response.data;
    })
}
onMounted(() => {
    getCategoryProducts();
})


const getNewProductData = (id: number) => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`)
        .then((response) => {
            product.value = response.data;
            window.scrollTo(0, 0);
        })
}
onBeforeRouteUpdate((to: any, from: any) => {
    if (to.params.id !== from.params.id) {
        getNewProductData(to.params.id);
    }
})


</script>

<template>
    <main class="p-8 md:p-4">
        <section
            class="bg-white rounded-xl border border-gray-200 min-h-[80vh] flex flex-col md:flex-row md:gap-12 md:p-12">
            <div class="m-auto p-8 md:p4 relative max-w-96 md:max-w-lg md:basis-2/3">
                <img :src="product.image" alt="product image" class="aspect-square object-contain  ">
            </div>

            <div class="p-4 flex flex-col justify-between gap-3 md:basis-1/3">
                <div class="flex flex-col gap-3">
                    <h1 class="text-5xl font-medium">{{ product.title }}</h1>
                    <p class="px-3 py-2 text-sm rounded-full bg-primary text-white self-start">$ {{ product.price }}</p>
                    <hr>
                    <p class=" max-w-prose text-sm opacity-80"> {{ product.description }}</p>
                    <hr>
                    <ProductRatings :rating="product.rating" showText />
                </div>

                <button class="btn-primary" @click="onAddToCart(product)">
                    <span class="absolute left-8 top-1/2 -translate-y-1/2 w-5">
                        <img src="./../assets/svg/plus-solid.svg" alt="Add to cart icon">
                    </span>
                    <span>Add to cart</span>
                </button>
            </div>

        </section>


        <section class="py-8">
            <div class="mb-4">
                <h3 class=" text-2xl font-bold">More in Category</h3>
                <span class=" text-sm opacity-50">{{ product.category }}</span>
            </div>

            <ul class="flex flex-row gap-4 overflow-hidden overflow-x-auto">
                <ProductCard v-for="product in categoryProducts" :key="product.id" :product="product"
                    class="min-w-[200px] md:min-w-[250px] max-w-[300px]" />
            </ul>
        </section>
    </main>
</template>
