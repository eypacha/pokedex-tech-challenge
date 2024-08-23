<template>
    <div class="flex h-dvh flex-col items-center justify-center gap-10 p-8">
        <img
            src="/img/pikachu.webp"
            alt="Image of Pikachu waving"
            width="325"/>
        <div class="max-w-prose text-center">
            <h3 class="mb-8 text-2xl font-bold leading-6 text-grey-dark">
                Welcome to Pokédex
            </h3>
            <p class="mb-8 text-lg">
                The digital encyclopedia created by Professor Oak is an
                invaluable tool to Trainers in the Pokémon world.
            </p>
            <NuxtLink to="/list">
                <Button>Get started</Button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: 'welcome',
})
</script>
