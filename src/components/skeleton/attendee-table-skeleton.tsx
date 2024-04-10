import { Skeleton } from "@/components/ui/skeleton";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FilterInputSkeleton } from "@/components/skeleton/filter-input-skeleton";

import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  RotateCcw,
} from "lucide-react";

export function AttendeeTableSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <FilterInputSkeleton />
      <div className="rounded-md border">
        <table className="min-w-full divide-y">
          <thead>
            <tr>
              <th className="w-[13.7%] pl-2">
                <label
                  className="text-muted-foreground flex gap-2 items-center pl-2 cursor-pointer group text-sm"
                  aria-label="Código"
                >
                  <Checkbox aria-label="Código" />
                  Código
                </label>
              </th>
              <th className="w-2/5 text-left">
                <div className="inline-flex text-muted-foreground items-center px-2 justify-center hover:bg-accent rounded whitespace-nowrap h-9 py-2 text-sm font-medium cursor-pointer hover:text-accent-foreground">
                  Participantes
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </th>
              <th className="w-2/5 text-left">
                <div className="inline-flex text-muted-foreground items-center px-2 justify-center hover:bg-accent rounded whitespace-nowrap h-9 py-2 text-sm font-medium cursor-pointer hover:text-accent-foreground">
                  Data de Inscrição
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </th>
              <th className="w-2/5 text-left">
                <div className="inline-flex text-muted-foreground items-center px-2 justify-center hover:bg-accent rounded whitespace-nowrap h-9 py-2 text-sm font-medium cursor-pointer hover:text-accent-foreground">
                  Data de Check-in
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </th>
              <th className="w-1/5 pr-2">
                <div className="inline-flex text-muted-foreground border border-input bg-background shadow-sm rounded-md items-center justify-center whitespace-nowrap h-7 w-7 text-sm font-medium cursor-pointer hover:bg-accent hover:text-accent-foreground">
                  <RotateCcw size={12} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {[...Array(10)].map((_, index) => (
              <tr key={index} className="">
                <td className="p-2 pl-4 whitespace-nowrap py-3">
                  <label className="text-gray-300 flex gap-2 items-center group peer">
                    <Checkbox />

                    <Skeleton className="h-5 w-16" />
                  </label>
                </td>
                <td className="p-2 whitespace-nowrap py-3">
                  <Skeleton className="h-7 w-[240px]" />
                </td>
                <td className="p-2 whitespace-nowrap py-3">
                  <Skeleton className="h-5 w-24" />
                </td>
                <td className="p-2 whitespace-nowrap py-3">
                  <Skeleton className="h-5 w-24" />
                </td>
                <td className="p-2 pr-4 whitespace-nowrap py-3">
                  <Skeleton className="h-5 w-[28px]" />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-transparent">
            <tr>
              <td colSpan={5}>
                <div className="flex items-center justify-between text-sm w-full p-2 px-4 font-medium">
                  <div>Mostrando 0 de 0 itens</div>
                  <div className="flex items-center gap-2">
                    <span>Página 0 de 0</span>
                    <div className="flex items-center justify-end space-x-2">
                      <Button variant="outline" size="icon" disabled>
                        <ChevronsLeft />
                      </Button>
                      <Button variant="outline" size="icon" disabled>
                        <ChevronLeft />
                      </Button>
                      <Button variant="outline" size="icon" disabled>
                        <ChevronRight />
                      </Button>
                      <Button variant="outline" size="icon" disabled>
                        <ChevronsRight />
                      </Button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
