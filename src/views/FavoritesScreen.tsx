import React from 'react'
import { FlatList, Dimensions } from 'react-native'
import { StyledText, StyledView } from '../shared/styled'
import PokemonCard from '../components/Cards/PokemonCard'
import { useFavoritePokemons } from '../hooks/useFavoritesPokemons'
import EffectFadeScroll from '../components/Effects/EffectFadeScroll'

const { width } = Dimensions.get('window')

export default function FavoritesScreen() {
  const { favoritePokemons, isLoading, isError } = useFavoritePokemons()

  if (isLoading) {
    return (
      <StyledView className="flex-1 justify-center items-center bg-white">
        <StyledText>Cargando favoritos...</StyledText>
      </StyledView>
    )
  }

  if (isError) {
    return (
      <StyledView className="flex-1 justify-center items-center bg-white">
        <StyledText>Error cargando favoritos</StyledText>
      </StyledView>
    )
  }

  if (favoritePokemons.length === 0) {
    return (
      <StyledView className="flex-1 justify-center items-center bg-white px-10">
        <StyledText>No tienes Pokémon favoritos aún</StyledText>
      </StyledView>
    )
  }

  const SPACING = 12
  const CONTAINER_PADDING = 20
  const CARD_WIDTH = (width - CONTAINER_PADDING * 2 - SPACING) / 2

  return (
    <StyledView className="flex-1 px-5 bg-white">
      <StyledView className='absolute w-full z-10 left-4 items-center justify-center'>
        <EffectFadeScroll height={31} />
      </StyledView>
      <FlatList
        data={favoritePokemons}
        keyExtractor={(item) => item.name}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 12,
        }}
        contentContainerStyle={{
          paddingVertical: 15,
          marginTop: 21,
        }}
        renderItem={({ item }) => (
          <StyledView
            style={{
              width: CARD_WIDTH,
            }}
          >
            <PokemonCard
              name={item.name}
              number={item.number}
              type={item.types}
              image={item.image}
            />
          </StyledView>
        )}
      />
    </StyledView>
  )
}
