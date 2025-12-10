import styled from '@emotion/styled';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-white);
  padding: 0 var(--spacing-lg);
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: var(--z-index-header);
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  flex: 1;
`;

export const StyledLogo = styled(Title)`
  margin: 0;
`;

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;
