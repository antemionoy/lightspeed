import { useQuery, useQueryClient } from '@tanstack/react-query';
import { productsApi, type GetProductsParams } from '@shared/api/ecwid/products';
import type { EcwidProduct, EcwidApiResponse } from '@shared/api/ecwid/types';
import type { ApiError } from '@shared/api/ecwid/errorHandler';

export const useProducts = (params?: GetProductsParams) => {
  const queryClient = useQueryClient();

  return useQuery<EcwidApiResponse<EcwidProduct>, ApiError>({
    queryKey: ['products', params],
    queryFn: async () => {
      const data = await productsApi.getProducts(params);
      data.items.forEach((product) => {
        queryClient.setQueryData(['product', product.id], product);
      });
      return data;
    },
  });
};
