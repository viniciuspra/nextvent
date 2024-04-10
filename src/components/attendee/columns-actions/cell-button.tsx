import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useToast } from "@/components/ui/use-toast";
import { Attendee } from "@/data/attendee-data";
import { MoreHorizontal, Copy, Edit, XCircle, Trash2 } from "lucide-react";

interface CellButtonProps {
  row: Row<Attendee>;
}

export function CellButton({ row }: CellButtonProps) {
  const { toast } = useToast();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-7 w-7 p-0 border border-input active:scale-90 transition-all"
        >
          <span className="sr-only">Abrir menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuItem
          className="flex gap-2 items-center font-semibold hover:bg-gray-100 px-3 py-2 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(row.original.email);
            toast({
              title: "Copiado",
              description: "Email foi copiado para a área de transferência.",
              duration: 3000,
            });
          }}
        >
          <Copy size={16} />
          Copiar email
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center font-semibold hover:bg-gray-100 px-3 py-2 cursor-pointer">
          <Edit size={16} />
          Editar Participante
        </DropdownMenuItem>
        {row.original.checkInDate && (
          <DropdownMenuItem className="flex gap-2 items-center font-semibold group text-yellow-300 hover:bg-red-100 px-3 py-2 cursor-pointer">
            <XCircle
              size={16}
              className="text-yellow-300 group-hover:text-white"
            />
            Cancelar Check-in
          </DropdownMenuItem>
        )}
        <DropdownMenuItem className="flex gap-2 items-center font-semibold group text-yellow-300 hover:bg-red-100 px-3 py-2 cursor-pointer">
          <XCircle
            size={16}
            className="text-yellow-300 group-hover:text-white"
          />
          Cancelar Inscrição
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center font-semibold text-red-500 hover:bg-red-100 px-3 py-2 cursor-pointer">
          <Trash2 size={16} className="text-red-500" />
          Remover Participante
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
