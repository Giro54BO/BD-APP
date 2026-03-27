import svgPaths from "./svg-ulnwdl2pel";
import { imgTune } from "./svg-vwxfh";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="Botones">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">Filtros</p>
            <div className="relative shrink-0 size-[24px]" data-name="tune">
              <div className="absolute inset-[13.54%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.25px_-3.25px] mask-size-[24px_24px]" data-name="tune" style={{ maskImage: `url('${imgTune}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                  <path d={svgPaths.p308cc871} fill="var(--fill-0, #302C67)" id="tune" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px]" data-name="Botones">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">Ordenar por</p>
            <div className="relative shrink-0 size-[24px]" data-name="stat_minus_1">
              <div className="absolute inset-[34.71%_26.44%_37.34%_26.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.346px_-8.331px] mask-size-[24px_24px]" data-name="stat_minus_1" style={{ maskImage: `url('${imgTune}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3075 6.70775">
                  <path d={svgPaths.p1a7900} fill="var(--fill-0, #302C67)" id="stat_minus_1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full">
      <p className="font-['Lato:Bold',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#6b6b7b] text-[32px] tracking-[-0.0016px] w-full">Autopartes</p>
      <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6b6b7b] text-[18px] w-full">34 resultados</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 364 1">
            <line id="Line 56" stroke="var(--stroke-0, #BFBED0)" x2="364" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}