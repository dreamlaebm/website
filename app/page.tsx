import Image from "next/image";
import Headerbar from "./components/headerbar";
import About from "./about/page";
export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Headerbar />

      <div id="elementos" className="flex">
        <div className="flex flex-col w-full">
          <About></About>
        </div>
      </div>
    </div>
  );
}
