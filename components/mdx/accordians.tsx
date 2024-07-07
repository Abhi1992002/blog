// create a simple functional compoents

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordianMdx({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className={"border px-4 rounded-lg bg-white dark:bg-black"}
      >
        <AccordionItem value={title}>
          <AccordionTrigger className={"text-lg font-para"}>
            {title}
          </AccordionTrigger>

          <AccordionContent
            className={"text-[16px] border-t border-neutral-700 pt-4"}
          >
            {content}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
