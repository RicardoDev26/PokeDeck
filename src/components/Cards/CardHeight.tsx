import { StyledText, StyledView } from "../../shared/styled";

interface Props{
    title: string
    text: string
}

export default function CardHeight({title, text}:Props){
    return(
        <StyledView className="w-full h-[91px] border-solid border-[.5px] border-slate-300 rounded-lg px-4 py-2 justify-around">
            <StyledText>{title}</StyledText>
            <StyledText>{text}</StyledText>
        </StyledView>
    )
}