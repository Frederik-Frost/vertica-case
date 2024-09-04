<script setup lang="ts">

</script>

<template>
    <div
        class="flex flex-col gap-4 items-center justify-center min-h-[75vh] border border-gray-200 bg-white rounded-lg m-4 md:m-8">
        <h1 class="text-6xl">
            Welcome
        </h1>
        <h2 class="text-2xl opacity-50">
            Browse our products
        </h2>
        <RouterLink to="/products" class="btn-primary">
            View products
        </RouterLink>
    </div>

</template>
