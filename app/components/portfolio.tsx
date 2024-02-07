import Image from "next/image";
import Link from "next/link";

function Project({
  image,
  description,
  url,
}: {
  image: string;
  description: string;
  url: string;
}) {
  return (
    <>
      <Link href={url}>
        <div className="flex flex-col gap-4 items-center rounded-xl">
          <div className="rounded-full p-4">
            <Image
              src={image}
              alt={description}
              className="h-36 rounded-full"
            />
          </div>
          <p className="text-black px-4">{description}</p>
        </div>
      </Link>
    </>
  );
}

export default function Portfolio() {
  return (
    <>
      <div id="portfolio" className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full gap-8 content-center place-content-center">
          <Project
            image="/projects/youtube.png"
            description="check out our Youtube Clone"
            url="https://youtube-clone-eta-three.vercel.app/"
          />
          <Project
            image="/projects/instagram.jpeg"
            description="check out our Instagram Clone"
            url="https://instagram-clone-rose-two.vercel.app/"
          />
        </div>
      </div>
    </>
  );
}
