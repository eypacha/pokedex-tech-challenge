<template>
  <button
    class="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-background transition-colors"
    :class="checked ? 'text-accent' : 'text-grey-light'" @click="toggleStar">
    <fa icon="star" class="scale-100 transform transition-transform duration-150 group-active:scale-90" />
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['change'])

const toggleStar = () => {
  emit('change', !props.checked)
}
</script>
