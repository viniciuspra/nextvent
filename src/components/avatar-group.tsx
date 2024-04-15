import { twMerge } from "tailwind-merge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface AvatarGroupProps {
  avatars: {
    src: string;
    fallback: string;
  }[];
  maxToShow: number;
  className?: string;
}

export function AvatarGroup({ avatars, maxToShow, className }: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, maxToShow);

  return (
    <div className={twMerge("flex space-x-[-12px] rtl:space-x-reverse", className)}>
      {visibleAvatars.map((avatar, index) => (
        <Avatar key={index} className="border-4 border-background w-9 h-9">
          <AvatarImage src={avatar.src} />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>
      ))}
      {avatars.length > maxToShow && (
        <div className="relative">
          <Avatar className="border-4 border-background w-9 h-9 text-xs">
            <AvatarFallback>+{avatars.length - maxToShow}</AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
  );
}
