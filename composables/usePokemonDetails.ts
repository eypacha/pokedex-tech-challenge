interface PokemonDetails {
  height: number;
  weight: number;
  types: { slot: number; type: { name: string; url: string } }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string; // URL del sprite de official artwork
      }
    }
  }
}
export async function usePokemonDetails(name: string) {
  const response = await $fetch<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${name}`)

  return {
    name: name,
    height: response.height,
    weight: response.weight,
    types: response.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)),
    image: response.sprites.other['official-artwork'].front_default
  }
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}