import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

export const getPokemons = (offset = 0, limit = 20) =>
  api.get(`pokemon?offset=${offset}&limit=${limit}`)

export const getPokemonDetail = (name: string) =>
  api.get(`pokemon/${name}`)