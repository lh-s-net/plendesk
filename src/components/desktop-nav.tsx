import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";
import Link from "next/link";
import React from "react";

const dashboardItems = [
  {title: "App1", href: "/app1", description: "App1"},
  {title: "App2", href: "/dashboard/app2", description: "App2 vom Dashboard"},
  {title: "App3", href: "/dashboard/app3", description: "App3 vom Dashboard"},
]

const app1Items = [
  {title: "Settings1", href: "/app1/settings1", description: "Einstellungen 1 für App1"},
  {title: "Settings2", href: "/dashboard/app1/settings2", description: "Einstellungen 2 für App1"},
]

export function DesktopNav() {

  return (
    <div className="hidden md:flex gap-x-2">
      <NavigationMenu>
        <NavigationMenuList>
          {/*Dashboard Menu*/}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/dashboard"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">Dashboard</div>
                      <p className="text-sm leading-tight text-muted-foreground">Main application overview</p>
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

          {/* App1 Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>App1</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {app1Items.map((item) => (
                  <ListItem key={item.title} href={item.href} title={item.title}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Help Link */}
          <NavigationMenuItem>
            <Link href="/help">
              <button className="nested-class">Help</button>
            </Link>
          </NavigationMenuItem>

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