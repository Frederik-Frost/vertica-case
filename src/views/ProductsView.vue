<script setup lang="ts">
import ProductList from '../components/ProductList.vue';
</script>

<template>
    <main class="flex flex-col sm:flex-row">
        <section class="max-w-[250px] p-8">
            <nav>
                <h3>Collections</h3>
                <ul>
                    <li>All</li>
                    <li>All</li>
                    <li>All</li>
                    <li>All</li>
                    <li>All</li>
                </ul>
            </nav>

            <h3>Filters</h3>
            <ul>
                <li>Filter 1</li>
                <li>Filter 2</li>
                <li>Filter 3</li>
                <li>Filter 4</li>
            </ul>

        </section>

        <section>
            <h2>Products</h2>
            <ProductList />
        </section>

    </main>
</template>
