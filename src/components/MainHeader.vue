<script setup lang="ts">
import DrawerNav from './DrawerNav.vue';
import DrawerCart from './DrawerCart.vue';
</script>

<template>
    <header class="flex justify-between items-center p-4">
        <DrawerNav />
        <RouterLink to="/">
            <img src="./../assets/svg/logo.svg" alt="logo" class="w-20 md:w-24 " />
        </RouterLink>
        <DrawerCart />
    </header>
</template>