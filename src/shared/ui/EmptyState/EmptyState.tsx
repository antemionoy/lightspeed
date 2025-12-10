import { ReactNode } from 'react';
import { Empty } from 'antd';

interface EmptyStateProps {
  description: string;
  action?: ReactNode;
  image?: ReactNode;
}

export const EmptyState = ({ description, action, image }: EmptyStateProps) => (
  <Empty description={description} image={image || Empty.PRESENTED_IMAGE_SIMPLE}>
    {action}
  </Empty>
);
