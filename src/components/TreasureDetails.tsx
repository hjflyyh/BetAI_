import { FunctionComponent, useCallback } from "react";

export type TreasureDetailsType = {
  className?: string;
};

const TreasureDetails: FunctionComponent<TreasureDetailsType> = ({
  className = "",
}) => {
  const onArrowLeftGreen1IconClick = useCallback(() => {
    // Please sync "treasures" to the project
  }, []);

  return (
    <div
      className={`w-[434px] bg-dimgray max-w-full overflow-hidden flex flex-col items-start justify-start pt-3 pb-7 pr-[21px] pl-6 box-border gap-[259px] leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-3xl text-floralwhite font-pixelify-sans">
        <img
          className="h-[25px] w-6 absolute !m-[0] right-[11px] bottom-[0px] object-cover"
          loading="lazy"
          alt=""
          src="/ui-flat-select-01a1-1@2x.png"
        />
        <div className="h-[26px] w-[45px] absolute !m-[0] top-[118px] left-[-22px]">
          <img
            className="absolute top-[11px] left-[0px] w-[15px] h-[15px] object-cover cursor-pointer"
            loading="lazy"
            alt=""
            src="/arrowleftgreen-1@2x.png"
            onClick={onArrowLeftGreen1IconClick}
          />
          <img
            className="absolute top-[0px] left-[22px] w-[23px] h-6 object-cover z-[2]"
            alt=""
            src="/ui-flat-select-01a1-3@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-[39px] box-border relative gap-[14px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-2 pr-[3px] pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
              <div className="w-[169px] flex flex-row items-start justify-start gap-[7px]">
                <div className="h-[37px] w-[37px] relative bg-[url('/public/ui-flat-select-01a1-5@2x.png')] bg-cover bg-no-repeat bg-[top]">
                  <img
                    className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                    alt=""
                    src="/ui-flat-select-01a1-5@2x.png"
                  />
                  <img
                    className="absolute top-[6px] left-[7px] w-6 h-6 object-cover z-[1]"
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
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px]">
                <div className="flex flex-row items-start justify-start">
                  <div className="h-[37px] w-[37px] relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                      alt=""
                      src="/ui-flat-button-small-press-02a1-1@2x.png"
                    />
                    <img
                      className="absolute top-[3px] left-[6px] w-[25px] h-[25px] object-cover z-[1]"
                      alt=""
                      src="/chest01outlined-1@2x.png"
                    />
                  </div>
                </div>
                <a className="[text-decoration:none] flex-1 relative tracking-[-0.79px] leading-[31px] text-[inherit] inline-block min-w-[106px]">
                  connect wallet
                </a>
                <div className="flex flex-row items-start justify-start">
                  <div className="h-[37px] w-[37px] relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                      alt=""
                      src="/ui-flat-select-01a1-5@2x.png"
                    />
                    <img
                      className="absolute top-[7px] left-[7.3px] w-[22.5px] h-[22.5px] object-contain z-[1]"
                      alt=""
                      src="/chest01outlined-1-11@2x.png"
                    />
                  </div>
                </div>
                <a className="[text-decoration:none] w-[125px] relative tracking-[-0.79px] leading-[31px] text-[inherit] inline-block shrink-0">
                  treasures
                </a>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[7px] pl-4 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
                  <div className="w-[37px] h-[37px] relative">
                    <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start w-full h-full">
                      <img
                        className="h-[37px] w-[37px] relative object-cover"
                        alt=""
                        src="/ui-flat-select-01a1-5@2x.png"
                      />
                    </div>
                    <img
                      className="absolute top-[3px] left-[3px] w-[31px] h-[31px] object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/image-51@2x.png"
                    />
                  </div>
                </div>
                <img
                  className="h-[26px] w-[26px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/ui-flat-select-01a1-2@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                <div className="flex-1 relative tracking-[-0.79px] leading-[31px] inline-block max-w-full">
                  Use the Bitget Wallet
                </div>
              </div>
            </div>
          </div>
          <div className="w-[376.3px] flex flex-row flex-wrap items-end justify-start max-w-full [row-gap:20px] text-base">
            <div className="flex flex-col items-start justify-start gap-[70px]">
              <input className="m-0 w-[27.6px] h-6 relative" type="checkbox" />
              <div className="flex flex-col items-start justify-start gap-[52px]">
                <input
                  className="m-0 w-[27.6px] h-6 relative"
                  type="checkbox"
                />
                <div className="flex flex-col items-start justify-start gap-[21px]">
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
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
                  </div>
                  <input
                    className="m-0 w-[27.6px] h-6 relative"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[28px] min-w-[218px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[7px] gap-[16px]">
                <div className="self-stretch relative tracking-[-0.79px] leading-[20px]">
                  Export the private key from your BeTAI wallet and import it
                  into the Bitget wallet (if you don't have an Bitget wallet,
                  you can download it here).
                </div>
                <div className="self-stretch relative tracking-[-0.79px] leading-[20px]">
                  Visit the BetAI page to log in with the Bitget wallet you just
                  imported.
                </div>
              </div>
              <div className="w-[193px] flex flex-row items-start justify-start py-0 px-[7px] box-border text-3xl">
                <div className="flex-1 relative tracking-[-0.79px] leading-[31px]">
                  Reward: 0.25
                </div>
              </div>
              <div className="self-stretch relative tracking-[-0.79px] leading-[20px]">
                Claim!
              </div>
            </div>
          </div>
          <img
            className="w-[23px] h-6 absolute !m-[0] bottom-[0px] left-[0px] object-cover"
            loading="lazy"
            alt=""
            src="/ui-flat-select-01a1-3@2x.png"
          />
        </div>
      </section>
      <section className="w-[285px] flex flex-col items-start justify-start gap-[8px] text-left text-3xl text-floralwhite font-pixelify-sans">
        <div className="self-stretch flex flex-row items-start justify-start gap-[9px]">
          <div className="flex flex-row items-start justify-start">
            <div className="h-[37px] w-[37px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover"
                alt=""
                src="/ui-flat-button-small-press-02a1-1@2x.png"
              />
              <img
                className="absolute top-[3px] left-[6px] w-[25px] h-[25px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/chest01outlined-1-21@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 relative tracking-[-0.79px] leading-[31px]">
            start!
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[9px]">
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
                src="/chest01outlined-1-3@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 relative tracking-[-0.79px] leading-[31px]">
            selected warriors
          </div>
        </div>
      </section>
    </div>
  );
};

export default TreasureDetails;
