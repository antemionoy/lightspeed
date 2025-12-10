import { useQuery, useQueryClient, type UseQueryOptions } from '@tanstack/react-query';
import { categoriesApi, type GetCategoriesParams } from '@shared/api/ecwid/categories';
import type { Category } from '@entities/category/model/types';
import type { ApiError } from '@shared/api/ecwid/errorHandler';

export const useCategories = (
  params?: GetCategoriesParams,
  options?: Omit<UseQueryOptions<Category[], ApiError>, 'queryKey' | 'queryFn'>
) => {
  const queryClient = useQueryClient();

  return useQuery<Category[], ApiError>({
    queryKey: ['categories', params],
    queryFn: async () => {
      const data = await categoriesApi.getCategories(params);
      data.forEach((category) => {
        queryClient.setQueryData(['category', category.id], category);
      });
      return data;
    },
    ...options,
  });
};
