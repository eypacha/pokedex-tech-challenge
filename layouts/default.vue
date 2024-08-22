<template>
    <div class="flex h-dvh flex-col">
        <div class="container h-full max-w-screen-sm">
            <slot class="mx-auto" />
        </div>
        <div class="shadow-top">
            <div class="container flex max-w-screen-sm gap-5 p-4">
                <div class="flex w-full gap-5">
                    <NuxtLink to="/list" class="flex-1">
                        <Button
                            :variant="getButtonVariant('/list')"
                            class="w-full"
                        >
                            <fa icon="list" class="mr-2" /> All
                        </Button>
                    </NuxtLink>
                    <NuxtLink to="/favorites" class="flex-1">
                        <Button
                            :variant="getButtonVariant('/favorites')"
                            class="w-full"
                        >
                            <fa icon="star" class="mr-2" /> Favorites
                        </Button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

const getButtonVariant = (routePath: string) => {
    return route.path == routePath ? 'default' : 'outline'
}
</script>
