import { FunctionComponent } from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[312px] flex flex-row items-start justify-start py-0 px-[17px] box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[25px]">
        <div className="w-[202px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
          <button className="cursor-pointer [border:none] pt-[19px] px-[13px] pb-[7.7px] bg-[transparent] flex-1 flex flex-row items-start justify-end bg-[url('/public/ui-flat-banner-01-upward-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="h-[66px] w-[198px] relative object-cover hidden"
              alt=""
              src="/ui-flat-banner-01-upward-1@2x.png"
            />
            <a className="[text-decoration:none] h-[39.3px] w-[132px] relative text-sm leading-[28px] font-b text-black text-left inline-block shrink-0 z-[1]">
              Previous
            </a>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start">
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
                className="absolute w-[calc(100%_-_16px)] top-[8px] right-[8px] left-[8px] max-w-full overflow-hidden h-60 object-cover z-[2]"
                alt=""
                src="/image-37@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
