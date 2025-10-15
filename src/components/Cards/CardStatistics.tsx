import { StyledImage, StyledText, StyledView } from "../../shared/styled"
import CapsuleType from "../capsule/CapsuleType"
import CardHeight from "./CardHeight"
import SectionStatisticsBase from "../SectionStatisticsBase"
import ButtonFavorite from "../Buttons/ButtonFavorite"


interface Props{
    image: any
    name: string
    height: number
    weight: number
    types: string[]
    stats: Record<string, number>
}

export default function CardStatistics({ image, name, height, weight, types, stats }: Props){
    const totalStats = Object.values(stats).reduce((acc, val) => acc + val, 0)

    return(
        <StyledView className="w-full bg-white overflow-hidden rounded-lg border-solid border-[.6px] border-gray-400 mb-16">
                <StyledView className="w-full h-[281px] items-center justify-center bg-gray-200">
                    <StyledImage source={{ uri: image }} resizeMode="contain" className="w-[81%] h-[81%]" />
                </StyledView>    


                <StyledView className="w-full px-4 mt-10">
                    <StyledView className="flex-row justify-between items-center">
                        <StyledView className="space-y-2">
                            <StyledText className="text-lg">{name}</StyledText>
                            <StyledView className="flex-row space-x-2 flex-wrap">
                                {types.map(t => (
                                    <StyledView  key={t}>
                                        <CapsuleType type={t} />
                                    </StyledView>
                                ))}
                            </StyledView>
                        </StyledView>

                        <ButtonFavorite name={name} />            
                    </StyledView>

                    <StyledView className="w-full flex-row mt-10 justify-between px-2">
                        <StyledView className="flex-1 mx-2">
                            <CardHeight title="Altura" text={`${height} m`} />
                        </StyledView>
                        <StyledView className="flex-1 mx-2">
                            <CardHeight title="Peso" text={`${weight} kg`} />
                        </StyledView>
                    </StyledView>

                    <StyledView className="mt-11">
                        <StyledText className="text-lg mb-5">Estadisticas Base</StyledText>
                        {Object.entries(stats).map(([key, value]) => (
                            <SectionStatisticsBase key={key} name={key} value={value} />
                        ))}
                    </StyledView>

                    <StyledView className="mt-3 border-t-[1px] border-solid border-gray-400 p-5 justify-center items-center">
                        <StyledText>Total: {totalStats}</StyledText>
                    </StyledView>
                </StyledView>
        </StyledView>
    )
}