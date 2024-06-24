import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start min-h-[119px] max-w-full text-left text-xl text-floralwhite font-pixelify-sans ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[17px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start relative max-w-full">
          <div className="self-stretch h-[119px] relative leading-[28px] inline-block shrink-0">
            <p className="m-0 whitespace-pre-wrap">{`The oracle         chose the number: `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">So...congrats!</p>
          </div>
          <img
            className="w-[27px] h-[27px] absolute !m-[0] top-[2px] left-[105px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/gear-1@2x.png"
          />
          <img
            className="w-8 h-8 absolute !m-[0] bottom-[5px] left-[135px] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/torchoutlined-2@2x.png"
          />
        </div>
      </div>
      <div className="w-[159px] flex flex-row items-start justify-end pt-2 px-[7px] pb-[17px] box-border bg-[url('/public/ui-flat-banner-02-upward-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1] mt-[-88px] text-black font-zpix">
        <img
          className="h-[53px] w-[159px] relative object-cover hidden"
          alt=""
          src="/ui-flat-banner-02-upward-1@2x.png"
        />
        <div className="w-[104px] relative leading-[28px] inline-block shrink-0 z-[1]">
          123543
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
