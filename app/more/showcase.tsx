import Link from "next/link";
import {
  grid_config,
  grid_gap_config,
  grid_gap_nomobile_config,
} from "../ui_config/grid";
import { Poppins } from "next/font/google";
import { small_text_config, text_config } from "../ui_config/text";

const poppins_title = Poppins({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
const poppins_paragraph = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

function Block({
  title,
  content,
  className,
}: {
  title: String;
  content: String;
  className: String | null;
}) {
  return (
    <>
      <div
        className={`col-start-1 col-span-5 md:col-span-6 bg-[#3B4ABF] p-4 2xl:p-8 gap-8 rounded-3xl mx-2 md:mx-0 ${className} flex flex-col `}
      >
        <p
          className={`${poppins_title.className} ${text_config} text-white font-bold`}
        >
          {title}
        </p>

        <p
          className={`${poppins_paragraph.className} ${small_text_config} text-white  flex-1 flex items-end`}
        >
          {content}
        </p>
      </div>
    </>
  );
}

export default function MoreInfo() {
  return (
    <>
      <div className={`absolute top-[15%]`}>
        <div
          className={`${grid_config} gap-y-6 md:gap-y-12 lg:gap-y-5 ${grid_gap_nomobile_config}`}
        >
          <Block
            title={"So you want to get your business online?"}
            content={
              "Ever wondered how you always receive emails from noreply@somecompany.com and never actually knew how to get that fancy email? maybe you were using gmail or hotmail for your business and been using whatsapp or other means of communication to sell and promote your products. Well, guess what, we can bring an end to that, and turn you into a more professional (and efficient) entrepreneur!"
            }
            className={`
              lg:col-start-1 lg:col-span-5
              xl:col-start-1 xl:col-span-6
              2xl:col-start-1 2xl:col-span-7
            `}
          />
          <Block
            title={"The benefits"}
            content={
              "Imagine a world where you wont have to spend countless hours in front of a screen answering the same questions over and over and over again. You’ll be able to sell while you’re sleeping, playing with your kids, watching a movie, cooking, working out... You got the point."
            }
            className={`
            lg:col-start-6 lg:col-span-4
            xl:col-start-7 xl:col-span-4
            2xl:col-start-8 2xl:col-span-5
            `}
          />
          <Block
            title={"The journey"}
            content={
              "Better yet, do you know how much effort you’ll put into that? CLOSE TO NONE. Tell us what you want, pay, and you get it. Simple as that. You dont have to worry about anything else. You’ll also talk to me directly so i can tell you how its going and how good your website will be when we finish it."
            }
            className={`
            
            lg:col-start-1 lg:col-span-5
            xl:col-start-1 xl:col-span-6
            2xl:col-start-1 2xl:col-span-7
            `}
          />
          <Block
            title={"Interested?"}
            content={
              "Send us an email! And for you guys who dont want a website right now, or cant afford it, you can ask for a FREE 1-page website design so we can gain your trust as a company"
            }
            className={`
            lg:col-start-6 lg:col-span-4
            xl:col-start-7 xl:col-span-4
            2xl:col-start-8 2xl:col-span-5
            `}
          />
          <div
            className={`col-start-1 col-span-5 md:col-span-6 lg:col-span-9 xl:col-span-10 2xl:col-span-12 md:grid-cols-6 
            lg:grid-cols-8 
            xl:grid-cols-10 
            2xl:grid-cols-12 my-4 ${grid_config} mx-2 md:mx-0 `}
          >
            <Link
              href="mailto:commercial@laebm.com"
              className="col-start-1 col-span-5 md:col-span-8
              lg:col-span-5 flex justify-center items-center text-white rounded-full text-center py-4 md:text-3xl text-xl bg-[#495CEF]"
            >
              Contact us now!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
