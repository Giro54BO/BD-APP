import svgPaths from "./svg-dfw5nz3jnq";
import { imgAccountCircle, imgClose } from "./svg-keoyg";

function SignalCellularAlt() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="signal_cellular_alt">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="signal_cellular_alt">
          <mask height="20" id="mask0_21_810" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_21_810)">
            <path d={svgPaths.p19f25b00} fill="var(--fill-0, #141414)" id="signal_cellular_alt_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <SignalCellularAlt />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">LTE</p>
    </div>
  );
}

function Wifi() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wifi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="wifi">
          <mask height="20" id="mask0_21_784" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #666666)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_21_784)">
            <path d={svgPaths.p328c0b00} fill="var(--fill-0, #141414)" id="wifi_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BatteryHoriz() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="battery_horiz_050">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="battery_horiz_050">
          <mask height="20" id="mask0_21_806" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #808080)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_21_806)">
            <path d={svgPaths.p3f0bf500} fill="var(--fill-0, #141414)" id="battery_horiz_050_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame1 />
      <Wifi />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">40%</p>
      <BatteryHoriz />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Botones">
        <div aria-hidden="true" className="absolute border border-[#302c67] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">Iniciar sesión</p>
            <div className="relative shrink-0 size-[24px]" data-name="account_circle">
              <div className="absolute inset-[10.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-2.5px] mask-size-[24px_24px]" data-name="account_circle" style={{ maskImage: `url('${imgAccountCircle}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                  <path d={svgPaths.p2155cd80} fill="var(--fill-0, #302C67)" id="account_circle" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Botones">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">{`Regístrate `}</p>
            <div className="relative shrink-0 size-[24px]" data-name="edit_note">
              <div className="absolute inset-[18.75%_8.27%_18.75%_18.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.5px_-4.5px] mask-size-[24px_24px]" data-name="edit_note" style={{ maskImage: `url('${imgAccountCircle}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5152 15">
                  <path d={svgPaths.pab7ac80} fill="var(--fill-0, #302C67)" id="edit_note" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f5f5f7] relative rounded-[12px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] py-[48px] relative w-full">
        <p className="font-['Lato:Regular',sans-serif] h-[30px] leading-[1.3] not-italic relative shrink-0 text-[#302c67] text-[24px] w-full">Bienvenido!</p>
        <Frame5 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Categorías</p>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_up">
        <div className="absolute inset-[34.78%_26.44%_37.28%_26.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.347px_-8.346px] mask-size-[24px_24px]" data-name="keyboard_arrow_up" style={{ maskImage: `url('${imgAccountCircle}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3075 6.7075">
            <path d={svgPaths.p36b54680} fill="var(--fill-0, #302C67)" id="keyboard_arrow_up" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[20px] top-[97px] w-[372px]">
      <Frame6 />
      <Frame4 />
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-[52px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b7b] text-[16px] w-[min-content]">
        <p className="leading-[1.5]">Moda</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-[52px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b7b] text-[16px] w-[min-content]">
        <p className="leading-[1.5]">Repuestos automotrices</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-[52px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b7b] text-[16px] w-[min-content]">
        <p className="leading-[1.5]">Ferreteria</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-[52px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b7b] text-[16px] w-[min-content]">
        <p className="leading-[1.5]">Electronica</p>
      </div>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-[52px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b7b] text-[16px] w-[min-content]">
        <p className="leading-[1.5]">Hogar</p>
      </div>
      <div className="h-0 relative shrink-0 w-[372px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 1">
            <line id="Line 54" stroke="var(--stroke-0, #BFBED0)" x2="372" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-[52px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b7b] text-[16px] w-[min-content]">
        <p className="leading-[1.5]">Centro de ayuda</p>
      </div>
      <div className="h-0 relative shrink-0 w-[372px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 1">
            <line id="Line 54" stroke="var(--stroke-0, #BFBED0)" x2="372" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-[52px] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#6b6b7b] text-[16px] w-[min-content]">
        <p className="leading-[1.5] whitespace-pre-wrap">{`Sobre  nosotros`}</p>
      </div>
      <div className="h-0 relative shrink-0 w-[372px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 1">
            <line id="Line 54" stroke="var(--stroke-0, #BFBED0)" x2="372" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[20px] top-[24px] w-[372px]">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] h-[30px] leading-[1.3] min-h-px min-w-px not-italic relative text-[#302c67] text-[24px]">Menú</p>
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
      <Frame3 />
    </div>
  );
}

export default function Menu() {
  return (
    <div className="bg-white relative size-full" data-name="Menú">
      <div className="absolute content-stretch flex h-[60px] items-start justify-between left-0 px-[20px] py-[10px] top-0 w-[412px]" data-name="Phone UI">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#141414] text-[12px] whitespace-nowrap">11:29</p>
        <Frame />
      </div>
      <div className="absolute bg-white h-[917px] left-0 top-0 w-[412px]" />
      <Frame2 />
      <Header />
    </div>
  );
}