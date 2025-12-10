import { Routes, Route } from 'react-router-dom';
import { ProductsPage } from '@pages/products';
import { ProductPage } from '@pages/product';
import { CartPage } from '@pages/cart';
import { NotFoundPage } from '@pages/notFound';
import { ROUTES } from '@shared/config/routes';

export const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<ProductsPage />} />
    <Route path="/category/:categorySlug" element={<ProductsPage />} />
    <Route path="/product/:productId" element={<ProductPage />} />
    <Route path={ROUTES.CART} element={<CartPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
