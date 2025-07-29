import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";

export function NavAppDesktop() {
  const [mounted, setMounted] = React.useState(false)
  const {theme, setTheme} = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

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

          {/* Menu Item: Terms of Service */}
          <li>
            <NavigationMenuLink asChild>
              <Link href="/term-of-service">
                <div className="font-medium">Terms of Service</div>
                <div className="text-muted-foreground">legal terms</div>
              </Link>
            </NavigationMenuLink>
          </li>

          {/* Menu Item: Privacy Policy */}
          <li>
            <NavigationMenuLink asChild>
              <Link href="/privacy-policy">
                <div className="font-medium">Privacy Policy</div>
                <div className="text-muted-foreground">data protection</div>
              </Link>
            </NavigationMenuLink>
          </li>

          {/* Menu Item: Theme Toggle */}
          <li>
            <div className="px-3 py-2">
              {mounted && (
                <ToggleGroup
                  type="single"
                  value={theme}
                  onValueChange={(value) => {
                    if (value) setTheme(value);
                  }}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  <ToggleGroupItem value="light" className="flex-1">
                    <Sun className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="dark" className="flex-1">
                    <Moon className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="system" className="flex-1">
                    <Monitor className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              )}
            </div>
          </li>

        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}