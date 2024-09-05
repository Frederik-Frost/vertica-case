<script setup lang="ts">
import { ref, defineProps, defineExpose } from 'vue';

const props = defineProps<{
    placeRight?: boolean;
    title?: string;
}>();

const closeDrawer = () => {
    isOpen.value = false;
}

const isOpen = ref(false);
const toggleDrawer = () => {
    isOpen.value = !isOpen.value;
}

defineExpose({
    closeDrawer
});

</script>
<template>
    <div class="">
        <button class="btn-icon relative" @click="toggleDrawer()">
            <slot name="icon"> </slot>
        </button>

        <transition name="fade-out">
            <div v-if="isOpen" class="fixed inset-0 bg-backdrop z-10" @click.self="closeDrawer"> </div>
        </transition>

        <transition :name="placeRight ? 'slide-right' : 'slide-left'">
            <main v-if="isOpen"
                class="fixed top-0 bg-white min-h-screen h-full w-full max-w-96 z-20 shadow-md p-6 overflow-y-auto"
                :class="placeRight ? 'right-0' : 'left-0'">
                <div class="h-full flex flex-col">
                    <header class="flex items-center justify-between pb-4"
                        :class="placeRight ? 'flex-row-reverse' : 'flex-row'">
                        <button class="btn-icon" @click="closeDrawer()">
                            <img src="./../assets/svg/xmark-solid.svg" alt="close button">
                        </button>
                        <h2 class="text-xl  tracking-wider opacity-75">{{ props.title }}</h2>
                    </header>
                    <div class="grow">
                        <slot name="content"> </slot>
                    </div>
                </div>
            </main>
        </transition>
    </div>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: transform 0.3s;
}

.slide-left-enter-from,
.slide-left-leave-to {
    transform: translateX(-100%);
}

.slide-right-enter-from,
.slide-right-leave-to {
    transform: translateX(100%);
}

.fade-out-enter-active,
.fade-out-leave-active {
    transition: opacity 0.3s;
}

.fade-out-leave-active {
    transition-delay: 0.1s;
}

.fade-out-enter-from,
.fade-out-leave-to {
    opacity: 0;
}
</style>
