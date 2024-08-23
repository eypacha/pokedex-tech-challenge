<template>
    <div class="flex flex-col gap-3">
      <div v-if="filteredPokemons.length === 0" class="text-center">
        <h3 class="mb-2 mt-6 text-4xl font-bold text-grey-dark">
          Uh-oh!
        </h3>
        <p class="text-xl font-medium">
          You look lost on your journey!
        </p>
      </div>
      <div
        v-for="pokemon in filteredPokemons" v-else :key="pokemon.name"
        class="flex h-[60px] cursor-pointer items-center justify-between rounded bg-white pl-5 pr-3 text-xl font-medium text-grey-dark"
        @click="showDetails(pokemon.name)">
        <div class="overflow-hidden text-ellipsis whitespace-nowrap">{{ formatName(pokemon.name) }}</div>
        <StarToggle aria-label="Mark as favorite" :checked="favoritesStore.favorites.has(pokemon.name)" @change="toggleFavorite(pokemon.name)" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { formatName } from '~/utils/formatters'
  
  interface Pokemon {
    name: string
  }
  
defineProps<{
    filteredPokemons: Pokemon[]
    showDetails: (name: string) => void
  }>();
  
  const emit = defineEmits<{
    (event: 'toggleFavorite', name: string): void
  }>();
  
  const favoritesStore = useFavoritesStore()
  
  const toggleFavorite = (name: string) => {
    emit('toggleFavorite', name)
  }
  </script>
  