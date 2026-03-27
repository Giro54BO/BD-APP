import { useState } from 'react';
import { Link } from 'react-router';
import svgPaths from '../../imports/svg-ouudiuwxq0';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  icon: string;
  iconPath: string;
  title: string;
  items: FAQItem[];
}

export function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: number | null }>({});

  const faqSections: FAQSection[] = [
    {
      icon: 'verified',
      iconPath: svgPaths.p36ce9c00,
      title: 'Sobre los productos',
      items: [
        {
          question: '¿Qué tipo de productos puedo encontrar en la tienda?',
          answer: 'Ofrecemos una amplia variedad de productos cuidadosamente seleccionados, con calidad garantizada y actualizaciones constantes en nuestro catálogo.'
        },
        {
          question: '¿Los productos cuentan con garantía?',
          answer: 'Sí, todos nuestros productos cuentan con garantía del fabricante. Los términos específicos varían según el producto.'
        },
        {
          question: '¿Los productos son originales?',
          answer: 'Sí, trabajamos directamente con fabricantes autorizados y distribuidores oficiales para garantizar la autenticidad de todos nuestros productos.'
        }
      ]
    },
    {
      icon: 'credit_card',
      iconPath: svgPaths.p31b34200,
      title: 'Pagos',
      items: [
        {
          question: '¿Qué métodos de pago están disponibles?',
          answer: 'Aceptamos diferentes métodos de pago como transferencias bancarias, pagos con tarjeta y opciones en cuotas (según disponibilidad).'
        },
        {
          question: '¿Es seguro pagar en la plataforma?',
          answer: 'Sí, utilizamos encriptación SSL y sistemas de seguridad certificados para proteger tu información de pago.'
        },
        {
          question: '¿Puedo pagar en cuotas?',
          answer: 'Sí, ofrecemos opciones de pago en cuotas para compras elegibles. Las opciones disponibles se mostrarán durante el proceso de pago.'
        }
      ]
    },
    {
      icon: 'package',
      iconPath: svgPaths.p3290d0f0,
      title: 'Envíos',
      items: [
        {
          question: '¿Realizan envíos a todo el país?',
          answer: 'Sí, realizamos envíos a nivel nacional. Las zonas disponibles y costos se detallan durante el proceso de compra.'
        },
        {
          question: '¿Cuánto tarda en llegar mi pedido?',
          answer: 'El tiempo de entrega varía según tu ubicación, generalmente entre 3 a 7 días hábiles para zonas urbanas.'
        },
        {
          question: '¿Puedo hacer seguimiento a mi pedido?',
          answer: 'Sí, una vez confirmado tu pedido recibirás un código de seguimiento para rastrear tu envío en tiempo real.'
        }
      ]
    },
    {
      icon: 'restart_alt',
      iconPath: svgPaths.p1f772b00,
      title: 'Cambios y devoluciones',
      items: [
        {
          question: '¿Puedo cambiar o devolver un producto?',
          answer: 'Sí, aceptamos cambios o devoluciones dentro de un plazo determinado, siempre que el producto esté en perfectas condiciones.'
        },
        {
          question: '¿Qué hago si mi producto llega dañado o incorrecto?',
          answer: 'Contáctanos inmediatamente a través de nuestro servicio de atención al cliente con fotos del producto. Gestionaremos un cambio o devolución sin costo adicional.'
        },
        {
          question: '¿Quién cubre los costos de envío en una devolución?',
          answer: 'Si el producto llega defectuoso o incorrecto, cubrimos los costos de envío. Para otros casos, consulta nuestras políticas de devolución.'
        }
      ]
    }
  ];

  const toggleQuestion = (sectionIndex: number, itemIndex: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === itemIndex ? null : itemIndex
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
    console.log('Searching:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-input-background">
      {/* Header Section */}
      <div className="bg-background border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-8 lg:py-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            ¿Cómo podemos ayudarte?
          </h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-[800px]">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por marca, modelo, año o motor..."
                className="w-full h-[52px] bg-input-background border border-primary rounded-xl px-4 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6"
              >
                <svg className="block size-full" fill="none" viewBox="0 0 17.192 17.1923">
                  <path d={svgPaths.p34e8e200} fill="var(--color-primary)" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 py-8 lg:py-12">
        {/* Preguntas Frecuentes Title */}
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Preguntas Frecuentes
        </h2>

        {/* FAQ Sections */}
        <div className="space-y-6 mb-12">
          {faqSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-card rounded-3xl border border-border p-6 lg:p-12"
            >
              {/* Section Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 flex-shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                    <path d={section.iconPath} fill="var(--color-primary)" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {section.title}
                </h3>
              </div>

              {/* FAQ Items */}
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border-b border-border pb-6 last:border-b-0 last:pb-0"
                  >
                    <button
                      onClick={() => toggleQuestion(sectionIndex, itemIndex)}
                      className="w-full flex items-center justify-between text-left py-3 hover:opacity-80 transition-opacity"
                    >
                      <p className="text-base text-primary pr-4">
                        {item.question}
                      </p>
                      <div className="w-6 h-6 flex-shrink-0">
                        {expandedSections[sectionIndex] === itemIndex ? (
                          <svg className="block size-full" fill="none" viewBox="0 0 15 1.5">
                            <path d="M0 1.5V0H15V1.5H0Z" fill="var(--color-primary)" />
                          </svg>
                        ) : (
                          <svg className="block size-full" fill="none" viewBox="0 0 17 17">
                            <path d={svgPaths.p1ad2a780} fill="var(--color-primary)" />
                          </svg>
                        )}
                      </div>
                    </button>
                    {expandedSections[sectionIndex] === itemIndex && (
                      <div className="mt-4">
                        <p className="text-base text-muted-foreground leading-[1.5]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Guía y recomendaciones */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Guía y recomendaciones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {/* Envía rápido Card */}
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="block w-12 h-12" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p21ffd200} fill="var(--color-primary)" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Envía rápido
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-[1.5]">
                Conoce cómo funcionan nuestras garantías y devoluciones para proteger tu compra en todo momento.
              </p>
              <div className="flex flex-col gap-3">
                <button className="h-12 rounded-xl bg-white px-6 text-primary hover:bg-muted transition-colors">
                  Leer más
                </button>
                <button className="h-12 rounded-xl border border-primary bg-white px-6 text-primary hover:bg-muted transition-colors">
                  Descargar
                </button>
              </div>
            </div>

            {/* Garantía Card */}
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="block w-12 h-12" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p36ce9c00} fill="var(--color-primary)" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Garantía
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-[1.5]">
                Descubre cómo realizamos nuestros envíos, tiempos de entrega y opciones de seguimiento.
              </p>
              <div className="flex flex-col gap-3">
                <button className="h-12 rounded-xl bg-white px-6 text-primary hover:bg-muted transition-colors">
                  Leer más
                </button>
                <button className="h-12 rounded-xl border border-primary bg-white px-6 text-primary hover:bg-muted transition-colors">
                  Descargar
                </button>
              </div>
            </div>

            {/* Devoluciones Card */}
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="block w-12 h-12" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p1f772b00} fill="var(--color-primary)" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Devoluciones
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-[1.5]">
                Conoce tus derechos, condiciones y pasos para realizar cambios o devoluciones de forma rápida y sencilla.
              </p>
              <div className="flex flex-col gap-3">
                <button className="h-12 rounded-xl bg-white px-6 text-primary hover:bg-muted transition-colors">
                  Leer más
                </button>
                <button className="h-12 rounded-xl border border-primary bg-white px-6 text-primary hover:bg-muted transition-colors">
                  Descargar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 rounded-3xl bg-[#eaeaf0] p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Compra mejor, elige con confianza
          </h2>
          <p className="text-primary mb-6 max-w-2xl mx-auto leading-[1.5]">
            Explora consejos, tendencias y recomendaciones para aprovechar al máximo cada compra
          </p>
          <Link
            to="/blog"
            className="inline-flex h-[54px] items-center justify-center rounded-xl bg-primary px-8 text-white font-bold hover:bg-primary/90 transition-colors"
          >
            Leer blog
          </Link>
        </div>

        {/* Contacto Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Contacto
          </h2>

          <div className="bg-white rounded-2xl border border-border p-6 lg:p-8">
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5">
                    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p2155cd80} fill="var(--color-primary)" />
                    </svg>
                  </div>
                  <h3 className="text-lg text-primary">
                    Atención al cliente
                  </h3>
                </div>
                <p className="text-lg text-primary">(+591) 721-22210</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5">
                    <svg className="block size-full" fill="none" viewBox="0 0 19 15">
                      <path d={svgPaths.p1bbbecb2} fill="var(--color-primary)" />
                    </svg>
                  </div>
                  <h3 className="text-lg text-primary">
                    Correo electrónico
                  </h3>
                </div>
                <p className="text-lg text-primary">
                  ventas@biddam.com
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5">
                    <svg className="block size-full" fill="none" viewBox="0 0 15.096 19.0095">
                      <path d={svgPaths.p1d149900} fill="var(--color-primary)" />
                    </svg>
                  </div>
                  <h3 className="text-lg text-primary">
                    BigDam
                  </h3>
                </div>
                <p className="text-lg text-primary">
                  Santa Cruz, Bolivia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
