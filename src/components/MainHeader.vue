<script setup lang="ts">
import DrawerNav from './DrawerNav.vue';
import DrawerCart from './DrawerCart.vue';
</script>

<template>
    <header class="flex justify-between p-4">
        <div class="flex gap-3">
            <DrawerNav />
            <RouterLink to="/">
                <img src="./../assets/svg/logo.svg" alt="logo" class="w-12 h-12" />
            </RouterLink>
        </div>
        <DrawerCart />
    </header>
</template>