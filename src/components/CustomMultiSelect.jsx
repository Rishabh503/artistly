"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, ChevronDown } from "lucide-react";

export default function CustomMultiSelect({ label, options, value = [], onChange }) {
  const toggle = (item) => {
    if (value.includes(item)) {
      onChange(value.filter((val) => val !== item));
    } else {
      onChange([...value, item]);
    }
  };

  const selectedText = value.length > 0 ? value.join(", ") : `Select ${label}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between"
        >
          {selectedText}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-2 space-y-2">
        {options.map((option) => (
          <div
            key={option}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => toggle(option)}
          >
            <Checkbox
              checked={value.includes(option)}
              onCheckedChange={() => toggle(option)}
            />
            <span>{option}</span>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
