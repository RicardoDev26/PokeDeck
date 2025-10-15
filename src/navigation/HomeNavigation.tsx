import { createStackNavigator } from '@react-navigation/stack'
import { StyledView } from '../shared/styled'
import Home from '../views/Home'
import PokemonScreen from '../views/PokemonScreen'


const Stack = createStackNavigator()
export default function HomeNavigation(){
    return(
        <StyledView className='flex-1 bg-white'>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='HomeScreen' component={Home} />
                <Stack.Screen name='PokemonScreen' component={PokemonScreen}  />
            </Stack.Navigator>
        </StyledView>
    )
}

