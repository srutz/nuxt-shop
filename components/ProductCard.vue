<style scoped>
</style>
<template>

<div class="w-80 border rounded overflow-hidden shadow-lg grow flex flex-col mb-8 cursor-pointer hover:bg-gray-100">
    <NuxtLink :to="`/product/${product.id}`" class="grow">
        <div class="flex justify-center">
            <img class="w-full" style="width: auto; height: 120px;" :src="product.thumbnail" :alt="product.title" />
        </div>
        <div class="px-6 py-4 grow">
            <div class="font-bold text-xl mb-2">{{ product.title }}</div>
            <p class="text-gray-700 text-base min-h-32">{{ product.description }}
            </p>
        </div>
    </NuxtLink>
    <div class="px-6 pt-4 pb-2">
        <button @click="onBuy">
        Buy Now
        </button>
    </div>
</div>


</template>
<script setup lang="ts">

import type { Product, CartItem } from './types';

const props = defineProps<{
    product: Product
}>()

const product = reactive<Product>(props.product)


// mini cart
const cartItems = inject<Ref<CartItem[]>>('items');
const onBuy = () => {
    const item = cartItems?.value.find((item) => item.product.id === product.id)
    if (item) {
        item.quantity += 1
    } else {
        cartItems?.value.push({ product: product, quantity: 1 })
    }
}

</script>

