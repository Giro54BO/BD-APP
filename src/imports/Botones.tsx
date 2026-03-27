import svgPaths from "./svg-s7xjaavtit";
import { imgShare } from "./svg-7jo2i";

export default function Botones() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center p-[16px] relative rounded-[12px] size-full" data-name="Botones">
      <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">Compartir</p>
      <div className="relative shrink-0 size-[24px]" data-name="share">
        <div className="absolute inset-[10.42%_18.75%_10.42%_10.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-2.5px] mask-size-[24px_24px]" data-name="share" style={{ maskImage: `url('${imgShare}')` }}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
            <path d={svgPaths.p1c8f7580} fill="var(--fill-0, #302C67)" id="share" />
          </svg>
        </div>
      </div>
    </div>
  );
}