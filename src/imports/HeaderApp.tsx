import svgPaths from "./svg-6jkjvgtzfh";
import { imgSearch } from "./svg-uepej";

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
    null
  );
}