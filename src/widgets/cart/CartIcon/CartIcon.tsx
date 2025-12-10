import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';
import { useCart } from '@entities/cart/model/hooks';

export const CartIcon = () => {
  const { totalItems } = useCart();

  return (
    <Link to={ROUTES.CART}>
      <Badge count={totalItems} showZero={false}>
        <ShoppingCartOutlined style={{ fontSize: 24 }} />
      </Badge>
    </Link>
  );
};
