import { Header } from "@/components/header";
import { DataTable } from "@/components/attendee/data-table";
import { columns } from "@/components/attendee/columns";

import { attendees } from "@/data/attendee-data";
import { useState, useEffect } from "react";
import { HeaderSkeleton } from "./components/skeleton/header-skeleton";
import { AttendeeTableSkeleton } from "./components/skeleton/attendee-table-skeleton";

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="min-h-screen xl:max-w-7xl lg:max-w-6xl md:max-w-5xl max-w-4xl px-8 py-5 mx-auto">
      {loading ? <HeaderSkeleton /> : <Header />}
      {loading ? (
        <AttendeeTableSkeleton />
      ) : (
        <DataTable columns={columns} data={attendees} />
      )}
    </div>
  );
}
