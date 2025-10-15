import { useInfiniteQuery } from '@tanstack/react-query'
import { getPokemons, getPokemonDetail } from '../../api/pokemonClient'

export interface Pokemon {
  name: string
  id: number
  types: string[]
  image: string
}

export const usePokemonsInfinite = (limit = 20) => {
  return useInfiniteQuery<Pokemon[]>({
    queryKey: ['pokemons'],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await getPokemons(pageParam, limit)

      const pokemons = await Promise.all(
        (res.data.results ?? []).map(async (p: any, index: number) => {
          const detail = await getPokemonDetail(p.name)
          return {
            name: p.name,
            id: detail.data.id,
            types: detail.data.types.map((t: any) => t.type.name),
            image: detail.data.sprites.other['official-artwork'].front_default,
          }
        })
      )

      return pokemons
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < limit) return undefined
      return allPages.length * limit
    },
  })
}
