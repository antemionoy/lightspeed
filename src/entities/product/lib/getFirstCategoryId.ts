import type { Product } from '@entities/product/model/types';

export const getFirstCategoryId = (product?: Product): number => {
  const categoryIds = product?.categoryIds;
  return categoryIds && categoryIds.length > 0 
    ? categoryIds[categoryIds.length - 1] 
    : 0;
};
