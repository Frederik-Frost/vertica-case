<script setup lang="ts">
import { ref, defineProps, onMounted, defineExpose } from 'vue';
import { Product } from './../types/Product';
import { useRouter } from 'vue-router';
import ProductRatings from './ProductRatings.vue';


const props = defineProps<{
    product: Product;
    quantity: number;
}>();

</script>

<template>
    <li class="py-4 list-none border-b border-gray-200 bg-white relative cursor-pointer flex flex-row gap-3 w-full ">

        <div class="flex items-center justify-center bg-white group-hover:scale-105 transition grow-0 basis-1/4">
            <img :src="product.image" alt="product image" class="aspect-square object-contain">
        </div>

        <div class="grow truncate basis-3/4">
            <h3 class="truncate grow">
                {{ product.title }}
            </h3>

            <p class="text-xs opacity-50">
                $ {{ product.price }}
            </p>

            <div class="flex items-center gap-2">
                <span class="text-xs opacity-50">
                    x{{ quantity }}
                </span>
            </div>
        </div>

        
        <button class="self-end" @click.prevent.stop="$emit('onRemoveProduct', product.id)"><img src="./../assets/svg/trash-solid.svg" alt="Remove from cart icon" class="w-[14px] opacity-75"></button>

    </li>
</template>