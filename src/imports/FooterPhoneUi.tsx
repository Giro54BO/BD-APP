import svgPaths from "./svg-9c5mpvocb5";

export default function FooterPhoneUi() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[20px] py-[12px] relative size-full" data-name="Footer/Phone UI">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#858585] text-[12px] whitespace-nowrap">11:29</p>
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
        <div className="content-stretch flex items-center relative shrink-0">
          <div className="relative shrink-0 size-[20px]" data-name="signal_cellular_alt">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="signal_cellular_alt">
                <mask height="20" id="mask0_2003_259" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                  <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
                </mask>
                <g mask="url(#mask0_2003_259)">
                  <path d={svgPaths.p19f25b00} fill="var(--fill-0, #666666)" id="signal_cellular_alt_2" />
                </g>
              </g>
            </svg>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">LTE</p>
        </div>
        <div className="relative shrink-0 size-[20px]" data-name="wifi">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="wifi">
              <mask height="20" id="mask0_2003_241" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                <rect fill="var(--fill-0, #666666)" height="20" id="Bounding box" width="20" />
              </mask>
              <g mask="url(#mask0_2003_241)">
                <path d={svgPaths.p328c0b00} fill="var(--fill-0, #666666)" id="wifi_2" />
              </g>
            </g>
          </svg>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#858585] text-[12px] whitespace-nowrap">40%</p>
        <div className="relative shrink-0 size-[20px]" data-name="battery_horiz_050">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="battery_horiz_050">
              <mask height="20" id="mask0_2003_277" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                <rect fill="var(--fill-0, #808080)" height="20" id="Bounding box" width="20" />
              </mask>
              <g mask="url(#mask0_2003_277)">
                <path d={svgPaths.p3f0bf500} fill="var(--fill-0, #808080)" id="battery_horiz_050_2" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}