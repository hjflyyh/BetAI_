import { FunctionComponent, useCallback } from "react";
import FrameComponent2 from "./FrameComponent2";

export type SelectedDetailsType = {
  className?: string;
};

const SelectedDetails: FunctionComponent<SelectedDetailsType> = ({
  className = "",
}) => {
  const onArrowLeftGreen1IconClick = useCallback(() => {
    // Please sync "selected" to the project
  }, []);

  return (
    <div
      className={`w-[434px] bg-dimgray max-w-full overflow-hidden flex flex-col items-start justify-start pt-3 px-0.5 pb-[59px] box-border gap-[8px] leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="w-[408px] flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-3xl text-floralwhite font-pixelify-sans">
        <div className="w-[213px] flex flex-row items-start justify-start py-0 px-[22px] box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[7px]">
            <div className="h-[37px] w-[37px] relative bg-[url('/public/ui-flat-select-01a1-5@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                alt=""
                src="/ui-flat-select-01a1-5@2x.png"
              />
              <img
                className="absolute top-[6px] left-[7px] w-6 h-6 object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/cash-1@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <a className="[text-decoration:none] self-stretch relative tracking-[-0.79px] leading-[31px] text-[inherit]">
                0.00
              </a>
            </div>
          </div>
        </div>
        <header className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[22px] box-border max-w-full text-left text-3xl text-floralwhite font-pixelify-sans">
          <div className="flex-1 flex flex-row items-start justify-start gap-[8px] max-w-full">
            <div className="flex flex-row items-start justify-start">
              <div className="h-[37px] w-[37px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/ui-flat-button-small-press-02a1-1@2x.png"
                />
                <img
                  className="absolute top-[3px] left-[6px] w-[25px] h-[25px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/chest01outlined-1@2x.png"
                />
              </div>
            </div>
            <a className="[text-decoration:none] flex-1 relative tracking-[-0.79px] leading-[31px] text-[inherit] whitespace-nowrap">
              connect wallet
            </a>
            <div className="flex flex-row items-start justify-start">
              <div className="h-[37px] w-[37px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                  alt=""
                  src="/ui-flat-button-small-press-02a1-1@2x.png"
                />
                <img
                  className="absolute top-[4.3px] left-[7.3px] w-[22.5px] h-[22.5px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/chest01outlined-1-1@2x.png"
                />
              </div>
            </div>
            <a className="[text-decoration:none] w-[125px] relative tracking-[-0.79px] leading-[31px] text-[inherit] inline-block shrink-0">
              treasures
            </a>
          </div>
        </header>
        <div className="w-[325px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[7px] max-w-full">
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <img
              className="w-[15px] h-[15px] relative object-cover cursor-pointer"
              loading="lazy"
              alt=""
              src="/arrowleftgreen-1@2x.png"
              onClick={onArrowLeftGreen1IconClick}
            />
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="h-[37px] w-[37px] relative">
              <img
                className="absolute top-[7px] left-[7.5px] w-[22.5px] h-[22.5px] object-contain"
                loading="lazy"
                alt=""
                src="/chest01outlined-1-2@2x.png"
              />
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
                alt=""
                src="/ui-flat-select-01a1-5@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 relative tracking-[-0.79px] leading-[31px]">
            selected warriors
          </div>
        </div>
        <div className="w-[322px] flex flex-row items-start justify-start py-0 px-[22px] box-border max-w-full text-sm text-black font-b">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="w-[202px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
              <div className="flex-1 flex flex-row items-start justify-end pt-[19px] px-6 pb-[7.7px] bg-[url('/public/ui-flat-banner-01-upward-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="h-[66px] w-[198px] relative object-cover hidden"
                  alt=""
                  src="/ui-flat-banner-01-upward-1@2x.png"
                />
                <div className="h-[39.3px] w-[132px] relative leading-[28px] inline-block shrink-0 z-[1]">
                  Chapter1-1:
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start z-[2]">
              <div className="h-[285px] flex-1 relative">
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <img
                    className="absolute w-[calc(100%_-_22px)] top-[15px] right-[11px] left-[11px] max-w-full overflow-hidden h-64 object-cover"
                    alt=""
                    src="/ui-flat-frame-02-standard-1@2x.png"
                  />
                  <img
                    className="absolute top-[260px] left-[254px] w-6 h-[25px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/ui-flat-select-01a1-1@2x.png"
                  />
                  <img
                    className="absolute top-[261px] left-[0px] w-[23px] h-6 object-cover z-[1]"
                    alt=""
                    src="/ui-flat-select-01a1-3@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] w-[23px] h-6 object-cover z-[1]"
                    alt=""
                    src="/ui-flat-select-01a1-3@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[252px] w-[26px] h-[26px] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/ui-flat-select-01a1-2@2x.png"
                  />
                </div>
                <img
                  className="absolute top-[23px] left-[19px] w-60 h-60 object-cover z-[2]"
                  alt=""
                  src="/image-37@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[419px] flex flex-row items-start justify-start pt-0 px-[22px] pb-[18px] box-border max-w-full text-left text-xl text-floralwhite font-pixelify-sans">
        <div className="flex-1 relative leading-[28px] inline-block max-w-full">
          <p className="m-0">{`In the heart of a mystical kingdom, a grand costume ball is held once a year at the royal palace. This ball is no ordinary event; it's a night of magic, mystery, and transformation, where attendees don enchanting costumes that reveal their true selves. As you step into the magnificent ballroom, you are asked a single question that will determine your appearance for the evening. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            <b>What do you look like at the Mysterious Costume Ball? - - -</b>
          </p>
        </div>
      </section>
      <section className="w-[397px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full text-left text-xl text-floralwhite font-pixelify-sans">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1.5 pr-0 pl-[19px] box-border max-w-full">
            <b className="flex-1 relative leading-[2px] inline-block max-w-full">
              <p className="m-0">Selected combination</p>
            </b>
          </div>
          <div className="w-[318px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[3px] text-black font-zpix">
            <div className="w-[159px] flex flex-row items-start justify-end pt-2 px-[7px] pb-[17px] box-border bg-[url('/public/ui-flat-banner-02-upward-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[53px] w-[159px] relative object-cover hidden"
                alt=""
                src="/ui-flat-banner-02-upward-1@2x.png"
              />
              <div className="w-[104px] relative leading-[28px] inline-block shrink-0 z-[1]">
                123543
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5">
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="h-[285px] flex-1 relative">
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <img
                      className="absolute w-[calc(100%_-_22px)] top-[15px] right-[11px] left-[11px] max-w-full overflow-hidden h-64 object-cover"
                      alt=""
                      src="/ui-flat-frame-02-standard-1@2x.png"
                    />
                    <img
                      className="absolute top-[260px] left-[254px] w-6 h-[25px] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/ui-flat-select-01a1-1@2x.png"
                    />
                    <img
                      className="absolute top-[261px] left-[0px] w-[23px] h-6 object-cover z-[1]"
                      alt=""
                      src="/ui-flat-select-01a1-3@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-[23px] h-6 object-cover z-[1]"
                      alt=""
                      src="/ui-flat-select-01a1-3@2x.png"
                    />
                    <img
                      className="absolute top-[0px] left-[252px] w-[26px] h-[26px] object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/ui-flat-select-01a1-2@2x.png"
                    />
                  </div>
                  <img
                    className="absolute top-[23px] left-[19px] w-[239px] h-60 object-cover z-[2]"
                    alt=""
                    src="/image-36@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <FrameComponent2 frameDivWidth="unset" frameDivAlignSelf="stretch" />
        </div>
      </section>
    </div>
  );
};

export default SelectedDetails;
