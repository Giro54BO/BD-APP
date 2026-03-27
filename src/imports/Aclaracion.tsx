import svgPaths from "./svg-eymrglue4j";
import { imgClose } from "./svg-175nb";

function Error() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="error">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="error">
          <mask height="20" id="mask0_1_2536" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_1_2536)">
            <path d={svgPaths.p16f11100} fill="var(--fill-0, #EFAC00)" id="error_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Contenido() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Contenido">
      <Error />
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#835f00] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Seleccione un vehículo para encontrar las piezas compatibles.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="directions_car">
        <div className="absolute inset-[22.92%_14.58%_14.58%_14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-5.5px] mask-size-[24px_24px]" data-name="directions_car" style={{ maskImage: `url('${imgClose}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
            <path d={svgPaths.p69d4980} fill="var(--fill-0, #302C67)" id="directions_car" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#302c67] text-[24px] whitespace-nowrap">¿Para qué vehículo es esta pieza?</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame />
      <div className="h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Botones">
        <div aria-hidden="true" className="absolute border border-[#302c67] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">Agregar vehículo</p>
            <div className="relative shrink-0 size-[24px]" data-name="border_color">
              <div className="absolute inset-[9.44%_8.33%_0_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2.265px] mask-size-[24px_24px]" data-name="border_color" style={{ maskImage: `url('${imgClose}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21.7345">
                  <path d={svgPaths.pbd22480} fill="var(--fill-0, #302C67)" id="border_color" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Aclaracion() {
  return (
    <div className="bg-[#f0f0f2] content-stretch flex flex-col gap-[30px] items-start px-[12px] py-[24px] relative size-full" data-name="Aclaración">
      <div className="bg-[#fdf7e6] relative rounded-[4px] shrink-0 w-full" data-name="Mensajes contextuales/BD">
        <div aria-hidden="true" className="absolute border border-[#efac00] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
            <Contenido />
            <div className="relative shrink-0 size-[24px]" data-name="close">
              <div className="absolute inset-[22.28%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.346px_-5.346px] mask-size-[24px_24px]" data-name="close" style={{ maskImage: `url('${imgClose}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3075 13.3075">
                  <path d={svgPaths.p20bff00} fill="var(--fill-0, #EFAC00)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}