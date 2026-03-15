"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectOption = { value: string; label: string };

type SelectProps = {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  /** Allow empty value (e.g. for optional fields like Industry) */
  allowEmpty?: boolean;
};

const triggerClass =
  "w-full bg-[#70809080] border border-[#3a3a3a] rounded-lg pl-4 pr-10 py-3 text-left text-white focus:outline-none focus:border-[#1E72A1] transition-colors cursor-pointer flex items-center justify-between gap-2 data-[placeholder]:text-white/50 disabled:opacity-50 disabled:cursor-not-allowed";

export function Select({
  value,
  onValueChange,
  options,
  placeholder = "Select...",
  id,
  className,
  disabled,
  allowEmpty,
}: SelectProps) {
  return (
    <SelectPrimitive.Root
      value={value ? value : allowEmpty ? "__empty__" : undefined}
      onValueChange={(v) => onValueChange(v === "__empty__" ? "" : v ?? "")}
      disabled={disabled}
    >
      <SelectPrimitive.Trigger
        id={id}
        className={cn(triggerClass, className)}
        aria-label={placeholder}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-5 w-5 shrink-0 text-white/50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border border-[#3a3a3a] bg-[#404e5a] shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          position="popper"
          sideOffset={4}
        >
          <SelectPrimitive.Viewport className="p-1">
            {allowEmpty && (
              <SelectPrimitive.Item
                value="__empty__"
                className="relative flex cursor-pointer select-none items-center rounded-md py-2 pl-3 pr-8 text-sm text-white/80 outline-none hover:bg-white/10 focus:bg-white/10 data-[state=checked]:bg-white/10"
              >
                <SelectPrimitive.ItemText>{placeholder}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            )}
            {options.map((opt) => (
              <SelectPrimitive.Item
                key={opt.value}
                value={opt.value}
                className="relative flex cursor-pointer select-none items-center rounded-md py-2 pl-3 pr-8 text-sm text-white outline-none hover:bg-white/10 focus:bg-white/10 data-[state=checked]:bg-white/10"
              >
                <SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
