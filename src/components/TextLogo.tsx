import React from "react"
import { StyledText, StyledView, StyledImage } from "../shared/styled"

export default function TextLogo() {
  return (
    <StyledView className="flex-row items-center self-end">
      <StyledText className="text-2xl font-light">P</StyledText>
      <StyledImage
        source={require("../../assets/pokebola.png")}
        className="w-4 h-4 self-end mb-[5px]"
        resizeMode="contain"
      />
      <StyledText className="text-2xl font-light">keDeck</StyledText>
    </StyledView>
  )
}
