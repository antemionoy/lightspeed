import type { EcwidCategory, EcwidApiResponse, FilterParams } from '@shared/api/ecwid/types';
import { createApiClient } from '@shared/api/ecwid/config';

const apiClient = createApiClient();

const CATEGORIES_ENDPOINT = {
  getList: '/categories',
  getElementById: (categoryId: number) => `/categories/${categoryId}`,
};

export interface GetCategoriesParams extends FilterParams {
  parent?: number;
}

export const categoriesApi = {
  getCategories: async (params?: GetCategoriesParams): Promise<EcwidCategory[]> => {
    const response = await apiClient.get<EcwidApiResponse<EcwidCategory>>(
      CATEGORIES_ENDPOINT.getList,
      {
        params,
      },
    );
    return response.data.items || [];
  },

  getCategory: async (categoryId: number): Promise<EcwidCategory> => {
    const response = await apiClient.get<EcwidCategory>(
      CATEGORIES_ENDPOINT.getElementById(categoryId),
    );
    return response.data;
  },
};
