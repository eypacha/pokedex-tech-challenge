export function usePokemonList() {
    const { data: pokemons, error } = useFetch('https://pokeapi.co/api/v2/pokemon', {
      query: { limit: -1 },
      transform: (response: { results: { name: string; url: string }[] }) => {
        return response.results.map(pokemon => {
          const formatedName = pokemon.name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
  
          const id = pokemon.url.split('/').filter(Boolean).pop();
  
          return {
            name: formatedName,
            id: Number(id)
          };
        });
      }
    });
  
    return { pokemons, error };
  }
  