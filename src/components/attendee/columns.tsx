import { Attendee } from "@/data/attendee-data";
import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { CellButton } from "@/components/attendee/columns-actions/cell-button";
import { HeaderButton } from "@/components/attendee/columns-actions/header-button";
import { HeaderSortingButton } from "@/components/attendee/header-sorting-button";

export const columns: ColumnDef<Attendee>[] = [
  {
    id: "code",
    header: ({ table }) => (
      <label
        className="flex gap-2 items-center pl-2 cursor-pointer group"
        aria-label="Código"
      >
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Código"
          className={`${
            table.getIsSomePageRowsSelected() && "indeterminate"
              ? "bg-white text-background"
              : ""
          }`}
        />
        Código
      </label>
    ),
    cell: ({ row }) => {
      return (
        <label
          className="text-gray-300 flex gap-2 pl-2 items-center group peer"
          aria-label="Código"
        >
          <Checkbox
            aria-label="Código"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
          />
          {row.original.code}
        </label>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <HeaderSortingButton
        column={column}
        title="Participantes"
        tooltip="Ordenar por Nome dos Participantes (A-Z)"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="lowercase flex flex-col px-2">
          {row.getValue("name")}
          <span className="text-xs text text-gray-300/90">
            {row.original.email}
          </span>
        </div>
      );
    },
    sortingFn: (rowA, rowB) => {
      const nameA: string = rowA.getValue("name");
      const nameB: string = rowB.getValue("name");

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    },
  },
  {
    accessorKey: "registrationDate",
    header: ({ column }) => (
      <HeaderSortingButton
        column={column}
        title="Data de Inscrição"
        tooltip="Ordenar por Data de Inscrição (Mais Recente - Mais Antigo)"
      />
    ),
    cell: ({ row }) => {
      const date = dayjs(row.getValue("registrationDate"));
      const formatted = dayjs().to(date);

      return <div className="text-gray-300 px-2">{formatted}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const dateA = dayjs(rowA.original.registrationDate);
      const dateB = dayjs(rowB.original.registrationDate);

      return dateB.diff(dateA);
    },
  },
  {
    accessorKey: "checkInDate",
    header: ({ column }) => (
      <HeaderSortingButton
        column={column}
        title="Data de Check-in"
        tooltip="Ordenar por Data de Check-in (Mais Recente - Mais Antigo)"
      />
    ),
    cell: ({ row }) => {
      const checkInDate = row.original.checkInDate;
      const formatted = checkInDate
        ? dayjs().to(dayjs(checkInDate))
        : "Não registardo";

      return <div className="text-gray-300 px-2">{formatted}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const dateA = dayjs(rowA.original.checkInDate);
      const dateB = dayjs(rowB.original.checkInDate);

      return dateB.diff(dateA);
    },
  },
  {
    accessorKey: "actions",
    header: ({ table }) => <HeaderButton table={table} />,
    cell: ({ row }) => <CellButton row={row} />,
  },
];
