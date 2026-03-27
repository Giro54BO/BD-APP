import { useState, useEffect, useRef } from 'react';
import { Info, ArrowLeft, X } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router';
import { products } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function NoResultsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLFormElement>(null);
  const query = searchParams.get('q') || '';
  const [localSearchQuery, setLocalSearchQuery] = useState(query);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setLocalSearchQuery(query);
  }, [query]);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

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
    if (localSearchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(localSearchQuery.trim())}`);
    }
  };

  const handlePreviewSelect = (value: string) => {
    setLocalSearchQuery(value);
    navigate(`/search?q=${encodeURIComponent(value)}`);
  };

  return (
    <div className="bg-input-background min-h-screen pt-[74px]">
      {/* Header - Constrained to mobile width */}
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
                ref={searchInputRef}
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
                onClick={() => setLocalSearchQuery('')}
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

      {/* Content - Mobile centered layout */}
      <div className="mx-auto flex w-full max-w-[428px] flex-col items-center justify-center px-6 py-20">
        <div className="text-center max-w-md px-[20px] py-[100px]">
          <Info className="w-32 h-32 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-4">
            No hay resultados
          </h1>
          <p className="text-muted-foreground mb-8 leading-[1.5]">
            Inicia una nueva busqueda en la barra de arriba.
          </p>
        </div>
      </div>
    </div>
  );
}