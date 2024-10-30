import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";

export default function AccordionSizes() {
  return (
    <div className="grid w-full grid-cols-1">
      <div className="flex flex-col border-edge-subtle-00 p-4">
        <Accordion type="single" collapsible className="w-full" size="sm">
          <AccordionItem value="item-1">
            <AccordionTrigger>Small Accordion</AccordionTrigger>
            <AccordionContent>
              This is a small sized accordion item.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Small Accordion</AccordionTrigger>
            <AccordionContent>
              This is a small sized accordion item.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col p-4">
        <Accordion type="single" collapsible className="w-full" size="lg">
          <AccordionItem value="item-1">
            <AccordionTrigger>Large Accordion</AccordionTrigger>
            <AccordionContent>
              This is a large sized accordion item.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Large Accordion</AccordionTrigger>
            <AccordionContent>
              This is a large sized accordion item.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
