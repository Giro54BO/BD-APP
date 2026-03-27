interface CartBadgeProps {
  itemCount: number;
  className?: string;
}

export function CartBadge({ itemCount, className = "" }: CartBadgeProps) {
  if (itemCount <= 0) return null;

  return (
    <div
      className={`absolute bg-[#e30613] text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-medium leading-none -top-2 -right-2 ${className}`}
      aria-label={`${itemCount} items in cart`}
    >
      {itemCount}
    </div>
  );
}
