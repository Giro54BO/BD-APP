import {
  Check,
  ChevronRight,
  CreditCard,
  Package2,
  ReceiptText,
  Truck,
} from 'lucide-react';
import { Link, useParams } from 'react-router';
import { ProfilePageFrame } from '../components/profile/ProfilePageFrame';
import { getProfileOrder } from '../data/profileData';

export function OrderDetailsPage() {
  const { orderId } = useParams();
  const order = getProfileOrder(orderId);

  return (
    <ProfilePageFrame title="Mis pedidos">
      <div className="mx-auto flex w-full max-w-[864px] flex-col gap-8">
        <section className="space-y-8">
          <div className="flex flex-col gap-4 rounded-2xl border border-[#d9d8e3] bg-white p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[18px] leading-[1.5] text-primary">{order.id}</p>
              <p className="mt-1 text-sm leading-[1.5] tracking-[0.0014px] text-[#6b6b7b]">{order.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`rounded-full px-4 py-2 text-sm ${order.statusTone} ${order.statusColor}`}>
                {order.status}
              </span>
              <button className="text-primary transition-opacity hover:opacity-80">
                Reordenar pedido
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-[#d9d8e3] bg-white p-6">
            <h2 className="text-[24px] font-bold leading-[1.3] text-primary">Seguimiento</h2>
            <div className="mt-6 space-y-6">
              {order.tracking.map((item, index) => (
                <div key={`${item.status}-${index}`} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4caf50] text-white">
                      <Check className="h-4 w-4" />
                    </div>
                    {index < order.tracking.length - 1 ? (
                      <div className="h-12 w-0.5 bg-[#4caf50]" />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-base leading-[1.5] text-primary">{item.status}</p>
                    <p className="text-sm leading-[1.5] tracking-[0.0014px] text-[#6b6b7b]">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#d9d8e3] bg-white p-6">
            <h2 className="text-[24px] font-bold leading-[1.3] text-primary">Productos</h2>
            <div className="mt-6 space-y-4">
              {order.products.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 rounded-2xl border border-[#d9d8e3] p-3"
                >
                  <div className="h-[98px] w-[98px] overflow-hidden rounded-xl bg-[#f5f5f7]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-base leading-[1.5] text-primary">{product.id}</p>
                    <p className="mt-1 text-[18px] leading-[1.5] text-[#6b6b7b]">{product.name}</p>
                    <div className="mt-3 flex items-center justify-between text-base leading-[1.5] text-[#6b6b7b]">
                      <span>Cantidad: {product.quantity}</span>
                      <span>{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-[#d9d8e3] bg-white p-6">
            <h3 className="text-[24px] font-bold leading-[1.3] text-primary">Resumen</h3>
            <div className="mt-6 space-y-4 text-base leading-[1.5] text-[#6b6b7b]">
              <div className="flex items-center justify-between">
                <span>Subtotal ({order.products[0].quantity})</span>
                <span>{order.subtotal}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Envío</span>
                <span>{order.shipping}</span>
              </div>
            </div>
            <div className="mt-6 border-t border-[#d9d8e3] pt-6">
              <div className="flex items-center justify-between text-2xl font-bold text-primary">
                <span>Total</span>
                <span>{order.total}</span>
              </div>
            </div>
          </div>

          <DetailCard
            title="Entrega"
            icon={Truck}
            rows={[order.delivery.method, order.delivery.address]}
          />

          <DetailCard title="Pago" icon={CreditCard} rows={[order.payment.method]} />

          <DetailCard
            title="Facturación"
            icon={ReceiptText}
            rows={[order.billing.name, order.billing.nit]}
          />

          <Link
            to="/profile/orders"
            className="inline-flex items-center gap-2 text-primary transition-opacity hover:opacity-80"
          >
            Volver a pedidos <ChevronRight className="h-4 w-4" />
          </Link>
        </aside>
      </div>
    </ProfilePageFrame>
  );
}

function DetailCard({
  title,
  icon: Icon,
  rows,
}: {
  title: string;
  icon: typeof Truck;
  rows: string[];
}) {
  return (
    <div className="rounded-2xl border border-[#d9d8e3] bg-white p-6">
      <h3 className="text-[24px] font-bold leading-[1.3] text-primary">{title}</h3>
      <div className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={row} className="flex items-start gap-3 text-[#6b6b7b]">
            <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
            <p className="text-base leading-[1.5]">{row}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
