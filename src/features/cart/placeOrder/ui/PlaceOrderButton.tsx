import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { useCart } from '@entities/cart/model/hooks';
import { ROUTES } from '@shared/config/routes';
import { SuccessMessage } from '@shared/ui/SuccessMessage';

interface PlaceOrderButtonProps {
  onOrderPlaced?: () => void;
}

export const PlaceOrderButton = ({ onOrderPlaced }: PlaceOrderButtonProps) => {
  const { items, clear } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (items.length === 0) {
      return;
    }

    setShowSuccess(true);
    onOrderPlaced?.();
  };

  const handleClose = () => {
    setShowSuccess(false);
    clear();
  };

  const handleConfirm = () => {
    setShowSuccess(false);
    clear();
    navigate(ROUTES.HOME);
  };

  return (
    <>
      <Button type="primary" size="large" onClick={handleClick} block>
        Place Order
      </Button>

      <SuccessMessage
        open={showSuccess}
        onClose={handleClose}
        onConfirm={handleConfirm}
        title="Congratulations on your purchase!"
        message="Thank you for shopping!"
        okText="Continue Shopping"
      />
    </>
  );
};
