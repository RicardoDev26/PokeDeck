import React from "react"
import { StyledView } from "../shared/styled"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import MenuNavigation from "../components/menu/MenuNavigation"
import HomeNavigation from "./HomeNavigation"
import FavoritesScreen from "../views/FavoritesScreen"

const Tab = createMaterialTopTabNavigator()

export default function Navigation() {
  return (
    <StyledView className="flex-1 bg-white">
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <MenuNavigation {...props} />}
        screenOptions={{
          swipeEnabled: true,
        }}
      >
        <Tab.Screen name="Home" component={HomeNavigation} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </StyledView>
  )
}
