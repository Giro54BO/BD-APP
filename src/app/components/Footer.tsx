import { Link } from "react-router";
import svgPaths from "../../imports/svg-z3h66sdv4u";
import imgFooter from "@/assets/618631a906a3f14879ebf268c012439e9a59550d.png";
import { categories } from "../data/mockData";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Mobile Footer */}
      <div className="lg:hidden flex flex-col gap-12 px-8 py-8">
        {/* Logo & Copyright */}
        <div className="flex flex-col gap-4">
          <div className="h-16 w-[200px]">
            <img
              src={imgFooter}
              alt="BigDam Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground leading-[1.625] max-w-[167px]">
            © 2025 BigDam Repuestos Automotrices. Todos los
            derechos reservados
          </p>
        </div>

        {/* Categorías */}
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold text-muted-foreground">
            Categorías
          </h3>
          <nav className="flex flex-col gap-5">
            {categories.slice(0, 3).map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.name.toLowerCase()}`}
                className="text-base text-muted-foreground hover:text-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/search"
              className="text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Ver más
            </Link>
          </nav>
        </div>

        {/* Quienes somos */}
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold text-muted-foreground">
            Quienes somos
          </h3>
          <nav className="flex flex-col gap-5">
            <Link
              to="/nosotros"
              className="text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/blog"
              className="text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>

        {/* Ayuda */}
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold text-muted-foreground">
            Ayuda
          </h3>
          <nav className="flex flex-col gap-5">
            <Link
              to="/help-center"
              className="text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Centro de ayuda
            </Link>
          </nav>
        </div>

        {/* Descarga nuestra app */}
        <div className="flex flex-col gap-6 max-w-[240px]">
          <h3 className="text-2xl font-bold text-muted-foreground">
            Descarga nuestra app
          </h3>

          {/* App Store */}
          <button className="bg-muted rounded-xl px-5 py-4 flex items-center gap-4 hover:bg-card transition-colors">
            <div className="w-8 h-8 flex-shrink-0 relative">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 26.954 32.0001"
              >
                <path
                  d={svgPaths.p27c03900}
                  fill="var(--color-muted-foreground)"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 items-start text-left">
              <p className="text-[11px] text-muted-foreground leading-[1.18]">
                Disponible en
              </p>
              <p className="text-sm font-semibold text-muted-foreground leading-[1.43]">
                App Store
              </p>
            </div>
          </button>

          {/* Google Play */}
          <button className="bg-muted rounded-xl px-5 py-4 flex items-center gap-4 hover:bg-card transition-colors">
            <div className="w-8 h-8 flex-shrink-0 relative">
              <svg
                className="block size-full"
                fill="none"
                viewBox="0 0 28.8472 32"
              >
                <path
                  d={svgPaths.p2d1ad380}
                  fill="var(--color-muted-foreground)"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1 items-start text-left">
              <p className="text-[11px] text-muted-foreground leading-[1.18]">
                Disponible en
              </p>
              <p className="text-sm font-semibold text-muted-foreground leading-[1.43]">
                Google Play
              </p>
            </div>
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-border opacity-50"></div>

        {/* Social Media & Contact */}
        <div className="flex flex-col gap-12">
          {/* Social Media Icons */}
          <div className="flex items-center gap-9">
            {/* Facebook */}
            <a
              href="#"
              className="w-6 h-6 relative hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                viewBox="0 0 24 24.0062"
              >
                <path
                  d={svgPaths.p8bcac00}
                  fill="var(--color-muted)"
                />
              </svg>
              <svg
                className="absolute inset-[22.74%_29.57%_0_29.56%]"
                fill="none"
                viewBox="0 0 9.8097 18.5469"
              >
                <path
                  d={svgPaths.p236f0980}
                  fill="var(--color-muted-foreground)"
                />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="#"
              className="w-6 h-6 relative hover:opacity-80 transition-opacity"
              aria-label="TikTok"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                viewBox="0 0 24 24.0071"
              >
                <path
                  d={svgPaths.p2cf92380}
                  fill="var(--color-muted)"
                />
              </svg>
              <svg
                className="absolute inset-[22.91%_25.83%_22.31%_26.71%]"
                fill="none"
                viewBox="0 0 11.3908 13.1512"
              >
                <path
                  d={svgPaths.p2f8c3af2}
                  fill="var(--color-muted-foreground)"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="w-6 h-6 relative hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                viewBox="0 0 24 24.0071"
              >
                <path
                  d={svgPaths.p2cf92380}
                  fill="var(--color-muted)"
                />
              </svg>
              <svg
                className="absolute inset-[20.34%_19.02%_20.34%_19.03%]"
                fill="none"
                viewBox="0 0 14.8677 14.2396"
              >
                <path
                  d={svgPaths.p3168cff0}
                  fill="var(--color-muted-foreground)"
                />
              </svg>
              <svg
                className="absolute inset-[35.58%]"
                fill="none"
                viewBox="0 0 6.92177 6.92381"
              >
                <path
                  d={svgPaths.p20fd7a40}
                  fill="var(--color-muted-foreground)"
                />
              </svg>
              <svg
                className="absolute inset-[30.14%_30.36%_62.09%_61.87%]"
                fill="none"
                viewBox="0 0 1.86443 1.86498"
              >
                <path
                  d={svgPaths.pea439c0}
                  fill="var(--color-muted-foreground)"
                />
              </svg>
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 relative flex-shrink-0">
              <div className="absolute inset-[6.25%_18.75%_6.25%_22.92%]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  viewBox="0 0 14 21"
                >
                  <path
                    d={svgPaths.p3e9f6380}
                    fill="var(--color-muted-foreground)"
                  />
                </svg>
              </div>
            </div>
            <span className="text-base text-muted-foreground whitespace-nowrap leading-[1.5]">
              (+591) 721-22210
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 relative flex-shrink-0">
              <div className="absolute inset-[18.75%_10.42%]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  viewBox="0 0 19 15"
                >
                  <path
                    d={svgPaths.p1bbbecb2}
                    fill="var(--color-muted-foreground)"
                  />
                </svg>
              </div>
            </div>
            <span className="text-base text-muted-foreground whitespace-nowrap leading-[1.5]">
              ventas@biddam.com
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 relative flex-shrink-0">
              <div className="absolute inset-[10.42%_18.55%_10.38%_18.55%]">
                <svg
                  className="absolute block size-full"
                  fill="none"
                  viewBox="0 0 15.096 19.0095"
                >
                  <path
                    d={svgPaths.p1d149900}
                    fill="var(--color-muted-foreground)"
                  />
                </svg>
              </div>
            </div>
            <span className="text-base text-muted-foreground whitespace-nowrap leading-[1.5]">
              Santa Cruz, Bolivia
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden lg:block bg-background border-t border-border px-16 py-12">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-12">
          {/* Main Footer Content */}
          <div className="flex items-start justify-between">
            {/* Company Info */}
            <div className="flex flex-col gap-5 w-[200px]">
              <div className="h-11 w-[197px]">
                <img
                  src={imgFooter}
                  alt="BigDam Logo"
                  className="h-full w-full object-cover object-left"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-[1.5]">
                © 2025 BigDam Repuestos Automotrices. Todos los
                derechos reservados
              </p>
            </div>

            {/* Categorías */}
            <div className="flex flex-col gap-6 w-[240px]">
              <h3 className="text-2xl font-bold text-muted-foreground leading-[1.3]">
                Categorías
              </h3>
              <nav className="flex flex-col gap-6">
                <Link
                  to="/search"
                  className="text-base text-muted-foreground hover:text-primary transition-colors leading-[1.5]"
                >
                  Autopartes
                </Link>

                <Link
                  to="/category/electrónica"
                  className="text-base text-muted-foreground hover:text-primary transition-colors leading-[1.5]"
                >
                  Electrónica
                </Link>
                <Link
                  to="/category/ferretería"
                  className="text-base text-muted-foreground hover:text-primary transition-colors leading-[1.5]"
                >
                  Ferretería
                </Link>
              </nav>
            </div>

            {/* Quienes somos & Ayuda */}
            <div className="flex flex-col gap-6 w-[240px]">
              {/* Quienes somos */}
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-muted-foreground leading-[1.3]">
                  Quienes somos
                </h3>
                <nav className="flex flex-col gap-6">
                  <Link
                    to="/nosotros"
                    className="text-base text-muted-foreground hover:text-primary transition-colors leading-[1.5]"
                  >
                    Sobre nosotros
                  </Link>
                  <Link
                    to="/blog"
                    className="text-base text-muted-foreground hover:text-primary transition-colors leading-[1.5]"
                  >
                    Blog
                  </Link>
                </nav>
              </div>

              {/* Ayuda */}
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-muted-foreground leading-[1.3]">
                  Ayuda
                </h3>
                <nav className="flex flex-col gap-6">
                  <Link
                    to="/help-center"
                    className="text-base text-muted-foreground hover:text-primary transition-colors leading-[1.5]"
                  >
                    Centro de ayuda
                  </Link>
                </nav>
              </div>
            </div>

            {/* Descarga nuestra app */}
            <div className="flex flex-col gap-6 w-[240px]">
              <h3 className="text-2xl font-bold text-muted-foreground leading-[1.3]">
                Descarga nuestra app
              </h3>

              {/* App Store */}
              <button className="bg-muted rounded-xl px-5 py-4 flex items-center gap-4 hover:bg-card transition-colors">
                <div className="w-8 h-8 flex-shrink-0 relative">
                  <svg
                    className="block size-full"
                    fill="none"
                    viewBox="0 0 26.954 32.0001"
                  >
                    <path
                      d={svgPaths.p27c03900}
                      fill="var(--color-muted-foreground)"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1 items-start text-left">
                  <p className="text-[11px] text-muted-foreground leading-[1.18]">
                    Disponible en
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground leading-[1.43]">
                    App Store
                  </p>
                </div>
              </button>

              {/* Google Play */}
              <button className="bg-muted rounded-xl px-5 py-4 flex items-center gap-4 hover:bg-card transition-colors">
                <div className="w-8 h-8 flex-shrink-0 relative">
                  <svg
                    className="block size-full"
                    fill="none"
                    viewBox="0 0 28.8472 32"
                  >
                    <path
                      d={svgPaths.p2d1ad380}
                      fill="var(--color-muted-foreground)"
                    />
                  </svg>
                </div>
                <div className="flex flex-col gap-1 items-start text-left">
                  <p className="text-[11px] text-muted-foreground leading-[1.18]">
                    Disponible en
                  </p>
                  <p className="text-sm font-semibold text-muted-foreground leading-[1.43]">
                    Google Play
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border opacity-50"></div>

          {/* Bottom Section - Social Media & Contact */}
          <div className="flex items-center justify-center gap-12">
            {/* Social Media */}
            <div className="flex items-center gap-9">
              {/* Facebook */}
              <a
                href="#"
                className="w-6 h-6 relative hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  viewBox="0 0 24 24.0062"
                >
                  <path
                    d={svgPaths.p8bcac00}
                    fill="var(--color-muted)"
                  />
                </svg>
                <svg
                  className="absolute inset-[22.74%_29.57%_0_29.56%]"
                  fill="none"
                  viewBox="0 0 9.8097 18.5469"
                >
                  <path
                    d={svgPaths.p236f0980}
                    fill="var(--color-muted-foreground)"
                  />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="w-6 h-6 relative hover:opacity-80 transition-opacity"
                aria-label="TikTok"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  viewBox="0 0 24 24.0071"
                >
                  <path
                    d={svgPaths.p2cf92380}
                    fill="var(--color-muted)"
                  />
                </svg>
                <svg
                  className="absolute inset-[22.91%_25.83%_22.31%_26.71%]"
                  fill="none"
                  viewBox="0 0 11.3908 13.1512"
                >
                  <path
                    d={svgPaths.p2f8c3af2}
                    fill="var(--color-muted-foreground)"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-6 h-6 relative hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg
                  className="absolute block size-full"
                  fill="none"
                  viewBox="0 0 24 24.0071"
                >
                  <path
                    d={svgPaths.p2cf92380}
                    fill="var(--color-muted)"
                  />
                </svg>
                <svg
                  className="absolute inset-[20.34%_19.02%_20.34%_19.03%]"
                  fill="none"
                  viewBox="0 0 14.8677 14.2396"
                >
                  <path
                    d={svgPaths.p3168cff0}
                    fill="var(--color-muted-foreground)"
                  />
                </svg>
                <svg
                  className="absolute inset-[35.58%]"
                  fill="none"
                  viewBox="0 0 6.92177 6.92381"
                >
                  <path
                    d={svgPaths.p20fd7a40}
                    fill="var(--color-muted-foreground)"
                  />
                </svg>
                <svg
                  className="absolute inset-[30.14%_30.36%_62.09%_61.87%]"
                  fill="none"
                  viewBox="0 0 1.86443 1.86498"
                >
                  <path d={svgPaths.pea439c0} fill="white" />
                </svg>
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 relative flex-shrink-0">
                <div className="absolute inset-[6.25%_18.75%_6.25%_22.92%]">
                  <svg
                    className="absolute block size-full"
                    fill="none"
                    viewBox="0 0 14 21"
                  >
                    <path
                      d={svgPaths.p3e9f6380}
                      fill="var(--color-muted-foreground)"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-base text-muted-foreground whitespace-nowrap leading-[1.5]">
                (+591) 721-22210
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 relative flex-shrink-0">
                <div className="absolute inset-[18.75%_10.42%]">
                  <svg
                    className="absolute block size-full"
                    fill="none"
                    viewBox="0 0 19 15"
                  >
                    <path
                      d={svgPaths.p1bbbecb2}
                      fill="var(--color-muted-foreground)"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-base text-muted-foreground whitespace-nowrap leading-[1.5]">
                ventas@biddam.com
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 relative flex-shrink-0">
                <div className="absolute inset-[10.42%_18.55%_10.38%_18.55%]">
                  <svg
                    className="absolute block size-full"
                    fill="none"
                    viewBox="0 0 15.096 19.0095"
                  >
                    <path
                      d={svgPaths.p1d149900}
                      fill="var(--color-muted-foreground)"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-base text-muted-foreground whitespace-nowrap leading-[1.5]">
                Santa Cruz, Bolivia
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
