import Image from "next/image";
import Link from "next/link";

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
          ? "border-indigo-200 border-solid border-2 bg-blue-600 text-white shadow-xl hover:-translate-y-2"
          : "hover:text-blue-600 hover:translate-y-2 border-2"
      } p-2 rounded-xl transition-all duration-300 shadow-md `}
      href={href}
    >
      {label}
    </Link>
  );
}

export default function HeaderBar() {
  return (
    <nav className="sticky top-0 z-10 bg-neutral-200 bg-opacity-30 backdrop-filter backdrop-blur-lg border-b border-neutral-300 border-solid shadow-md">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between h-16">
          <div className="hidden sm:flex flex-row gap-2">
            <Image
              src="https://github.com/dreamlaebm.png"
              alt="Photo"
              width={32}
              height={32}
              className="rounded-full shadow-md"
            />

            <span className="text-xl text-gray-900 font-normal">
              Dream Laebm
            </span>
          </div>

          <div className="flex space-x-4 gap-2 text-gray-900">
            <HeaderItem label="About" href="#about" />
            <HeaderItem label="Projects" href="#portfolio" />
            <HeaderItem label="Contact us" href="#contact" special />
          </div>
        </div>
      </div>
    </nav>
  );
}
