import { useEffect, useState } from "react"
import { StyledTextInput, StyledView, StyledText } from "../shared/styled"
import EvilIcons from "@expo/vector-icons/EvilIcons"
import { usePokemonSearch } from "../hooks/usePokemonSeach"
import SelectSearch from "./SelectSearch"
import { ActivityIndicator, ScrollView } from "react-native"

interface Props {
  query: string
  setQuery: (text: string) => void
}

function useDebounce(value: string, delay = 1000) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

export default function SearchBar({ query, setQuery }: Props) {
  const debouncedQuery = useDebounce(query, 500)
  const { results, loading } = usePokemonSearch(debouncedQuery)

  const shouldShowResults = debouncedQuery.length > 0

  return (
    <StyledView className="w-full">
      <StyledTextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Buscar Pokémon..."
        className="w-full h-[41px] px-5 bg-white border-solid border-[1px] border-black rounded-full"
      />
      <StyledView className="absolute top-[10px] right-[10px]">
        <EvilIcons name="search" size={24} color="black" />
      </StyledView>

      {shouldShowResults && (
        <StyledView
          className="absolute top-[50px] left-0 right-0 z-50 bg-white shadow-md"
          style={{ minHeight: 300, maxHeight: 400 }}
        >
          {loading ? (
            <StyledView className="py-5 items-center">
              <ActivityIndicator size="large" color="#FF0000" />
            </StyledView>
          ) : results.length > 0 ? (
            <ScrollView>
              {results.map((p) => (
                <SelectSearch
                  key={p.name}
                  image={p.image}
                  name={p.name}
                  types={p.types}
                />
              ))}
            </ScrollView>
          ) : (
            <StyledView className="py-3 px-4">
              <StyledText>No se encontraron Pokémon</StyledText>
            </StyledView>
          )}
        </StyledView>
      )}
    </StyledView>
  )
}
