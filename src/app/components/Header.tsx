import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import svgPaths from "../../imports/svg-dzlm20prl5";
import svgPathsMobile from "../../imports/svg-pmlra41f7y";
import imgBigdamAzul1 from "@/assets/618631a906a3f14879ebf268c012439e9a59550d.png";
import { MobileMenu } from "./MobileMenu";
import { CartBadge } from "./CartBadge";

export function Header() {
  const { itemCount } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-background sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="hidden lg:flex bg-background items-center justify-between px-8 lg:px-16 py-[18px]">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center h-8 flex-shrink-0"
        >
          <img
            src={imgBigdamAzul1}
            alt="BigDam"
            className="h-[46.475px] w-[145.666px] object-cover"
          />
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex-1 max-w-[595px] mx-8"
        >
          <div className="bg-input-background flex gap-[15px] items-center px-4 py-1 rounded-xl border border-primary relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por marca, modelo, año o motor..."
              className="flex-1 h-9 bg-transparent text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="w-6 h-6 flex-shrink-0 relative"
            >
              <div className="absolute inset-[14.1%_14.18%_14.26%_14.18%]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 17.192 17.1923"
                >
                  <path
                    d={svgPaths.p34e8e200}
                    fill="var(--color-primary)"
                  />
                </svg>
              </div>
            </button>
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center justify-between gap-0 w-[303px] flex-shrink-0">
          {/* Cart Button */}
          <Link
            to="/cart"
            className="bg-card flex gap-1 h-[52px] items-center justify-center px-4 rounded-xl flex-shrink-0 hover:bg-muted transition-colors relative"
          >
            <span className="text-primary text-base leading-[1.5] whitespace-nowrap">
              Mi carrito
            </span>
            <div className="w-5 h-5 flex-shrink-0 relative">
              <div className="absolute inset-[9.37%_12.47%_10.18%_6.25%]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 19.5077 19.3078"
                >
                  <path
                    d={svgPaths.p3761b200}
                    fill="var(--color-primary)"
                  />
                </svg>
              </div>
              <CartBadge itemCount={itemCount} />
            </div>
          </Link>

          {/* Divider */}
          <div className="flex h-6 items-center justify-center w-0 flex-shrink-0">
            <div className="rotate-90 w-6 h-0">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 1"
              >
                <line
                  stroke="var(--color-primary)"
                  x2="24"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Profile Button */}
          <Link
            to={isAuthenticated ? "/profile" : "/login"}
            className="bg-card flex gap-1 h-[52px] items-center justify-center px-4 rounded-xl w-[124px] flex-shrink-0 hover:bg-muted transition-colors"
          >
            <span className="text-primary text-base leading-[1.5] whitespace-nowrap">
              Mi perfil
            </span>
            <div className="w-5 h-5 flex-shrink-0 relative">
              <div className="absolute inset-[10.42%]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 19 19"
                >
                  <path
                    d={svgPaths.p2155cd80}
                    fill="var(--color-primary)"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden bg-background flex items-center justify-between px-4 py-[18px]">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center flex-shrink-0"
        >
          <div className="overflow-clip relative w-8 h-8">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 32 32"
            >
              <path
                d={svgPathsMobile.p345914f0}
                fill="var(--color-primary)"
              />
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
                  d={svgPathsMobile.p131a2800}
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
                  d={svgPathsMobile.p3ae03d00}
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
                <path
                  d={svgPathsMobile.pb0f6d00}
                  fill="var(--color-accent)"
                />
              </svg>
            </div>
            <div className="absolute inset-[24.79%_14.98%_38.38%_64.63%]">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 6.52456 11.7845"
              >
                <path
                  d={svgPathsMobile.p3592200}
                  fill="var(--color-accent)"
                />
              </svg>
            </div>
            <div className="absolute inset-[55.51%_35.37%_38.32%_56.97%]">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 2.45123 1.97365"
              >
                <path
                  d={svgPathsMobile.p1281be80}
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex-1 max-w-[269px] mx-4"
        >
          <div className="bg-input-background flex items-center justify-between px-4 py-1 rounded-xl border border-primary relative h-11">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Busca por marca, modelo, año..."
              className="flex-1 bg-transparent text-sm text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="w-4 h-4 flex-shrink-0 relative ml-2"
            >
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 17.192 17.1923"
              >
                <path
                  d={svgPathsMobile.p34e8e200}
                  fill="var(--color-primary)"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* Cart Icon */}
        <Link
          to="/cart"
          className="w-4 h-4 flex-shrink-0 relative mr-4"
          aria-label="Carrito"
        >
          <svg
            className="block size-full"
            fill="none"
            viewBox="0 0 19.5077 19.3078"
          >
            <path
              d={svgPathsMobile.p3761b200}
              fill="var(--color-primary)"
            />
          </svg>
          {itemCount > 0 && (
            <div className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
              {itemCount}
            </div>
          )}
        </Link>

        {/* Account Icon */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="w-4 h-4 flex-shrink-0 relative"
          aria-label="Mi cuenta"
        >
          <svg
            className="block size-full"
            fill="none"
            viewBox="0 0 19 19"
          >
            <path
              d={svgPathsMobile.p2155cd80}
              fill="var(--color-primary)"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}