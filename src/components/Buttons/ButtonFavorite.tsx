import LottieView from "lottie-react-native";
import { StyledTouchableOpacity } from "../../shared/styled";
import { useFavorites } from "../../store/favoritesStore";
import { useEffect, useRef } from "react";


interface Props{
    name:string
}

export default function ButtonFavorite({name}:Props){

    const { favorites, toggleFavorite } = useFavorites()
    const animationRef = useRef<LottieView>(null)
    const isFav = favorites.includes(name)

    useEffect(() => {
        if (animationRef.current) {
            isFav ? animationRef.current.play(0, 60) : animationRef.current.play(60, 0)
        }
    }, [isFav])


    return(
            <StyledTouchableOpacity onPress={() => toggleFavorite(name)} >
                <LottieView
                    ref={animationRef}
                    source={require('../../../assets/animations/AnimationHeart2.json')}
                    autoPlay={false}
                    speed={3}
                    loop={false}
                    style={{ width: 34, height: 34, backgroundColor: 'transparent' }}
                  /> 
            </StyledTouchableOpacity>
    )
}