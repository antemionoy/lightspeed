import type { EcwidProduct, EcwidApiResponse, FilterParams } from '@shared/api/ecwid/types';
import { createApiClient } from '@shared/api/ecwid/config';

const apiClient = createApiClient();

const PRODUCTS_ENDPOINT = {
  getList: '/products',
  getElementById: (productId: number) => `/products/${productId}`,
};

export interface GetProductsParams extends FilterParams {
  category?: number;
  slugsWithoutIds?: boolean;
}

export const productsApi = {
  getProducts: async (params?: GetProductsParams): Promise<EcwidApiResponse<EcwidProduct>> => {
    const response = await apiClient.get<EcwidApiResponse<EcwidProduct>>(
      PRODUCTS_ENDPOINT.getList,
      {
        params,
      },
    );
    return response.data;
  },

  getProduct: async (productId: number): Promise<EcwidProduct> => {
    const response = await apiClient.get<EcwidProduct>(PRODUCTS_ENDPOINT.getElementById(productId));
    return response.data;
  },
};
