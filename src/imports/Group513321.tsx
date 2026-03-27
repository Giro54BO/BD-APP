import svgPaths from "./svg-sma2teuc7e";
import { imgVerified } from "./svg-ygq3t";

function Frame2() {
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="local_shipping">
        <div className="absolute inset-[18.75%_5.61%_18.51%_5.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.347px_-4.5px] mask-size-[24px_24px]" data-name="local_shipping" style={{ maskImage: `url('${imgVerified}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3075 15.0577">
            <path d={svgPaths.p21ffd200} fill="var(--fill-0, white)" id="local_shipping" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[157px]">
        <p className="leading-[1.5] whitespace-pre-wrap">{`Envió  a nivel nacional`}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#e30613] content-stretch flex h-[48px] items-center justify-between left-0 px-[64px] py-[6px] top-0 w-[1440px]">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}