<template>
    <NuxtLink :to="props.to" class="flex-1">
        <Button :variant="getButtonVariant()" class="w-full">
            <fa v-if="props.icon" :icon="props.icon" class="mr-2" />
            <slot />
        </Button>
    </NuxtLink>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

interface Props {
    to: string
    icon?: string
}

const props = defineProps<Props>()

const getButtonVariant = () => {
    return route.path == props.to ? 'default' : 'outline'
}
</script>
