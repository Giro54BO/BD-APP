import svgPaths from "../../imports/svg-yadvf09kif";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-24 right-4 z-50 group transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative h-16 w-[68px]">
        {/* Green bubble background */}
        <div className="absolute inset-0 top-0 bottom-[10.67px]">
          <div className="absolute bg-[#7ad26d] inset-0 rounded-bl-[5px] rounded-tl-[5px] rounded-tr-[5px] shadow-lg" />
        </div>

        {/* WhatsApp icon */}
        <div className="absolute inset-[13px_19.69px_23px_20.67px]">
          <div className="absolute inset-0 overflow-clip">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g>
                <g />
                <path d={svgPaths.p1b9a6f80} fill="white" />
              </g>
            </svg>
          </div>
        </div>

        {/* Bottom arrow/tail */}
        <div className="absolute flex inset-[50px_0_0_54.15px] items-center justify-center">
          <div className="-rotate-90 flex-none size-[10px]">
            <div className="relative size-full">
              <div className="absolute inset-[0_0_0_14.12%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.58779 10">
                  <path d={svgPaths.p21569a80} fill="#7AD26D" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
