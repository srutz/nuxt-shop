<template>
    <div class="flex items-center bg-gray-800 p-4">
        <h1 class="text-2xl text-gray-400 font-semibold select-none">My App</h1>
        <div class="flex gap-2 ml-8">
            <NuxtLink to="/" class="text-white font-semibold">Home</NuxtLink>
            <NuxtLink to="/about" class="text-white font-semibold">About</NuxtLink>
        </div>
        <div class="flex-grow"></div>
        <div class="flex gap-2">
            <NuxtLink to="/cart" class="text-white font-semibold">Cart</NuxtLink>
            <span class="text-white font-semibold">{{ getCartQuantity() }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">

import type { Ref } from 'vue';
import { inject } from 'vue';
import type { CartItem } from './types';

const cartItems = inject<Ref<CartItem[]>>('items');

const getCartQuantity = () => {
    return cartItems?.value.reduce((acc, item) => acc + item.quantity, 0)
}

</script>