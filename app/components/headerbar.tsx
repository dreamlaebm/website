import Image from "next/image";
import Link from "next/link";
import { grid_config, grid_gap_config } from "../ui_config/grid";

function HeaderItem({
  href,
  label,
  special,
}: {
  href: string;
  label: string;
  special?: boolean;
}) {
  return (
    <Link
      className={`font-medium ${
        special
          ? "border-indigo-200 border-solid border-2 bg-blue-600 text-white shadow-xl hover:scale-125"
          : "hover:text-blue-600 hover:-transform-y-2 border-2"
      } p-2 rounded-xl transition-all duration-300 shadow-md `}
      href={href}
    >
      {label}
    </Link>
  );
}

export default function HeaderBar() {
  return (
    <div className="absolute top-0 left-0 w-full z-40">
      <nav
        className={`${grid_config} ${grid_gap_config} h-16 sm:h-24 place-content-center`}
      >
        <Link href="/">
          <p className="col-start-1 text-[#DBEAED] text-3xl">Laebm</p>
        </Link>
      </nav>
    </div>
  );
}
