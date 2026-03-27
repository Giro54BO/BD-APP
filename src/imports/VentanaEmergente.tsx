import svgPaths from "./svg-uy2i5d5etf";
import { imgClose } from "./svg-oewpz";

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="close">
        <button className="-translate-y-1/2 absolute aspect-[13.307501792907715/13.307501792907715] block cursor-pointer left-[22.28%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.347px_-5.346px] mask-size-[24px_24px] right-[22.27%] top-1/2" data-name="close" style={{ maskImage: `url('${imgClose}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3075 13.3075">
            <path d={svgPaths.p20bff00} fill="var(--fill-0, #302C67)" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center w-full">
      <p className="font-['Lato:Bold',sans-serif] leading-[1.25] relative shrink-0 text-[#302c67] text-[32px] tracking-[-0.0016px] w-full">¡Listo para compartir!</p>
      <p className="font-['Lato:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[#6b6b7b] text-[24px] w-full">Ahora puedes enviarlo fácilmente por el medio que prefieras:</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[48px]" data-name="Facebook">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 47.9999">
          <path d={svgPaths.p36c43000} fill="var(--fill-0, #302C67)" id="Vector" />
        </svg>
        <div className="absolute inset-[22.74%_29.57%_0_29.56%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6194 37.0841">
            <path d={svgPaths.p105db380} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',sans-serif] h-[23px] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] text-center w-[120px]">Facebook</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[18.5%_17.44%_18.49%_17.42%]" data-name="Group">
      <div className="absolute inset-[35.53%_34.37%_35.37%_36.53%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.98315 6.98315">
          <path d={svgPaths.p17d75500} fill="var(--fill-0, #FDFDFD)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18.5%_17.44%_18.49%_17.42%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6337 15.1216">
          <path d={svgPaths.p4f1e900} fill="var(--fill-0, #FDFDFD)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[48px]" data-name="WhatsApp">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <path d={svgPaths.pc08300} fill="var(--fill-0, #302C67)" id="Vector" />
        </svg>
        <Group />
      </div>
      <p className="font-['Lato:Regular',sans-serif] h-[23px] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] text-center w-[120px]">Whatsapp</p>
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[22.05%_20.14%_22.05%_20.13%]" data-name="layer1">
      <div className="absolute inset-[22.05%_20.14%]" data-name="path1009">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3341 13.419">
          <path d={svgPaths.p185ece00} fill="var(--fill-0, white)" id="path1009" />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[48px]" data-name="X">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <path d={svgPaths.p22bb800} fill="var(--fill-0, #302C67)" id="Vector" />
        </svg>
        <Layer />
      </div>
      <p className="font-['Lato:Regular',sans-serif] h-[23px] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] text-center w-[120px]">x</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <Frame4 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

export default function VentanaEmergente() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center p-[48px] relative rounded-[12px] size-full" data-name="Ventana emergente">
      <Frame1 />
      <Frame />
      <Frame5 />
    </div>
  );
}