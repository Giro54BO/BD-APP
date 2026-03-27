import svgPaths from "./svg-xga9f4vgij";
import { imgSearch } from "./svg-wwfqo";

function BarraDeBusqueda() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-between px-[16px] py-[4px] relative rounded-[12px] shrink-0 w-[316px]" data-name="Barra de busqueda">
      <div aria-hidden="true" className="absolute border border-[#302c67] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b7b] text-[14px] tracking-[0.0014px] w-[253px]">
        <p className="leading-[1.5]">Busca por marca, modelo, año o motor...</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="search">
        <div className="absolute inset-[14.1%_14.18%_14.26%_14.18%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.404px_-3.385px] mask-size-[24px_24px]" data-name="search" style={{ maskImage: `url('${imgSearch}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.192 17.1923">
            <path d={svgPaths.p34e8e200} fill="var(--fill-0, #302C67)" id="search" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function HeaderApp() {
  return (
    <div className="bg-[#f5f5f7] content-stretch flex gap-[16px] items-center p-[24px] relative size-full" data-name="Header-App">
      <div aria-hidden="true" className="absolute border-[#bfbed0] border-b border-solid inset-0 pointer-events-none" />
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="BD">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p345914f0} fill="var(--fill-0, #302C67)" id="Vector" />
        </svg>
        <div className="absolute inset-[21.26%_48.77%_39.58%_18.41%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5028 12.5317">
            <path clipRule="evenodd" d={svgPaths.p131a2800} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[37.78%_17.77%_23.23%_54.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.81761 12.4743">
            <path clipRule="evenodd" d={svgPaths.p3ae03d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[55.57%_43.03%_8.26%_10.41%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8989 11.576">
            <path d={svgPaths.pb0f6d00} fill="var(--fill-0, #E30613)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[24.79%_14.98%_38.38%_64.63%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.52456 11.7845">
            <path d={svgPaths.p3592200} fill="var(--fill-0, #E30613)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[55.51%_35.37%_38.32%_56.97%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.45123 1.97365">
            <path d={svgPaths.p1281be80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <BarraDeBusqueda />
    </div>
  );
}