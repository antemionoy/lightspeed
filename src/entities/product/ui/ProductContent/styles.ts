import styled from '@emotion/styled';

export const StyledContent = styled.div`
  & p {
    margin-bottom: 8px;
  }

  & p:last-child {
    margin-bottom: 0;
  }

  & strong {
    font-weight: 600;
  }

  & br {
    line-height: 1.5;
  }
`;
