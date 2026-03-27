import svgPaths from "./svg-t0v99jcqf7";
import { imgAppNavbar, imgAppNavbar1 } from "./svg-d2jjh";

export default function AppNavbar() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[16px] py-[10px] relative size-full" data-name="App-Navbar">
      <div aria-hidden="true" className="absolute border-[#bfbed0] border-solid border-t inset-0 pointer-events-none" />
      <div className="relative rounded-[100px] shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[20px] py-[10px] relative w-full">
            <div className="bg-[#302c67] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[120px] shrink-0">
              <div className="relative shrink-0 size-[24px]" data-name="home">
                <div className="absolute inset-[15.02%_18.75%_14.58%_18.75%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.5px_-3.606px] mask-size-[24px_24px]" data-name="home" style={{ maskImage: `url('${imgAppNavbar}')` }}>
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.8943">
                    <path d={svgPaths.p366ecf00} fill="var(--fill-0, white)" id="home" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="sell">
              <div className="absolute inset-[10.42%_7.32%_7.3%_10.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-2.5px] mask-size-[24px_24px]" data-name="sell" style={{ maskImage: `url('${imgAppNavbar}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7423 19.748">
                  <path d={svgPaths.p236bb80} fill="var(--fill-0, #302C67)" id="sell" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[24px]" data-name="shopping_cart">
              <div className="absolute inset-[9.37%_12.47%_10.18%_6.25%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.5px_-2.25px] mask-size-[24px_24px]" data-name="shopping_cart" style={{ maskImage: `url('${imgAppNavbar}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5077 19.3078">
                  <path d={svgPaths.p3761b200} fill="var(--fill-0, #302C67)" id="shopping_cart" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[5px] relative rounded-[100px] shrink-0">
                <div className="relative shrink-0 size-[24px]" data-name="account_circle">
                  <div className="absolute inset-[10.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-2.5px] mask-size-[24px_24px]" data-name="account_circle" style={{ maskImage: `url('${imgAppNavbar1}')` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                      <path d={svgPaths.p2155cd80} fill="var(--fill-0, #302C67)" id="account_circle" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}