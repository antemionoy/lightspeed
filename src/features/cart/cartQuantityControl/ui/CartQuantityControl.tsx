import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCart } from '@entities/cart/model/hooks';
import { Counter } from '@shared/ui/Counter';

interface CartQuantityControlProps {
  productId: number;
  onAdd?: () => void;
  disabled?: boolean;
}

export const CartQuantityControl = ({ productId, onAdd, disabled }: CartQuantityControlProps) => {
  const { items, addItem, updateQuantity, removeItem } = useCart();

  const cartItem = items.find((item) => item.productId === productId);
  const quantity = cartItem?.quantity || 0;

  const handleIncrease = () => {
    if (quantity === 0) {
      addItem({ productId, quantity: 1 });
      onAdd?.();
    } else {
      updateQuantity({ productId, quantity: quantity + 1 });
    }
  };

  const handleQuantityChange = (value: number) => {
    if (value <= 0) {
      removeItem(productId);
    } else {
      updateQuantity({ productId, quantity: value });
    }
  };

  return quantity === 0 ? (
    <Button
      type="primary"
      icon={<ShoppingCartOutlined />}
      onClick={handleIncrease}
      disabled={disabled}
      block
    >
      Buy
    </Button>
  ) : (
    <Counter value={quantity} onChange={handleQuantityChange} min={1} />
  );
};
