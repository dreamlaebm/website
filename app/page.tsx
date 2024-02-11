import Image from "next/image";
import Headerbar from "./components/headerbar";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import HeaderBar from "./components/headerbar";
import Showcase from "./components/showcase";
export default function Home() {
  return (
    <div className="">
      <HeaderBar />

      <div className="flex flex-col items-center gap-12 pt-12 grow">
        <About />
        <Showcase />

        <Contact />
      </div>
    </div>
  );
}
