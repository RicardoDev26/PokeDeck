import React, { useEffect, useContext } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { StyledScrollView, StyledText, StyledTouchableOpacity, StyledView } from "../shared/styled"
import Ionicons from '@expo/vector-icons/Ionicons'
import CardStatistics from "../components/Cards/CardStatistics"
import { usePokemonDetail } from '../hooks/usePokemons'
import { IconContext } from "../context/LogoContext"

export default function PokemonScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const { name } = route.params as any
  const { data, isLoading } = usePokemonDetail(name)
  const { setIconUrl } = useContext(IconContext)

  useEffect(() => {
    if (data?.sprites?.other['official-artwork'].front_default) {
      setIconUrl(data.sprites.other['official-artwork'].front_default)
    }

    return () => setIconUrl(require("../../assets/pokemon.png"))
  }, [data])

  if (isLoading) return <StyledText>Cargando...</StyledText>

  const image = data.sprites.other['official-artwork'].front_default
  const types = data.types.map((t: any) => t.type.name)
  const stats = Object.fromEntries(data.stats.map((s: any) => [s.stat.name, s.base_stat]))

  return (
    <StyledScrollView className="w-full h-full bg-white px-4 pt-5">
      <StyledTouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex-row space-x-2 items-center ml-2"
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <StyledText>Volver</StyledText>
      </StyledTouchableOpacity>

      <StyledView className="mt-11">
        <CardStatistics
          image={image}
          name={data.name}
          height={data.height}
          weight={data.weight}
          types={types}
          stats={stats}
        />
      </StyledView>    
    </StyledScrollView>
  )
}
