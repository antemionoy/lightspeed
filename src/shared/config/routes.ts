export const ROUTES = {
  HOME: '/',
  CATEGORY: (slug: string) => `/category/${slug}`,
  PRODUCT: (id: number) => `/product/${id}`,
  CART: '/cart',
} as const;
