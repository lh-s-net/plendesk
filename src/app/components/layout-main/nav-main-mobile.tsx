"use client"

import * as React from "react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {ChevronRight, MenuIcon, Moon, Sun, Monitor} from "lucide-react"
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import Link from "next/link"
import {useTheme} from "next-themes";
import { NavAppMobile } from "@/app/components/layout-app/nav-app-mobile"


export function NavMainMobile() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const {theme, setTheme} = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="h-6 w-6"/>
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetTitle/>
          <SheetDescription/>
          <div className="p-4">
            <nav className="flex flex-col space-y-2">

              {/* menu platform */}
              <Collapsible>
                <CollapsibleTrigger
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground [&[data-state=open]>svg]:rotate-90">
                  Platform
                  <ChevronRight className="h-4 w-4 transition-transform duration-200"/>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4">

                  {/*item platform overview*/}
                  <SheetClose asChild>
                    <Link
                      href="/platform"
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      Platform Overview
                    </Link>
                  </SheetClose>

                  {/*item app1*/}
                  <SheetClose asChild>
                    <a
                      href="/app1"
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      App1
                    </a>
                  </SheetClose>

                  {/*item app3*/}
                  <SheetClose asChild>
                    <Link
                      href="/src/app/platform/planner"
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      App2
                    </Link>
                  </SheetClose>

                  {/*item app3*/}
                  <SheetClose asChild>
                    <Link
                      href="/src/app/platform/app3"
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      App3
                    </Link>
                  </SheetClose>

                </CollapsibleContent>
              </Collapsible>

              {/* nav app mobile */}
              <NavAppMobile/>

              {/* theme toggle */}
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

            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
