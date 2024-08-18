<template>
    <h2>Uh-oh!</h2>
    <p><strong>{{ error.statusCode }}: </strong>{{ error.message }}</p>
    <button @click="handleError">Go back home</button>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: {
    type: Object as () => NuxtError,
    required: true,
    default: () => ({
      statusCode: 500,
      message: undefined
    })
  }
})
const handleError = () => clearError({ redirect: '/'})
</script>