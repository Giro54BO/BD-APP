import { type ReactNode, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Circle,
  CreditCard,
  QrCode,
  Store,
  Truck,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type CheckoutStep = 1 | 2 | 3 | 4;
type DeliveryMode = 'home' | 'store';
type PaymentMethod = 'card' | 'qr' | 'paypal';

const stepLabels = [
  { id: 1, label: 'Datos' },
  { id: 2, label: 'Entrega' },
  { id: 3, label: 'Pago' },
  { id: 4, label: 'Confirmar' },
] as const;

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, cartTotal } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(1);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<DeliveryMode>('home');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('qr');
  const [formData, setFormData] = useState({
    fullName: 'Pedro Verastegui',
    email: 'pedro@email.com',
    phone: '+591 72122210',
    nit: '1234567',
    billingName: 'Pedro Verastegui',
    homeAddress: 'Calle, numero de casa...',
    homeReference: 'Calle, numero de casa...',
    storeLocation: 'Sucursal Equipetrol',
    cardNumber: '1234 5678 9012 3456',
    cardName: 'Pedro Verastegui',
    cardExpiry: '09/28',
    cardCVV: '123',
  });

  useEffect(() => {
    if (items.length === 0) {
      navigate('/cart');
    }
  }, [items.length, navigate]);

  const itemCount = useMemo(
    () => items.reduce((count, item) => count + item.quantity, 0),
    [items]
  );

  const shippingCost = deliveryMode === 'home' ? 20 : 0;
  const total = cartTotal + shippingCost;

  const displayItems = useMemo(() => {
    if (items.length > 0) {
      return items;
    }

    return [];
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const goBack = () => {
    if (isOrderConfirmed) {
      return;
    }

    if (currentStep === 1) {
      navigate('/cart');
      return;
    }

    setCurrentStep((current) => Math.max(1, current - 1) as CheckoutStep);
  };

  const goNext = () => {
    if (currentStep === 4) {
      setIsOrderConfirmed(true);
      return;
    }

    setCurrentStep((current) => Math.min(4, current + 1) as CheckoutStep);
  };

  const handleConfirmOrder = () => {
    setIsOrderConfirmed(true);
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <section className="rounded-xl border border-[#bfbed0] bg-white px-3 py-6">
          <h2 className="text-[24px] font-bold leading-[1.3] text-primary">
            Datos del cliente
          </h2>
          <div className="mt-6 space-y-6">
            <Field
              label="Nombre completo *"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <Field
              label="Correo electrónico *"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Field
              label="Teléfono *"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <Field
              label="Documento/NIT *"
              name="nit"
              value={formData.nit}
              onChange={handleInputChange}
            />

            <h3 className="pt-2 text-[24px] font-bold leading-[1.3] text-primary">
              Datos de facturación
            </h3>
            <Field
              label="Razón social o nombre *"
              name="billingName"
              value={formData.billingName}
              onChange={handleInputChange}
            />
            <Field
              label="Correo de facturación *"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </section>
      );
    }

    if (currentStep === 2) {
      return (
        <section className="rounded-xl border border-[#bfbed0] bg-white px-3 py-6">
          <h2 className="text-[24px] font-bold leading-[1.3] text-primary">
            Modalidad de entrega
          </h2>
          <div className="mt-6 space-y-6">
            <DeliveryOption
              icon={<Truck className="h-6 w-6" />}
              title="Envió a domicilio"
              subtitle="Entrega en 3 a 5 días hábiles"
              price="$ 20.00"
              selected={deliveryMode === 'home'}
              onClick={() => setDeliveryMode('home')}
            />
            <DeliveryOption
              icon={<Store className="h-6 w-6" />}
              title="Retiro en sucursal"
              subtitle="Disponible en 24 horas"
              price="Gratis"
              selected={deliveryMode === 'store'}
              onClick={() => setDeliveryMode('store')}
            />

            <h3 className="pt-2 text-[24px] font-bold leading-[1.3] text-primary">
              {deliveryMode === 'home' ? 'Dirección de envió' : 'Sucursal'}
            </h3>

            {deliveryMode === 'home' ? (
              <div className="space-y-6">
                <Field
                  label="Dirección de entrega del pedido *"
                  name="homeAddress"
                  value={formData.homeAddress}
                  onChange={handleInputChange}
                />
                <Field
                  label="Referencia (opcional)"
                  name="homeReference"
                  value={formData.homeReference}
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <Field
                label="Sucursal seleccionada *"
                name="storeLocation"
                value={formData.storeLocation}
                onChange={handleInputChange}
              />
            )}
          </div>
        </section>
      );
    }

    if (currentStep === 3) {
      return (
        <section className="rounded-xl border border-[#bfbed0] bg-white px-3 py-6">
          <h2 className="text-[24px] font-bold leading-[1.3] text-primary">
            Método de pago
          </h2>
          <div className="mt-6 space-y-6">
            <PaymentOption
              icon={<CreditCard className="h-6 w-6" />}
              title="Tarjeta"
              selected={paymentMethod === 'card'}
              onClick={() => setPaymentMethod('card')}
            />
            <PaymentOption
              icon={<QrCode className="h-6 w-6" />}
              title="QR"
              selected={paymentMethod === 'qr'}
              onClick={() => setPaymentMethod('qr')}
            />
            <PaymentOption
              icon={<span className="text-sm font-bold">PayPal</span>}
              title=""
              selected={paymentMethod === 'paypal'}
              onClick={() => setPaymentMethod('paypal')}
            />

            {paymentMethod === 'card' ? (
              <>
                <h3 className="pt-2 text-[24px] font-bold leading-[1.3] text-primary">
                  Datos de tu tarjeta
                </h3>
                <div className="space-y-6">
                  <Field
                    label="Número de tarjeta *"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                  <Field
                    label="Nombre del titular *"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                  />
                  <Field
                    label="Fecha de vencimiento *"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                  />
                  <Field
                    label="CVV *"
                    name="cardCVV"
                    value={formData.cardCVV}
                    onChange={handleInputChange}
                  />
                  <div className="space-y-4">
                    <h4 className="text-[24px] font-bold leading-[1.3] text-primary">
                      Certificación de seguridad
                    </h4>
                    <div className="rounded-xl border border-[#bfbed0] bg-[#fafafa] px-4 py-5 text-center text-sm text-muted-foreground">
                      Pago protegido con cifrado y validación bancaria.
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {paymentMethod === 'qr' ? (
              <>
                <ContextMessage>
                  Completa el pago escaneando el código QR en el siguiente paso.
                </ContextMessage>
                <div className="space-y-3">
                  <h3 className="text-[24px] font-bold leading-[1.3] text-primary">
                    Instrucciones de pago
                  </h3>
                  <p className="text-base leading-[1.5] text-muted-foreground">
                    Abre la app de tu banco, escanea el código QR y confirma el pago. Luego podrás revisar el pedido antes de cerrar la compra.
                  </p>
                  <div className="rounded-xl border border-[#bfbed0] bg-[#fafafa] px-4 py-8 text-center">
                    <QrCode className="mx-auto h-24 w-24 text-primary" />
                    <p className="mt-4 text-sm leading-[1.5] tracking-[0.0014px] text-muted-foreground">
                      Código QR listo para demo
                    </p>
                  </div>
                </div>
              </>
            ) : null}

            {paymentMethod === 'paypal' ? (
              <>
                <ContextMessage>
                  Puedes usar PayPal para completar el demo sin ingresar datos reales.
                </ContextMessage>
                <div className="space-y-3">
                  <h3 className="text-[24px] font-bold leading-[1.3] text-primary">
                    Instrucciones de pago
                  </h3>
                  <p className="text-base leading-[1.5] text-muted-foreground">
                    Ingresa a tu cuenta usando el botón de abajo, sigue los pasos de PayPal y vuelve a BigDam para revisar tu compra antes de confirmar.
                  </p>
                  <div className="rounded-xl border border-[#bfbed0] bg-[#fafafa] px-4 py-8 text-center">
                    <div className="mx-auto inline-flex rounded-md bg-[#ffc439] px-6 py-3 text-base font-bold text-[#111827]">
                      PayPal
                    </div>
                    <p className="mt-5 text-xs leading-[1.4] tracking-[0.0024px] text-muted-foreground">
                      Powered by PayPal
                    </p>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </section>
      );
    }

    return (
      <section className="rounded-xl border border-[#bfbed0] bg-white px-3 py-6">
        <h2 className="text-[24px] font-bold leading-[1.3] text-primary">
          Confirmar pedido
        </h2>
        <div className="mt-6 space-y-6">
          <div className="space-y-6">
            {displayItems.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-xl bg-white">
                <div className="h-20 w-20 overflow-hidden rounded-xl bg-[#f0f0f2]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full mix-blend-multiply"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs leading-[1.4] tracking-[0.0024px] text-muted-foreground">
                    {item.code}
                  </p>
                  <p className="text-base leading-[1.5] text-primary">{item.name}</p>
                  <div className="flex items-center justify-between text-base leading-[1.5] text-primary">
                    <span>Cantidad: {item.quantity}</span>
                    <span>$ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#bfbed0] pt-6 text-primary">
            <div className="flex items-center gap-2">
              <Truck className="h-6 w-6" />
              <span className="text-[18px] leading-[1.5]">
                {deliveryMode === 'home' ? 'Envió a domicilio' : 'Retiro en sucursal'}
              </span>
            </div>
            <p className="mt-1 text-base leading-[1.5] text-muted-foreground">
              {deliveryMode === 'home'
                ? 'Entrega en 3 a 5 días hábiles'
                : 'Disponible en 24 horas'}
            </p>
          </div>

          <div className="border-t border-[#bfbed0] pt-6 text-primary">
            <div className="flex items-center gap-2">
              {paymentMethod === 'card' ? (
                <CreditCard className="h-6 w-6" />
              ) : (
                <QrCode className="h-6 w-6" />
              )}
              <span className="text-[18px] leading-[1.5]">
                {paymentMethod === 'card'
                  ? 'Pago con tarjeta'
                  : paymentMethod === 'paypal'
                    ? 'Pago con PayPal'
                    : 'Pago QR'}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {!isOrderConfirmed ? (
        <div className="sticky top-0 z-40 border-b border-[#bfbed0] bg-white">
          <div className="mx-auto flex w-full max-w-[428px] items-center justify-between px-5 py-4">
            <button
              type="button"
              onClick={goBack}
              aria-label="Volver"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-primary transition-colors hover:bg-[#f5f5f7]"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="mx-2 flex-1 text-center text-[24px] font-bold leading-[1.3] text-primary">
              Checkout
            </h1>
            <div className="h-8 w-8 flex-shrink-0" aria-hidden="true" />
          </div>
        </div>
      ) : null}

      <div className="mx-auto w-full max-w-[412px] px-6 pb-36 pt-6">
        {isOrderConfirmed ? (
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#edf8e9] text-[#2fae04]">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="mt-4 text-[24px] font-bold leading-[1.3] text-primary">
                Pedido confirmado
              </h2>
              <p className="mt-2 text-base leading-[1.5] text-muted-foreground">
                Tu pedido ha sido registrado correctamente y está siendo procesado.
              </p>
            </div>

            <div className="rounded-xl border border-[#bfbed0] px-6 py-6">
              <div className="space-y-6 text-primary">
                <InfoRow label="Número de pedido" value="BD-2025-00143" />
                <InfoRow label="Estado" value="Confirmado" badge />
                <InfoRow label="Entrega estimada" value="3-5 días hábiles" />
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to="/profile/orders"
                className="flex h-[52px] w-full items-center justify-center rounded-xl bg-primary px-4 text-base leading-[1.5] text-white transition-opacity hover:opacity-90"
              >
                Ver pedido
              </Link>
              <Link
                to="/"
                className="flex h-[52px] w-full items-center justify-center rounded-xl border border-primary bg-white px-4 text-base leading-[1.5] text-primary transition-colors hover:bg-[#f5f5f7]"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        ) : (
          <>
        <div className="mb-5 flex items-center justify-between rounded-xl px-1 py-6">
          {stepLabels.map((step, index) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            const isUpcoming = step.id > currentStep;

            return (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center gap-1">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-sm leading-[1.5] ${
                      isCompleted
                        ? 'border-primary bg-primary text-white'
                        : isCurrent
                          ? 'border-primary text-primary'
                          : 'border-[#6b6b7b] text-[#6b6b7b]'
                    }`}
                  >
                    {isCompleted ? <Check className="h-4 w-4" /> : step.id}
                  </div>
                  <span
                    className={`text-sm leading-[1.5] tracking-[0.0014px] ${
                      isUpcoming ? 'text-[#6b6b7b]' : 'text-primary'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < stepLabels.length - 1 ? (
                  <div className="mx-2 h-px w-6 bg-[#bfbed0]" />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="space-y-6">
          {renderStepContent()}

          <SummaryCard
            itemCount={itemCount}
            subtotal={cartTotal}
            shippingCost={shippingCost}
            total={total}
          />

          <div className="space-y-4">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((current) => Math.max(1, current - 1) as CheckoutStep)}
                className="flex h-12 w-full items-center justify-center gap-1 rounded-xl border border-primary bg-white px-4 text-base leading-[1.5] text-primary transition-colors hover:bg-[#f5f5f7]"
              >
                <span>Anterior</span>
                <ArrowLeft className="h-5 w-5" />
              </button>
            ) : null}

            <button
              type="button"
              onClick={currentStep === 4 ? handleConfirmOrder : goNext}
              className="flex h-12 w-full items-center justify-center gap-1 rounded-xl bg-primary px-4 text-base leading-[1.5] text-white transition-opacity hover:opacity-90"
            >
              <span>{currentStep === 4 ? 'Confirmar pedido' : 'Continuar'}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
          </>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm leading-[1.5] tracking-[0.0014px] text-primary">{label}</span>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="h-[52px] rounded-xl border border-primary bg-[#fafafa] px-3 text-sm leading-[1.5] tracking-[0.0014px] text-primary outline-none placeholder:text-muted-foreground"
      />
    </label>
  );
}

function DeliveryOption({
  icon,
  title,
  subtitle,
  price,
  selected,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  price: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[84px] w-full items-center gap-3 rounded-xl border p-4 text-left ${
        selected
          ? 'border-2 border-primary bg-[#f0f0f2] text-primary'
          : 'border-[#6b6b7b] bg-white text-[#6b6b7b]'
      }`}
    >
      <div className="text-inherit">{selected ? <CheckCircle2 className="h-6 w-6" /> : <Circle className="h-6 w-6" />}</div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1">
          {icon}
          <span className="text-[18px] leading-[1.5]">{title}</span>
        </div>
        <p className="mt-1 text-base leading-[1.5]">{subtitle}</p>
      </div>
      <span className="text-base leading-[1.5]">{price}</span>
    </button>
  );
}

function PaymentOption({
  icon,
  title,
  selected,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[54px] w-full items-center gap-3 rounded-xl border px-4 ${
        selected ? 'border-2 border-primary bg-[#f0f0f2] text-primary' : 'border-[#6b6b7b] text-[#6b6b7b]'
      }`}
    >
      {selected ? <CheckCircle2 className="h-6 w-6" /> : <Circle className="h-6 w-6" />}
      {title ? <span className="text-[18px] leading-[1.5]">{title}</span> : null}
      <div className="text-inherit">{icon}</div>
    </button>
  );
}

function SummaryCard({
  itemCount,
  subtotal,
  shippingCost,
  total,
}: {
  itemCount: number;
  subtotal: number;
  shippingCost: number;
  total: number;
}) {
  return (
    <section className="rounded-xl border border-[#bfbed0] bg-white px-6 py-6">
      <h2 className="text-[24px] font-bold leading-[1.3] text-primary">Resumen del pedido</h2>
      <div className="mt-6 space-y-6 text-[18px] leading-[1.5] text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>Subtotal ({itemCount})</span>
          <span>$ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Envió</span>
          <span>{shippingCost === 0 ? 'Gratis' : `$ ${shippingCost.toFixed(2)}`}</span>
        </div>
        <div className="border-t border-[#bfbed0] pt-6 text-[24px] font-bold leading-[1.3] text-muted-foreground">
          <div className="flex items-center justify-between">
            <span>Total</span>
            <span>$ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContextMessage({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-[#bfbed0] bg-[#f5f5f7] px-4 py-4 text-sm leading-[1.5] tracking-[0.0014px] text-muted-foreground">
      {children}
    </div>
  );
}

function InfoRow({
  label,
  value,
  badge = false,
}: {
  label: string;
  value: string;
  badge?: boolean;
}) {
  return (
    <div className="border-b border-[#bfbed0] pb-5 last:border-b-0 last:pb-0">
      <p className="text-[18px] leading-[1.5] text-primary">{label}</p>
      {badge ? (
        <span className="mt-2 inline-flex rounded-[120px] bg-[#edf8e9] px-3 py-1 text-sm leading-[1.5] tracking-[0.0014px] text-[#2fae04]">
          {value}
        </span>
      ) : (
        <p className="mt-1 text-[24px] font-bold leading-[1.3] text-primary">{value}</p>
      )}
    </div>
  );
}
