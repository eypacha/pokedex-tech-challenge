<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
const AppTitle = 'Pokédex'
const AppDescription = 'The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${AppTitle}` : AppTitle;
  },
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
    { rel: 'manifest', href: '/site.webmanifest'},
  ]
})


useSeoMeta({
  ogTitle: AppTitle,
  description: AppDescription,
  ogDescription: AppDescription,
  ogImage: '/og_image.png',
  twitterCard: 'summary_large_image',
})
</script>