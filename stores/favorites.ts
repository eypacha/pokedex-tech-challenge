export const useFavoritesStore = defineStore('favorites', {
    state: () => {
      return {
        favorites:  new Set<string>()
      }
    },
    actions: {
      toggleFavorite(name: string) {
        if (this.favorites.has(name)) {
          this.favorites.delete(name)
        } else {
          this.favorites.add(name)
        }
      }
    }
  })

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useFavoritesStore, import.meta.hot))
}