import { useQueries } from '@tanstack/react-query'
import { useFavorites } from '../store/favoritesStore'
import { getPokemonDetail } from '../../api/pokemonClient'
import { useEffect } from 'react'

export const useFavoritePokemons = () => {
  const { favorites, loadFavorites } = useFavorites()

  useEffect(() => {
    loadFavorites()
  }, [])

  const favoriteQueries = useQueries({
    queries: favorites.map(name => ({
      queryKey: ['pokemon', name],
      queryFn: () => getPokemonDetail(name).then(res => res.data),
      staleTime: Infinity,
    })),
  })

  const favoritePokemons = favoriteQueries
    .filter(q => q.data)
    .map(q => ({
      name: q.data.name,
      number: q.data.id,
      image: q.data.sprites.other['official-artwork'].front_default,
      types: q.data.types.map((t: any) => t.type.name),
    }))

  const isLoading = favoriteQueries.some(q => q.isLoading)
  const isError = favoriteQueries.some(q => q.isError)

  return { favoritePokemons, isLoading, isError }
}
