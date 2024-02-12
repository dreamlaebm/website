import { Montserrat } from "next/font/google";
import Link from "next/link";

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
    <div
      className="flex flex-col gap-2 md:gap-8 items-start
     pb-4 w-full sm:items-start sm:w-auto px-3"
      id="contact"
    >
      <span className={`${Monst.className} text-3xl lg:text-8xl tracking-wide`}>
        THAT'S WHAT WE DO
      </span>

      <div className="flex gap-2">
        <span
          className={`${Monst2.className} text-lg md:text-4xl lg:text-5xl tracking-widest xl:text-6xl`}
        >
          For You, For Free
        </span>
        <span
          className={`${Monst3.className} text-lg md:text-4xl lg:text-5xl xl:text-6xl tracking-widest`}
        >
          until march 6th
        </span>
      </div>

      <Link href="mailto:commercial@laebm.com" className="w-full sm:w-auto">
        <h3
          className={`${Monst4.className} bg-gray-200 p-4 rounded-full hover:bg-green-200 transition-all duration-300 hover:scale-125 hover:-transform-y-2 mt-8 sm:mt-0 w-full w. text-center`}
        >
          Contact us at commercial@laebm.com
        </h3>
      </Link>
    </div>
  );
}
