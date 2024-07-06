import { ContactRunSection } from "@/components/contact/contact-run-section";

export const ContactPage = () => {
  return (
    <div className={"w-full space-y-8"}>
      <ContactStopSection />
      <ContactRunSection />
    </div>
  );
};

const ContactStopSection = () => {
  return (
    <div
      className={
        "flex items-center justify-center  pt-[100px] w-full flex-col pb-[100px] sticky top-[100px] -z-1"
      }
    >
      <h1 className={"w-[70%] max-w-[900px]"}>Contact me</h1>
    </div>
  );
};
