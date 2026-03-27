import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ProfilePageFrame } from '../components/profile/ProfilePageFrame';
import { profileOrders } from '../data/profileData';

export function OrdersPage() {
  return (
    <ProfilePageFrame title="Mis pedidos">
      <div className="mx-auto max-w-[864px] space-y-6">
        {profileOrders.map((order) => (
          <article
            key={order.id}
            className="rounded-xl border border-[#bfbed0] bg-white p-3"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                <span
                  className={`rounded-[999px] px-3 py-1 text-xs leading-[1.4] tracking-[0.0024px] ${order.statusTone} ${order.statusColor}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-20 w-20 overflow-hidden rounded-xl bg-white p-1">
                  <img
                    src={order.products[0].image}
                    alt={order.products[0].name}
                    className="h-full w-full rounded-[4px] object-cover"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <p className="text-xs leading-[1.4] tracking-[0.0024px] text-[#6b6b7b]">
                    {order.products[0].brand && order.products[0].sku
                      ? `${order.products[0].brand} · ${order.products[0].sku}`
                      : order.products[0].id}
                  </p>
                  <h2 className="text-[18px] font-bold leading-[1.5] text-[#6b6b7b]">
                    {order.products[0].name}
                  </h2>
                  <div className="mt-1 flex items-end justify-between gap-4 text-base leading-[1.5] text-primary">
                    <span>{`Cantidad: ${order.products[0].quantity}`}</span>
                    <span className="text-right">{order.products[0].price}</span>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  to={`/profile/orders/${order.id}`}
                  className="inline-flex h-12 w-full items-center justify-center gap-1 rounded-xl border border-primary bg-white px-4 text-base leading-[1.5] text-primary transition-colors hover:bg-primary/5"
                >
                  Ver detalle <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </ProfilePageFrame>
  );
}
