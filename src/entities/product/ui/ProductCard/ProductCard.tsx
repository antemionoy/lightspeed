import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import { ROUTES } from '@shared/config/routes';
import { Price } from '@shared/ui/Price';
import { ProductImages } from '@entities/product/ui/ProductImages';
import { formatPrice } from '@shared/lib/price/formatPrice';
import { StyledTitle, StyledPrice, StyledActionsContainer } from '@entities/product/ui/ProductCard/styles';
import type { Product } from '@entities/product/model/types';
import type { ReactNode } from 'react';

interface ProductCardProps {
  product: Product;
  actions?: ReactNode;
}

export const ProductCard = ({ product, actions }: ProductCardProps) => {
  const navigate = useNavigate();
  const price = formatPrice(product.price);

  const handleCardClick = () => navigate(ROUTES.PRODUCT(product.id));

  return (
    <Card
      hoverable
      cover={<ProductImages product={product} onImageClick={handleCardClick} />}>
      <Card.Meta
        title={
          <StyledTitle level={5} onClick={handleCardClick}>
            {product.name}
          </StyledTitle>
        }
        description={
          <>
            <StyledPrice>
              <Price value={price} />
            </StyledPrice>
            {actions && (
              <StyledActionsContainer onClick={(e) => e.stopPropagation()}>
                {actions}
              </StyledActionsContainer>
            )}
          </>
        }
      />
    </Card>
  );
};
