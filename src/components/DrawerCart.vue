<script setup lang="ts">
import DrawerBase from './DrawerBase.vue';
import { computed } from 'vue';
import { useCartStore } from './../stores/cart';
import CartProduct from './CartProduct.vue';

const cartStore = useCartStore();

const cartProducts = computed(() => cartStore.items);
const cartList = computed(() => new Set(cartProducts.value))

const quantity = (id: number) => {
    const ids: number[] = cartProducts.value.map((product) => product.id)
    return ids.filter((item) => item === id).length
}

const price = computed(() => {
    return cartProducts.value.reduce((acc, product) => acc + product.price, 0).toFixed(2)
})

const removeFromCart = (id: number) => {
    cartStore.removeProductById(id);
}

</script>
<template>
    <DrawerBase placeRight title="Cart">
        <template v-slot:icon>
            <div v-if="cartProducts?.length"
                class="absolute -top-2 -left-2 h-5 w-5 shadow-md bg-primary text-xs text-white flex items-center justify-center p-1 rounded-full ">
                {{ cartProducts.length }}</div>
            <img src="./../assets/svg/cart-shopping-solid.svg" alt="Cart">
        </template>
        <template v-slot:content>
            <div class="flex flex-col gap-4 h-full pb-8">
                <ul>
                    <CartProduct v-for="product in cartList" :key="product.id" :product="product"
                        :quantity="quantity(product.id)" @onRemoveProduct="removeFromCart" />
                </ul>

                <div class="flex flex-row justify-between grow pt-8">
                    <span class="text-sm opacity-50">Total</span>
                    <span class="font-medium">$ {{ price }}</span>
                </div>
                <button class="btn-primary justify-self-end">Proceed to Checkout</button>

            </div>

        </template>
    </DrawerBase>
</template>