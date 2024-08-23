<template>
    <span class="flex h-dvh flex-col items-center pt-16">
        <h3 class="mb-2 mt-6 text-4xl font-bold text-grey-dark">Uh-oh!</h3>
        <p class="mb-6 text-xl font-medium">
            <strong>{{ error.statusCode }}</strong>
            <span v-if="error.message">: {{ error.message }}</span>
        </p>
        <Button @click="handleError">Go back home</Button>
    </span>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
    error: {
        type: Object as () => NuxtError,
        required: true,
        default: () => ({
            statusCode: 500,
            message: undefined,
        }),
    },
})

useSeoMeta({
  title: 'Uh-oh! | Pokédex'
})

const handleError = () => clearError({ redirect: '/' })
</script>
