import React, { createContext, useState, ReactNode } from "react"

interface IconContextType {
  iconUrl: string
  setIconUrl: (url: string) => void
}

export const IconContext = createContext<IconContextType>({
  iconUrl: require("../../assets/pokemon.png"),
  setIconUrl: () => {},
})

interface Props {
  children: ReactNode
}

export const IconProvider = ({ children }: Props) => {
  const [iconUrl, setIconUrl] = useState(require("../../assets/pokemon.png"))

  return (
    <IconContext.Provider value={{ iconUrl, setIconUrl }}>
      {children}
    </IconContext.Provider>
  )
}
