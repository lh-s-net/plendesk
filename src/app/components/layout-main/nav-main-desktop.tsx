import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";
import React from "react";
import {NavAppDesktop} from "@/app/components/layout-app/nav-app-desktop";

const dashboardItems = [
  {title: "App1", href: "/app1", description: "App1"},
  {title: "Planner", href: "/planner", description: "PD Planner (ToDo-Kanban-Lists-Calendar)"},
  {title: "App3", href: "/dashboard/app3", description: "App3 vom Dashboard"},
]


export function NavMainDesktop() {
  return (
    <div className="hidden md:flex gap-x-2">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>

          {/* menu platform */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/dashboard"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">Platform</div>
                      <p className="text-sm leading-tight text-muted-foreground">Main application overview with all
                        applications</p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {dashboardItems.map((item) => (
                  <ListItem key={item.title} href={item.href} title={item.title}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* nav app desktop */}
          <NavAppDesktop/>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({className, title, children, ...props}, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"