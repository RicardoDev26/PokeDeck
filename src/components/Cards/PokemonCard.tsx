import { useEffect, useRef } from "react"
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../../shared/styled"
import LottieView from 'lottie-react-native'
import CapsuleType from "../capsule/CapsuleType"
import { useNavigation } from "@react-navigation/native"
import { useFavorites } from "../../store/favoritesStore"


interface Props{
    image: any
    name: string
    number: number
    type: string[]
}

export default function PokemonCard({ image, name, number, type }: Props){

    const { favorites, toggleFavorite } = useFavorites()
    const isFav = favorites.includes(name)
    const animationRef = useRef<LottieView>(null)
    const navigation = useNavigation()

    useEffect(() => {
        if (animationRef.current) {
            isFav ? animationRef.current.play(0, 60) : animationRef.current.play(60, 0)
        }
    }, [isFav])

    return(
        <StyledTouchableOpacity  onPress={() =>
            navigation.navigate("Home", {
                screen: "PokemonScreen",
                params: {
                    name,
                    number,
                    image,
                    type,
                },
            })
        }
        className="w-full overflow-hidden  aspect-[.8] border-solid border-[.7px] border-black rounded-xl">
            <StyledView className="w-full h-3/5">
                <StyledView className="w-full h-full bg-gray-200 items-center justify-center">
                    <StyledImage source={{ uri: image }} resizeMode="contain" className="w-[81%] h-[81%]" />
                </StyledView>    
            </StyledView>
            <StyledView className="w-full h-2/5 bg-white px-2">
                <StyledText
                 numberOfLines={1}
                 adjustsFontSizeToFit={true}
                 className="text-black text-lg font-light mb-2">{name}</StyledText>
                <StyledView className="flex-row space-x-2 flex-wrap">
                    {type.map(t => (
                        <StyledView key={t}>
                            <CapsuleType  type={t} />
                        </StyledView>
                    ))}
                </StyledView>
            </StyledView>

            <StyledTouchableOpacity onPress={() => toggleFavorite(name)} className="absolute left-0.5">
                <LottieView
                    ref={animationRef}
                    source={require('../../../assets/animations/AnimationHeart2.json')}
                    autoPlay={false}
                    speed={3}
                    loop={false}
                    style={{ width: 34, height: 34, backgroundColor: 'transparent' }}
                  /> 
            </StyledTouchableOpacity>

            <StyledText className="absolute right-2 top-2 text-gray-400 text-xs">
                #{number}
            </StyledText>
        </StyledTouchableOpacity>
    )
}