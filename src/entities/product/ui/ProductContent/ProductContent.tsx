import { Space, Typography } from 'antd';
import { StyledContent } from '@entities/product/ui/ProductContent/styles';

interface ProductContentProps {
  content: string;
  title?: string;
}

export const ProductContent = ({ content, title }: ProductContentProps) => (
  <Space direction="vertical" size="middle">
    {title && <Typography.Title level={4}>{title}</Typography.Title>}
    {/* we can sanitize the content to prevent XSS attacks, we can use a library like parse-html to do this */}
    <StyledContent dangerouslySetInnerHTML={{ __html: content }} />
  </Space>
);
