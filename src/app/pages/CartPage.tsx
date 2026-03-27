import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CartPage() {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center max-w-md px-[20px] py-[200px]">
          <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-muted-foreground mb-8">
            Agrega productos a tu carrito para continuar con tu compra
          </p>
          <Link
            to="/ofertas"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-8 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Mi Carrito</h1>

      <div className="grid grid-cols-1 gap-8">
        {/* Cart Items */}
        <div>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 p-6 border-b border-border last:border-b-0"
              >
                {/* Product Image */}
                <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <Link
                    to={`/product/${item.id}`}
                    className="text-lg font-medium text-foreground hover:text-primary mb-1 block"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4">
                    Código: {item.code}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-2xl font-medium text-foreground mb-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)} c/u
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive/80 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Resumen del pedido
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium text-foreground">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Envío</span>
                <span className="font-medium text-foreground">Gratis</span>
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-foreground">Total</span>
                  <span className="text-2xl font-bold text-foreground">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-primary text-white text-center py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Proceder al pago
            </Link>

            <Link
              to="/ofertas"
              className="block w-full text-center text-primary py-3 mt-3 hover:underline"
            >
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
