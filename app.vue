<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script lang="ts" setup>
import '~/assets/style.css'

import type { CartItem } from './components/types'

const cartItems = ref<CartItem[]>([])

provide('items', cartItems)


</script>
