import { Link } from 'react-router';
import { CheckCircle2, CircleAlert, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../data/mockData';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discount && product.discount > 0;
  const lowStock = product.stock > 0 && product.stock <= 5;
  const stockLabel = lowStock ? `Quedan ${product.stock}` : 'En stock';
  const stockTone = lowStock ? 'text-[#efac00]' : 'text-chart-4';
  const StockIcon = lowStock ? CircleAlert : CheckCircle2;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block rounded-xl border border-[#bfbed0] bg-card p-3 transition-shadow hover:shadow-md"
    >
      <div className="relative mb-3 h-[122px] overflow-hidden rounded-xl bg-muted">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain mix-blend-multiply transition-transform duration-200 group-hover:scale-[1.03]"
        />
        {hasDiscount && (
          <div className="absolute left-[11px] top-[11px] rounded-[120px] bg-accent px-3 py-1 text-sm leading-[1.5] tracking-[0.0014px] text-white">
            -{product.discount}%
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-xs leading-[1.4] tracking-[0.0024px] text-muted-foreground">
          {product.brand} · {product.code}
        </p>
        <h3 className="min-h-[72px] text-base leading-[1.5] text-muted-foreground">
          {product.name}
        </h3>
      </div>

      <div className="mt-1 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 ${
              i < Math.floor(product.rating)
                ? 'fill-primary text-primary'
                : 'text-muted-foreground'
            }`}
          />
        ))}
        <span className="text-sm leading-[1.5] tracking-[0.0014px] text-muted-foreground">
          ({product.reviews})
        </span>
      </div>

      <div className={`mt-2 flex items-center gap-1 ${stockTone}`}>
        <StockIcon className="h-[14px] w-[14px]" />
        <span className="text-sm leading-[1.5] tracking-[0.0014px]">{stockLabel}</span>
      </div>

      <div className="mt-2 flex items-center gap-1 text-muted-foreground">
        <p className="text-[18px] font-bold leading-[1.5] text-muted-foreground">
          ${product.price.toFixed(2)}
        </p>
        {hasDiscount && product.originalPrice && (
          <p className="text-sm leading-[1.5] tracking-[0.0014px] line-through">
            ${product.originalPrice.toFixed(2)}
          </p>
        )}
      </div>

      <div className="mt-3 flex h-12 items-center justify-center gap-1 rounded-xl bg-primary px-4 text-base leading-[1.5] text-primary-foreground transition-colors group-hover:bg-primary/90">
        <span>Agregar</span>
        <ShoppingCart className="h-6 w-6" />
      </div>
    </Link>
  );
}
