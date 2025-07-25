"use client"

import * as React from "react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {ChevronRight, MenuIcon} from "lucide-react"
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible"
import Link from "next/link"

const dashboardItems = [
  {title: "App1", href: "/dashboard/app1"},
  {title: "App2", href: "/dashboard/app2"},
  {title: "App3", href: "/dashboard/app3"},
]

const app1Items = [
  {title: "Settings1", href: "/dashboard/app1/settings1"},
  {title: "Settings2", href: "/dashboard/app1/settings2"},
]

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)

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

              {/* Dashboard Section */}
              <Collapsible>
                <CollapsibleTrigger
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground [&[data-state=open]>svg]:rotate-90">
                  Dashboard
                  <ChevronRight className="h-4 w-4 transition-transform duration-200"/>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4">
                  <SheetClose asChild>
                    <Link
                      href="/dashboard"
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      Dashboard Overview
                    </Link>
                  </SheetClose>
                  {dashboardItems.map((item) => (
                    <SheetClose asChild key={item.title}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/*App1 Section */}
              <Collapsible>
                <CollapsibleTrigger
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground [&[data-state=open]>svg]:rotate-90">
                  App1
                  <ChevronRight className="h-4 w-4 transition-transform duration-200"/>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4">
                  <SheetClose asChild>
                    <Link
                      href="/app1"
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      App1 Overview
                    </Link>
                  </SheetClose>
                  {app1Items.map((item) => (
                    <SheetClose asChild key={item.title}>
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Help Link */}
              <SheetClose asChild>
                <Link
                  href="/help"
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Help
                </Link>
              </SheetClose>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
