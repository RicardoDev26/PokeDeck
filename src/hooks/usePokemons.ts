import { useQuery } from '@tanstack/react-query'
import { getPokemons, getPokemonDetail } from '../../api/pokemonClient'

export const usePokemons = (offset: number) =>
  useQuery({
    queryKey: ['pokemons', offset],
    queryFn: async () => {
      const res = await getPokemons(offset)
      return res.data
    },
  })

export const usePokemonDetail = (name: string) =>
  useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => {
      const res = await getPokemonDetail(name)
      return res.data
    },
  })

