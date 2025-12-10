import { Row, Col } from 'antd';
import { EmptyState } from '@shared/ui/EmptyState';
import { CategoryCard } from '@entities/category/ui/CategoryCard';
import type { Category } from '@entities/category/model/types';

interface CategoryListProps {
  categories: Category[];
}

export const CategoryList = ({ categories }: CategoryListProps) => (
  <>
    {categories.length === 0 ? (
      <EmptyState description="No categories found" />
    ) : (
      <Row gutter={[24, 24]}>
        {categories.map((category) => (
          <Col key={category.id} xs={24} sm={12} md={8} lg={6} xl={4}>
            <CategoryCard category={category} />
          </Col>
        ))}
      </Row>
    )}
  </>
);
