import { Typography } from 'antd';
import { Price } from '@shared/ui/Price';

const { Title } = Typography;

interface CartTotalProps {
  total: number;
}

export const CartTotal = ({ total }: CartTotalProps) => (
  <Title level={3}>
    Total: <Price value={total} />
  </Title>
);
