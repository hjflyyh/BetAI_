import { FunctionComponent } from "react";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[17px] pb-[7px] box-border max-w-full text-left text-xl text-floralwhite font-pixelify-sans ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
          <div className="flex flex-row items-start justify-start">
            <div className="h-[37px] w-[37px] relative">
              <img
                className="absolute top-[6px] left-[6px] w-[25px] h-[25px] object-contain"
                loading="lazy"
                alt=""
                src="/chest01outlined-1@2x.png"
              />
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                alt=""
                src="/ui-flat-select-01a1-5@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <a className="[text-decoration:none] self-stretch relative leading-[28px] text-[inherit]">
              0x3422...432
            </a>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="h-[37px] w-[37px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                alt=""
                src="/ui-flat-button-small-press-02a1-1@2x.png"
              />
              <img
                className="absolute top-[4.3px] left-[7.3px] w-[22.5px] h-[22.5px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/chest01outlined-1-1@2x.png"
              />
            </div>
          </div>
          <a className="[text-decoration:none] w-[125px] relative text-3xl tracking-[-0.79px] leading-[31px] text-[inherit] inline-block shrink-0">
            treasures
          </a>
        </div>
        <div className="w-[202px] flex flex-row items-start justify-start py-0 px-0.5 box-border text-sm text-black font-b">
          <div className="flex-1 flex flex-row items-start justify-end pt-[19px] px-6 pb-[7.7px] bg-[url('/public/ui-flat-banner-01-upward-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="h-[66px] w-[198px] relative object-cover hidden"
              alt=""
              src="/ui-flat-banner-01-upward-1@2x.png"
            />
            <a className="[text-decoration:none] h-[39.3px] w-[132px] relative leading-[28px] text-[inherit] inline-block shrink-0 z-[1]">
              Chapter1-1:
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent4;
