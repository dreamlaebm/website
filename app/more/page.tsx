import HeaderBar from "../components/headerbar";
import Showcase from "./showcase";
import { grid_config } from "../ui_config/grid";

export default function Page() {
  return (
    <>
      <div className="absolute h-full w-full">
        <div className={`${grid_config} relative bg-[#11141D] w-full h-full`}>
          <HeaderBar></HeaderBar>
          <Showcase></Showcase>
        </div>
      </div>
    </>
  );
}
