import styled from '@emotion/styled';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;

export const StyledFooter = styled(Footer)`
  background: var(--color-footer-bg);
  color: var(--color-white);
  text-align: center;
  padding: var(--spacing-lg);
  margin-top: auto;
`;

export const StyledFooterContent = styled.div`
  max-width: var(--size-max-content-width);
  margin: 0 auto;
`;

export const StyledFooterText = styled(Typography.Text)`
  color: var(--color-footer-text);
`;
