import svgPaths from "./svg-nk6qgfm51c";
import { imgClose, imgStatMinus1 } from "./svg-v39ib";

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[20px] top-[24px] w-[372px]">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] h-[30px] leading-[1.3] min-h-px min-w-px not-italic relative text-[#302c67] text-[24px]">Filtros</p>
      <button className="block cursor-pointer relative shrink-0 size-[32px]" data-name="close">
        <div className="absolute inset-[22.28%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.346px_-5.346px] mask-size-[24px_24px]" data-name="close" style={{ maskImage: `url('${imgClose}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.7433 17.7433">
            <path d={svgPaths.p1f958f80} fill="var(--fill-0, #302C67)" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white border-[#bfbed0] border-b border-solid h-[74px] left-0 overflow-clip top-0 w-[412px]" data-name="Header">
      <Frame />
    </div>
  );
}

function Campo() {
  return (
    <div className="bg-[#fafafa] h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Campo">
      <div aria-hidden="true" className="absolute border border-[#302c67] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#6b6b7b] text-[14px] tracking-[0.0014px]">Bs. 00.00</p>
        </div>
      </div>
    </div>
  );
}

function Campo1() {
  return (
    <div className="bg-[#fafafa] h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Campo">
      <div aria-hidden="true" className="absolute border border-[#302c67] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#6b6b7b] text-[14px] tracking-[0.0014px]">Bs. 00.00</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Lato:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#6b6b7b] text-[24px] whitespace-nowrap">Marcas</p>
      <div className="relative shrink-0 size-[24px]" data-name="stat_minus_1">
        <div className="absolute inset-[34.71%_26.44%_37.34%_26.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.346px_-8.331px] mask-size-[24px_24px]" data-name="stat_minus_1" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3075 6.70775">
            <path d={svgPaths.p1a7900} fill="var(--fill-0, #302C67)" id="stat_minus_1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Bosh</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Denso</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Gates</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Monroe</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">NGK</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Valeo</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">SKF</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Toyota</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame3 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame4 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 364 1">
            <line id="Line 36" stroke="var(--stroke-0, #BFBED0)" x2="364" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full">
      <p className="font-['Lato:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#6b6b7b] text-[24px] whitespace-nowrap">Subcategoría</p>
      <div className="relative shrink-0 size-[24px]" data-name="stat_minus_1">
        <div className="absolute inset-[34.71%_26.44%_37.34%_26.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.346px_-8.331px] mask-size-[24px_24px]" data-name="stat_minus_1" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3075 6.70775">
            <path d={svgPaths.p1a7900} fill="var(--fill-0, #302C67)" id="stat_minus_1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Bobina de encendido</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Bomba de gasolina</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Bujias</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Cable de bujia</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Cinta de volante</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Frenos</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Motor</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Suspensión</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Eléctrico</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Filtros</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Transmisión</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Refrigeración</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] h-[48px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Check box">
        <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="check_box_outline_blank" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p2eadfcf0} fill="var(--fill-0, #302C67)" id="check_box_outline_blank" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] h-full justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#302c67] text-[14px] tracking-[0.0014px]">
        <p className="leading-[1.5]">Encendido</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-between relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#bfbed0] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">Ver más</p>
      <div className="relative shrink-0 size-[24px]" data-name="stat_minus_1">
        <div className="absolute inset-[34.71%_26.44%_37.34%_26.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.346px_-8.331px] mask-size-[24px_24px]" data-name="stat_minus_1" style={{ maskImage: `url('${imgStatMinus1}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3075 6.70775">
            <path d={svgPaths.p1a7900} fill="var(--fill-0, #302C67)" id="stat_minus_1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Filtros() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[24px] top-[89px] w-[364px]" data-name="Filtros">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Campos">
        <p className="font-['Lato:Regular',sans-serif] h-[24px] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[14px] tracking-[0.0014px] w-full">Precio mínimo</p>
        <Campo />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Campos">
        <p className="font-['Lato:Regular',sans-serif] h-[24px] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[14px] tracking-[0.0014px] w-full">Precio máximo</p>
        <Campo1 />
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 364 1">
            <line id="Line 36" stroke="var(--stroke-0, #BFBED0)" x2="364" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame27 />
    </div>
  );
}

export default function Filtro() {
  return (
    <div className="bg-white relative size-full" data-name="Filtro">
      <Header />
      <Filtros />
      <div className="absolute bg-[#f0f0f2] content-stretch flex gap-[4px] h-[54px] items-center justify-center left-[24px] p-[16px] rounded-[12px] top-[1689px] w-[364px]" data-name="Botones">
        <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6b6b7b] text-[16px] whitespace-nowrap">Aplicar filtro</p>
        <div className="relative shrink-0 size-[24px]" data-name="playlist_add_check">
          <div className="absolute inset-[26.04%_9.78%_22.28%_13.54%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.25px_-6.25px] mask-size-[24px_24px]" data-name="playlist_add_check" style={{ maskImage: `url('${imgStatMinus1}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4038 12.4038">
              <path d={svgPaths.p5977600} fill="var(--fill-0, #6B6B7B)" id="playlist_add_check" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[4px] h-[48px] items-center justify-center left-[24px] p-[16px] rounded-[12px] top-[1761px] w-[364px]" data-name="Botones">
        <div aria-hidden="true" className="absolute border border-[#f0f0f2] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#6b6b7b] text-[16px] whitespace-nowrap">Limpiar</p>
        <div className="relative shrink-0 size-[24px]" data-name="playlist_remove">
          <div className="absolute inset-[26.04%_13.74%_9.78%_13.74%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.298px_-6.25px] mask-size-[24px_24px]" data-name="playlist_remove" style={{ maskImage: `url('${imgStatMinus1}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.404 15.4038">
              <path d={svgPaths.p9716740} fill="var(--fill-0, #6B6B7B)" id="playlist_remove" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}