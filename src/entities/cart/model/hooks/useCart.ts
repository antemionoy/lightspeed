import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { CartItem } from '@entities/cart/model/types';
import { cartStorage } from '@entities/cart/lib';

const CART_QUERY_KEY = ['cart'] as const;

export const useCart = () => {
  const queryClient = useQueryClient();

  const updateCart = (items: CartItem[]) => {
    cartStorage.setItems(items);
    queryClient.setQueryData(CART_QUERY_KEY, items);
  };

  const cartItemsQuery = useQuery({
    queryKey: CART_QUERY_KEY,
    queryFn: () => cartStorage.getItems(),
    staleTime: 0,
    gcTime: Infinity,
  });

  const addItemMutation = useMutation({
    mutationFn: async ({ productId, quantity = 1 }: CartItem) => {
      const items = cartStorage.getItems();

      const existingElements = items.find((item) => item.productId === productId);

      if (existingElements) {
        existingElements.quantity += quantity;
      } else {
        items.push({ productId, quantity });
      }

      updateCart(items);

      return items;
    },
  });

  const removeItemMutation = useMutation({
    mutationFn: async (productId: number) => {
      const items = cartStorage.getItems().filter((item) => item.productId !== productId);
      updateCart(items);

      return items;
    },
  });

  const updateQuantityMutation = useMutation({
    mutationFn: async ({ productId, quantity }: CartItem) => {
      const items = cartStorage.getItems();

      if (quantity <= 0) {
        const filteredItems = items.filter((item) => item.productId !== productId);

        updateCart(filteredItems);

        return filteredItems;
      }

      const item = items.find((item) => item.productId === productId);

      if (item) {
        item.quantity = quantity;

        updateCart(items);
      }
      return items;
    },
  });

  const clearMutation = useMutation({
    mutationFn: async () => {
      updateCart([]);
      return [];
    },
  });

  const items = cartItemsQuery.data || [];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    totalItems,
    addItem: addItemMutation.mutate,
    removeItem: removeItemMutation.mutate,
    updateQuantity: updateQuantityMutation.mutate,
    clear: clearMutation.mutate,
  };
};
