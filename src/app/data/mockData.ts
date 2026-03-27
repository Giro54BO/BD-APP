export interface Product {
  id: string;
  name: string;
  code: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  stock: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  specifications?: Record<string, string>;
  compatibleVehicles?: Array<{
    brand: string;
    model: string;
    year: number;
  }>;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  gradient: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Moda',
    image: 'fashion accessories',
    gradient: 'linear-gradient(135deg, rgba(128,122,222,0.4) 0%, rgba(48,44,103,1) 100%)'
  },
  {
    id: '2',
    name: 'Autopartes',
    image: 'automotive parts tools',
    gradient: 'linear-gradient(135deg, rgba(128,122,222,0.4) 0%, rgba(48,44,103,1) 100%)'
  },
  {
    id: '3',
    name: 'Electrónica',
    image: 'electronic devices',
    gradient: 'linear-gradient(135deg, rgba(128,122,222,0.4) 0%, rgba(48,44,103,1) 100%)'
  },
  {
    id: '4',
    name: 'Ferretería',
    image: 'hardware tools',
    gradient: 'linear-gradient(135deg, rgba(128,122,222,0.4) 0%, rgba(48,44,103,1) 100%)'
  },
  {
    id: '5',
    name: 'Hogar',
    image: 'home furniture',
    gradient: 'linear-gradient(135deg, rgba(128,122,222,0.4) 0%, rgba(48,44,103,1) 100%)'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Disco de freno ventilado delantero',
    code: 'BDF-4521',
    brand: 'Bosch',
    price: 45.99,
    originalPrice: 54.99,
    discount: 16,
    stock: 15,
    rating: 4.5,
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1682189165011-d4305d2b0ced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFrZSUyMGRpc2MlMjByb3RvcnxlbnwxfHx8fDE3NzQyOTM4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Repuestos automotrices',
    description: 'Disco de freno ventilado de alto rendimiento. Fabricado con hierro fundido de alta calidad, con ventilación interna optimizada para una mejor disipación del calor.',
    specifications: {
      'Diámetro': '280mm',
      'Espesor': '22mm',
      'Altura': '45mm',
      'Material': 'Hierro fundido',
      'Ventilación': 'Interna'
    },
    compatibleVehicles: [
      { brand: 'Toyota', model: 'Corolla', year: 2015 },
      { brand: 'Toyota', model: 'Corolla', year: 2016 },
      { brand: 'Toyota', model: 'Corolla', year: 2017 },
      { brand: 'Toyota', model: 'Corolla', year: 2018 }
    ]
  },
  {
    id: '2',
    name: 'Filtro de aceite premium',
    code: 'FAP-8843',
    brand: 'Oil Filter',
    price: 8.50,
    stock: 42,
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1764869427688-3e97480f4b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBmaWx0ZXIlMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NDM5MzQ0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Repuestos automotrices',
    description: 'Filtro de aceite de alta eficiencia con tecnología de filtración avanzada.',
    compatibleVehicles: [
      { brand: 'Honda', model: 'Civic', year: 2018 },
      { brand: 'Honda', model: 'Accord', year: 2019 }
    ]
  },
  {
    id: '3',
    name: 'Alternador remanufacturado 90A',
    code: 'ALT-9012',
    brand: 'Auto Parts',
    price: 187.00,
    originalPrice: 220.00,
    discount: 15,
    stock: 8,
    rating: 4.6,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1663642775693-6628f65358be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhbHRlcm5hdG9yfGVufDF8fHx8MTc3NDM4NDg0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Repuestos automotrices',
    description: 'Alternador remanufacturado de 90 amperios con garantía extendida.',
    compatibleVehicles: [
      { brand: 'Ford', model: 'Focus', year: 2016 },
      { brand: 'Ford', model: 'Fiesta', year: 2017 }
    ]
  },
  {
    id: '4',
    name: 'Kit de embrague completo',
    code: 'KEC-5521',
    brand: 'Clutch Pro',
    price: 156.00,
    stock: 12,
    rating: 4.7,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1659807888248-d989ec66ce19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbHV0Y2glMjBraXQlMjBhdXRvbW90aXZlfGVufDF8fHx8MTc3NDM5MzQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Repuestos automotrices',
    description: 'Kit de embrague completo que incluye disco, plato y collarin.',
    compatibleVehicles: [
      { brand: 'Chevrolet', model: 'Spark', year: 2015 },
      { brand: 'Chevrolet', model: 'Spark', year: 2016 }
    ]
  },
  {
    id: '5',
    name: 'Pastillas de freno cerámicas',
    code: 'PFC-7789',
    brand: 'Bosch',
    price: 35.50,
    originalPrice: 42.00,
    discount: 15,
    stock: 28,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1754287425557-b45edb12cd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwYnJha2UlMjBwYWRzfGVufDF8fHx8MTc3NDM5MzQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Repuestos automotrices',
    description: 'Pastillas de freno cerámicas de alto rendimiento con bajo nivel de ruido.',
    compatibleVehicles: [
      { brand: 'Nissan', model: 'Sentra', year: 2017 },
      { brand: 'Nissan', model: 'Versa', year: 2018 }
    ]
  },
  {
    id: '6',
    name: 'Batería 12V 60Ah',
    code: 'BAT-1245',
    brand: 'Power Cell',
    price: 89.99,
    stock: 18,
    rating: 4.4,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1597766325363-f5576d851d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBiYXR0ZXJ5fGVufDF8fHx8MTc3NDM4ODgwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Repuestos automotrices',
    description: 'Batería de arranque libre de mantenimiento con tecnología AGM.',
    compatibleVehicles: [
      { brand: 'Hyundai', model: 'Accent', year: 2016 },
      { brand: 'Kia', model: 'Rio', year: 2017 }
    ]
  },
  // Moda Products
  {
    id: '7',
    name: 'Chaqueta deportiva premium',
    code: 'MOD-1001',
    brand: 'SportStyle',
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    stock: 25,
    rating: 4.7,
    reviews: 134,
    image: 'https://images.unsplash.com/photo-1763771522867-c26bf75f12bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBhcHBhcmVsfGVufDF8fHx8MTc3NDQ4NzAyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Moda',
    description: 'Chaqueta deportiva de alta calidad con diseño moderno y materiales resistentes.'
  },
  {
    id: '8',
    name: 'Zapatillas urbanas',
    code: 'MOD-1002',
    brand: 'UrbanFeet',
    price: 64.99,
    stock: 35,
    rating: 4.6,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hvZXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzQ0OTIyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Moda',
    description: 'Zapatillas urbanas cómodas con suela antideslizante y diseño versátil.'
  },
  {
    id: '9',
    name: 'Mochila multifuncional',
    code: 'MOD-1003',
    brand: 'TravelPro',
    price: 45.50,
    originalPrice: 59.99,
    discount: 24,
    stock: 18,
    rating: 4.8,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1769134444717-c95e5cc9736c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMGZhc2hpb24lMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzQ1NTIzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Moda',
    description: 'Mochila espaciosa con múltiples compartimentos y diseño ergonómico.'
  },
  // Electrónica Products
  {
    id: '10',
    name: 'Smartphone Pro Max 5G',
    code: 'ELE-2001',
    brand: 'TechPhone',
    price: 599.99,
    originalPrice: 799.99,
    discount: 25,
    stock: 12,
    rating: 4.9,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1750744788280-aa47aba79a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwc21hcnRwaG9uZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzQ1NTIzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electrónica',
    description: 'Smartphone de última generación con procesador potente y cámara profesional.'
  },
  {
    id: '11',
    name: 'Auriculares inalámbricos',
    code: 'ELE-2002',
    brand: 'AudioMax',
    price: 129.99,
    stock: 28,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1764557159396-419b85356035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwd2lyZWxlc3MlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NzQ1NTIzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electrónica',
    description: 'Auriculares inalámbricos con cancelación de ruido y batería de larga duración.'
  },
  {
    id: '12',
    name: 'Smartwatch deportivo',
    code: 'ELE-2003',
    brand: 'FitTech',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    stock: 15,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1758525747606-bd5d801ca87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwd2VhcmFibGUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDQ5NjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Electrónica',
    description: 'Reloj inteligente con múltiples funciones deportivas y monitor de salud.'
  },
  // Ferretería Products
  {
    id: '13',
    name: 'Taladro eléctrico profesional',
    code: 'FER-3001',
    brand: 'PowerTools',
    price: 149.99,
    stock: 20,
    rating: 4.9,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1593307315564-c96172dc89dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd2FyZSUyMHRvb2xzJTIwZHJpbGx8ZW58MXx8fHwxNzc0NTUyMzA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Ferretería',
    description: 'Taladro eléctrico de alto rendimiento con velocidad variable y mandril de precisión.'
  },
  {
    id: '14',
    name: 'Atornillador inalámbrico',
    code: 'FER-3002',
    brand: 'HandyPro',
    price: 89.99,
    originalPrice: 109.99,
    discount: 18,
    stock: 32,
    rating: 4.6,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1770763233593-74dfd0da7bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGRyaWxsJTIwdG9vbHN8ZW58MXx8fHwxNzc0NDYzNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Ferretería',
    description: 'Atornillador inalámbrico compacto con batería de litio de larga duración.'
  },
  {
    id: '15',
    name: 'Juego de herramientas 120 piezas',
    code: 'FER-3003',
    brand: 'ToolMaster',
    price: 119.99,
    stock: 14,
    rating: 4.8,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1584677191047-38f48d0db64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1tZXIlMjBzY3Jld2RyaXZlciUyMHRvb2xib3h8ZW58MXx8fHwxNzc0NTUyMzExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Ferretería',
    description: 'Set completo de herramientas profesionales en maletín organizado.'
  },
  // Hogar Products
  {
    id: '16',
    name: 'Sofá moderno 3 puestos',
    code: 'HOG-4001',
    brand: 'HomeLiving',
    price: 899.99,
    originalPrice: 1199.99,
    discount: 25,
    stock: 8,
    rating: 4.9,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1702865071803-cb154cd45f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZnVybml0dXJlJTIwZGVjb3J8ZW58MXx8fHwxNzc0NTQ5NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hogar',
    description: 'Sofá moderno y cómodo con tapizado premium y estructura resistente.'
  },
  {
    id: '17',
    name: 'Lámpara de pie decorativa',
    code: 'HOG-4002',
    brand: 'LightDesign',
    price: 79.99,
    stock: 22,
    rating: 4.7,
    reviews: 53,
    image: 'https://images.unsplash.com/photo-1763060722627-e06bfa20faaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYW1wJTIwbGlnaHRpbmd8ZW58MXx8fHwxNzc0NTEwNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hogar',
    description: 'Lámpara de pie con diseño contemporáneo y luz regulable.'
  },
  {
    id: '18',
    name: 'Licuadora de alta potencia',
    code: 'HOG-4003',
    brand: 'KitchenPro',
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    stock: 16,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1773098587137-1a62971cfedb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlcyUyMGJsZW5kZXJ8ZW58MXx8fHwxNzc0NTUyMzExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hogar',
    description: 'Licuadora potente con varias velocidades y accesorios para cocina.'
  }
];

