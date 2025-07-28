import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import React from "react";

export function NavAppDesktop() {
  const {setTheme} = useTheme();

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Extras</NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid w-[200px] gap-4">
          {/* Menu Item: Help */}
          <li>
            <NavigationMenuLink asChild>
              <Link href="/help">
                <div className="font-medium">Help</div>
                <div className="text-muted-foreground">help center</div>
              </Link>
            </NavigationMenuLink>
          </li>

          {/* Menu Item: Pricing */}
          <li>
            <NavigationMenuLink asChild>
              <Link href="/pricing">
                <div className="font-medium">Pricing</div>
                <div className="text-muted-foreground">platform prices</div>
              </Link>
            </NavigationMenuLink>
          </li>

          {/* Menu Item: Theme Submenu */}
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
                {/* Submenu Item: Light */}
                <NavigationMenuLink asChild>
                  <button
                    className="block w-full text-left"
                    onClick={() => setTheme("light")}
                  >
                    Light
                  </button>
                </NavigationMenuLink>

                {/* Submenu Item: Dark */}
                <NavigationMenuLink asChild>
                  <button
                    className="block w-full text-left"
                    onClick={() => setTheme("dark")}
                  >
                    Dark
                  </button>
                </NavigationMenuLink>

                {/* Submenu Item: System */}
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
  );
}