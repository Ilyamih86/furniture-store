import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  slug: string;
}

interface FavoritesStore {
  items: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      items: [],

      addFavorite: (item) =>
        set((state) => {
          const exists = state.items.find((i) => i.productId === item.productId);
          if (exists) return state;
          return { items: [...state.items, item] };
        }),

      removeFavorite: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId),
        })),

      isFavorite: (productId) => {
        return get().items.some((i) => i.productId === productId);
      },

      clearFavorites: () => set({ items: [] }),
    }),
    {
      name: "favorites-storage",
    },
  ),
);