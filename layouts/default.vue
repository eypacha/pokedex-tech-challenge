<template>
    <div class="flex h-dvh flex-col">
        <div class="container h-full max-w-screen-sm">
            <slot class="mx-auto" />
        </div>
        <div class="shadow-top">
            <div class="container max-w-screen-sm p-4">
                <div class="flex w-full gap-5">
                    <NavButton to="/list" icon="list">All</NavButton>
                    <NavButton to="/favorites" icon="star">Favorites</NavButton>
                </div>
            </div>
        </div>
    </div>
</template>
