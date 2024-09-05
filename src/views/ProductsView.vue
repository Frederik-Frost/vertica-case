<script setup lang="ts">
import CategoryList from './../components/CategoryList.vue';
import ProductList from './../components/ProductList.vue';
import ProductSorting from './../components/ProductSorting.vue';

import { ref, onMounted, computed } from 'vue';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';

import { Product } from './../types/Product';
import { SortingType } from './../types/SortingType';
import ProductSort from './../utils/ProductSort.ts';

import axios from 'axios';

onBeforeRouteUpdate((to: any, from: any) => {
    if (to.params.category === from.params.category) return;
    getProducts(to.params.category as string);
})

onMounted(() => {
    getProducts();
});


const loadingProducts = ref<boolean>(false);
const router = useRouter();
const productList = ref<Product[]>([]);
const getProducts = (_category?: string) => {
    loadingProducts.value = true;

    const category: string | null = _category ?? router.currentRoute.value?.params?.category as string;
    const endpoint: string = import.meta.env.VITE_API_BASE_URL + (category ? `/products/category/${category}` : `/products`)

    axios.get(endpoint).then((response) => {
        if (response.data.length === 0) return router.push('/products')
        productList.value = response.data;
    }).catch(() => {
        return router.push('/products')
    }).finally(() => {
        loadingProducts.value = false;
    })
}

const sortBy = computed<String | undefined>(() => {
    return router.currentRoute.value.query.sortBy as string
})

const sortedProductList = computed<Product[]>(() => {
    if (!sortBy.value) return productList.value
    const sortingType: SortingType | undefined = ProductSort.sortingTypes.find((type: SortingType) => type.query === sortBy.value);
    if (!sortingType) return productList.value
    return sortingType.sortMethod(productList.value)
});
</script>

<template>
    <main class="flex flex-col sm:flex-row min-h-screen">
        <section class="max-w-[250px] p-8 flex flex-col gap-3">
            <CategoryList />
            <ProductSorting />
        </section>
        <section  class="w-full">
            <ProductList :products="sortedProductList" :loading="loadingProducts"/>
        </section>

    </main>
</template>
