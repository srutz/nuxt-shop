<template>
  <div class="flex flex-col grow">
    <MenuBar></MenuBar>
    <div class="p-4 h-2 grow overflow-y-auto">
     <slot></slot>
    </div>
  </div>
</template>