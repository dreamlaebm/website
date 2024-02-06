import Image from "next/image";
import Headerbar from "./components/headerbar";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Headerbar />

      <div id="elementos" className="flex">
        <div className="flex flex-col w-full justify-center items-center">
          <About></About>
          <Portfolio></Portfolio>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}
