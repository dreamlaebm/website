import Image from "next/image";

export default function Showcase() {
  return (
    <div className="w-full" id="showcase">
      <Image
        src="/full.png"
        width={1920}
        height={1605}
        className="hidden sm:flex w-full"
        alt="showcase"
      />
      <Image
        src="/full_mobile.png"
        width={390}
        height={909}
        className="sm:hidden flex w-full"
        alt="showcase"
      />
    </div>
  );
}
