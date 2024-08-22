<template>
  <div class="relative w-full items-center">
    <Input v-model="searchQuery" type="text" placeholder="Search" class="pl-9" />
    <span class="absolute inset-y-0 start-0 flex items-center justify-center px-3 text-grey-light">
      <fa icon="magnifying-glass" />
    </span>
  </div>
  <ScrollArea class="flex-1">
    <div class="flex flex-col gap-3">
      <div
        v-for="pokemon in filteredPokemons" :key="pokemon.id"
        class="flex h-[60px] items-center justify-between rounded bg-white pl-5 pr-3 text-xl font-medium text-grey-dark">
        <div>{{ pokemon.name }}</div>
        <StarToggle :checked="favorites.includes(pokemon.id)" @change="toggleFavorite(pokemon.id)" />
      </div>
    </div>
  </ScrollArea>
</template>

<script setup lang="ts">
import ScrollArea from '~/components/ui/scroll-area/ScrollArea.vue'

const { pokemons } = usePokemonList()
const searchQuery = ref('')

const filteredPokemons = computed(() => {
  return (pokemons.value ?? []).filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const favorites = ref<number[]>([])

const toggleFavorite = (id: number) => {
  if (favorites.value.includes(id)) {
    favorites.value = favorites.value.filter((FavId) => FavId !== id)
  } else {
    favorites.value.push(id)
  }
}
</script>
