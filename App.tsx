import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { StyledView } from './src/shared/styled'
import Navigation from './src/navigation/Navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { IconProvider } from './src/context/LogoContext'

const queryClient = new QueryClient()

function AppContent() {
  const insets = useSafeAreaInsets()

  return (
    <StyledView
      className="flex-1 bg-white"
      style={{ paddingTop: insets.top }}
    >
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <StatusBar style="auto" />
    </StyledView>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <IconProvider>
          <AppContent />
        </IconProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  )
}
