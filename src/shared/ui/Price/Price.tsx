interface PriceProps {
  value: number;
  locale?: string;
  currency?: string;
}

export const Price = ({ value, locale = 'en-US', currency = 'EUR' }: PriceProps) => (
  <>{value.toLocaleString(locale, { style: 'currency', currency })}</>
);
