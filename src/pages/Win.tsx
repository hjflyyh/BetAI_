import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Win: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-dimgray overflow-hidden flex flex-col items-start justify-start pt-3 px-[7px] pb-[97px] box-border gap-[8px] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border gap-[6px] max-w-full text-left text-3xl text-floralwhite font-pixelify-sans">
        <div className="w-[203px] flex flex-row items-start justify-start pt-0 px-[17px] pb-4 box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[7px]">
            <div className="h-[37px] w-[37px] relative bg-[url('/public/ui-flat-select-01a1-5@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                alt=""
                src="/ui-flat-select-01a1-5@2x.png"
              />
              <img
                className="absolute top-[6px] left-[7px] w-6 h-6 object-contain z-[1]"
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
        <FrameComponent4 />
        <FrameComponent3 />
        <FrameComponent2 />
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <section className="w-[409px] flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full text-left text-xl text-floralwhite font-pixelify-sans">
        <div className="flex-1 relative leading-[28px] inline-block max-w-full">
          <p className="m-0">{`In the heart of a mystical kingdom, a grand costume ball is held once a year at the royal palace. This ball is no ordinary event; it's a night of magic, mystery, and transformation, where attendees don enchanting costumes that reveal their true selves. As you step into the magnificent ballroom, you are asked a single question that will determine your appearance for the evening. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            <b>What do you look like at the Mysterious Costume Ball? - - -</b>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Win;
