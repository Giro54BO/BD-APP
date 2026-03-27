import svgPaths from "./svg-2n1h8ak0v6";
import { imgVerified } from "./svg-koc5q";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="verified">
        <div className="absolute inset-[8.89%_6.97%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.673px_-2.135px] mask-size-[24px_24px]" data-name="verified" style={{ maskImage: `url('${imgVerified}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.6535 19.7305">
            <path d={svgPaths.p36ce9c00} fill="var(--fill-0, white)" id="verified" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[1.5]">Más de 30 años de experiencia</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#e30613] content-stretch flex h-[48px] items-center justify-center left-1/2 px-[4px] py-[6px] top-1/2 w-[412px]">
      <Frame1 />
    </div>
  );
}

export default function BanerMobile() {
  return (
    null
  );
}