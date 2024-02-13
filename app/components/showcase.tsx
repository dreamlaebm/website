import Image from "next/image";
import { Montserrat } from "next/font/google";
import { grid_config } from "../ui_config/grid";
import { text_config } from "../ui_config/text";

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

const sizing = `h-[35vh] sm:h-[50vh] w-full`;

function Sleep() {
  return (
    <div
      className={`md:bg-[#490099] ${sizing} col-span-12 col-start-1 ${grid_config} overflow-hidden grid-rows-1`}
    >
      <div
        className={`
        col-end-6 col-span-6
        md:col-end-7 md:col-span-4
        lg:col-end-9 lg:col-span-5
        xl:col-end-11 xl:col-span-5
        2xl:col-end-13 2xl:col-span-6
         
        ${sizing} relative grid grid-cols-5`}
      >
        <div
          className={`
            col-start-1 col-span-5 md:col-span-3

            bg-radient-ellipse-c 
            md:bg-gradient-to-r from-[#49009900] to-[#490099cc] to-80%
            md:from-[#490099] md:to-[#5811A600]
            absolute top-0 w-full h-full
          
          `}
        >
          {" "}
        </div>
        <div
          className={`
            col-start-1 col-span-5 md:col-span-3

            bg-radient-ellipse-c 
            md:bg-gradient-to-r from-[#49009900] to-[#490099cc] to-80%
            md:from-[#490099] md:to-[#5811A600]
            absolute top-0 w-full h-full
          
          `}
        >
          {" "}
        </div>

        <img
          src="/woman_sleeping.png"
          className={`${sizing} col-end-6 col-span-6`}
          alt=""
        />
      </div>
      <div
        className={`${grid_config} col-start-1 col-span-12 mx-3 md:mx-14 relative ${sizing}`}
      >
        <p
          className={`${text_config}  absolute top-10 md:top-20 ${montserrat_black.className} text-[#AF66FF]`}
        >
          Selling in your sleep
        </p>
      </div>
    </div>
  );
}

function Crowd() {
  return (
    <div
      className={`md:bg-[#67A4C9] ${sizing} col-span-12 col-start-1 ${grid_config} overflow-hidden grid-rows-1`}
    >
      <div
        className={`
        col-start-1 col-span-6
        md:col-start-1 md:col-span-4
        lg:col-start-1 lg:col-span-5
        xl:col-start-1 xl:col-span-5
        2xl:col-start-1 2xl:col-span-6
         
        ${sizing} relative grid grid-cols-5`}
      >
        <div
          className={`
            col-start-1 col-span-5 md:col-span-3

            bg-radient-ellipse-c 
            md:bg-gradient-to-l from-[#67A4C94d] to-[#67A4C9cc] to-80%
            md:to-transparent md:from-[#67A4C9]
            absolute top-0 w-full h-full
          
          `}
        >
          {" "}
        </div>
        <div
          className={`
            col-start-1 col-span-5 md:col-span-3

            bg-radient-ellipse-c 
            md:bg-gradient-to-l from-[#67A4C94d] to-[#67A4C9cc] to-80%
            md:to-transparent md:from-[#67A4C9]
            absolute top-0 w-full h-full
          
          `}
        >
          {" "}
        </div>

        <img
          src="/crowd.png"
          className={`${sizing} col-start-1 col-span-6`}
          alt=""
        />
      </div>
      <div
        className={`${grid_config} col-end-12 col-span-12 mx-3 md:mx-14 relative ${sizing}`}
      >
        <div
          className="
        flex flex-col
        items-end 
        py-10
        md:py-20
        
        col-end-5 col-span-4
        md:col-end-6 md:col-span-5
        lg:col-end-8 lg:col-span-7
        xl:col-end-10 xl:col-span-10
        2xl:col-end-12
        "
        >
          <p
            className={`
            ${text_config}
            
            ${montserrat_black.className} text-[#F0B58D]
            
            `}
          >
            To millions of people
          </p>
          <p
            className={`
            ${montserrat_black.className} text-[#F0B58D]
            text-lg self-end md:text-2xl lg:text-4xl italic
         
            `}
          >
            at the same time
          </p>
        </div>
      </div>
    </div>
  );
}

function Automated() {
  return (
    <div
      className={` ${sizing} col-span-12 col-start-1 ${grid_config} overflow-hidden grid-rows-1 bg-[#EB7849]`}
    >
      <div
        className={`col-end-6 col-span-6
        md:col-end-7 md:col-span-4
        lg:col-end-9 lg:col-span-5
        xl:col-end-11 xl:col-span-5
        2xl:col-end-13 2xl:col-span-6
         
        ${sizing} relative grid grid-cols-5`}
      >
        <div
          className={`
            col-start-1 col-span-5 md:col-span-3

            bg-radient-ellipse-c 
            md:bg-gradient-to-r from-[#E982574d] to-[#D45F2Fcc]
            md:to-transparent md:from-[#EB7849] to-[60%] md:to-100%
            absolute top-0 w-full h-full
          
          `}
          // col-start-1 col-span-5 bg-[#EB7849] bg-opacity-35 md:bg-gradient-to-r md:from-[#EB7849] -[#EB784940] md:to-transparent absolute top-0 w-full h-full
        >
          {" "}
        </div>

        <img
          src="/automated.png"
          className={`${sizing} col-start-1 col-span-6`}
          alt=""
        />
      </div>
      <div
        className={`${grid_config} col-start-1 col-span-12 mx-3 md:mx-14 relative ${sizing}`}
      >
        <p
          className={`${text_config} font-black absolute top-10 md:top-20 ${montserrat_black.className} text-[#FFA64D]`}
        >
          Effortlessly and automatedly
        </p>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <div className={`${grid_config} w-full`} id="showcase">
      <Sleep></Sleep>
      <Crowd></Crowd>
      <Automated></Automated>
    </div>
  );
}
