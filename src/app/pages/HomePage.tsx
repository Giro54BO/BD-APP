import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/mockData';
import { ArrowRight, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { unsplash_tool } from '../utils/unsplash';
import svgPathsTruck from '../../imports/svg-7r8u8d4ra9';
import svgPathsClock from '../../imports/svg-gwqpgywzo8';
import imgRectangle108 from "@/assets/3933b0d0bffbd89753266fe31fb84ab19652844c.png";
import imgAutomotriz1 from "@/assets/8fbb02c4d769107d2cb7a1b2bdb714216f6added.png";
import imgRectangle109 from "@/assets/387bde576e48661baaa1b7edcf923d557d2bf5b8.png";
import imgRectangle110 from "@/assets/2535b3843b5a5f4858be93048f290ee052d80a00.png";
import imgRectangle111 from "@/assets/eed34c2474772d44f0e8eb1a3db635b052eaa932.png";
import imgRectangle107 from "@/assets/91853ad2ca31c93af0704c87520c8f877a0d93a2.png";
import imgAutomotriz2 from "@/assets/1b00d675de29116c786eaf6d193755b40111a289.png";
import imgBotasCuero1 from "@/assets/6b79d5be5b96be05e70587d95b3c1d7052e9eebc.png";
import imgBrand1 from "@/assets/1fc4a3179194286e3de909ab6510e5141e3ccce0.png";
import imgBrand2 from "@/assets/127927f341520b90d6948349f411b14b63ecc066.png";
import imgBrand3 from "@/assets/855f6644fd4c935b120bfa427173093a7ea7c099.png";
import imgBrand4 from "@/assets/5c85ed2e558bee29c107d284b0e60284c4d88318.png";
import imgBrand5 from "@/assets/65a4cc9e57394b6418cc884691c90dda27666826.png";
import imgBrand6 from "@/assets/6ad2fdfd6b853cae9cbea44f282a35305393e58e.png";
import svgPathsHeader from '../../imports/svg-xga9f4vgij';

export function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const featuredProducts = products.slice(0, 3);
  const previewProducts = searchQuery.trim()
    ? products
        .filter((product) => {
          const normalizedQuery = searchQuery.trim().toLowerCase();
          return (
            product.name.toLowerCase().includes(normalizedQuery) ||
            product.brand.toLowerCase().includes(normalizedQuery) ||
            product.code.toLowerCase().includes(normalizedQuery)
          );
        })
        .slice(0, 2)
    : [];

  // Map category IDs to imported Figma images
  const categoryImages: Record<string, string> = {
    '1': imgRectangle108, // Moda
    '2': imgAutomotriz1, // Autopartes
    '3': imgRectangle109, // Electrónica
    '4': imgRectangle110, // Ferretería
    '5': imgRectangle111, // Hogar
  };

  // Brand logos
  const brands = [
    { name: 'Sinteplast', logo: imgBrand1 },
    { name: 'Tigre', logo: imgBrand2 },
    { name: 'Picasso', logo: imgBrand3 },
    { name: 'Voito KH', logo: imgBrand4 },
    { name: 'GPC', logo: imgBrand5 },
    { name: 'Makhartan', logo: imgBrand6 },
  ];

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      return;
    }

    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  const handlePreviewSelect = (value: string) => {
    setSearchQuery(value);
    navigate(`/search?q=${encodeURIComponent(value)}`);
  };

  return (
    <>
      {/* Header with Search - Only on Homepage */}
      <div className="sticky top-0 z-50 border-b border-[#bfbed0] bg-[#f5f5f7]">
        <div className="relative mx-auto flex w-full max-w-[428px] items-center gap-4 px-6 py-6">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden"
            aria-label="Ir al inicio"
          >
            <svg
              className="absolute block h-full w-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 32 32"
            >
              <path d={svgPathsHeader.p345914f0} fill="#302C67" />
            </svg>
            <div className="absolute inset-[21.26%_48.77%_39.58%_18.41%]">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 10.5028 12.5317"
              >
                <path
                  clipRule="evenodd"
                  d={svgPathsHeader.p131a2800}
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute inset-[37.78%_17.77%_23.23%_54.67%]">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 8.81761 12.4743"
              >
                <path
                  clipRule="evenodd"
                  d={svgPathsHeader.p3ae03d00}
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute inset-[55.57%_43.03%_8.26%_10.41%]">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14.8989 11.576"
              >
                <path d={svgPathsHeader.pb0f6d00} fill="#E30613" />
              </svg>
            </div>
            <div className="absolute inset-[24.79%_14.98%_38.38%_64.63%]">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6.52456 11.7845"
              >
                <path d={svgPathsHeader.p3592200} fill="#E30613" />
              </svg>
            </div>
            <div className="absolute inset-[55.51%_35.37%_38.32%_56.97%]">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 2.45123 1.97365"
              >
                <path d={svgPathsHeader.p1281be80} fill="white" />
              </svg>
            </div>
          </button>

          <form onSubmit={handleSearchSubmit} className="relative flex-1">
            <div className="relative flex h-12 items-center gap-3 rounded-xl border border-primary bg-input-background px-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Busca por marca, modelo, año o motor..."
                className="h-full flex-1 bg-transparent text-sm leading-[1.5] tracking-[0.0014px] text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-6 w-6 shrink-0 items-center justify-center text-primary"
                aria-label="Buscar"
              >
                <Search className="h-[17px] w-[17px]" />
              </button>
            </div>

            {previewProducts.length > 0 ? (
              <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-xl border border-[#6b6b7b] bg-white shadow-sm">
                {previewProducts.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => handlePreviewSelect(product.name)}
                    className="flex h-12 w-full items-center gap-[10px] px-3 text-left transition-colors hover:bg-[#f5f5f7]"
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="h-[31px] w-[31px] rounded-[4px]"
                    />
                    <span className="truncate text-sm leading-[1.5] tracking-[0.0014px] text-[#6b6b7b]">
                      {product.name}
                    </span>
                  </button>
                ))}
              </div>
            ) : null}
          </form>
        </div>
      </div>

      {/* Hero Section */}
      <section className="mx-auto w-full max-w-[428px]">
        <div className="relative h-[253px] w-full overflow-hidden">
          <ImageWithFallback
            src={imgRectangle107}
            alt="Fondo del banner"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <ImageWithFallback
            src={imgRectangle110}
            alt="Herramientas"
            className="absolute left-[5.5%] top-0 h-[245px] w-[170px] object-contain"
          />
          <ImageWithFallback
            src={imgAutomotriz2}
            alt="Amortiguador"
            className="absolute left-[4.1%] top-[51px] h-[194px] w-[326px] object-contain"
          />
          <ImageWithFallback
            src={imgRectangle108}
            alt="Ropa"
            className="absolute left-[32.2%] top-[45px] h-[193px] w-[192px] object-contain"
          />
          <ImageWithFallback
            src={imgBotasCuero1}
            alt="Botas"
            className="absolute left-[35.2%] top-[75px] h-[175px] w-[262px] object-contain"
          />
        </div>

        <div className="flex flex-col gap-3 bg-primary px-6 py-6 text-white">
          <h1 className="text-[24px] font-bold leading-[1.3]">
            Todo lo que necesitas, en un solo lugar
          </h1>
          <p className="text-[12px] font-normal leading-[1.4] tracking-[0.02px]">
            Equipa tu hogar, renueva tu estilo y encuentra los repuestos que
            necesitas sin salir de casa.
          </p>
          <Link
            to="/search"
            className="mt-1 inline-flex h-12 w-full items-center justify-center gap-1 rounded-[12px] bg-white px-4 text-[16px] font-normal leading-[1.5] text-primary transition-colors hover:bg-white/90"
          >
            Explorar catálogo
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b border-border">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="block w-12 h-12" fill="none" viewBox="0 0 21.3075 15.0577">
                  <path d={svgPathsTruck.p21ffd200} fill="var(--color-primary)" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Envío rápido</h3>
                <p className="text-muted-foreground">A todo el país</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="block w-12 h-12" fill="none" viewBox="0 0 20.6535 19.7305">
                  <path d={svgPathsTruck.p36ce9c00} fill="var(--color-primary)" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Garantía</h3>
                <p className="text-muted-foreground">En todos los productos</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="block w-12 h-12" fill="none" viewBox="0 0 15 17.3538">
                  <path d={svgPathsClock.p1f772b00} fill="var(--color-primary)" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Atención 24/7</h3>
                <p className="text-muted-foreground">Soporte en línea</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="block w-12 h-12" fill="none" viewBox="0 0 19 19">
                  <path d={svgPathsTruck.p2af23f80} fill="var(--color-primary)" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">30+ Años</h3>
                <p className="text-muted-foreground">De experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-[1440px] mx-auto px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Categorías</h2>
          <div className="grid grid-cols-1 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.name.toLowerCase() === 'autopartes' ? '/search' : `/category/${category.name.toLowerCase()}`}
                className="group bg-muted rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <div
                  className="h-[150px] rounded-lg mb-4 overflow-hidden"
                  style={{ background: category.gradient }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageWithFallback
                      src={categoryImages[category.id] || category.image}
                      alt={category.name}
                      className="w-24 h-24 opacity-80"
                    />
                  </div>
                </div>
                <h3 className="text-xl text-foreground group-hover:text-primary transition-colors font-bold">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Productos destacados</h2>
            <Link
              to="/search"
              className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              Ver más
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="overflow-hidden pl-8">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-8 md:gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="w-[calc((100vw-64px-12px)/2.45)] min-w-[calc((100vw-64px-12px)/2.45)] snap-start md:w-[calc((100vw-64px-24px)/2.6)] md:min-w-[calc((100vw-64px-24px)/2.6)] xl:w-[calc((1440px-64px-24px)/2.8)] xl:min-w-[calc((1440px-64px-24px)/2.8)]"
              >
                <ProductCard product={product} />
              </div>
            ))}
            <div className="w-8 shrink-0 md:hidden" aria-hidden="true" />
            <div className="hidden w-8 shrink-0 md:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-16 bg-background">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Marcas populares</h2>
            <Link
              to="/search"
              className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
            >
              Ver todas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="bg-card border border-border rounded-xl p-6 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <ImageWithFallback
                  src={brand.logo}
                  alt={brand.name}
                  className="w-24 h-24"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Estamos listo para ayudarte</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            ¿No sabes cómo comprar con nosotros? Revisa nuestras preguntas frecuentes o contáctanos directamente.
          </p>
          <Link
            to="/help-center"
            className="inline-flex rounded-lg bg-white px-8 py-4 font-medium text-primary transition-colors hover:bg-white/90"
          >
            Conoce más
          </Link>
        </div>
      </section>
    </>
  );
}
