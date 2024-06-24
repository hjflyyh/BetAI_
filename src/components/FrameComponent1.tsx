import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[316px] flex flex-row items-start justify-start pt-0 px-[19px] pb-9 box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start">
        <div className="h-[285px] flex-1 relative">
          <img
            className="absolute top-[260px] left-[254px] w-6 h-[25px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/ui-flat-select-01a1-1@2x.png"
          />
          <img
            className="absolute top-[261px] left-[0px] w-[23px] h-6 object-contain z-[1]"
            alt=""
            src="/ui-flat-select-01a1-3@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-[23px] h-6 object-contain z-[1]"
            alt=""
            src="/ui-flat-select-01a1-3@2x.png"
          />
          <img
            className="absolute top-[0px] left-[252px] w-[26px] h-[26px] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/ui-flat-select-01a1-2@2x.png"
          />
          <div className="absolute w-[calc(100%_-_22px)] top-[15px] right-[11px] left-[11px] h-64 bg-cover bg-no-repeat bg-[top]">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
              alt=""
              src="/ui-flat-frame-02-standard-1@2x.png"
            />
            <img
              className="absolute w-[calc(100%_-_17px)] top-[8px] right-[9px] left-[8px] max-w-full overflow-hidden h-60 object-cover z-[2]"
              alt=""
              src="/image-36@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
