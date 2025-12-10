import styled from '@emotion/styled';
import { Typography } from 'antd';

const { Title, Text } = Typography;

export const StyledTitle = styled(Title)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledPrice = styled(Text)`
  font-size: 20px;
  font-weight: 600;
`;

export const StyledActionsContainer = styled.div`
  margin-top: var(--spacing-md);
`;
