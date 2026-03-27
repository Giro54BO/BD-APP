import svgPaths from "./svg-yadvf09kif";

function Group() {
  return (
    <div className="absolute contents inset-[0_0_16.67%_0]">
      <div className="absolute bg-[#7ad26d] inset-[0_0_16.67%_0] rounded-bl-[5px] rounded-tl-[5px] rounded-tr-[5px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[21.67%_30.77%_38.33%_32.31%]">
      <div className="absolute inset-[21.67%_30.77%_38.33%_32.31%]" data-name="Whatsapp">
        <div className="absolute inset-0 overflow-clip" data-name="Logos / whatsapp-line">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Group">
              <g id="Vector" />
              <path d={svgPaths.p1b9a6f80} fill="var(--fill-0, white)" id="Vector_2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0_0_16.67%_0]">
      <Group />
      <Group1 />
    </div>
  );
}

export default function Group3() {
  return (
    <div className="relative size-full">
      <Group2 />
      <div className="absolute flex inset-[83.33%_0_0_84.62%] items-center justify-center">
        <div className="-rotate-90 flex-none size-[10px]">
          <div className="relative size-full">
            <div className="absolute inset-[0_0_0_14.12%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.58779 10">
                <path d={svgPaths.p21569a80} fill="var(--fill-0, #7AD26D)" id="Polygon 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}