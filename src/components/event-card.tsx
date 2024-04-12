import { Bookmark, MapPin } from "lucide-react";
import { useState } from "react";
import { AvatarGroup } from "@/components/avatar-group";
import { EventProps } from "@/data/events-data";
import { Link } from "react-router-dom";

export interface EventState extends EventProps {
  eventSlug: string;
}

export function EventCard({
  id,
  title,
  location,
  avatars,
  date,
  coverImg,
}: EventProps) {
  const [saved, setSaved] = useState(false);
  const eventSlug = title.replace(/\s+/g, "-");
  return (
    <Link
      to={`/events/${eventSlug}`}
      state={{
        id,
        avatars,
        coverImg,
        date,
        location,
        title,
        eventSlug,
      }}
      className="border rounded-lg bg-card hover:shadow-primary-foreground hover:shadow-card-shadow hover:translate-x-1 hover:-translate-y-1 transition-all cursor-pointer group"
    >
      <div className="relative">
        <div className="absolute z-20 flex justify-between w-full p-2">
          <div className="w-[44px] h-fit py-0.5 bg-background border border-primary-foreground rounded-xl">
            <div className="flex flex-col items-center justify-center text-primary-foreground">
              <span className="font-bold">{date.format("D")}</span>
              <span className="text-xs font-semibold uppercase">
                {date.format("MMM")}
              </span>
            </div>
          </div>
          <div
            className="w-fit h-fit p-2 bg-background border border-primary-foreground rounded-xl active:scale-90 transition-all"
            onClick={() => setSaved(!saved)}
          >
            <Bookmark
              size={16}
              className={`${
                saved === true ? "fill-primary-foreground" : ""
              } text-primary-foreground`}
            />
          </div>
        </div>
        <div className="cursor-pointer relative">
          <div className="absolute inset-0 w-full h-full group-hover:bg-black/30 rounded-t-lg z-10 transition-all" />
          <img
            src={coverImg}
            alt=""
            className="rounded-t-lg aspect-video border-x border-t"
          />
        </div>
      </div>
      <div className="p-2 flex flex-col space-y-3">
        {title.length > 18 ? (
          <h1>{title.slice(0, 18).concat("...")}</h1>
        ) : (
          <h1>{title}</h1>
        )}
        <AvatarGroup avatars={avatars} maxToShow={3} />
        <span className="text-primary-foreground/70 text-xs flex gap-1">
          <MapPin size={16} />
          {location}
        </span>
      </div>
    </Link>
  );
}
