<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue';
import axios from 'axios';
import { Product } from './../types/Product';
import { useRoute } from 'vue-router';
import ProductCard from './../components/ProductCard.vue';



const route = useRoute();
// @ts-ignore
const product = ref<Product>(route.params.product);

</script>

<template>
    <div>
        <ProductCard v-if="product" :product="product" />
    </div>
</template>