export const brands = [
  { name: 'Bosch', logo: 'bosch logo' },
  { name: 'Tigre', logo: 'tigre logo' },
  { name: 'Quality', logo: 'quality logo' },
  { name: 'Spicer', logo: 'spicer logo' },
  { name: 'GPC', logo: 'gpc logo' },
  { name: 'ITW', logo: 'itw logo' }
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  detailImage?: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '¿Cada cuanto cambiar el aceite de tu vehículo?',
    excerpt: 'Aprende a identificar cuándo es el momento ideal para cambiar el aceite de tu vehículo y evitar daños en el motor.',
    content: 'Los teléfonos móviles han pasado a ser una herramienta indispensable en nuestro día a día. Tengamos, estudiamos, gestionamos finanzas, almacenamos información, e incluso nos sirve de calculadora. Y aunque los usamos todos el día para hacer múltiples tareas diferentes a que se crearon muchos, todavía dejamos mucho de aprovechar su batería. Ahora con instalados desde que, aunque muchos pueden durar por una batería perdida en un momento dado, favorita o otras tienen que cargar todos días para múltiples tareas. Acortar algunos formas de tres días que mejoren formas tu batería al límite, el trabajo depende del smartphone y simplemente no quedaste más día sin batería o alargue alimente la vida de tu batería en su smartphone',
    image: 'https://images.unsplash.com/photo-1613214293055-5678e2f6d7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBvaWwlMjBjaGFuZ2V8ZW58MXx8fHwxNzc0NTQ5NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    detailImage: 'https://images.unsplash.com/photo-1613214293055-5678e2f6d7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBvaWwlMjBjaGFuZ2V8ZW58MXx8fHwxNzc0NTQ5NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '23/05/2024',
    readTime: '5 Min de lectura',
    category: 'Autopartes'
  },
  {
    id: '2',
    title: '10 consejos para mantener tus herramientas como nuevas',
    excerpt: 'Aprende a identificar cuándo es el momento ideal para cambiar el aceite de tu vehículo y evitar daños en el motor.',
    content: 'Las herramientas son una inversión importante para cualquier profesional o aficionado al bricolaje. Mantenerlas en buen estado no solo prolonga su vida útil, sino que también garantiza su rendimiento óptimo. En este artículo te compartimos 10 consejos prácticos para mantener tus herramientas como nuevas.',
    image: 'https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29scyUyMGhhbW1lciUyMHdvcmtzaG9wfGVufDF8fHx8MTc3NDU0OTUwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    detailImage: 'https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b29scyUyMGhhbW1lciUyMHdvcmtzaG9wfGVufDF8fHx8MTc3NDU0OTUwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '20/05/2024',
    readTime: '4 Min de lectura',
    category: 'Ferretería'
  },
  {
    id: '3',
    title: '7 trucos para ahorrar la batería de tu smartphone',
    excerpt: 'Aprende a identificar cuándo es el momento ideal para cambiar el aceite de tu vehículo y evitar daños en el motor.',
    content: 'Los teléfonos móviles han pasado a ser una herramienta indispensable en nuestro día a día. Tengamos, estudiamos, gestionamos finanzas, almacenamos información, e incluso nos sirve de calculadora. Y aunque los usamos todos el día para hacer múltiples tareas diferentes a que se crearon muchos, todavía dejamos mucho de aprovechar su batería. Si eres de los que siempre llevan tu batería al límite, el trabajo depende del smartphone y simplemente no quedaste sin batería, estas formas pueden ayudarte.',
    image: 'https://images.unsplash.com/photo-1774137909186-3fe3ae3ddc08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYmF0dGVyeSUyMGNoYXJnaW5nfGVufDF8fHx8MTc3NDUyMzU4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    detailImage: 'https://images.unsplash.com/photo-1774137909186-3fe3ae3ddc08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYmF0dGVyeSUyMGNoYXJnaW5nfGVufDF8fHx8MTc3NDUyMzU4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    date: '18/05/2024',
    readTime: '6 Min de lectura',
    category: 'Electrónica'
  }
];