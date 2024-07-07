import { ContactRunSection } from "@/components/contact/contact-run-section";
import {ContactStopSection} from "@/components/contact/contact-stop-section";

export const ContactPage = () => {
  return (
    <div className={"w-full space-y-8"}>
      <ContactStopSection />
      <ContactRunSection />
    </div>
  );
};


