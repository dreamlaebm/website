import { grid_config, grid_gap_config } from "../ui_config/grid";
import Link from "next/link";

export default function Showcase() {
  return (
    <div className="absolute top-[30%] left-0 w-full z-40">
      <div
        className={`${grid_config} ${grid_gap_config} gap-y-7`}
        id="showcase"
      >
        <p
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-[0.02em] text-white
          col-start-1 col-span-5

          md:col-span-6
          lg:col-span-8
          xl:col-span-10
          
          2xl:col-span-12"
        >
          Websites as fast a ferrari
        </p>
        <div
          className={`
          col-start-1 
        
        col-span-4
        md:col-span-6 
        flex flex-col sm:flex-row gap-5`}
        >
          <Link
            href="mailto:commercial@laebm.com"
            className="flex justify-center items-center text-white rounded-full text-center py-4 md:text-3xl text-xl bg-[#495CEF] sm:w-1/2"
          >
            Contact us now!
          </Link>
          <Link
            href="/more"
            className="flex justify-center items-center border-2 text-[#495CEF] rounded-full text-center py-4 text-xl md:text-3xl sm:w-1/2"
          >
            find out more
          </Link>
        </div>
      </div>
    </div>
  );
}
