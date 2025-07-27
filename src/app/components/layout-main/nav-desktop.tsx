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
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

const dashboardItems = [
  {title: "App1", href: "/app1", description: "App1"},
  {title: "App2", href: "/dashboard/app2", description: "App2 vom Dashboard"},
  {title: "App3", href: "/dashboard/app3", description: "App3 vom Dashboard"},
]

const app1Items = [
  {title: "Settings1", href: "/app1/settings1", description: "Einstellungen 1 für App1"},
  {title: "Settings2", href: "/dashboard/app1/settings2", description: "Einstellungen 2 für App1"},
]

export function NavDesktop() {
  const {setTheme} = useTheme()

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

          {/* Menu Extras */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Extras</NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>

                  {/* menu item help */}
                  <NavigationMenuLink asChild>
                    <Link href="/help">
                      <div className="font-medium">Help</div>
                      <div className="text-muted-foreground">
                        help center
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>

                {/* menu item pricing */}
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/pricing">
                      <div className="font-medium">Pricing</div>
                      <div className="text-muted-foreground">
                        platform prices
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>

                {/* menu item Theme Submenu */}
                <li>
                  <div className="px-3 py-2">
                    <div className="flex items-center text-sm font-medium leading-none mb-2">
                      <Sun
                        className="mr-2 h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
                      <Moon
                        className="mr-2 absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
                      Theme
                    </div>

                    <div className="space-y-1">

                      {/* submenu item light */}
                      <NavigationMenuLink asChild>
                        <button
                          className="block w-full text-left"
                          onClick={() => setTheme("light")}
                        >
                          Light
                        </button>
                      </NavigationMenuLink>

                      {/* submenu item dark */}
                      <NavigationMenuLink asChild>
                        <button
                          className="block w-full text-left"
                          onClick={() => setTheme("dark")}
                        >
                          Dark
                        </button>
                      </NavigationMenuLink>

                      {/* submenu item system */}
                      <NavigationMenuLink asChild>
                        <button
                          className="block w-full text-left"
                          onClick={() => setTheme("system")}
                        >
                          System
                        </button>
                      </NavigationMenuLink>

                    </div>
                  </div>
                </li>

              </ul>
            </NavigationMenuContent>

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