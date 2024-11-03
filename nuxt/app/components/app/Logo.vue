<script lang="ts" setup>
const localePath = useLocalePath()
</script>
<template>
  <NuxtLink :to="localePath('/')" class="font-black text-2xl leading-tight tracking-tight">
    <span class="text-gray-700 dark:text-gray-100">Laravel</span>
    <span class="text-primary-500">Nuxt</span>
  </NuxtLink>
</template>
