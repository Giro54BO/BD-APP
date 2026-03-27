import svgPaths from "./svg-ira0nmpy2q";
import { imgChevronForward } from "./svg-20cgq";

export default function Guia() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full" data-name="Guia">
      <div aria-hidden="true" className="absolute border-[#eaeaf0] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#3375af] text-[0px] tracking-[0.0014px] w-[33px]">
        <p className="leading-[1.5] text-[#6b6b7b] text-[14px]">Inicio</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="chevron_forward">
        <div className="absolute inset-[26.44%_37.28%_26.44%_34.78%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8.347px_-6.346px] mask-size-[24px_24px]" data-name="chevron_forward" style={{ maskImage: `url('${imgChevronForward}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.7075 11.3075">
            <path d={svgPaths.p200a9180} fill="var(--fill-0, #6B6B7B)" id="chevron_forward" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[#302c67] text-[14px] tracking-[0.0014px] w-[148px]">
        <p className="leading-[1.5]">Autopartes</p>
      </div>
    </div>
  );
}