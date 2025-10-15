import 'react-native-gesture-handler/jestSetup'

jest.mock('expo-font', () => ({
  loadAsync: jest.fn(() => Promise.resolve()),
  isLoaded: jest.fn(() => true),
}))

jest.mock('@expo/vector-icons', () => {
  const React = require('react')
  const { Text } = require('react-native')

  return {
    Ionicons: (props: any) => <Text {...props}>Ionicons</Text>,
    MaterialIcons: (props: any) => <Text {...props}>MaterialIcons</Text>,
    Feather: (props: any) => <Text {...props}>Feather</Text>,
    FontAwesome: (props: any) => <Text {...props}>FontAwesome</Text>,
  }
})

jest.mock('./src/shared/styled', () => {
  const RN = require('react-native')
  return {
    StyledText: (props: any) => <RN.Text {...props} />,
    StyledView: (props: any) => <RN.View {...props} />,
    StyledTextInput: (props: any) => <RN.TextInput {...props} />,
  }
})
