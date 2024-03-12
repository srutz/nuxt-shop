<template>
    <div class="flex flex-col grow">
        <h1>Cart</h1>
        <div class="flex flex-col gap-2" v-for="(item) in cartItems" :id="item.product.id.toString()">
            <div class="flex items-center gap-2">
                <span>{{ item.quantity }}x</span>
                <span>{{ item.product.title }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { CartItem } from '../components/types';

const cartItems = inject<Ref<CartItem[]>>('items');

</script>
