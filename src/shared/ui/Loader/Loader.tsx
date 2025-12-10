import { Spin } from 'antd';
import { LoaderContainer } from '@shared/ui/Loader/styles';

interface LoaderProps {
  size?: 'small' | 'default' | 'large';
}

export const Loader = ({ size = 'large' }: LoaderProps) => (
  <LoaderContainer>
    <Spin size={size} />
  </LoaderContainer>
);
