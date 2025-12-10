import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';
import { AppLayout } from '@widgets/layout/AppLayout';

export const NotFoundPage = () => (
  <AppLayout>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={ROUTES.HOME}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  </AppLayout>
);
