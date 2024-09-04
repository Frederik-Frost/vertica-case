<script setup lang="ts">
import { ref, defineProps, onMounted, defineExpose } from 'vue';
import { Product } from './../types/Product';
import { useRouter } from 'vue-router';
const props = defineProps<{
    product: Product;
}>();

const router = useRouter();
const toProduct = (id: number) => {
    router.push(`/product/${id}`);
}
</script>

<template>
    <li class="p-4 list-none rounded-lg border border-gray-300 bg-white relative group hover:border-primary transition">
        <a @click.prevent="toProduct(product.id)">
            <div class=" flex items-center justify-center bg-white p-4 group-hover:scale-105 transition">
                <img :src="product.image" alt="product image" class="aspect-square object-contain">
            </div>

            <div
                class="absolute bottom-4 left-4 flex gap-2 items-center bg-white p-1 rounded-full border border-gray-400 max-w-[90%] group-hover:border-primary transition">
                <h3 class="truncate text-sm px-2">{{ product.title }}</h3>
                <span class="text-white text-sm text-nowrap bg-primary rounded-full p-2">{{ product.price }} $</span>
            </div>
        </a>
    </li>
</template>