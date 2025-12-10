import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { ROUTES } from '@shared/config/routes';

interface BackButtonProps {
    to?: string;
    label?: string;
}

export const BackButton = ({ to = ROUTES.HOME, label = 'Back to catalog' }: BackButtonProps) => (
    <Link to={to}>
        <Button type='link' icon={<ArrowLeftOutlined />} style={{ padding: 0 }}>
            {label}
        </Button>
    </Link>
);

