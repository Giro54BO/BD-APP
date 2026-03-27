import svgPaths from "./svg-ma8eijteeu";
import { imgLogout } from "./svg-0q6km";

export default function Logout() {
  return (
    <div className="relative size-full" data-name="logout">
      <div className="absolute inset-[14.58%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.5px_-3.5px] mask-size-[24px_24px]" data-name="logout" style={{ maskImage: `url('${imgLogout}')` }}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p19b898c0} fill="var(--fill-0, #6B6B7B)" id="logout" />
        </svg>
      </div>
    </div>
  );
}