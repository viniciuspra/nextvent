import { Link } from "react-router-dom";
import { HeaderBreadcrumb } from "./header-breadcrumb";

export function Header() {
  return (
    <header className="w-full h-20 flex p-2 px-4 items-center gap-4 rounded-lg bg-background border">
      <Link
        to="/"
        className="hover:scale-95 cursor-pointer transition-transform"
      >
        <img
          src="/NV-Icon.png"
          alt="NextVent Logo"
          className="w-12 h-12 rounded-lg aspect-square"
        />
      </Link>
      <HeaderBreadcrumb />
    </header>
  );
}
