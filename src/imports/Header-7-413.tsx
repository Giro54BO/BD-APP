import svgPaths from "./svg-4k7zfo905t";
import imgBigdamAzul1 from "@/assets/618631a906a3f14879ebf268c012439e9a59550d.png";
import { imgDehaze } from "./svg-99382";

export default function Header() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[24px] py-[18px] relative size-full" data-name="Header">
      <div className="relative shrink-0 size-[24px]" data-name="dehaze">
        <div className="absolute inset-[22.92%_14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-5.5px] mask-size-[24px_24px]" data-name="dehaze" style={{ maskImage: `url('${imgDehaze}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 13">
            <path d={svgPaths.p387df780} fill="var(--fill-0, #302C67)" id="dehaze" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="BD">
        <div className="h-[46.475px] relative shrink-0 w-[145.666px]" data-name="BIGDAM AZUL 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBigdamAzul1} />
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="shopping_cart">
        <div className="absolute inset-[9.37%_12.47%_10.18%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-2.25px] mask-size-[24px_24px]" data-name="shopping_cart" style={{ maskImage: `url('${imgDehaze}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5077 19.3078">
            <path d={svgPaths.p3761b200} fill="var(--fill-0, #302C67)" id="shopping_cart" />
          </svg>
        </div>
      </div>
    </div>
  );
}