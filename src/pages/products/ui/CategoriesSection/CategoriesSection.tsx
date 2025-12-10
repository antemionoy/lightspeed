import { Typography } from 'antd';
import { CategoryList } from '@widgets/categories/CategoryList';
import { StyledCategoryCard } from '@pages/products/ui/styles';
import type { Category } from '@entities/category/model/types';

const { Title } = Typography;

interface CategoriesSectionProps {
    categories: Category[];
}

export const CategoriesSection = ({ categories = [] }: CategoriesSectionProps) => {
    if (categories.length === 0) return null;

    return (
        <StyledCategoryCard>
            <Title level={3}>Categories</Title>
            <CategoryList categories={categories} />
        </StyledCategoryCard>
    );
};

