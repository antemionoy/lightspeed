import { Row, Col } from 'antd';
import { ProductCard } from '@entities/product/ui/ProductCard';
import { CartQuantityControl } from '@features/cart/cartQuantityControl';
import { EmptyState } from '@shared/ui/EmptyState';
import type { Product } from '@entities/product/model/types';

interface ProductListProps {
  products: Product[];
  onProductAddToCart?: () => void;
}

export const ProductList = ({ products, onProductAddToCart }: ProductListProps) => (
  <>
    {products.length === 0 ? (
      <EmptyState description="No products found" />
    ) : (
      <Row gutter={[24, 24]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard
              product={product}
              actions={<CartQuantityControl productId={product.id} onAdd={onProductAddToCart} />}
            />
          </Col>
        ))}
      </Row>
    )}
  </>
);
