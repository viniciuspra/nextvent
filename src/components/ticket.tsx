import { Separator } from "@/components/ui/separator";
import { TicketProps } from "@/data/ticket-data";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

export function Ticket({
  title,
  subtitle,
  date,
  location,
  type,
  seatNumber,
}: TicketProps) {
  const ticketSlug = title.replace(/\s+/g, "-").toLowerCase();
  return (
    <Link to={`/tickets/${ticketSlug}`} className="">
      <div className="relative w-fit mx-auto hover:scale-95 transition-all duration-300">
        <div className="max-w-sm mx-auto bg-card h-44 w-80 border-2 border-primary rounded-lg overflow-hidden shadow-lg p-3">
          <div className="border-2 border-dashed px-3 h-full flex flex-col ">
            <div className="flex justify-between items-center flex-1">
              <div className="flex flex-col w-full py-1">
                <h2 className="text-lg font-semibold">
                  {title.length > 26 ? title.slice(0, 26).concat("...") : title}
                </h2>
                <p className="text-primary-foreground text-xs pl-2">
                  {subtitle.length > 38
                    ? subtitle.slice(0, 38).concat("...")
                    : subtitle}
                </p>
                <div className="text-right flex items-center gap-2 justify-end pr-3 pt-0.5">
                  <span className="text-primary-foreground text-xs">
                    {date.format("DD")} de {date.format("MMMM")}
                  </span>
                  <span className="text-primary-foreground text-xs block">
                    {date.format("HH:mm")}
                  </span>
                </div>
              </div>
            </div>
            <Separator className="h-0 border-2 border-primary" />
            <div className="absolute rotate-90 top-1/2 -left-[14px] -translate-y-1/2 z-20">
              <div className="bg-card h-[12px] w-[51.7px] rounded-t-lg z-40 absolute top-5 right-1/2 translate-x-1/2" />
              <div
                className="h-[29px] w-14 bg-card
              rounded-tl-full rounded-tr-full border-2 border-primary"
              />
            </div>
            <div className="absolute rotate-[270deg] top-1/2 -right-[14px] -translate-y-1/2 z-20">
              <div className="bg-card h-[12px] w-[51.7px] rounded-t-lg z-40 absolute top-5 right-1/2 translate-x-1/2" />
              <div
                className="h-[29px] w-14 bg-card
              rounded-tl-full rounded-tr-full border-2 border-primary"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div
                className={`flex justify-between items-center pt-3 ${
                  !seatNumber && "flex-row-reverse"
                } px-2`}
              >
                {seatNumber && (
                  <Badge className="rounded-full px-3 py-1 bg-primary-foreground text-secondary  hover:bg-primary-foreground">
                    {seatNumber}
                  </Badge>
                )}
                <Badge
                  className={` ${
                    type.toLowerCase() === "vip"
                      ? "bg-yellow-500/90 text-white hover:bg-yellow-700"
                      : type.toLowerCase() === "regular"
                      ? "bg-secondary hover:bg-secondary/75 text-primary-foreground"
                      : "bg-blue-500 hover:bg-blue-700 text-white"
                  }`}
                >
                  {type}
                </Badge>
              </div>
              <div className="text-center">
                <span className="text-primary-foreground text-sm">
                  {location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
