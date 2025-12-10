import type { CartItem } from '@entities/cart/model/types';

const CART_STORAGE_KEY = 'ecwid_cart';

const isBrowser = typeof window !== 'undefined';

export const cartStorage = {
  getItems: (): CartItem[] => {
    if (!isBrowser) {
      return [];
    }
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  setItems: (items: CartItem[]): void => {
    if (!isBrowser) {
      return;
    }
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  },
};
