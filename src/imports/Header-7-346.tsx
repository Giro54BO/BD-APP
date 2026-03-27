import svgPaths from "./svg-dzlm20prl5";
import imgBigdamAzul1 from "@/assets/618631a906a3f14879ebf268c012439e9a59550d.png";
import { imgSearch } from "./svg-dyv4j";

function Frame() {
  return (
    <div className="bg-[#fafafa] content-stretch flex gap-[15px] items-center px-[16px] py-[4px] relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#302c67] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b7b] text-[14px] tracking-[0.0014px] w-[555px]">
        <p className="leading-[1.5]">Buscar por marca, modelo, año o motor...</p>
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

function Frame1() {
  return (
    <div className="col-1 content-stretch flex items-center justify-between ml-0 mt-0 relative row-1 w-[303px]">
      <div className="bg-white content-stretch flex gap-[4px] h-[52px] items-center justify-center p-[16px] relative rounded-[12px] shrink-0" data-name="Botones">
        <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">Mi carrito</p>
        <div className="relative shrink-0 size-[24px]" data-name="shopping_cart">
          <div className="absolute inset-[9.37%_12.47%_10.18%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-2.25px] mask-size-[24px_24px]" data-name="shopping_cart" style={{ maskImage: `url('${imgSearch}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5077 19.3078">
              <path d={svgPaths.p3761b200} fill="var(--fill-0, #302C67)" id="shopping_cart" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Line 29" stroke="var(--stroke-0, #302C67)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] h-[52px] items-center justify-center p-[16px] relative rounded-[12px] shrink-0 w-[124px]" data-name="Botones">
        <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">Mi perfil</p>
        <div className="relative shrink-0 size-[24px]" data-name="account_circle">
          <div className="absolute inset-[10.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-2.5px] mask-size-[24px_24px]" data-name="account_circle" style={{ maskImage: `url('${imgSearch}')` }}>
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <path d={svgPaths.p2155cd80} fill="var(--fill-0, #302C67)" id="account_circle" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame1 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[64px] py-[18px] relative size-full" data-name="Header">
      <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="BD">
        <div className="h-[46.475px] relative shrink-0 w-[145.666px]" data-name="BIGDAM AZUL 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBigdamAzul1} />
        </div>
      </div>
      <Frame />
      <Group />
    </div>
  );
}