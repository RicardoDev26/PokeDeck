import React, { useRef, useEffect, useContext } from "react"
import { Animated, TouchableOpacity } from "react-native"
import { StyledImage, StyledView } from "../../shared/styled"
import Feather from "@expo/vector-icons/Feather"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { IconContext } from "../../context/LogoContext"
import TextLogo from "../TextLogo"

export default function MenuNavigation({ state, navigation }) {
  const translateX = useRef(new Animated.Value(0)).current
  const selectedIndex = state.index

  const { iconUrl } = useContext(IconContext)

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: selectedIndex * 61,
      useNativeDriver: true,
      stiffness: 200,
      damping: 20,
    }).start()
  }, [selectedIndex])

  return (
    <StyledView className="w-full flex-row justify-between ">
      <StyledView className="flex-row-reverse items-center px-8">
        <TextLogo />
        <StyledView className="w-10 h-10">
          <StyledImage
            className="w-full h-full"
            resizeMode="contain"
            source={typeof iconUrl === "string" ? { uri: iconUrl } : iconUrl}
          />
        </StyledView>
      </StyledView>

      <StyledView
        className="w-[122px] z-10 h-10 bg-white rounded-full flex-row self-end mt-2 mr-5"
        style={{
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Animated.View
          className="absolute h-full w-1/2 bg-red-500 rounded-full"
          style={{
            transform: [{ translateX }],
          }}
        />

        <TouchableOpacity
          className="flex-1 items-center justify-center"
          onPress={() => navigation.navigate("Home")}
        >
          <Feather
            name="home"
            size={24}
            color={selectedIndex === 0 ? "white" : "black"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-1 items-center justify-center"
          onPress={() => navigation.navigate("Favorites")}
        >
          {selectedIndex === 1 ? (
            <MaterialIcons name="favorite" size={24} color="white" />
          ) : (
            <MaterialIcons name="favorite-border" size={24} color="black" />
          )}
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  )
}
