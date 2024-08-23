<template>
  <div class="relative w-full items-center">
    <Input v-model="searchQuery" type="text" placeholder="Search" class="pl-9" />
    <span class="absolute inset-y-0 start-0 flex items-center justify-center px-3 text-grey-light">
      <fa icon="magnifying-glass" />
    </span>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('')

const emit = defineEmits(['update:searchQuery'])
watch(searchQuery, (newQuery) => emit('update:searchQuery', newQuery))
</script>
