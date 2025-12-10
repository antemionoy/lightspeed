import { useQuery } from '@tanstack/react-query';
import { categoriesApi } from '@shared/api/ecwid/categories';
import type { Category } from '@entities/category/model/types';
import type { ApiError } from '@shared/api/ecwid/errorHandler';

export const useCategory = (categoryId: number | undefined) =>
  useQuery<Category, ApiError>({
    queryKey: ['category', categoryId],
    queryFn: () => categoriesApi.getCategory(categoryId!),
    enabled: !!categoryId,
  });
