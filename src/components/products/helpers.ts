export function getDiscountedPrice({
  price,
  percentage,
}: {
  price: number;
  percentage: number;
}) {
  return (price * (1 - percentage / 100)).toFixed(2);
}
