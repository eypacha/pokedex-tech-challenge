<template>
  <Dialog :open="open">
    <DialogContent class="overflow-hidden p-0">
      <div class="sr-only">
        <DialogTitle>
          {{ `Details of ${formatName(pokemonDetails.name)}` }}
        </DialogTitle>
        <DialogDescription>
          Here you can view detailed information about the selected Pokémon, including its image, weight, and height.
        </DialogDescription>
      </div>
      <button class="group absolute right-0 h-12 w-12 text-[26px] text-white" aria-label="Close dialog" @click="onClose">
        <fa icon="circle-xmark" class="transition-transform duration-150 group-hover:scale-110" />
      </button>
      <div class="bgImage h-[220px] bg-sky-300 flex justify-center items-center">
        <img v-if="pokemonDetails?.image" :src="pokemonDetails.image" class="h-[180px]" :alt="`Image of ${formatName(pokemonDetails.name)}`"/>
        <img v-else src="~/assets/img/question-mark.png" class="h-[180px]" :alt="`No image available for ${formatName(pokemonDetails.name)}`">
      </div>
      <div class="grid gap-4 px-8 py-4 text-lg">
        <div>
          <p class="border-b-2 leading-10">
            <strong>Name:</strong>
            {{ formatName(pokemonDetails.name) }}
          </p>
          <p class="border-b-2 leading-10">
            <strong>Weight:</strong> {{ pokemonDetails.weight }}
          </p>
          <p class="border-b-2 leading-10">
            <strong>Height:</strong> {{ pokemonDetails.height }}
          </p>
          <p class="border-b-2 leading-10">
            <strong>Types:</strong>
            {{ pokemonDetails.types.join(', ') }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <Button>Share to my friends</Button>
          <StarToggle aria-label="Mark as favorite" :checked="favoritesStore.favorites.has(pokemonDetails.name)" @change="onToggleFavorite" />
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { formatName } from '~/utils/formatters'

const props = defineProps<{
  open: boolean
  pokemonDetails: {
    name: string
    height: number
    weight: number
    types: string[]
    image: string
  } | null
}>()

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'toggle-favorite', name: string): void
}>()

const defaultPokemonDetails = {
  name: '',
  height: 0,
  weight: 0,
  types: [],
  image: ''
}

const pokemonDetails = ref(props.pokemonDetails || defaultPokemonDetails)

watch(() => props.pokemonDetails, (newDetails) => {
  if (newDetails) {
    pokemonDetails.value = newDetails
  } else {
    pokemonDetails.value = defaultPokemonDetails
  }
}, { immediate: true })

const favoritesStore = useFavoritesStore()

const onClose = () => {
  emit('close')
}

const onToggleFavorite = () => {
  if (props.pokemonDetails) {
    emit('toggle-favorite', props.pokemonDetails.name)
  }
}
</script>

<style scoped lang="css">
.bgImage {
  background-image: url('@/assets/img/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
