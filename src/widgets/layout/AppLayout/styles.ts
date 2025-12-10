import styled from '@emotion/styled';
import { Layout } from 'antd';

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StyledContent = styled(Content)`
  padding: var(--spacing-lg);
  max-width: var(--size-max-content-width);
  margin: 0 auto;
  width: 100%;
  flex: 1;
`;
