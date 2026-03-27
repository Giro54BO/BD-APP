import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import svgPaths from '../../imports/svg-nk6qgfm51c';

export function FilterPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Get initial values from URL params if they exist
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [showMoreSubcategories, setShowMoreSubcategories] = useState(false);

  const brands = ['Bosh', 'Denso', 'Gates', 'Monroe', 'NGK', 'Valeo', 'SKF', 'Toyota'];
  
  const subcategories = [
    'Bobina de encendido',
    'Bomba de gasolina',
    'Bujias',
    'Cable de bujia',
    'Cinta de volante',
    'Frenos',
    'Motor',
    'Suspensión',
    'Eléctrico',
    'Filtros',
    'Transmisión',
    'Refrigeración',
    'Encendido'
  ];

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories(prev =>
      prev.includes(subcategory) ? prev.filter(s => s !== subcategory) : [...prev, subcategory]
    );
  };

  const handleApplyFilters = () => {
    // Build URL params with filters
    const params = new URLSearchParams(searchParams);
    
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (selectedBrands.length > 0) params.set('brands', selectedBrands.join(','));
    if (selectedSubcategories.length > 0) params.set('subcategories', selectedSubcategories.join(','));
    
    navigate(`/search?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setSelectedBrands([]);
    setSelectedSubcategories([]);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-border h-[74px] flex items-center px-5">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl text-primary font-normal leading-[1.3]">Filtros</h1>
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <svg className="block w-6 h-6" fill="none" viewBox="0 0 17.7433 17.7433">
              <path d={svgPaths.p1f958f80} fill="var(--color-primary)" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="flex flex-col gap-4">
          {/* Price Inputs */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-primary leading-[1.5]">Precio mínimo</label>
            <input
              type="text"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Bs. 00.00"
              className="bg-card h-[52px] border border-primary rounded-xl px-3 text-sm text-muted-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-primary leading-[1.5]">Precio máximo</label>
            <input
              type="text"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Bs. 00.00"
              className="bg-card h-[52px] border border-primary rounded-xl px-3 text-sm text-muted-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Brands Section */}
          <div className="flex flex-col gap-0 mt-4">
            <div className="flex items-center justify-between h-12">
              <h2 className="text-2xl font-bold text-muted-foreground leading-[1.3]">Marcas</h2>
              <div className="w-6 h-6 flex-shrink-0">
                <svg className="block size-full" fill="none" viewBox="0 0 11.3075 6.70775">
                  <path d={svgPaths.p1a7900} fill="var(--color-primary)" />
                </svg>
              </div>
            </div>

            {/* Brand Checkboxes */}
            <div className="flex flex-col">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-1 h-12 cursor-pointer"
                >
                  <div className="w-6 h-6 flex-shrink-0">
                    <div className="w-[17px] h-[17px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 17 17">
                        <path d={svgPaths.p2eadfcf0} fill="var(--color-primary)" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="sr-only"
                  />
                  <span className="text-sm text-primary leading-[1.5]">{brand}</span>
                </label>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-border w-full mt-0" />
          </div>

          {/* Subcategory Section */}
          <div className="flex flex-col gap-0">
            <div className="flex items-center justify-between h-12">
              <h2 className="text-2xl font-bold text-muted-foreground leading-[1.3]">Subcategoría</h2>
              <div className="w-6 h-6 flex-shrink-0">
                <svg className="block size-full" fill="none" viewBox="0 0 11.3075 6.70775">
                  <path d={svgPaths.p1a7900} fill="var(--color-primary)" />
                </svg>
              </div>
            </div>

            {/* Subcategory Checkboxes */}
            <div className="flex flex-col">
              {subcategories.map((subcategory) => (
                <label
                  key={subcategory}
                  className="flex items-center gap-1 h-12 cursor-pointer"
                >
                  <div className="w-6 h-6 flex-shrink-0">
                    <div className="w-[17px] h-[17px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 17 17">
                        <path d={svgPaths.p2eadfcf0} fill="var(--color-primary)" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedSubcategories.includes(subcategory)}
                    onChange={() => toggleSubcategory(subcategory)}
                    className="sr-only"
                  />
                  <span className="text-sm text-primary leading-[1.5]">{subcategory}</span>
                </label>
              ))}
            </div>

            {/* Ver más */}
            <button
              onClick={() => setShowMoreSubcategories(!showMoreSubcategories)}
              className="flex items-center justify-between h-12 border-t border-border w-full hover:bg-muted transition-colors"
            >
              <span className="text-base text-primary leading-[1.5]">Ver más</span>
              <div className="w-6 h-6 flex-shrink-0">
                <svg className="block size-full" fill="none" viewBox="0 0 11.3075 6.70775">
                  <path d={svgPaths.p1a7900} fill="var(--color-primary)" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Spacer for bottom buttons */}
        <div className="h-32" />
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="bg-white border-t border-border px-6 py-4 flex flex-col gap-3">
        <button
          onClick={handleApplyFilters}
          className="h-[52px] bg-primary text-white rounded-xl px-4 flex items-center justify-center gap-1 hover:opacity-90 transition-opacity font-medium"
        >
          <span className="text-base leading-[1.5]">Aplicar filtro</span>
          <div className="w-[18.404px] h-[12.4038px] flex-shrink-0">
            <svg className="block size-full" fill="none" viewBox="0 0 18.404 12.4038">
              <path d={svgPaths.p5977600} fill="white" />
            </svg>
          </div>
        </button>

        <button
          onClick={handleClearFilters}
          className="h-[52px] bg-white border border-border text-primary rounded-xl px-4 flex items-center justify-center gap-1 hover:bg-muted transition-colors font-medium"
        >
          <span className="text-base leading-[1.5]">Limpiar</span>
          <div className="w-[17.404px] h-[15.4038px] flex-shrink-0">
            <svg className="block size-full" fill="none" viewBox="0 0 17.404 15.4038">
              <path d={svgPaths.p9716740} fill="var(--color-primary)" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
