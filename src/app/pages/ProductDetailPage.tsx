import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import {
  CarFront,
  CheckCircle2,
  CircleAlert,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
  RotateCcw,
  Shield,
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type ProductTab = 'description' | 'specs' | 'reviews';

const reviewDistribution = [
  { stars: 5, percent: 68 },
  { stars: 4, percent: 20 },
  { stars: 3, percent: 8 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 1 },
];

const sampleReviews = [
  {
    id: '1',
    author: 'Carlos M.',
    date: '12 Febrero, 2025',
    rating: 5,
    body: 'Excelente disco. Lo pude instalar el mismo dia. El frenado fue rapido y el empaque llego en muy buen estado.',
  },
  {
    id: '2',
    author: 'Maria G.',
    date: '30 Enero, 2025',
    rating: 4,
    body: 'Buen repuesto, cumple con lo esperado. La instalacion fue sencilla y el material se siente resistente.',
  },
];

function Stars({
  rating,
  size = 16,
  muted = false,
}: {
  rating: number;
  size?: number;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={muted ? 'text-muted-foreground' : 'text-primary'}
          fill={index < Math.floor(rating) ? 'currentColor' : 'none'}
          size={size}
          strokeWidth={1.8}
        />
      ))}
    </div>
  );
}

export function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<ProductTab>('reviews');
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-foreground">Producto no encontrado</h1>
          <Link to="/search" className="text-primary hover:underline">
            Volver al catalogo
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 3);

  const imageGallery = useMemo(() => [product.image, product.image, product.image], [product.image]);
  const stockLabel = product.stock <= 5 ? `Quedan ${product.stock}` : 'En stock';
  const StockIcon = product.stock <= 5 ? CircleAlert : CheckCircle2;
  const stockTone = product.stock <= 5 ? 'text-[#efac00]' : 'text-[#2fae04]';
  const subtotal = (product.price * quantity).toFixed(2);
  const reviewScore = Math.max(4.7, Number(product.rating.toFixed(1))).toFixed(1);

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        code: product.code,
      },
      quantity
    );
  };

  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 py-6 md:px-8 md:py-8">
      <div className="mx-auto max-w-[412px] space-y-8 md:max-w-[920px]">
        <div className="text-sm leading-[1.5] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Inicio
          </Link>
          {' / '}
          <Link to="/search" className="hover:text-foreground">
            Autopartes
          </Link>
          {' / '}
          <span className="text-foreground">{product.code}</span>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-[#bfbed0] bg-[#f0f0f2]">
              <ImageWithFallback
                src={imageGallery[selectedImage]}
                alt={product.name}
                className="aspect-square w-full mix-blend-multiply"
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {imageGallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-xl border bg-[#f0f0f2] ${
                    selectedImage === index ? 'border-primary' : 'border-[#d9d8e3]'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} vista ${index + 1}`}
                    className="aspect-square w-full mix-blend-multiply"
                  />
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="rounded-[120px] border border-[#d9d8e3] px-3 py-1 text-sm leading-[1.5] text-muted-foreground">
                {product.brand}
              </span>
              {product.discount ? (
                <span className="rounded-[120px] bg-accent px-3 py-1 text-sm leading-[1.5] text-white">
                  -{product.discount}%
                </span>
              ) : null}
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl leading-[1.3] text-primary md:text-[32px]">
                {product.name}
              </h1>
              <p className="text-sm leading-[1.5] tracking-[0.0014px] text-muted-foreground">
                Codigo: {product.code}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Stars rating={product.rating} size={14} />
              <span className="text-sm leading-[1.5] tracking-[0.0014px] text-muted-foreground">
                ({product.reviews})
              </span>
            </div>

            <div className={`flex items-center gap-1 ${stockTone}`}>
              <StockIcon className="h-[14px] w-[14px]" />
              <span className="text-sm leading-[1.5] tracking-[0.0014px]">{stockLabel}</span>
            </div>

            <div className="flex items-end gap-2 text-muted-foreground">
              <p className="text-[32px] font-bold leading-[1.3] text-primary">
                $ {product.price.toFixed(2)}
              </p>
              {product.originalPrice ? (
                <p className="pb-1 text-sm leading-[1.5] tracking-[0.0014px] line-through">
                  $ {product.originalPrice.toFixed(2)}
                </p>
              ) : null}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-[#f0f0f2] p-3 text-center text-primary">
                <Truck className="mx-auto h-6 w-6" />
                <p className="mt-2 text-xs leading-[1.4] tracking-[0.0024px]">Envio rapido</p>
              </div>
              <div className="rounded-xl bg-[#f0f0f2] p-3 text-center text-primary">
                <Shield className="mx-auto h-6 w-6" />
                <p className="mt-2 text-xs leading-[1.4] tracking-[0.0024px]">Garantia</p>
              </div>
              <div className="rounded-xl bg-[#f0f0f2] p-3 text-center text-primary">
                <RotateCcw className="mx-auto h-6 w-6" />
                <p className="mt-2 text-xs leading-[1.4] tracking-[0.0024px]">Devolucion</p>
              </div>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3 rounded-xl border border-[#d9d8e3] bg-white p-3">
              <div className="space-y-2">
                <p className="text-sm leading-[1.5] text-primary">Cantidad</p>
                <div className="flex h-12 items-center rounded-xl border border-[#bfbed0]">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="flex h-full w-12 items-center justify-center text-primary"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="flex-1 text-center text-base leading-[1.5] text-primary">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.min(product.stock, current + 1))}
                    className="flex h-full w-12 items-center justify-center text-primary"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="min-w-[112px] space-y-2 rounded-xl bg-[#f5f5f7] px-4 py-3 text-right">
                <p className="text-sm leading-[1.5] text-muted-foreground">Subtotal</p>
                <p className="text-[18px] font-bold leading-[1.5] text-primary">$ {subtotal}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex h-[52px] w-full items-center justify-center gap-1 rounded-xl bg-primary px-4 text-base leading-[1.5] text-white transition-opacity hover:opacity-90"
            >
              <span>Agregar al carrito</span>
              <ShoppingCart className="h-6 w-6" />
            </button>
          </section>
        </div>

        {product.compatibleVehicles?.length ? (
          <section className="space-y-4">
            <div className="flex items-center gap-1 text-primary">
              <CarFront className="h-6 w-6" />
              <h2 className="text-xl font-bold leading-[1.3]">
                Vehiculos compatible con:
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {product.compatibleVehicles.slice(0, 3).map((vehicle, index) => (
                <div
                  key={`${vehicle.brand}-${vehicle.model}-${vehicle.year}`}
                  className={`rounded-xl border p-3 text-center ${
                    index === 2
                      ? 'border-[#2fae04] bg-[#edf8e9] text-[#2fae04]'
                      : 'border-[#d9d8e3] bg-[#f5f5f7] text-muted-foreground'
                  }`}
                >
                  <p className="text-xs leading-[1.4] tracking-[0.0024px]">{vehicle.brand}</p>
                  <p className="text-xs leading-[1.4] tracking-[0.0024px]">{vehicle.model}</p>
                  <p className="text-xs leading-[1.4] tracking-[0.0024px]">{vehicle.year}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="space-y-4">
          <div className="flex gap-1 overflow-x-auto rounded-xl bg-[#f5f5f7] p-1 no-scrollbar">
            <button
              type="button"
              onClick={() => setActiveTab('description')}
              className={`min-w-[110px] rounded-xl px-4 py-3 text-sm leading-[1.5] transition-colors ${
                activeTab === 'description'
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground'
              }`}
            >
              Descripcion
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`min-w-[126px] rounded-xl px-4 py-3 text-sm leading-[1.5] transition-colors ${
                activeTab === 'specs' ? 'bg-primary text-white' : 'text-muted-foreground'
              }`}
            >
              Especificaciones
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('reviews')}
              className={`min-w-[96px] rounded-xl px-4 py-3 text-sm leading-[1.5] transition-colors ${
                activeTab === 'reviews'
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground'
              }`}
            >
              Opiniones
            </button>
          </div>

          {activeTab === 'description' ? (
            <div className="rounded-xl bg-[#f5f5f7] p-4">
              <p className="text-sm leading-[1.5] tracking-[0.0014px] text-muted-foreground">
                {product.description}
              </p>
            </div>
          ) : null}

          {activeTab === 'specs' ? (
            <div className="rounded-xl bg-[#f5f5f7] p-4">
              {product.specifications ? (
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between border-b border-[#d9d8e3] pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="text-sm leading-[1.5] text-primary">{label}</span>
                      <span className="text-sm leading-[1.5] text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm leading-[1.5] tracking-[0.0014px] text-muted-foreground">
                  No hay especificaciones disponibles para este producto.
                </p>
              )}
            </div>
          ) : null}

          {activeTab === 'reviews' ? (
            <div className="space-y-5">
              <div className="rounded-xl bg-[#f5f5f7] p-4">
                <div className="grid gap-5 md:grid-cols-[120px_1fr] md:items-start">
                  <div className="text-center">
                    <p className="text-[40px] font-bold leading-[1.3] text-primary">
                      {reviewScore}
                    </p>
                    <div className="mt-2 flex justify-center">
                      <Stars rating={product.rating} size={14} />
                    </div>
                    <p className="mt-2 text-xs leading-[1.4] tracking-[0.0024px] text-muted-foreground">
                      {product.reviews} opiniones verificadas
                    </p>
                  </div>

                  <div className="space-y-3">
                    {reviewDistribution.map((item) => (
                      <div key={item.stars} className="grid grid-cols-[30px_1fr_38px] items-center gap-3">
                        <div className="flex items-center gap-1 text-[18px] leading-[1.5] text-muted-foreground">
                          <span>{item.stars}</span>
                          <Star className="h-[18px] w-[18px] text-primary" fill="currentColor" />
                        </div>
                        <div className="h-3 overflow-hidden rounded-[24px] bg-[#eaeaf0]">
                          <div
                            className="h-full rounded-[24px] bg-primary"
                            style={{ width: `${item.percent}%` }}
                          />
                        </div>
                        <span className="text-right text-[18px] leading-[1.5] text-primary">
                          {item.percent}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="flex h-[52px] w-full items-center justify-center gap-1 rounded-xl border border-primary px-4 text-base leading-[1.5] text-primary transition-colors hover:bg-[#f5f5f7]"
              >
                <span>Escribe una opinion</span>
              </button>

              <div className="space-y-5">
                {sampleReviews.map((review) => (
                  <article key={review.id} className="space-y-3 border-b border-[#eaeaf0] pb-5 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-2">
                      <Stars rating={review.rating} size={14} />
                    </div>
                    <p className="text-sm leading-[1.5] tracking-[0.0014px] text-muted-foreground">
                      {review.body}
                    </p>
                    <div className="text-sm leading-[1.5] tracking-[0.0014px] text-muted-foreground">
                      <span className="font-bold text-primary">{review.author}</span>
                      {', '}
                      {review.date}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        {relatedProducts.length ? (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold leading-[1.3] text-primary">
              Los clientes tambien compraron
            </h2>
            <div className="flex gap-5 overflow-x-auto pb-2 no-scrollbar">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="w-[170px] flex-shrink-0">
                  <ProductCard product={relatedProduct} />
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
