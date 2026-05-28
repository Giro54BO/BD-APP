import { Link } from 'react-router';
import { ArrowLeft, Minus, Plus, ShoppingBag, Store, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CartPage() {
  const { items, cartGroups, itemCount, updateQuantity, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex min-h-full items-center justify-center px-6 py-16">
        <div className="text-center">
          <ShoppingBag className="mx-auto mb-6 h-20 w-20 text-muted-foreground" />
          <h1 className="mb-3 text-2xl font-bold leading-[1.3] text-foreground">
            Tu carrito está vacío
          </h1>
          <p className="mb-8 text-sm leading-[1.5] text-muted-foreground">
            Agrega productos a tu carrito para continuar con tu compra
          </p>
          <Link
            to="/categorias"
            className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-4 text-base leading-[1.5] text-white transition-opacity hover:opacity-90"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 pb-8 pt-5">
      <Link
        to="/categorias"
        className="mb-5 inline-flex items-center gap-1 text-sm leading-[1.5] text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        Seguir comprando
      </Link>

      <div className="mb-6">
        <h1 className="text-2xl font-bold leading-[1.3] text-foreground">
          Mi Carrito ({itemCount})
        </h1>
        <p className="mt-2 text-sm leading-[1.5] text-muted-foreground">
          Los productos se agrupan por negocio. El pago se realiza por separado para cada negocio.
        </p>
      </div>

      <div className="space-y-5">
        {cartGroups.map((group) => (
          <section
            key={group.category}
            className="overflow-hidden rounded-xl border border-[#d9d8e3] bg-white"
          >
            <div className="border-b border-[#d9d8e3] bg-[#f5f5f7] px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex items-center gap-2">
                  <Store className="h-5 w-5 flex-shrink-0 text-primary" />
                  <h2 className="truncate font-bold leading-[1.5] text-primary">
                    {group.businessName}
                  </h2>
                </div>
                <span className="flex-shrink-0 rounded-[120px] bg-white px-3 py-1 text-xs font-bold leading-none text-primary">
                  {group.itemCount} {group.itemCount === 1 ? 'producto' : 'productos'}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm leading-[1.5]">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold text-primary">${group.subtotal.toFixed(2)}</span>
              </div>
            </div>

            {group.items.map((item) => (
              <div key={item.id} className="border-b border-[#ededf2] px-4 py-4 last:border-b-0">
                <div className="grid grid-cols-[72px_minmax(0,1fr)] gap-3">
                  <div className="h-[72px] w-[72px] overflow-hidden rounded-lg bg-[#f0f0f2]">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full mix-blend-multiply"
                    />
                  </div>

                  <div className="min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      className="line-clamp-2 block text-sm font-bold leading-[1.4] text-primary transition-colors hover:text-primary/80"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 truncate text-xs leading-[1.4] text-muted-foreground">
                      Código: {item.code}
                    </p>
                    <p className="mt-2 text-base font-bold leading-[1.5] text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-xs leading-[1.4] text-muted-foreground">
                      ${item.price.toFixed(2)} c/u
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex h-9 items-center overflow-hidden rounded-lg border border-[#bfbed0]">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-full w-10 items-center justify-center text-primary transition-colors hover:bg-[#f5f5f7]"
                      aria-label={`Quitar una unidad de ${item.name}`}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-9 px-2 text-center text-sm font-medium text-primary">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-full w-10 items-center justify-center text-primary transition-colors hover:bg-[#f5f5f7]"
                      aria-label={`Agregar una unidad de ${item.name}`}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-[#f5f5f7] hover:text-destructive"
                    aria-label={`Eliminar ${item.name} del carrito`}
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-[#fbfbfd] px-4 py-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm leading-[1.5] text-muted-foreground">
                  Pago independiente
                </p>
                <span className="text-sm font-bold leading-[1.5] text-primary">
                  {group.businessName}
                </span>
              </div>
              <Link
                to={`/checkout?category=${encodeURIComponent(group.category)}`}
                className="flex h-12 w-full items-center justify-center rounded-xl bg-primary px-4 text-base font-bold leading-[1.5] text-white transition-opacity hover:opacity-90"
              >
                Pagar ${group.subtotal.toFixed(2)}
              </Link>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-[#d9d8e3] bg-white px-4 py-4">
          <h2 className="text-lg font-bold leading-[1.5] text-primary">Resumen</h2>
          <p className="mt-1 text-sm leading-[1.5] text-muted-foreground">
            El pago se procesa por negocio.
          </p>

          <div className="mt-4 space-y-3">
            {cartGroups.map((group) => (
              <div
                key={group.category}
                className="flex items-center justify-between gap-4 text-sm leading-[1.5]"
              >
                <span className="min-w-0 truncate text-muted-foreground">{group.businessName}</span>
                <span className="font-bold text-primary">${group.subtotal.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 border-t border-[#d9d8e3] pt-4">
            <div className="rounded-xl border border-[#d9d8e3] px-4 py-3 text-center text-sm font-bold text-primary">
              ¿Cómo pago todo?
            </div>
            <p className="mt-3 text-center text-xs leading-[1.4] text-muted-foreground">
              Cada negocio se paga por separado para asegurar envíos correctos.
            </p>
          </div>

          <Link
            to="/categorias"
            className="mt-5 flex h-11 w-full items-center justify-center rounded-xl border border-primary px-4 text-sm leading-[1.5] text-primary transition-colors hover:bg-[#f5f5f7]"
          >
            Continuar comprando
          </Link>
        </section>
      </div>
    </div>
  );
}
