import { categoriesApi } from '@shared/api/ecwid/categories';
import { productsApi } from '@shared/api/ecwid/products';

export type { GetCategoriesParams } from '@shared/api/ecwid/categories';
export type { GetProductsParams } from '@shared/api/ecwid/products';

export const API = {
  ...categoriesApi,
  ...productsApi,
};
