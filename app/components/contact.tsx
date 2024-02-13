import { Montserrat } from "next/font/google";
import Link from "next/link";
import { grid_config, grid_gap_config } from "../ui_config/grid";
import { small_text_config, text_config } from "../ui_config/text";

const Monst = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "italic",
});

const Monst2 = Montserrat({
  weight: "500",
  subsets: ["latin"],
  style: "normal",
});

const Monst3 = Montserrat({
  weight: "300",
  subsets: ["latin"],
  style: "italic",
});

const Monst4 = Montserrat({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});

export default function Contact() {
  return (
    <div id="contact" className="w-full">
      <div className={`${grid_gap_config} ${grid_config} gap-x-5 gap-y-10`}>
        <div className="col-start-1 col-span-12 flex flex-col justify-center items-center bg-[#1D89CC] rounded-xl md:rounded-[50px] py-8">
          <p className={`${text_config} text-white ${Monst} font-bold`}>
            From the idea to the world
          </p>
          <p
            className={`${small_text_config} text-white ${Monst} font-semibold italic`}
          >
            Leave it all to us
          </p>
        </div>
        <div
          className=" 
            flex-col
            col-start-1 col-span-12
            md:flex-row
            md:col-start-2 md:col-span-5
            lg:col-start-2 lg:col-span-7
            xl:col-start-2 xl:col-span-8
            2xl:col-start-4 2xl:col-span-6
            flex gap-5
        "
        >
          <Link
            href="mailto:commercial@laebm.com"
            className="
            bg-black bg-opacity-35 text-white text-3xl text-center py-4 
             flex-1 flex items-center justify-center 
             rounded-full font-black hover:scale-110 transition-all duration-700 hover:bg-opacity-70"
          >
            Contact us now!
          </Link>
          <button className="bg-white text-[#5A5AE8] font-bold text-3xl text-center flex-1 py-4 rounded-full hidden">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
}
