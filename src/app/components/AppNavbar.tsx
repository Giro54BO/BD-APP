import { useNavigate, useLocation } from 'react-router';
import { useCart } from '../context/CartContext';
import svgPaths from '../../imports/svg-t0v99jcqf7';
import { imgAppNavbar, imgAppNavbar1 } from '../../imports/svg-d2jjh';
import { CartBadge } from './CartBadge';

export function AppNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { itemCount } = useCart();

  // Determine active tab based on current route
  const isHome = location.pathname === '/';
  const isCategories =
    location.pathname.includes('/category') ||
    location.pathname.includes('/search') ||
    location.pathname.includes('/categorias') ||
    location.pathname.includes('/ofertas');
  const isCart = location.pathname === '/cart';
  const isProfile = location.pathname.includes('/profile') || location.pathname.includes('/auth');

  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[16px] py-[10px] relative w-full sticky bottom-0 z-50 border-t border-border">
      <div className="relative rounded-[100px] shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[20px] py-[10px] relative w-full">
            {/* Home */}
            <button
              onClick={() => navigate('/')}
              className={`content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[120px] shrink-0 transition-colors ${
                isHome ? 'bg-primary' : 'bg-transparent'
              }`}
              aria-label="Inicio"
            >
              <div className="relative shrink-0 size-[24px]">
                <div 
                  className="absolute inset-[15.02%_18.75%_14.58%_18.75%]"
                  style={{ 
                    maskImage: `url('${imgAppNavbar}')`,
                    maskSize: '24px 24px',
                    maskPosition: '-4.5px -3.606px',
                    maskRepeat: 'no-repeat'
                  }}
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.8943">
                    <path d={svgPaths.p366ecf00} fill={isHome ? 'white' : 'var(--color-primary)'} />
                  </svg>
                </div>
              </div>
            </button>

            {/* Categories */}
            <button
              onClick={() => navigate('/categorias')}
              className={`content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[120px] shrink-0 transition-colors ${
                isCategories ? 'bg-primary' : 'bg-transparent'
              }`}
              aria-label="Categorías"
            >
              <div className="relative shrink-0 size-[24px]">
                <div 
                  className="absolute inset-[10.42%_7.32%_7.3%_10.42%]"
                  style={{ 
                    maskImage: `url('${imgAppNavbar}')`,
                    maskSize: '24px 24px',
                    maskPosition: '-2.5px -2.5px',
                    maskRepeat: 'no-repeat'
                  }}
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7423 19.748">
                    <path d={svgPaths.p236bb80} fill={isCategories ? 'white' : 'var(--color-primary)'} />
                  </svg>
                </div>
              </div>
            </button>

            {/* Cart */}
            <button
              onClick={() => navigate('/cart')}
              className={`content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[120px] shrink-0 transition-colors ${
                isCart ? 'bg-primary' : 'bg-transparent'
              }`}
              aria-label="Carrito"
            >
              <div className="relative shrink-0 size-[24px]">
                <div 
                  className="absolute inset-[9.37%_12.47%_10.18%_6.25%]"
                  style={{ 
                    maskImage: `url('${imgAppNavbar}')`,
                    maskSize: '24px 24px',
                    maskPosition: '-1.5px -2.25px',
                    maskRepeat: 'no-repeat'
                  }}
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5077 19.3078">
                    <path d={svgPaths.p3761b200} fill={isCart ? 'white' : 'var(--color-primary)'} />
                  </svg>
                </div>
              </div>
              <CartBadge itemCount={itemCount} className="-top-1.5 -right-1.5" />
            </button>

            {/* Profile */}
            <button
              onClick={() => navigate('/profile')}
              className={`content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[120px] shrink-0 transition-colors ${
                isProfile ? 'bg-primary' : 'bg-transparent'
              }`}
              aria-label="Perfil"
            >
              <div className="relative shrink-0 size-[24px]">
                <div 
                  className="absolute inset-[10.42%]"
                  style={{ 
                    maskImage: `url('${imgAppNavbar1}')`,
                    maskSize: '24px 24px',
                    maskPosition: '-2.5px -2.5px',
                    maskRepeat: 'no-repeat'
                  }}
                >
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                    <path d={svgPaths.p2155cd80} fill={isProfile ? 'white' : 'var(--color-primary)'} />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
