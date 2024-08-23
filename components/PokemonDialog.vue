<template>
  <Toaster />
  <Dialog :open="open">
    <DialogContent class="overflow-hidden p-0">
      <div class="sr-only">
        <DialogTitle>
          {{ `Details of ${formattedName}` }}
        </DialogTitle>
        <DialogDescription>
          Here you can view detailed information about the selected Pokémon, including its image, weight, and height.
        </DialogDescription>
      </div>
      <button class="group absolute right-0 h-12 w-12 text-[26px] text-white" aria-label="Close dialog" @click="onClose">
        <fa icon="circle-xmark" class="transition-transform duration-150 group-hover:scale-110" />
      </button>
      <div class="bgImage h-[220px] bg-sky-300 flex justify-center items-center">
        <img
          :src="pokemonDetails.image ?? '/img/question-mark.webp'"
          :alt="pokemonDetails.image ? `Image of ${formattedName}` : `No image available for ${formattedName}`"
          class="h-[180px] transition-opacity duration-700 ease-in-out opacity-0"
          @load="(event) => (event.target as HTMLImageElement)?.classList.remove('opacity-0')"
        />
      </div>
      <div class="grid gap-4 px-8 py-4 text-lg">
        <div>
          <p class="border-b-2 leading-10">
            <strong>Name:</strong>
            {{ formattedName }}
          </p>
          <p class="border-b-2 leading-10">
            <strong>Weight:</strong> {{ pokemonDetails.weight }}
          </p>
          <p class="border-b-2 leading-10">
            <strong>Height:</strong> {{ pokemonDetails.height }}
          </p>
          <p class="border-b-2 leading-10">
            <strong>{{ pokemonDetails.types.length == 1 ? 'Type' : 'Types' }}:</strong>
            {{ pokemonDetails.types.join(', ') }}
          </p>
        </div>
        <div class="flex items-center justify-between">
          <Button @click="copyPokemonDetails">Share to my friends</Button>
          <StarToggle aria-label="Mark as favorite" :checked="favoritesStore.favorites.has(pokemonDetails.name)" @change="onToggleFavorite" />
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/toast/use-toast'
import { Toaster } from '@/components/ui/toast'
import { formatName } from '~/utils'

const { toast } = useToast()

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

const defaultPokemonDetails = {
  name: '',
  height: 0,
  weight: 0,
  types: [],
  image: ''
}

const emit = defineEmits<{
  (event: 'close'): void
  (event: 'toggle-favorite', name: string): void
}>()


const pokemonDetails = ref(props.pokemonDetails || defaultPokemonDetails)

const formattedName = computed(() => formatName(pokemonDetails.value.name));

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

const copyPokemonDetails = async () => {

  const TOAST_DURATION = 3000;
  if (pokemonDetails.value) {
    const formatTypes = (types: string[]) => types.length > 1 ? `"${types.join(', ')}"` : types[0];

    const headers = `Name,Height,Weight,Types`;
    const values = `${formattedName.value},${pokemonDetails.value.height},${pokemonDetails.value.weight},${formatTypes(pokemonDetails.value.types)}`;
    const details = `${headers}\n${values}`;

    try {
      await navigator.clipboard.writeText(details)
      toast({
        description: 'Pokemon details copied to clipboard!',
        duration: TOAST_DURATION
      });
    } catch (err) {
      const errorMessage = (err as Error).message;
      console.error('Failed to copy text: ', errorMessage)
      toast({
        description: 'Uh-oh! Failed to copy Pokemon details',
        variant: 'primary',
        duration: TOAST_DURATION,
      });
    }
  }
}
</script>