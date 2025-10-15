import { useState, useEffect } from "react"

export interface PokemonSearchResult {
  name: string
  image: string
  types: string[]
}

export const usePokemonSearch = (query: string) => {
  const [results, setResults] = useState<PokemonSearchResult[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query) {
      setResults([])
      return
    }

    const fetchAllPokemon = async () => {
      setLoading(true)
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        const json = await res.json()
        const filtered = json.results.filter((p: any) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )

        const detailed = await Promise.all(
          filtered.map(async (p: any) => {
            const r = await fetch(p.url)
            const data = await r.json()
            return {
              name: data.name,
              image: data.sprites.front_default,
              types: data.types.map((t: any) => t.type.name),
            }
          })
        )

        setResults(detailed)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchAllPokemon()
  }, [query])

  return { results, loading }
}
