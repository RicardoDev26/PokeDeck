import React, { useState } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import { StyledView } from '../shared/styled'
import SearchBar from '../components/SearchBar'
import PokemonCard from '../components/Cards/PokemonCard'
import { usePokemonsInfinite, Pokemon } from '../hooks/usePokemonInfinite'
import EffectFadeScroll from '../components/Effects/EffectFadeScroll'
  

export default function Home() {
  const [query, setQuery] = useState("")
  const { data, fetchNextPage, isFetchingNextPage } = usePokemonsInfinite(20)

  return (
    <StyledView className="w-full h-full bg-white px-5">
      <StyledView className="mt-10 px-5">
        <SearchBar query={query} setQuery={setQuery} />

      </StyledView>
        <StyledView className='absolute w-full z-10 top-[81px] left-4 items-center justify-center'>
          <EffectFadeScroll height={60} />
        </StyledView>

      <FlatList
        data={data?.pages?.flat() ?? []}
        keyExtractor={(item: Pokemon) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 30 }}
        contentContainerStyle={{ paddingVertical:  55}}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <StyledView className="py-5 items-center">
              <ActivityIndicator size="large" color="#FF0000" />
            </StyledView>
          ) : null
        }
        renderItem={({ item }: { item: Pokemon }) => (
          <StyledView style={{ flex: 1, marginHorizontal: 8 }}>
            <PokemonCard
              name={item.name}
              number={item.id}
              type={item.types}
              image={item.image}
            />
          </StyledView>
        )}
      />
    </StyledView>
  )
}
