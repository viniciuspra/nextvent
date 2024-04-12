import { Header } from "@/components/header";
import { Ticket } from "@/components/ticket";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden bg-svg-background">
      <main className="min-h-screen max-w-7xl px-8 py-5 mx-auto">
        <Header />
        <Outlet />
        <Ticket />
      </main>
    </div>
  );
}
