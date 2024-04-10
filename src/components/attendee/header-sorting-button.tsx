import { Column } from "@tanstack/react-table";
import { Attendee } from "@/data/attendee-data";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpDown } from "lucide-react";

interface HeaderSortingButtonProps {
  column: Column<Attendee, unknown>;
  title: string;
  tooltip: string;
}

export function HeaderSortingButton({
  column,
  title,
  tooltip,
}: HeaderSortingButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className="inline-flex items-center px-2 justify-center hover:bg-accent active:scale-95 rounded whitespace-nowrap h-9 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:text-accent-foreground"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {title}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
