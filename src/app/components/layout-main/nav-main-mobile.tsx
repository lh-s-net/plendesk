"use client"

import * as React from "react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {ChevronRight, MenuIcon, Moon, Sun} from "lucide-react"
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible"
import Link from "next/link"
import {useTheme} from "next-themes";
import { NavAppMobile } from "@/app/components/layout-app/nav-app-mobile"

const dashboardItems = [
  {title: "App1", href: "/app1"},
  {title: "App2", href: "/dashboard/app2"},
  {title: "App3", href: "/dashboard/app3"},
]

const app1Items = [
  {title: "Settings1", href: "/dashboard/app1/settings1"},
  {title: "Settings2", href: "/dashboard/app1/settings2"},
]

export function NavMainMobile() {
  const [isOpen, setIsOpen] = React.useState(false)
  const {setTheme} = useTheme()

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
                      href="/dashboard"
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
                      href="/dashboard/app2"
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      App2
                    </Link>
                  </SheetClose>

                  {/*item app3*/}
                  <SheetClose asChild>
                    <Link
                      href="/dashboard/app3"
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      App3
                    </Link>
                  </SheetClose>

                </CollapsibleContent>
              </Collapsible>

              {/* nav app mobile */}
              <NavAppMobile/>

              {/* menu theme */}
              <Collapsible>
                <CollapsibleTrigger
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground [&[data-state=open]>svg]:rotate-90">
                  <div className="flex items-center text-sm font-medium leading-none">
                    <Sun
                      className="mr-2 h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
                    <Moon
                      className="mr-2 absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
                    Theme
                  </div>
                  <ChevronRight className="h-4 w-4 transition-transform duration-200"/>
                </CollapsibleTrigger>

                <CollapsibleContent className="pl-4">

                  {/* menu item light */}
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      onClick={() => setTheme("light")}
                      className="block w-full text-left"
                    >
                      Light
                    </Button>
                  </SheetClose>

                  {/* menu item dark */}
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      onClick={() => setTheme("dark")}
                      className="block w-full text-left"
                    >
                      Dark
                    </Button>
                  </SheetClose>

                  {/* menu item system */}
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      onClick={() => setTheme("system")}
                      className="block w-full text-left"
                    >
                      System
                    </Button>
                  </SheetClose>

                </CollapsibleContent>
              </Collapsible>

            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
