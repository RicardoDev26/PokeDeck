import { StyledText, StyledView } from "../shared/styled";

export default function SectionStatisticsBase({ name, value }: { name: string; value: number }) {
    const maxStat = 255;
    const percent = (value / maxStat) * 100

    return (
        <StyledView className="w-full my-2">
            <StyledView className="flex-row items-center justify-between mb-1">
                <StyledText className="text-gray-700 font-semibold">{name}</StyledText>
                <StyledText className="text-gray-800 font-bold">{value}</StyledText>
            </StyledView>

            <StyledView className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <StyledView
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${percent}%` }}
                />
            </StyledView>
        </StyledView>
    )
}
