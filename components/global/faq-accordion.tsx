import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { faqItems } from "@/utils/constants";

const FaqAccordion = () => {
  return (
    <div className="flex-1 w-full">
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4"
      >
        {faqItems.map((item, i) => (
          <AccordionItem key={i} value={`${i + 1}`} className="border-none">
            <AccordionTrigger
              className={cn(
                "text-base text-muted-foreground border border-[#dde6e3] px-5 py-3 sm:py-3.5 rounded-md"
              )}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground bg-accent p-5 rounded-md leading-[28px] mt-2">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
