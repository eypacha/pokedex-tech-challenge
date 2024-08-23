export function usePokemonList() {
    const { status, data: pokemons, error } = useFetch('https://pokeapi.co/api/v2/pokemon/', {
      query: { limit: 9999 },
      transform: (response: { results: { name: string }[] }) => 
        response.results.map(({ name }) => ({ name }))
    });
  
    return { status, pokemons, error };
  }