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
    <DrawerBase ref="drawerComponent" placeRight title="Cart">
        <template v-slot:icon>
            <img src="./../assets/svg/cart-shopping-solid.svg" alt="Cart">
        </template>
        <template v-slot:content>
            <div>
                Nothing in cart
            </div>
        </template>
    </DrawerBase>
</template>