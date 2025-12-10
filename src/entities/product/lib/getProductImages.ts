import type { Product } from '@entities/product/model/types';

export interface ProductImage {
  id: number | string;
  url: string;
}

export const getProductImagesForGallery = (product: Product): ProductImage[] => {
  if (product.galleryImages?.length) {
    return product.galleryImages.map((img) => ({
      id: img.id,
      url: img.hdThumbnailUrl || img.thumbnailUrl || '',
    }));
  }

  if (product.media?.images?.length) {
    return product.media.images.map((img) => ({
      id: img.id,
      url: img.image800pxUrl || img.image1500pxUrl || '',
    }));
  }

  if (product.imageUrl) {
    return [{ id: 'main', url: product.imageUrl }];
  }

  return [];
};
