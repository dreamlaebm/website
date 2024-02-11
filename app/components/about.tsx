import { Montserrat } from "next/font/google";

const montserrat_black = Montserrat({ weight: "900", subsets: ["latin"] });

export default function About() {
  return (
    <div className="flex items-center gap-8">
      <p
        className={`${montserrat_black.className} text-4xl xl:text-5xl 2xl:text-6xl col-start-6 col-span-2 `}
      >
        IMAGINE
      </p>
      {/* <div className={`col-start-3 col-span-8 grid grid-cols-8 gap-36`}>
        <p className={`${montserrat_black.className} text-6xl`}>I</p>
        <p className={`${montserrat_black.className} text-6xl`}>M</p>
        <p className={`${montserrat_black.className} text-6xl`}>A</p>
        <p className={`${montserrat_black.className} text-6xl`}>G</p>
        <p className={`${montserrat_black.className} text-6xl`}>I</p>
        <p className={`${montserrat_black.className} text-6xl`}>N</p>
        <p className={`${montserrat_black.className} text-6xl`}>E</p>
      </div> */}
    </div>
  );
}
