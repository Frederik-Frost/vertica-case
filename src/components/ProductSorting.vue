<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';

type SortingType = {
    name: string,
    query: string
}

const sortingTypes = ref<SortingType[]>(
    [
        {
            name: 'Price: low to high',
            query: 'price-ascending',
        },
        {
            name: 'Price: high to low',
            query: 'price-descending',
        },
        {
            name: 'A - Z',
            query: 'name-ascending',
        },
    ]
)

const router = useRouter();
const currentSorting = computed(() => {
    return router.currentRoute.value.query?.sortBy
})

const setSortingQuery = (query: string) => {
    router.push({ query: { 'sortBy': query } })
}

onBeforeRouteUpdate((to, from, next) => {
    if (from.query.sortBy && !to.query.sortBy) {
        next({
            path: to.path,
            query: { ...to.query, sortBy: from.query.sortBy },
        });
    } else next();
})

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
