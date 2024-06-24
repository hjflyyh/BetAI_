import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  className?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  frameDivWidth,
  frameDivAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivWidth, frameDivAlignSelf]);

  return (
    <div
      className={`w-[391px] flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full text-left text-xl text-floralwhite font-pixelify-sans ${className}`}
      style={frameDivStyle}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[5px] max-w-full">
        <div className="flex flex-col items-start justify-start gap-[14px]">
          <div className="w-[37px] h-[37px] relative bg-[url('/public/ui-flat-select-01a1-5@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
              alt=""
              src="/ui-flat-select-01a1-5@2x.png"
            />
            <img
              className="absolute top-[6px] left-[7px] w-6 h-6 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/helmet03outlined-1@2x.png"
            />
          </div>
          <div className="w-[37px] h-[37px] relative bg-[url('/public/ui-flat-select-01a1-5@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
              alt=""
              src="/ui-flat-select-01a1-5@2x.png"
            />
            <img
              className="absolute top-[7px] left-[7px] w-6 h-6 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/pouchredcoinsgoldoutlined-1@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[203px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[23px]">
            <div className="self-stretch relative leading-[28px]">
              warrior: 0x3422...432
            </div>
            <div className="w-[304px] relative leading-[28px] inline-block">
              prize: 0.23ETH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
