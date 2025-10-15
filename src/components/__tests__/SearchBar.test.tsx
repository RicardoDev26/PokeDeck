import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react-native'
import SearchBar from '../SearchBar'

jest.mock('../SelectSearch', () => {
  const React = require('react')
  const { Text } = require('react-native')
  return ({ name }: { name: string }) => <Text>{name}</Text>
})

jest.mock('../../hooks/usePokemonSeach', () => ({
  usePokemonSearch: (query: string) => {
    if (!query) return { results: [], loading: false }
    if (query.toLowerCase() === 'pikachu') {
      return {
        results: [{ name: 'Pikachu', image: 'url', types: ['electric'] }],
        loading: false,
      }
    }
    return { results: [], loading: false }
  },
}))

describe('SearchBar', () => {
  test('actualiza el query al escribir', () => {
    let query = ''
    const setQuery = (text: string) => { query = text }

    const { getByPlaceholderText } = render(
      <SearchBar query={query} setQuery={setQuery} />
    )

    const input = getByPlaceholderText('Buscar Pokémon...')
    fireEvent.changeText(input, 'Pikachu')

    expect(query).toBe('Pikachu')
  })

  test('muestra resultados cuando se encuentra un Pokémon', async () => {
    const { getByText } = render(
      <SearchBar query="Pikachu" setQuery={() => {}} />
    )

    await waitFor(() => {
      expect(getByText('Pikachu')).toBeTruthy()
    })
  })

  test('muestra mensaje cuando no se encuentran Pokémon', async () => {
    const { getByText } = render(
      <SearchBar query="NoExiste" setQuery={() => {}} />
    )

    await waitFor(() => {
      expect(getByText('No se encontraron Pokémon')).toBeTruthy()
    })
  })
})
