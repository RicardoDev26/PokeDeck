import { useNavigation } from "@react-navigation/native";
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../shared/styled";
import CapsuleType from "./capsule/CapsuleType";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import ButtonFavorite from "./Buttons/ButtonFavorite";

interface Props{
    image: any
    name: string
    types: string[]
}

export default function SelectSearch({image, name, types}:Props){

    const navigation = useNavigation()
    const [loading, setLoading] = useState(false);

    const handleSelect = () => {
        setLoading(true);
        setTimeout(() => {
            navigation.navigate("PokemonScreen", {
                name,
                image,
                types,
            });
            setLoading(false);
        }, 300);
    };

    return(
        <StyledView>
            <StyledTouchableOpacity
                onPress={handleSelect}
                className="w-full h-[55px] border-solid border-[.5px] px-4 border-slate-100 items-center space-x-4 flex-row"
                disabled={loading}
            >
                <StyledView className="flex-row">
                    <StyledView className="w-9 h-9">
                        <StyledImage source={{ uri: image }} resizeMode="contain" className="w-full h-full" />
                    </StyledView>

                    <StyledView className="space-y-1 flex-1">
                        {loading ? (
                            <StyledView className="flex-1 justify-center items-start">
                                <ActivityIndicator size="small" color="#FF0000" />
                            </StyledView>
                        ) : (
                            <>
                                <StyledText>{name}</StyledText>
                                <StyledView className="flex-row space-x-2 flex-wrap">
                                    {types.map(t => (
                                        <StyledView key={t}>
                                            <CapsuleType  type={t} />
                                        </StyledView>
                                    ))}
                                </StyledView>
                            </>
                        )}
                    </StyledView>
                </StyledView>

                <StyledView className="absolute right-2">
                    <ButtonFavorite name={name} />
                </StyledView>
            </StyledTouchableOpacity>
        </StyledView>
    )
}
