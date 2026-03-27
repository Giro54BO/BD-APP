import { useMemo, useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { Link, Navigate, useNavigate, useParams } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { categories, products } from '../data/mockData';
import svgPathsFilters from '../../imports/svg-ulnwdl2pel';

type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'rating';

const sortLabels: Record<SortOption, string> = {
  relevance: 'Relevancia',
  'price-asc': 'Menor precio',
  'price-desc': 'Mayor precio',
  rating: 'Mejor valorados',
};

export function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const normalizedCategory = categoryName?.toLowerCase() ?? '';

  const [selectedFilterBrands, setSelectedFilterBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>('relevance');

  const category = categories.find(
    (item) => item.name.toLowerCase() === normalizedCategory
  );

  const categoryProducts = useMemo(() => {
    if (!category) {
      return [];
    }

    const filteredProducts = products.filter((product) => {
      if (product.category.toLowerCase() !== category.name.toLowerCase()) {
        return false;
      }

      if (
        selectedFilterBrands.length > 0 &&
        !selectedFilterBrands.includes(product.brand)
      ) {
        return false;
      }

      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      return true;
    });

    const sortedProducts = [...filteredProducts];

    switch (sortOption) {
      case 'price-asc':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return sortedProducts;
  }, [category, priceRange, selectedFilterBrands, sortOption]);

  const productBrands = useMemo(
    () =>
      Array.from(
        new Set(
          products
            .filter(
              (product) =>
                product.category.toLowerCase() === category?.name.toLowerCase()
            )
            .map((product) => product.brand)
        )
      ),
    [category]
  );

  const toggleFilterBrand = (brand: string) => {
    setSelectedFilterBrands((current) =>
      current.includes(brand)
        ? current.filter((item) => item !== brand)
        : [...current, brand]
    );
  };

  const resetFilters = () => {
    setSelectedFilterBrands([]);
    setPriceRange([0, 1000]);
  };

  if (normalizedCategory === 'autopartes') {
    return <Navigate to="/search" replace />;
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-input-background flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground">
            Categoria no encontrada
          </h1>
          <p className="mb-6 text-muted-foreground">
            La categoria que buscas no existe.
          </p>
          <Link
            to="/"
            className="inline-block rounded-xl bg-primary px-6 py-3 text-white transition-opacity hover:opacity-90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-input-background">
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-8 py-4 sm:py-6">
          <button
            type="button"
            onClick={() => navigate('/ofertas')}
            aria-label="Volver"
            className="inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6 text-primary" />
          </button>
          <h1 className="mx-2 flex-1 text-center text-[24px] font-bold leading-[1.3] text-primary">
            {category.name}
          </h1>
          <button
            type="button"
            onClick={() => navigate('/')}
            aria-label="Cerrar"
            className="inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-100"
          >
            <X className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-3 py-8 md:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-6">
            <h1 className="text-[32px] font-bold leading-[1.25] tracking-[-0.0016px] text-muted-foreground">
              {category.name}
            </h1>
            <p className="text-lg leading-[1.5] text-muted-foreground">
              {categoryProducts.length} {categoryProducts.length === 1 ? 'resultado' : 'resultados'}
            </p>
            <div className="h-px w-full bg-border" />
            <div className="flex gap-6">
              <button
                type="button"
                onClick={() => setShowFilters(true)}
                className="flex h-12 flex-1 items-center justify-center gap-1 rounded-xl border border-border bg-white px-4 transition-colors hover:bg-muted"
              >
                <span className="text-base leading-[1.5] text-primary">Filtros</span>
                <div className="h-6 w-6 flex-shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 17.5 17.5">
                    <path d={svgPathsFilters.p308cc871} fill="var(--color-primary)" />
                  </svg>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setShowSort(true)}
                className="flex h-12 flex-1 items-center justify-center gap-1 rounded-xl border border-border bg-white px-4 transition-colors hover:bg-muted"
              >
                <span className="text-base leading-[1.5] text-primary">Ordenar por</span>
                <div className="h-6 w-6 flex-shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 11.3075 6.70775">
                    <path d={svgPathsFilters.p1a7900} fill="var(--color-primary)" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {categoryProducts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="mb-4 text-xl text-muted-foreground">
                No se encontraron productos
              </p>
              <p className="text-muted-foreground">
                Intenta ajustar los filtros o explora otras categorias
              </p>
            </div>
          ) : (
            <>
              <div className="mx-auto flex max-w-[362px] flex-wrap justify-between gap-y-5 md:hidden">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className={categoryProducts.length === 1 ? 'w-full' : 'w-[170px]'}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              <div
                className={`hidden gap-6 md:grid ${
                  categoryProducts.length === 1
                    ? 'grid-cols-1 max-w-[360px]'
                    : 'grid-cols-2 xl:grid-cols-2'
                }`}
              >
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {showFilters ? (
        <div className="fixed inset-0 z-50 bg-[#262352]/30 px-3 py-6 md:px-6">
          <div className="mx-auto flex h-full w-full max-w-[420px] flex-col overflow-hidden rounded-[24px] bg-white shadow-xl md:mt-10 md:h-auto">
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <h2 className="text-2xl leading-[1.3] text-primary">Filtros</h2>
              <button
                type="button"
                onClick={() => setShowFilters(false)}
                className="text-sm leading-[1.5] text-primary transition-opacity hover:opacity-70"
              >
                Cerrar
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.5] text-primary">Precio minimo</span>
                    <input
                      type="number"
                      min={0}
                      value={priceRange[0]}
                      onChange={(event) =>
                        setPriceRange([Number(event.target.value), priceRange[1]])
                      }
                      className="h-[52px] rounded-xl border border-primary bg-card px-3 text-sm text-primary outline-none"
                    />
                  </label>

                  <label className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.5] text-primary">Precio maximo</span>
                    <input
                      type="number"
                      min={priceRange[0]}
                      value={priceRange[1]}
                      onChange={(event) =>
                        setPriceRange([priceRange[0], Number(event.target.value)])
                      }
                      className="h-[52px] rounded-xl border border-primary bg-card px-3 text-sm text-primary outline-none"
                    />
                  </label>
                </div>

                {productBrands.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold leading-[1.3] text-muted-foreground">
                      Marcas
                    </h3>
                    <div className="flex flex-col border-t border-border">
                      {productBrands.map((brand) => (
                        <label
                          key={brand}
                          className="flex h-12 cursor-pointer items-center gap-3 border-b border-border"
                        >
                          <input
                            type="checkbox"
                            checked={selectedFilterBrands.includes(brand)}
                            onChange={() => toggleFilterBrand(brand)}
                            className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                          />
                          <span className="text-sm leading-[1.5] text-primary">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="border-t border-border px-6 py-4">
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setShowFilters(false)}
                  className="flex h-[52px] items-center justify-center rounded-xl bg-primary px-4 text-base leading-[1.5] text-white transition-opacity hover:opacity-90"
                >
                  Aplicar filtro
                </button>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="flex h-[52px] items-center justify-center rounded-xl border border-border bg-white px-4 text-base leading-[1.5] text-primary transition-colors hover:bg-muted"
                >
                  Limpiar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showSort ? (
        <div className="fixed inset-0 z-50 bg-[#262352]/30 px-3 py-6 md:px-6">
          <div className="mx-auto flex h-full w-full max-w-[420px] flex-col overflow-hidden rounded-[24px] bg-white shadow-xl md:mt-10 md:h-auto">
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <h2 className="text-2xl leading-[1.3] text-primary">Ordenar por</h2>
              <button
                type="button"
                onClick={() => setShowSort(false)}
                className="text-sm leading-[1.5] text-primary transition-opacity hover:opacity-70"
              >
                Cerrar
              </button>
            </div>

            <div className="flex flex-col px-6 py-3">
              {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSortOption(option);
                    setShowSort(false);
                  }}
                  className="flex h-12 items-center justify-between border-b border-border text-left"
                >
                  <span
                    className={`text-base leading-[1.5] ${
                      sortOption === option ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {sortLabels[option]}
                  </span>
                  <span
                    className={`h-4 w-4 rounded-full border ${
                      sortOption === option
                        ? 'border-primary bg-primary'
                        : 'border-border bg-white'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
