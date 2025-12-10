import { HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';
import { StyledBreadcrumb } from '@shared/ui/Breadcrumbs/styles';

export interface BreadcrumbItem {
  title: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const breadcrumbItems = [
    {
      title: (
        <Link to={ROUTES.HOME}>
          <HomeOutlined /> Home
        </Link>
      ),
    },
    ...items.map((item) => ({
      title: item.path ? <Link to={item.path}>{item.title}</Link> : item.title,
    })),
  ];

  return <StyledBreadcrumb items={breadcrumbItems} />;
};
