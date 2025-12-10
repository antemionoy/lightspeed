import { useParams } from 'react-router-dom';
import { Typography, Card, Row, Col, Space } from 'antd';
import { useProduct } from '@entities/product/api/hooks';
import { useCategories } from '@entities/category/api/hooks';
import { AppLayout } from '@widgets/layout/AppLayout';
import { Loader } from '@shared/ui/Loader';
import { Breadcrumbs } from '@shared/ui/Breadcrumbs';
import { BackButton } from '@shared/ui/BackButton';
import { useBreadcrumbs } from '@shared/lib/breadcrumbs';
import { ProductImages } from '@entities/product/ui/ProductImages';
import { ProductInfo } from '@pages/product/ui/ProductInfo';
import { formatPrice } from '@shared/lib/price/formatPrice';
import { getFirstCategoryId } from '@entities/product/lib/getFirstCategoryId';
import { API_LIMITS } from '@shared/config/api';

const { Title } = Typography;

export const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();

  const { data: product, isLoading: loading } = useProduct(productId ? Number(productId) : 0);
  const { data: allCategories = [] } = useCategories({ limit: API_LIMITS.CATEGORIES });

  const price = product ? formatPrice(product.price) : 0;
  const firstCategoryId = getFirstCategoryId(product);
  const category = allCategories.find(cat => cat.id === firstCategoryId);

  const breadcrumbItems = useBreadcrumbs({
    category,
    product: product && { name: product.name },
    allCategories,
  });

  return (
    <AppLayout>
      <Space direction="vertical" size="middle">
        <BackButton />
        {product && <Breadcrumbs items={breadcrumbItems} />}
        {product && <Title level={1}>{product.name}</Title>}
      </Space>

      {loading ? (
        <Loader />
      ) : product && (
        <Card>
          <Row gutter={[48, 24]}>
            <Col xs={24} md={12}>
              <ProductImages product={product} />
            </Col>

            <Col xs={24} md={12}>
              <ProductInfo product={product} price={price} />
            </Col>
          </Row>
        </Card>
      )}
    </AppLayout>
  );
};
