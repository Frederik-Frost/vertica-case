<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { SortingType } from './../types/SortingType';
import ProductSort from './../utils/ProductSort';

const sortingTypes = computed<SortingType[]>(() => ProductSort.sortingTypes)

const router = useRouter();
const currentSorting = computed(() => {
    return router.currentRoute.value.query?.sortBy
})

const setSortingQuery = (query: string) => {
    router.push({ query: { 'sortBy': query } })
}
</script>

<template>
    <div>
        <h3 class="text-sm opacity-50 pb-2">Sort by</h3>
        <ul class="text-nowrap text-sm flex flex-col text-start gap-1">
            <li v-for="(sortingType, index) in sortingTypes" :key="index">
                <button @click="setSortingQuery(sortingType.query)"
                    :class="{ 'underline': currentSorting === sortingType.query }">
                    {{ sortingType.name }}
                </button>
            </li>
        </ul>
    </div>
</template>
