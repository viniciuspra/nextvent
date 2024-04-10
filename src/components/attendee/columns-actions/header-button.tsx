import { Table } from "@tanstack/react-table";
import { Attendee } from "@/data/attendee-data";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RotateCcw } from "lucide-react";

interface HeaderButtonProps {
  table: Table<Attendee>;
}

export function HeaderButton({ table }: HeaderButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className="inline-flex border border-input bg-background shadow-sm active:scale-90 rounded-md items-center justify-center whitespace-nowrap h-7 w-7 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground"
          onClick={() => table.resetSorting()}
        >
          <RotateCcw size={12} />
        </TooltipTrigger>
        <TooltipContent>
          <p>Resetar Ordenação para Padrão</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
