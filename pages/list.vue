<template>
  <transition name="fade">
    <PokeLoading v-if="isLoading" />
  </transition>
  <SearchBar v-model:searchQuery="searchQuery" />
  <ScrollArea class="flex-1">
    <PokemonList
    :filtered-pokemons="filteredPokemons"
    :show-details="showDetails"
    @toggle-favorite="toggleFavorite"
  />
  </ScrollArea>
  <PokemonDialog
    :open="showDialog"
    :pokemon-details="pokemonDetails"
    @close="showDialog = false"
    @toggle-favorite="toggleFavorite"
  />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ScrollArea from '~/components/ui/scroll-area/ScrollArea.vue'
import { preloadImage } from '~/utils'

const { status, pokemons } = usePokemonList()
const searchQuery = ref('')
const showDialog = ref(false)

interface PokemonDetails {
  name: string
  height: number
  weight: number
  types: string[]
  image: string
}

const pokemonDetails = ref<PokemonDetails | null>(null)

const route = useRoute()

const filteredPokemons = computed(() => {
  const allPokemons = pokemons.value ?? []

  const filteredByRoute =
    route.path === '/favorites'
      ? allPokemons.filter((pokemon) =>
        favoritesStore.favorites.has(pokemon.name)
      )
      : allPokemons

  return filteredByRoute.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const isInitialized = ref(false)

const favoritesStore = useFavoritesStore()

onMounted(async () => {
  try {
    await preloadImage(`/img/background.webp`)
  } catch (error) {
    console.warn('Error precargando la imagen:', error)
  }

  isInitialized.value = true
})

const toggleFavorite = (name: string) => {
  favoritesStore.toggleFavorite(name)
}

const showDetails = async (name: string) => {
  const details = await usePokemonDetails(name);
  if (details !== null) {
    pokemonDetails.value = details;
    showDialog.value = true;
  }
}

const isLoading = computed(() => status.value === 'pending' || !isInitialized.value)

useSeoMeta({
  title: route.path === '/favorites' ? 'My favorites' : 'All pokemons'
})
</script>

<style scoped>
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}
</style>