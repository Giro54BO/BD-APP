import svgPaths from '../../imports/svg-sma2teuc7e';

export function TopBanner() {
  return (
    <>
      {/* Desktop Banner */}
      <div className="hidden lg:flex bg-accent items-center justify-between px-16 py-[6px] h-12">
        {/* Left - Experience */}
        <div className="flex gap-1 items-center">
          <div className="w-6 h-6 relative flex-shrink-0">
            <div className="absolute inset-[8.89%_6.97%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6535 19.7305">
                <path d={svgPaths.p36ce9c00} fill="white" />
              </svg>
            </div>
          </div>
          <p className="text-base text-white leading-[1.5]">
            Más de 30 años de experiencia
          </p>
        </div>

        {/* Right - Shipping */}
        <div className="flex gap-1 items-center">
          <div className="w-6 h-6 relative flex-shrink-0">
            <div className="absolute inset-[18.75%_5.61%_18.51%_5.61%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3075 15.0577">
                <path d={svgPaths.p21ffd200} fill="white" />
              </svg>
            </div>
          </div>
          <p className="text-base text-white leading-[1.5]">
            Envió a nivel nacional
          </p>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="lg:hidden bg-accent flex items-center justify-center px-1 py-[6px] h-12">
        <div className="flex gap-1 items-center">
          <div className="w-6 h-6 relative flex-shrink-0">
            <div className="absolute inset-[8.89%_6.97%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6535 19.7305">
                <path d={svgPaths.p36ce9c00} fill="white" />
              </svg>
            </div>
          </div>
          <p className="text-base text-white leading-[1.5]">
            Más de 30 años de experiencia
          </p>
        </div>
      </div>
    </>
  );
}
