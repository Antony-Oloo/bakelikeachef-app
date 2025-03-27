import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (cake) =>
    set((state) => ({
      cart: [...state.cart, cake],
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));
