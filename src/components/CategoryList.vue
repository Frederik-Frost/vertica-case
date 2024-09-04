<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const categories = ref<string[]>([]);
const getCategories = () => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/categories`).then((response) => {
        categories.value = response.data;
    });
}
onMounted(() => {
    getCategories();
});

const router = useRouter();
const currentCategory = computed<string>(() => {
    return router.currentRoute.value.params.category as string;
});

</script>

<template>
    <nav>
        <h3 class="text-sm opacity-50 pb-2">Categories</h3>
        <ul v-if="categories" class="text-nowrap text-sm flex flex-col text-start gap-1">
            <li :class="{ 'underline': currentCategory === '' }">
                <RouterLink to="/products">
                    All
                </RouterLink>
            </li>
            <li v-for="(category, index) in categories" :key="index"
                :class="{ 'underline': currentCategory === category }">
                <RouterLink :to="`/products/${category}`">
                    {{ category }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
