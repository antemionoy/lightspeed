import { useQuery } from '@tanstack/react-query';
import { productsApi } from '@shared/api/ecwid/products';
import type { Product } from '@entities/product/model/types';
import type { ApiError } from '@shared/api/ecwid/errorHandler';

export const useProduct = (productId?: number) =>
  useQuery<Product, ApiError>({
    queryKey: ['product', productId],
    queryFn: () => productsApi.getProduct(productId!),
    enabled: !!productId,
  });
