import { getProductImagesForGallery } from '@entities/product/lib/getProductImages';
import {
  CarouselWrapper,
  StyledCarousel,
  StyledCarouselItem,
  StyledCarouselImage,
  StyledImage,
} from '@entities/product/ui/ProductImages/styles';
import type { Product } from '@entities/product/model/types';

interface ProductImagesProps {
  product: Product;
  onImageClick?: () => void;
}

export const ProductImages = ({ product, onImageClick }: ProductImagesProps) => {
  const images = getProductImagesForGallery(product);

  return images.length > 1 ? (
    <CarouselWrapper>
      <StyledCarousel dots infinite arrows>
        {images.map((img) => (
          <StyledCarouselItem key={img.id} onClick={onImageClick}>
            <StyledCarouselImage src={img.url} alt={product.name} />
          </StyledCarouselItem>
        ))}
      </StyledCarousel>
    </CarouselWrapper>
  ) : (
    <StyledImage src={images[0]?.url} alt={product.name} onClick={onImageClick} />
  );
};
