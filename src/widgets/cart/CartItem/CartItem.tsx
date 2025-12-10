import { List, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';
import { RemoveFromCartButton } from '@features/cart/removeFromCart';
import { useCart } from '@entities/cart/model/hooks';
import { Price } from '@shared/ui/Price';
import { Counter } from '@shared/ui/Counter';
import { formatPrice } from '@shared/lib/price/formatPrice';
import { StyledImage } from '@widgets/cart/CartItem/styles';
import type { CartItemWithProduct } from '@entities/cart/model/types';

interface CartItemProps {
  item: CartItemWithProduct;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();
  const imageUrl = item.product.imageUrl;
  const price = formatPrice(item.product.price);
  const itemTotal = price * item.quantity;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      return;
    }
    updateQuantity({ productId: item.productId, quantity: newQuantity });
  };

  const handleRemove = () => {
    removeItem(item.productId);
  };

  return (
    <List.Item actions={[<RemoveFromCartButton key="remove" productId={item.productId} />]}>
      <List.Item.Meta
        avatar={
          <Link to={ROUTES.PRODUCT(item.productId)}>
            <StyledImage
              src={imageUrl}
              alt={item.product.name}
              width={100}
              height={100}
              preview={false}
            />
          </Link>
        }
        title={
          <Link to={ROUTES.PRODUCT(item.productId)}>
            {item.product.name}
          </Link>
        }
        description={
          <Space>
            <Price value={price} />
            <CloseOutlined />
            <Counter
              value={item.quantity}
              onChange={handleQuantityChange}
              onRemove={handleRemove}
              min={1}
            />
          </Space>
        }
      />
      <Price value={itemTotal} />
    </List.Item>
  );
};
