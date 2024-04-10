import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AttendeeTable() {
  return (
    <Table className="border rounded-xl">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">
            <label className="flex items-center gap-2">
              <Checkbox /> Código
            </label>
          </TableHead>
          <TableHead>Participante</TableHead>
          <TableHead>Data de Incrição</TableHead>
          <TableHead>Data de check-in</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">52761</TableCell>
          <TableCell className="flex flex-col gap-1">
            Norma O'Reilly{" "}
            <span className="text-xs text-gray-500">
              Granville83@hotmail.com
            </span>
          </TableCell>
          <TableCell>12 days ago</TableCell>
          <TableCell>12 days ago</TableCell>
          <TableCell>
            <Button variant="outline" size="icon">
              <MoreHorizontal className="w-4 h-4"/>
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableCell><p></p></TableCell>
      </TableFooter>
    </Table>
  );
}
