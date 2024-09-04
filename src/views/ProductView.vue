<script setup lang="ts">
import { ref } from 'vue';
import { Product } from './../types/Product';
import { useRoute } from 'vue-router';
import ProductRatings from './../components/ProductRatings.vue';
import { useCartStore } from './../stores/cart';


const route = useRoute();
// @ts-ignore
const product = ref<Product>(route.params.product);


const cartStore = useCartStore();
const onAddToCart = (product: Product) => {
    cartStore.addProduct(product);
}

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

                <button class="btn-primary"
                    @click="onAddToCart(product)">
                    <span class="absolute left-8 top-1/2 -translate-y-1/2 w-5">
                        <img src="./../assets/svg/plus-solid.svg" alt="Add to cart icon">
                    </span>
                    <span>Add to cart</span>
                </button>
            </div>

        </section>






        <!-- <ProductCard v-if="product" :product="product" /> -->
    </main>
</template>
