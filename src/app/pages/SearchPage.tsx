import { useState, useMemo, useEffect, useRef } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import svgPathsMobile from '../../imports/svg-eymrglue4j';
import svgPathsBreadcrumb from '../../imports/svg-ira0nmpy2q';
import svgPathsSearch from '../../imports/svg-ykvc2l1ede';
import svgPathsFilters from '../../imports/svg-ulnwdl2pel';

type SearchMode = 'vehicle' | 'code';

const AUTO_PARTS_CATEGORY = 'Repuestos automotrices';

function getCategoryLabel(category?: string) {
  if (!category) {
    return 'Resultados';
  }

  return category === AUTO_PARTS_CATEGORY ? 'Autopartes' : category;
}

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const normalizedQuery = query.trim().toLowerCase();
  
  const [localSearchQuery, setLocalSearchQuery] = useState(query);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setLocalSearchQuery(query);
  }, [query]);

  const [searchMode, setSearchMode] = useState<SearchMode>('vehicle');
  const [showBanner, setShowBanner] = useState(true);
  const [showSearchCard, setShowSearchCard] = useState(false);
  
  // Vehicle search states
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  
  // Code search state
  const [searchCode, setSearchCode] = useState('');
  
  // Filter states
  const [selectedFilterBrands, setSelectedFilterBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const matchedProducts = useMemo(() => {
    return products.filter((product) => {
      if (!normalizedQuery) {
        return true;
      }

      return (
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.code.toLowerCase().includes(normalizedQuery) ||
        product.brand.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [normalizedQuery]);

  const { dominantCategory, scopedProducts } = useMemo(() => {
    const counts = matchedProducts.reduce<Record<string, number>>((acc, product) => {
      acc[product.category] = (acc[product.category] ?? 0) + 1;
      return acc;
    }, {});

    const dominant = Object.entries(counts).sort(([, left], [, right]) => right - left)[0]?.[0];
    
    const scoped = dominant
      ? matchedProducts.filter((product) => product.category === dominant)
      : matchedProducts;

    return { dominantCategory: dominant, scopedProducts: scoped };
  }, [matchedProducts]);

  // Mock data for vehicle dropdowns
  const brands = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
  const models = ['Corolla', 'Camry', 'RAV4', 'Hilux'];
  const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018'];

  // Filter products based on all criteria
  const filteredProducts = useMemo(() => {
    return scopedProducts.filter((product) => {
      // Brand filter from sidebar
      if (selectedFilterBrands.length > 0 && !selectedFilterBrands.includes(product.brand)) {
        return false;
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      return true;
    });
  }, [scopedProducts, selectedFilterBrands, priceRange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentCategory = dominantCategory ?? AUTO_PARTS_CATEGORY;
  const currentCategoryLabel = getCategoryLabel(currentCategory);
  const showVehicleSearchFlow = !normalizedQuery || currentCategory === AUTO_PARTS_CATEGORY;
  const showSearchBreadcrumb = Boolean(normalizedQuery);
  const resultsTitle = normalizedQuery ? 'Resultados' : currentCategoryLabel;
  const resultsSubtitle = normalizedQuery ? currentCategoryLabel : null;

  const handleVehicleSearch = () => {
    // Handle vehicle search logic
    console.log('Searching for:', { selectedBrand, selectedModel, selectedYear });
  };

  const handleCodeSearch = () => {
    // Handle code search logic
    console.log('Searching for code:', searchCode);
  };

  const previewProducts = localSearchQuery.trim()
    ? products
        .filter((product) => {
          const normalizedQuery = localSearchQuery.trim().toLowerCase();
          return (
            product.name.toLowerCase().includes(normalizedQuery) ||
            product.brand.toLowerCase().includes(normalizedQuery) ||
            product.code.toLowerCase().includes(normalizedQuery)
          );
        })
        .slice(0, 2)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (localSearchQuery.trim()) {
      params.set('q', localSearchQuery.trim());
    } else {
      params.delete('q');
    }
    setSearchParams(params);
  };

  const handlePreviewSelect = (value: string) => {
    setLocalSearchQuery(value);
    const params = new URLSearchParams(searchParams);
    params.set('q', value);
    setSearchParams(params);
  };

  return (
    <div className="bg-input-background min-h-screen pt-[74px]">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 mx-auto h-[74px] max-w-[428px] border-b border-[#bfbed0] bg-white">
        <div className="flex h-full w-full items-center gap-3 px-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Volver"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-primary transition-colors hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <form ref={searchContainerRef} onSubmit={handleSearchSubmit} className="relative flex-1">
            <div className="relative flex h-11 items-center gap-2 rounded-xl border border-primary bg-input-background px-3">
              <input
                type="text"
                value={localSearchQuery}
                onChange={(e) => {
                  setLocalSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Buscar..."
                className="h-full flex-1 bg-transparent text-sm text-primary outline-none placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => {
                  setLocalSearchQuery('');
                  navigate('/no-results');
                }}
                className="flex h-6 w-6 items-center justify-center text-primary hover:opacity-70 transition-opacity"
                aria-label="Limpiar búsqueda"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {showSuggestions && previewProducts.length > 0 ? (
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

      {/* Mobile Layout */}
      <div className="bg-[#ffffff]">
        {showVehicleSearchFlow ? (
          <div className="bg-input-background px-3 py-6">
            {/* Yellow Warning Banner */}
            {showBanner && (
              <div className="bg-[#fdf7e6] border border-[#efac00] rounded-[4px] p-2 mb-[30px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] flex-1">
                    {/* Info Icon */}
                    <div className="w-5 h-5 flex-shrink-0">
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <mask height="20" id="mask0_info" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                          <rect fill="#D9D9D9" height="20" width="20" />
                        </mask>
                        <g mask="url(#mask0_info)">
                          <path d={svgPathsMobile.p16f11100} fill="#EFAC00" />
                        </g>
                      </svg>
                    </div>
                    <p className="text-[#835f00] text-sm leading-[1.5]">
                      Seleccione un vehículo para encontrar las piezas compatibles.
                    </p>
                  </div>
                  <button onClick={() => setShowBanner(false)} className="w-4 h-4 flex-shrink-0 hover:opacity-70 ml-2">
                    <svg className="block size-full" fill="none" viewBox="0 0 13.3075 13.3075">
                      <path d={svgPathsMobile.p20bff00} fill="#EFAC00" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Vehicle Question and Add Vehicle Button */}
            <div className="flex flex-col gap-6 mb-[30px]">
              <div className="flex items-center gap-1">
                {/* Car Icon */}
                <div className="w-6 h-6 flex-shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 17 15">
                    <path d={svgPathsMobile.p69d4980} fill="var(--color-primary)" />
                  </svg>
                </div>
                <h2 className="text-primary font-bold leading-[1.3] text-[20px]">
                  ¿Para qué vehículo es esta pieza?
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowSearchCard((current) => !current)}
                aria-expanded={showSearchCard}
                className="h-[52px] border border-primary rounded-xl px-4 flex items-center justify-center gap-1 hover:bg-muted transition-colors"
              >
                <span className="text-primary text-base leading-[1.5]">Agregar vehículo</span>
                <div className="w-4 h-4 flex-shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 20 21.7345">
                    <path d={svgPathsMobile.pbd22480} fill="var(--color-primary)" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        ) : null}

        {/* Search Card */}
        {showVehicleSearchFlow && showSearchCard ? (
        <div className="bg-white border-[0.5px] border-[#bfbed0] rounded-xl p-6 mx-3 my-6">
          {/* Tabs */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setSearchMode('vehicle')}
              className={`flex items-center gap-1 pb-2 relative ${
                searchMode === 'vehicle' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div className="w-4 h-4 flex-shrink-0">
                <svg className="block size-full" fill="none" viewBox="0 0 17 15">
                  <path 
                    d={svgPathsSearch.p69d4980} 
                    fill={searchMode === 'vehicle' ? 'var(--color-primary)' : '#6B6B7B'} 
                  />
                </svg>
              </div>
              <span className="text-base leading-[1.5]">
                Buscar por vehículo
              </span>
              {searchMode === 'vehicle' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
              )}
            </button>

            <button
              onClick={() => setSearchMode('code')}
              className={`flex items-center gap-1 pb-2 relative ${
                searchMode === 'code' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <div className="w-4 h-4 flex-shrink-0">
                <svg className="block size-full" fill="none" viewBox="0 0 15 19">
                  <path 
                    d={svgPathsSearch.p1596ba10} 
                    fill={searchMode === 'code' ? 'var(--color-primary)' : '#6B6B7B'} 
                  />
                </svg>
              </div>
              <span className="text-base leading-[1.5]">
                Buscar por código
              </span>
              {searchMode === 'code' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#f0f0f2] mb-6" />

          {/* Search Forms */}
          {searchMode === 'vehicle' ? (
            <div className="flex flex-col gap-1">
              {/* Brand Dropdown */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-primary leading-[1.5]">Marca del vehículo</label>
                <div className="relative h-[52px]">
                  <div className="absolute inset-0 border border-primary rounded-xl" />
                  <div className="flex items-center gap-3 px-3 h-full">
                    <div className="w-4 h-4 flex-shrink-0">
                      <svg className="block size-full" fill="none" viewBox="0 0 17.192 17.1923">
                        <path d={svgPathsSearch.p34e8e200} fill="var(--color-primary)" />
                      </svg>
                    </div>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="flex-1 bg-transparent text-sm text-muted-foreground appearance-none cursor-pointer outline-none"
                    >
                      <option value="">Seleccionar o buscar marca</option>
                      {brands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                    <div className="w-4 h-4 flex-shrink-0">
                      <svg className="block size-full" fill="none" viewBox="0 0 11.3075 6.7075">
                        <path d={svgPathsSearch.p34b30800} fill="var(--color-primary)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Model Dropdown */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground leading-[1.5]">Modelo</label>
                <div className="relative h-[52px]">
                  <div className="absolute inset-0 bg-card border border-muted-foreground rounded-xl" />
                  <div className="flex items-center gap-3 px-3 h-full">
                    <div className="w-6 h-6 flex-shrink-0">
                      <svg className="block size-full" fill="none" viewBox="0 0 17.192 17.1923">
                        <path d={svgPathsSearch.p34e8e200} fill="var(--color-primary)" />
                      </svg>
                    </div>
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="flex-1 bg-transparent text-sm text-muted-foreground appearance-none cursor-pointer outline-none"
                      disabled={!selectedBrand}
                    >
                      <option value="">Seleccionar modelo</option>
                      {models.map((model) => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </select>
                    <div className="w-6 h-6 flex-shrink-0">
                      <svg className="block size-full" fill="none" viewBox="0 0 11.3075 6.7075">
                        <path d={svgPathsSearch.p34b30800} fill="var(--color-primary)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Year Dropdown */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground leading-[1.5]">Año</label>
                <div className="relative h-[52px]">
                  <div className="absolute inset-0 bg-card border border-muted-foreground rounded-xl" />
                  <div className="flex items-center gap-3 px-3 h-full">
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="flex-1 bg-transparent text-sm text-muted-foreground appearance-none cursor-pointer outline-none"
                      disabled={!selectedModel}
                    >
                      <option value="">Seleccionar año</option>
                      {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    <div className="w-6 h-6 flex-shrink-0">
                      <svg className="block size-full" fill="none" viewBox="0 0 11.3075 6.70775">
                        <path d={svgPathsSearch.p1a7900} fill="var(--color-primary)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-6 mt-6">
                <button
                  onClick={handleVehicleSearch}
                  className="h-[54px] bg-muted text-muted-foreground rounded-xl px-4 flex items-center justify-center gap-1 hover:bg-card transition-colors"
                >
                  <span className="text-base leading-[1.5]">Buscar repuestos compatibles</span>
                  <div className="w-6 h-6 flex-shrink-0">
                    <svg className="block size-full" fill="none" viewBox="0 0 19 12">
                      <path d={svgPathsSearch.p1478b400} fill="var(--color-muted-foreground)" />
                    </svg>
                  </div>
                </button>

                <button className="h-[54px] bg-card text-muted-foreground rounded-xl px-4 flex items-center justify-center gap-1 hover:bg-muted transition-colors">
                  <span className="text-base leading-[1.5]">Limpiar búsqueda</span>
                  <div className="w-6 h-6 flex-shrink-0">
                    <svg className="block size-full" fill="none" viewBox="0 0 17.404 15.4038">
                      <path d={svgPathsSearch.p9716740} fill="var(--color-muted-foreground)" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {/* Code Input */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-muted-foreground leading-[1.5]">Buscar por código</label>
                <input
                  type="text"
                  value={searchCode}
                  onChange={(e) => setSearchCode(e.target.value)}
                  placeholder="Ej: Ingrese el código AXXS 2005 1234 o similar"
                  className="h-[52px] bg-card border border-muted-foreground rounded-xl px-3 text-sm text-primary placeholder:text-muted-foreground"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-6 mt-6">
                <button
                  onClick={handleCodeSearch}
                  className="h-[54px] bg-muted text-muted-foreground rounded-xl px-4 flex items-center justify-center gap-1 hover:bg-card transition-colors"
                >
                  <span className="text-base leading-[1.5]">Buscar</span>
                </button>

                <button className="h-[54px] bg-card text-muted-foreground rounded-xl px-4 flex items-center justify-center gap-1 hover:bg-muted transition-colors">
                  <span className="text-base leading-[1.5]">Limpiar búsqueda</span>
                  <div className="w-6 h-6 flex-shrink-0">
                    <svg className="block size-full" fill="none" viewBox="0 0 17.404 15.4038">
                      <path d={svgPathsSearch.p9716740} fill="var(--color-muted-foreground)" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
        ) : null}

        {/* Results Section */}
        <div className="bg-white px-3 py-8">
          {/* Title, Results Count, and Filter Buttons */}
          <div className="mb-8 flex flex-col gap-6">
            <p className="text-muted-foreground text-lg leading-[1.5]">{filteredProducts.length} resultados</p>
            
            {/* Divider Line */}
            <div className="h-px bg-border w-full" />
            
            {/* Filter and Sort Buttons */}
            <div className="flex gap-6 items-start">
              <button 
                onClick={() => navigate('/filters')}
                className="bg-white flex-1 h-12 rounded-xl border border-border flex items-center justify-center gap-1 px-4 hover:bg-muted transition-colors"
              >
                <span className="text-primary text-base leading-[1.5]">Filtros</span>
                <div className="w-6 h-6 flex-shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 17.5 17.5">
                    <path d={svgPathsFilters.p308cc871} fill="var(--color-primary)" />
                  </svg>
                </div>
              </button>
              
              <button className="bg-white flex-1 h-12 rounded-xl border border-border flex items-center justify-center gap-1 px-4 hover:bg-muted transition-colors">
                <span className="text-primary text-base leading-[1.5]">Ordenar por</span>
                <div className="w-6 h-6 flex-shrink-0">
                  <svg className="block size-full" fill="none" viewBox="0 0 11.3075 6.70775">
                    <path d={svgPathsFilters.p1a7900} fill="var(--color-primary)" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                No se encontraron productos
              </p>
              <p className="text-muted-foreground">
                Intenta ajustar los filtros o realiza una nueva búsqueda
              </p>
            </div>
          ) : (
            <div className="mx-auto flex max-w-[362px] flex-wrap justify-between gap-y-5">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={filteredProducts.length === 1 ? 'w-full' : 'w-[170px]'}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
