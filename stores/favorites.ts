export const useFavoritesStore = defineStore('favorites', {
    state: () => {
      return {
        favorites:  new Set<number>()
      }
    },
    actions: {
      toggleFavorite(id: number) {
        if (this.favorites.has(id)) {
          this.favorites.delete(id)
        } else {
          this.favorites.add(id)
        }
      }
    }
  })

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useFavoritesStore, import.meta.hot))
}