import React from "react";
import { twMerge } from "tailwind-merge";

import { Search } from "lucide-react";

interface AttendeeFilterInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export function AttendeeFilterInput({
  title,
  ...props
}: AttendeeFilterInputProps) {
  return (
    <div className="flex items-end gap-4 pt-5">
      <h1 className="text-4xl">{title}</h1>
      <div className="relative flex items-center gap-3 h-9 w-80 rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-within:ring-1 focus-within:ring-ring group">
        <Search className="text-primary-foreground ml-3" />
        <input
          placeholder="Buscar participante..."
          className={twMerge(
            "absolute w-full h-full border-none pl-12 pr-3 bg-transparent outline-none",
            props.className
          )}
          {...props}
        />
      </div>
    </div>
  );
}
