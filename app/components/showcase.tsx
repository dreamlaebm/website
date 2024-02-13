import Image from "next/image";
import { Montserrat } from "next/font/google";
import { grid_config, grid_gap_config } from "../ui_config/grid";
import { small_text_config, text_config } from "../ui_config/text";

const montserrat_black = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "normal",
});
const montserrat_medium_italic = Montserrat({
  weight: "500",
  subsets: ["latin"],
  style: "italic",
});

const sizing = `h-[20vh] md:h-[30vh] lg:h-[50vh] w-full`;

function Fast() {
  return (
    <div className={`${sizing} relative col-start-1 col-span-12`}>
      <img
        src="/ferrari.png"
        alt=""
        className="absolute w-full h-full col-start-1 col-span-12 -z-10"
      />
      <div className={`${grid_config} ${grid_gap_config} h-full relative`}>
        <p
          className={`col-start-1 col-span-12 text-white ${text_config} absolute top-[10%] ${montserrat_black}`}
        >
          So fast not even a ferrari can keep up with them
        </p>
      </div>
    </div>
  );
}

function Beach() {
  return (
    <div className={`${sizing} relative col-start-1 col-span-12`}>
      <img
        src="/beach.png"
        alt=""
        className="absolute w-full h-full col-start-1 col-span-12 -z-10"
      />
      <div
        className={`${grid_config} ${grid_gap_config} h-full relative place-items-end`}
      >
        <p
          className={`col-start-1 col-span-12 text-white ${text_config} absolute top-[10%] ${montserrat_black}`}
        >
          As beautiful as this beach
        </p>
      </div>
    </div>
  );
}

function Lazy() {
  return (
    <div className={`${sizing} relative col-start-1 col-span-12`}>
      <img
        src="/lazy.png"
        alt=""
        className="absolute w-full h-full col-start-1 col-span-12 -z-10"
      />
      <div className={`${grid_config} ${grid_gap_config} h-full relative`}>
        <p
          className={`col-start-1 col-span-12 text-white ${text_config} absolute top-[10%] ${montserrat_black} `}
        >
          And you dont even need to do anything
        </p>
        <p
          className={`col-start-1 col-span-12 text-white ${small_text_config} absolute bottom-[10%] ${montserrat_black} place-self-end hidden md:flex`}
        >
          Seriously, this big boy is one of our clients
        </p>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <div className={`${grid_config} w-full`} id="showcase">
      <Fast></Fast>
      <Beach></Beach>
      {/* i honestly couldnt figured out a better name */}
      <Lazy></Lazy>
    </div>
  );
}
