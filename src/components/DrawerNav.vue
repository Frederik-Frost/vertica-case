<script setup lang="ts">
import DrawerBase from './DrawerBase.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const drawerComponent = ref(null);
const router = useRouter();
const onRouteChange = (path: string) => {
    drawerComponent?.value?.closeDrawer()
    router.push(path);
}
</script>
<template>
    <DrawerBase ref="drawerComponent">
        <template v-slot:icon>
            <img src="./../assets/svg/bars-solid.svg" alt="Main menu">
        </template>
        <template v-slot:content>
            <nav class="flex flex-col gap-3 text-xl items-start">
                <button @click="onRouteChange('/')">Whats new</button>
                <button @click="onRouteChange('/products')">Products</button>
            </nav>
        </template>
    </DrawerBase>
</template>