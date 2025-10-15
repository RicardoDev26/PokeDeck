import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../../shared/styled"
import CapsuleType from "../capsule/CapsuleType"
import { useNavigation } from "@react-navigation/native"
import ButtonFavorite from "../Buttons/ButtonFavorite"


interface Props{
    image: any
    name: string
    number: number
    type: string[]
}

export default function PokemonCard({ image, name, number, type }: Props){

    const navigation = useNavigation()

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

            <StyledView className="absolute left-0.5">
                <ButtonFavorite name={name} />
            </StyledView>

            <StyledText className="absolute right-2 top-2 text-gray-400 text-xs">
                #{number}
            </StyledText>
        </StyledTouchableOpacity>
    )
}