<script setup lang="ts">
import CategoryList from './../components/CategoryList.vue';
import ProductList from './../components/ProductList.vue';
import ProductSorting from './../components/ProductSorting.vue';

import { ref, onMounted, computed } from 'vue';
import { Product } from './../types/Product';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';

import axios from 'axios';

onBeforeRouteUpdate((to) => {
    getProducts(to.params.category as string);
})

const router = useRouter();
const productList = ref<Product[]>([]);
const getProducts = (_category?: string) => {
    const category: string | null = _category ?? router.currentRoute.value?.params?.category as string;
    const endpoint: string = import.meta.env.VITE_API_BASE_URL + (category ? `/products/category/${category}` : `/products`)

    axios.get(endpoint).then((response) => {
        if (response.data.length === 0) return router.push('/products')
        productList.value = response.data;
    }).catch(() => {
        return router.push('/products')
    });
}

const sortBy = computed<String | undefined>(() => {
    return router.currentRoute.value.query.sortBy as string
})
const sortedProductList = computed<Product[]>(() => {
    if (!sortBy.value) return productList.value
    switch (sortBy.value) {
        case "price-ascending":
            return productList.value.sort((a, b) => a.price - b.price)
        case "price-descending":
            return productList.value.sort((a, b) => b.price - a.price)
        case "name-ascending":
            return productList.value.sort((a, b) => a.title.localeCompare(b.title))
        default: return productList.value
    }

});

onMounted(() => {
    getProducts();
});


</script>

<template>
    <main class="flex flex-col sm:flex-row">
        <section class="max-w-[250px] p-8 flex flex-col gap-3">
            <CategoryList />
            <ProductSorting />
        </section>

        <section>
            <ProductList v-if="productList" :products="sortedProductList" />
        </section>

    </main>
</template>
