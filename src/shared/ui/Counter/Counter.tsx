import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { InputNumber, Space, Button } from 'antd';

interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  onRemove?: () => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export const Counter = ({
  value,
  onChange,
  onRemove,
  min = 1,
  max,
  disabled = false,
}: CounterProps) => {
  const handleIncrease = () => {
    onChange(max ? Math.min(value + 1, max) : value + 1);
  };

  const handleDecrease = () => {
    if (value === min && onRemove) {
      onRemove();
    } else {
      onChange(value - 1);
    }
  };

  const handleChange = (newValue: number | null) => {
    if (newValue !== null) {
      onChange(newValue);
    }
  };

  // there is should be requst for update quantity on backend

  return (
    <Space>
      <Button
        icon={<MinusOutlined />}
        onClick={handleDecrease}
        disabled={disabled || (value < min && !onRemove)}
        size={'small'}
      />
      <InputNumber
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        size={'small'}
        controls={false}
      />
      <Button
        icon={<PlusOutlined />}
        onClick={handleIncrease}
        disabled={disabled || !!max && value >= max}
        size={'small'}
      />
    </Space>
  );
};
