import { DataTable } from "@/components/attendee/data-table";
import { columns } from "@/components/attendee/columns";

import { attendees } from "@/data/attendee-data";
export default function Attendee() {
  return (
    <div>
      <DataTable columns={columns} data={attendees} />
    </div>
  );
}
