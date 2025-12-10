import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useCart } from '@entities/cart/model/hooks';

interface RemoveFromCartButtonProps {
  productId: number;
  onRemove?: () => void;
}

export const RemoveFromCartButton = ({ productId, onRemove }: RemoveFromCartButtonProps) => {
  const { removeItem } = useCart();

  const handleClick = () => {
    removeItem(productId);
    onRemove?.();
  };

  return (
    <Button
      type="primary"
      danger
      icon={<DeleteOutlined />}
      onClick={handleClick}
      aria-label="Remove from cart"
    >
      Remove
    </Button>
  );
};
