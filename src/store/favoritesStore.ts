import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoriteStore {
  favorites: string[];
  toggleFavorite: (name: string) => void;
  loadFavorites: () => void
}

export const useFavorites = create<FavoriteStore>((set, get) => ({
  favorites: [],
  toggleFavorite: async (name) => {
    const { favorites } = get()
    let newFavs
    if (favorites.includes(name)) {
      newFavs = favorites.filter(f => f !== name);
    } else {
      newFavs = [...favorites, name]
    }
    set({ favorites: newFavs });
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavs))
  },
  loadFavorites: async () => {
    const favs = await AsyncStorage.getItem('favorites')
    if (favs) set({ favorites: JSON.parse(favs) })
  },
}));
