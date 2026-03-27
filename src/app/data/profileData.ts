export interface ProfileVehicle {
  id: string;
  name: string;
}

export interface ProfileOrderProduct {
  id: string;
  brand?: string;
  sku?: string;
  name: string;
  quantity: number;
  price: string;
  image: string;
}

export interface ProfileOrderTrackingItem {
  status: string;
  date: string;
  completed: boolean;
}

export interface ProfileOrder {
  id: string;
  date: string;
  status: string;
  statusColor: string;
  statusTone: string;
  products: ProfileOrderProduct[];
  subtotal: string;
  shipping: string;
  total: string;
  delivery: {
    method: string;
    address: string;
  };
  payment: {
    method: string;
  };
  billing: {
    name: string;
    nit: string;
  };
  tracking: ProfileOrderTrackingItem[];
}

export const initialVehicles: ProfileVehicle[] = [
  { id: '1', name: 'Toyota Corolla CE, 2017' },
  { id: '2', name: 'Honda Civic, 2016' },
  { id: '3', name: 'Hyundai Tucson, 2021' },
];

export const profileOrders: ProfileOrder[] = [
  {
    id: 'BD-2025-00144',
    date: '15 de marzo, 2026 - 13:00 PM',
    status: 'Confirmado',
    statusColor: 'text-[#2E7D32]',
    statusTone: 'bg-[#E8F5E9]',
    products: [
      {
        id: 'BD-2025-00144',
        brand: 'Bosch',
        sku: 'BDF-4521',
        name: 'Disco de freno ventilado delantero',
        quantity: 6,
        price: '$ 45.99',
        image:
          'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFrZSUyMGRpc2N8ZW58MXx8fHwxNzQyNzY2OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
    subtotal: '$ 45.99',
    shipping: 'Gratis',
    total: '$ 45.99',
    delivery: {
      method: 'Envío a domicilio',
      address: 'Avenida Banzer, 4to anillo, Santa Cruz de la Sierra',
    },
    payment: {
      method: 'Pago con tarjeta',
    },
    billing: {
      name: 'Carlos Alberto Ramirez Suarez',
      nit: 'NIT: 8176242',
    },
    tracking: [
      { status: 'Pedido recibido', date: '15 de marzo, 13:00', completed: true },
      { status: 'Pago confirmado', date: '15 de marzo, 13:12', completed: true },
      { status: 'En preparación', date: '15 de marzo, 14:00', completed: true },
      { status: 'Confirmado', date: '15 de marzo, 15:45', completed: true },
    ],
  },
  {
    id: 'BD-2025-00143',
    date: '17 de abril, 2024 - 20:30 PM',
    status: 'Enviado',
    statusColor: 'text-[#D97706]',
    statusTone: 'bg-[#FFF4E5]',
    products: [
      {
        id: 'BD-2025-00143',
        brand: 'Mahle',
        sku: 'FOA-8834',
        name: 'Filtro de aceite premium',
        quantity: 2,
        price: '$ 8.50',
        image:
          'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBmaWx0ZXJ8ZW58MXx8fHwxNzQyNzY2OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      },
    ],
    subtotal: '$ 234.99',
    shipping: 'Gratis',
    total: '$ 234.99',
    delivery: {
      method: 'Envío a domicilio',
      address: 'Sobre sexto anillo, a una cuadra de la Radial 17 1/2 Esquina Calle 8',
    },
    payment: {
      method: 'Pago por QR',
    },
    billing: {
      name: 'Carlos Alberto Ramirez Suarez',
      nit: 'NIT: 8176242',
    },
    tracking: [
      { status: 'Pedido recibido', date: '10 de marzo, 16:00', completed: true },
      { status: 'Pago confirmado', date: '10 de marzo, 16:15', completed: true },
      { status: 'En preparación', date: '10 de marzo, 16:30', completed: true },
      { status: 'Enviado', date: '15 de marzo, 09:00', completed: true },
      { status: 'Entregado', date: '16 de marzo, 16:00', completed: true },
    ],
  },
];

export function getProfileOrder(orderId?: string) {
  return profileOrders.find((order) => order.id === orderId) ?? profileOrders[1];
}
