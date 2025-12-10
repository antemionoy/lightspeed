export const formatPrice = (price: number): number => (price > 1000 ? price / 100 : price);
