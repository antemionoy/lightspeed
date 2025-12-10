import styled from '@emotion/styled';
import { Typography } from 'antd';

const { Title } = Typography;

export const StyledTitle = styled(Title)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

