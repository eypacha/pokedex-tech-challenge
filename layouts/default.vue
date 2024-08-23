<template>
    <div class="flex h-dvh flex-col">
        <div class="container flex max-w-screen-sm flex-1 flex-col gap-5 overflow-y-hidden py-8">
            <slot />
        </div>
        <div class="mt-auto bg-white shadow-top">
            <div class="container max-w-screen-sm px-7 py-4">
                <div class="flex w-full gap-5">
                    <NavButton to="/list" icon="list">All</NavButton>
                    <NavButton to="/favorites" icon="star">Favorites</NavButton>
                </div>
            </div>
        </div>
    </div>
</template>
