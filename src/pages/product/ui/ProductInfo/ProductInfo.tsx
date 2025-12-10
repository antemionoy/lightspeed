import { Typography, Tag, Space } from 'antd';
import { CartQuantityControl } from '@features/cart/cartQuantityControl';
import { ProductContent } from '@entities/product/ui/ProductContent';
import { Price } from '@shared/ui/Price';
import { StyledSpace } from '@pages/product/ui/styles';
import type { Product } from '@entities/product/model/types';

const { Title } = Typography;

interface ProductInfoProps {
    product: Product;
    price: number;
}

export const ProductInfo = ({ product, price }: ProductInfoProps) => (
    <StyledSpace direction="vertical" size="large">
        {product.description && (
            <ProductContent content={product.description} title="Description" />
        )}

        <Space size="middle" align="center">
            <Title level={2}>
                <Price value={price} />
            </Title>
            {!product.inStock && <Tag color="error">Out of stock</Tag>}
        </Space>

        {product.inStock && <CartQuantityControl productId={product.id} />}
    </StyledSpace>
);

