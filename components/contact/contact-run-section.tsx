import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const ContactRunSection = () => {
  return (
    <div
      className={
        "w-[96%]  pb-[80px] border border-neutral-900 bg-neutral-900 mx-auto z-[52] relative rounded-[30px] drop-shadow-[0_0_200px_black]"
      }
    >
      <EmailSection />
      <SocialSection />
      <MessageSection />
    </div>
  );
};

const EmailSection = () => {
  return (
    <div
      className={
        "flex items-center justify-between px-32 py-20 border-b border-neutral-700"
      }
    >
      <h2>Email</h2>
      <div className={"w-[60%]"}>
        <p className={"text-[20px] font-thin"}>
          Want to talk about how much you love design? Want to discuss
          partnership opportunities? Or have you found something broken on the
          website? Just drop me an email.
        </p>
        <Link
          href={"mailto://abhimanyu1992002@gmail.com"}
          className={
            "text-[20px] font-normal decoration-transparent hover:decoration-white flex items-center gap-4 "
          }
        >
          abhimanyu1992022@gmail.com
          <MoveRight size={24} />
        </Link>
      </div>
    </div>
  );
};

const SocialSection = () => {
  return (
    <div
      className={
        "flex items-center justify-between px-32 py-20 border-b border-neutral-700"
      }
    >
      <h2>Socials</h2>
      <div className={"w-[60%] space-y-16"}>
        <div className={"flex justify-between"}>
          <Link
            href={"/"}
            className={
              "text-[20px] font-normal decoration-transparent hover:decoration-white flex items-center gap-4 "
            }
          >
            Github
            <MoveRight size={24} />
          </Link>
          <Link
            href={"/"}
            className={
              "text-[20px] font-normal decoration-transparent hover:decoration-white flex items-center gap-4 "
            }
          >
            Twitter
            <MoveRight size={24} />
          </Link>
        </div>
        <div className={"flex justify-between"}>
          <Link
            href={"/"}
            className={
              "text-[20px] font-normal decoration-transparent hover:decoration-white flex items-center gap-4 "
            }
          >
            Linkedin
            <MoveRight size={24} />
          </Link>
          <Link
            href={"/"}
            className={
              "text-[20px] font-normal decoration-transparent hover:decoration-white flex items-center gap-4 "
            }
          >
            Discord
            <MoveRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const MessageSection = () => {
  return (
    <div className={"flex items-center justify-between px-32 py-20  "}>
      <h2>Email</h2>
      <div className={"w-[60%] space-y-3"}>
        <div className={"flex gap-3"}>
          <Input
            placeholder={"Name"}
            className={
              "bg-neutral-800 rounded-lg text-[17px] p-6 focus:outline-none focus-visible:ring-0 placeholder:font-light"
            }
          />{" "}
          <Input
            placeholder={"Email"}
            className={
              "bg-neutral-800 rounded-lg text-[17px] p-6 focus:outline-none focus-visible:ring-0 placeholder:font-light"
            }
          />
        </div>
        <Textarea
          placeholder={"Message"}
          className={
            "bg-neutral-800  min-h-[150px] rounded-lg text-[17px] p-6 focus:outline-none focus-visible:ring-0 placeholder:font-light"
          }
        />
        <Button className={"p-6 w-full text-[17px] font-normal rounded-[16px]"}>
          Send Message
        </Button>
      </div>
    </div>
  );
};
