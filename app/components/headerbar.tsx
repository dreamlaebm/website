import Image from "next/image";
import Link from "next/link";
import HeaderLogo from "./headerlogo";

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
    <nav className="col-span-12 flex gap-8 bg-[#BFBEBE] h-16 shadow-2xl bg-opacity-70 rounded-b-2xl sm:px-8 items-center justify-between p-2">
      <HeaderLogo />

      <div className="flex flex-row gap-8">
        <HeaderItem label="Contact us" href="#contact" special />
      </div>
    </nav>
  );
}
