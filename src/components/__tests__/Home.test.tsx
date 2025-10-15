import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Home from '../../views/Home'


jest.mock('../../shared/styled', () => {
  const RN = require('react-native')
  return {
    StyledView: (props: any) => <RN.View {...props} />,
  }
})

jest.mock('../SearchBar', () => {
  const React = require('react')
  const { TextInput } = require('react-native')
  return ({ query, setQuery }: any) => (
    <TextInput
      placeholder="Buscar Pokémon..."
      value={query}
      onChangeText={setQuery}
      testID="search-input"
    />
  )
})

jest.mock('../Effects/EffectFadeScroll', () => {
  const React = require('react')
  const { View } = require('react-native')
  return () => <View testID="effect-fade-scroll" />
})

jest.mock('../Cards/PokemonCard', () => {
  const React = require('react')
  const { Text } = require('react-native')
  return ({ name }: any) => <Text>{name}</Text>
})

jest.mock('../../hooks/usePokemonInfinite', () => ({
  usePokemonsInfinite: () => ({
    data: { pages: [[
      { id: 1, name: 'Pikachu', types: ['electric'], image: 'url' },
      { id: 2, name: 'Bulbasaur', types: ['grass'], image: 'url' },
    ]] },
    fetchNextPage: jest.fn(),
    isFetchingNextPage: false,
  }),
}))

describe('Home Screen', () => {
  test('renderiza correctamente Home', async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<Home />)

    expect(getByPlaceholderText('Buscar Pokémon...')).toBeTruthy()

    expect(getByTestId('effect-fade-scroll')).toBeTruthy()

    expect(getByText('Pikachu')).toBeTruthy()
    expect(getByText('Bulbasaur')).toBeTruthy()
  })

  test('actualiza query al escribir', () => {
    const { getByTestId } = render(<Home />)
    const input = getByTestId('search-input')

    fireEvent.changeText(input, 'Charmander')
    expect(input.props.value).toBe('Charmander')
  })
})
