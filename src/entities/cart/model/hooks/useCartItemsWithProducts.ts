import { useMemo } from 'react';
import { useProducts } from '@entities/product/api/hooks';
import { API_LIMITS } from '@shared/config/api';
import { formatPrice } from '@shared/lib/price/formatPrice';
import type { CartItem } from '@entities/cart/model/types';

export const useCartItems = (cartElements: CartItem[]) => {
  const { data: productsData, isLoading } = useProducts({ 
    limit: API_LIMITS.PRODUCTS 
  });

  const productsOfCart = useMemo(() => {
    if (!productsData) return [];

    return cartElements.flatMap((item) => {
      const product = productsData.items.find(p => p.id === item.productId);
      return product ? [{ ...item, product }] : [];
    });
  }, [cartElements, productsData]);

  const total = useMemo(
    () =>
      productsOfCart.reduce((sum, item) => {
        const price = formatPrice(item.product.price);
        return sum + price * item.quantity;
      }, 0),
    [productsOfCart],
  );

  return {
    productsOfCart,
    total,
    loading: isLoading,
  };
};
