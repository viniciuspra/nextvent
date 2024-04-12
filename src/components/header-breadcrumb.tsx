import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export function HeaderBreadcrumb() {
  const { pathname, state } = useLocation();
  const pathParts = pathname.split("/").filter((part) => part !== "");
  const title = state?.eventSlug
    ? decodeURI(state?.eventSlug).replace(/-/g, " ")
    : null;
  const hasAttendeePath = pathname.includes("/attendee");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              to="/events"
              className={`hover:opacity-80 hover:scale-95 active:scale-90 text-base 
                   flex items-center gap-1 text-primary-foreground 
                  transition-all ${
                    pathname === "/events"
                      ? "opacity-80 scale-95"
                      : "font-medium"
                  }`}
            >
              Eventos
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathParts.map((part, index) => (
          <Fragment key={index}>
            {part !== "events" && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {index === pathParts.length - 1 ? (
                    hasAttendeePath ? (
                      <BreadcrumbPage className="font-medium">
                        Participantes
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbPage className="font-medium">
                        {title}
                      </BreadcrumbPage>
                    )
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        to={`/${pathParts.slice(0, index + 1).join("/")}`}
                        state={state}
                      >
                        {hasAttendeePath && title}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
