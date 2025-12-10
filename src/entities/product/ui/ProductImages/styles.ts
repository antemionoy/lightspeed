import styled from '@emotion/styled';
import { Carousel } from 'antd';

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
`;

export const StyledCarouselItem = styled.div`
  cursor: pointer;
  height: 100%;
`;

export const StyledCarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: var(--border-radius-sm);
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  display: block;
`;
