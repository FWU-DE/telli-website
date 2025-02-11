"use client";

import { useState } from "react";
import MinusIcon from "../icons/minus";
import PlusIcon from "../icons/plus";
import { paragraphClassName } from "@/utils/tailwind/fonts";
import { cn } from "@/utils/tailwind/cn";

type AccordionItem = {
  id: string | number;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpen?: string | number;
};

export default function Accordion({ items, defaultOpen }: AccordionProps) {
  const [openId, setOpenId] = useState<string | number | null>(
    defaultOpen || null,
  );
  return (
    <div className="w-full">
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200 w-full">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="flex justify-between items-center py-6 w-full text-left transition-colors cursor-pointer"
          >
            <h3 className="text-xl font-medium break-words">{item.title}</h3>
            <span
              className={`text-2xl leading-none ml-4 transform transition-transform duration-300 ${
                openId === item.id ? "rotate-180" : "rotate-0"
              }`}
            >
              {openId === item.id ? (
                <MinusIcon className="w-6 h-6" />
              ) : (
                <PlusIcon className="w-6 h-6" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className={cn(paragraphClassName, "pb-4")}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
