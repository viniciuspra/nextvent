import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  SortingState,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { SearchInput } from "../search-input";
import { Attendee } from "@/data/attendee-data";

interface DataTableProps {
  columns: ColumnDef<Attendee, unknown>[];
  data: Attendee[];
}

export function DataTable({ columns, data }: DataTableProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const pageSize = 10;

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    state: {
      pagination: {
        pageIndex: currentPage,
        pageSize,
      },
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  const totalPages = table.getPageCount();

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalToShow =
    (currentPage + 1) * pageSize > table.getRowCount()
      ? table.getRowCount()
      : (currentPage + 1) * pageSize;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-end justify-between">
        <SearchInput
          title="Participantes"
          placeholder="Buscar participante..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(e) =>
            table.getColumn("name")?.setFilterValue(e.target.value)
          }
        />
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} linha(s) selecionada.
        </div>
      </div>
      <div className="rounded-md border">
        <Table className="bg-background">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter className="bg-transparent">
            <TableRow>
              <TableCell colSpan={5}>
                <div className="flex items-center justify-between px-2">
                  <div>
                    Mostrando {totalToShow} de {table.getRowCount()} itens
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      Página {currentPage + 1} de {totalPages}
                    </span>
                    <div className="flex items-center justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(0)}
                        disabled={!table.getCanPreviousPage()}
                      >
                        <ChevronsLeft />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevPage}
                        disabled={!table.getCanPreviousPage()}
                      >
                        <ChevronLeft />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextPage}
                        disabled={!table.getCanNextPage()}
                      >
                        <ChevronRight />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(totalPages - 1)}
                        disabled={!table.getCanNextPage()}
                      >
                        <ChevronsRight />
                      </Button>
                    </div>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
