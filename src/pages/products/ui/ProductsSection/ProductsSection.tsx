import { Typography, Card } from 'antd';
import { ProductList } from '@widgets/products/ProductList';
import type { Product } from '@entities/product/model/types';

const { Title } = Typography;

interface ProductsSectionProps {
    products: Product[];
}

export const ProductsSection = ({ products = [] }: ProductsSectionProps) => {
    if (products.length === 0) return null;

    return (
        <Card>
            <Title level={3}>Products</Title>
            <ProductList products={products} />
        </Card>
    );
};

