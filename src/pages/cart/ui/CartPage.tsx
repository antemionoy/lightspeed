import { Button, Card, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';
import { AppLayout } from '@widgets/layout/AppLayout';
import { PlaceOrderButton } from '@features/cart/placeOrder';
import { CartList } from '@widgets/cart/CartList';
import { CartTotal } from '@widgets/cart/CartTotal';
import { useCart, useCartItems } from '@entities/cart/model/hooks';
import { Loader } from '@shared/ui/Loader';
import { EmptyState } from '@shared/ui/EmptyState';
import { BackButton } from '@shared/ui/BackButton';
import { StyledSpace } from '@pages/cart/ui/styles';

const { Title } = Typography;

export const CartPage = () => {
  const { items: cartItems } = useCart();
  const { productsOfCart, total, loading } = useCartItems(cartItems);

  return (
    <AppLayout>
      <Space direction="vertical" size="middle">
        <BackButton />
        <Title level={1}>Cart</Title>
      </Space>

      {loading ? (
        <Loader />
      ) : productsOfCart.length === 0 ? (
        <EmptyState
          description="Cart is empty"
          action={
            <Button type="primary">
              <Link to={ROUTES.HOME}>Go shopping</Link>
            </Button>
          }
        />
      ) : (
        <>
          <CartList items={productsOfCart} />
          <Card>
            <StyledSpace>
              <CartTotal total={total} />
              <PlaceOrderButton />
            </StyledSpace>
          </Card>
        </>
      )}
    </AppLayout>
  );
};
