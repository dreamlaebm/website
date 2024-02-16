import Image from "next/image";
import Headerbar from "./components/headerbar";

import HeaderBar from "./components/headerbar";
import Showcase from "./components/showcase";
import { grid_config } from "./ui_config/grid";
export default function Home() {
  return (
    <div className={`${grid_config} relative`}>
      <div
        className="
      col-end-6 col-span-5
      md:col-end-7 md:col-span-5
      lg:col-end-9 lg:col-span-4
      xl:col-end-11 xl:col-span-5
      2xl:col-end-13 2xl:col-span-6
       h-screen 
      
      md:showcase-clip overflow-hidden relative"
      >
        <img
          src="/ferrari.png"
          className={`absolute w-[130%] md:w-full h-full -z-10`}
          alt=""
        />
        <div
          className=" z-20 absolute top-0 left-0 w-full h-full 
        
        bg-[#11141D]
        bg-opacity-75
        
        md:bg-opacity-60 md:bg-[#1E1E1E]"
        ></div>
      </div>
      <HeaderBar></HeaderBar>
      <Showcase></Showcase>
    </div>
  );
}
