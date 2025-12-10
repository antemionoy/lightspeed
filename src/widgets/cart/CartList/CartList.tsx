import { List } from 'antd';
import { CartItem } from '@widgets/cart/CartItem';
import { StyledCard } from '@widgets/cart/CartList/styles';
import type { CartItemWithProduct } from '@entities/cart/model/types';

interface CartListProps {
  items: CartItemWithProduct[];
}

export const CartList = ({ items }: CartListProps) => (
  <StyledCard>
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => <CartItem key={item.productId} item={item} />}
    />
  </StyledCard>
);
