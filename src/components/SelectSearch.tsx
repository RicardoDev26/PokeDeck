import { useNavigation } from "@react-navigation/native";
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../shared/styled";
import CapsuleType from "./capsule/CapsuleType";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useFavorites } from "../store/favoritesStore";
import LottieView from "lottie-react-native";

interface Props{
    image: any
    name: string
    types: string[]
}

export default function SelectSearch({image, name, types}:Props){
    const { favorites, toggleFavorite } = useFavorites()
    const isFav = favorites.includes(name)
    const animationRef = useRef<LottieView>(null)

    useEffect(() => {
        if (animationRef.current) {
            isFav ? animationRef.current.play(0, 60) : animationRef.current.play(60, 0)
        }
    }, [isFav])

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

                <StyledTouchableOpacity onPress={() => toggleFavorite(name)} className="absolute right-2">
                    <LottieView
                        ref={animationRef}
                        source={require('../../assets/animations/AnimationHeart2.json')}
                        autoPlay={false}
                        speed={3}
                        loop={false}
                        style={{ width: 34, height: 34, backgroundColor: 'transparent' }}
                        /> 
                </StyledTouchableOpacity>
            </StyledTouchableOpacity>
        </StyledView>
    )
}
