import { Link } from 'react-router';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import svgPaths from '../../imports/svg-dfw5nz3jnq';
import svgPathsHeader from '../../imports/svg-dzlm20prl5';
import { categories } from '../data/mockData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);
  const { isAuthenticated, user } = useAuth();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed inset-0 bg-background z-50 lg:hidden overflow-y-auto">
        {/* Header */}
        <div className="bg-background border-b border-border h-[74px] flex items-center justify-between px-5">
          <h2 className="text-[24px] leading-[1.3] text-primary font-normal">Menú</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center relative hover:bg-muted rounded-lg transition-colors"
            aria-label="Cerrar menú"
          >
            <svg className="block w-[17.74px] h-[17.74px]" fill="none" viewBox="0 0 17.7433 17.7433">
              <path d={svgPaths.p1f958f80} fill="var(--color-primary)" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-5 py-6 flex flex-col gap-3">
          {/* Welcome Section */}
          <div className="bg-muted rounded-xl px-6 py-12 flex flex-col gap-6">
            {isAuthenticated ? (
              <>
                <h3 className="text-[24px] leading-[1.3] text-primary">Hola, {user?.name.split(' ')[0]}!</h3>
                
                <div className="flex flex-col gap-3 w-full">
                  {/* Profile Button */}
                  <Link 
                    to="/profile"
                    onClick={onClose}
                    className="h-12 rounded-xl border border-primary flex items-center justify-center gap-1 px-4 hover:bg-card transition-colors"
                  >
                    <span className="text-base leading-[1.5] text-primary">Mi perfil</span>
                    <div className="w-6 h-6 relative flex-shrink-0">
                      <svg className="block size-full" fill="none" viewBox="0 0 19 19">
                        <path d={svgPathsHeader.p2155cd80} fill="var(--color-primary)" />
                      </svg>
                    </div>
                  </Link>

                  {/* Logout Button */}
                  <Link 
                    to="/logout"
                    onClick={onClose}
                    className="bg-card h-[52px] rounded-xl flex items-center justify-center gap-1 px-4 hover:bg-muted transition-colors"
                  >
                    <span className="text-base leading-[1.5] text-primary">Cerrar sesión</span>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-[24px] leading-[1.3] text-primary">Bienvenido!</h3>
                
                <div className="flex flex-col gap-3 w-full">
                  {/* Login Button */}
                  <Link 
                    to="/login"
                    onClick={onClose}
                    className="h-12 rounded-xl border border-primary flex items-center justify-center gap-1 px-4 hover:bg-card transition-colors"
                  >
                    <span className="text-base leading-[1.5] text-primary">Iniciar sesión</span>
                    <div className="w-6 h-6 relative flex-shrink-0">
                      <svg className="block size-full" fill="none" viewBox="0 0 19 19">
                        <path d={svgPathsHeader.p2155cd80} fill="var(--color-primary)" />
                      </svg>
                    </div>
                  </Link>

                  {/* Register Button */}
                  <Link 
                    to="/register"
                    onClick={onClose}
                    className="bg-card h-[52px] rounded-xl flex items-center justify-center gap-1 px-4 hover:bg-muted transition-colors"
                  >
                    <span className="text-base leading-[1.5] text-primary">Regístrate</span>
                    <div className="w-6 h-6 relative flex-shrink-0">
                      <svg className="block size-full" fill="none" viewBox="0 0 17.5152 15">
                        <path d={svgPaths.pab7ac80} fill="var(--color-primary)" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>

          {/* Categorias Section */}
          <Link
            to="/categorias"
            onClick={onClose}
            className="h-[52px] flex items-center text-base leading-[1.5] text-primary transition-colors hover:text-primary/80"
          >
            🎁 Categorías
          </Link>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Categories Section */}
          <div className="flex flex-col">
            <button 
              onClick={() => setCategoriesExpanded(!categoriesExpanded)}
              className="flex items-center justify-between h-[52px] w-full"
            >
              <span className="text-base leading-[1.5] text-primary">Categorías</span>
              <div className="w-6 h-6 relative flex-shrink-0">
                <svg 
                  className={`block size-full transition-transform ${categoriesExpanded ? '' : 'rotate-180'}`} 
                  fill="none" 
                  viewBox="0 0 11.3075 6.7075"
                >
                  <path d={svgPaths.p36b54680} fill="var(--color-primary)" />
                </svg>
              </div>
            </button>

            {/* Categories List */}
            {categoriesExpanded && (
              <div className="flex flex-col">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.name.toLowerCase()}`}
                    onClick={onClose}
                    className="h-[52px] flex items-center text-base leading-[1.5] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Help Center */}
          <Link
            to="/help-center"
            onClick={onClose}
            className="h-[52px] flex items-center text-base leading-[1.5] text-muted-foreground transition-colors hover:text-primary"
          >
            Centro de ayuda
          </Link>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* About Us */}
          <Link
            to="/nosotros"
            onClick={onClose}
            className="h-[52px] flex items-center text-base leading-[1.5] text-muted-foreground transition-colors hover:text-primary"
          >
            Sobre nosotros
          </Link>

          {/* Divider */}
          <div className="h-px bg-border" />
        </div>
      </div>
    </>
  );
}
