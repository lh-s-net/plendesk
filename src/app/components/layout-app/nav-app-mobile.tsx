"use client";

import React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";

export function NavAppMobile() {
  return (
    <Collapsible>
      <CollapsibleTrigger
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground [&[data-state=open]>svg]:rotate-90"
      >
        Extras
        <ChevronRight className="h-4 w-4 transition-transform duration-200" />
      </CollapsibleTrigger>

      <CollapsibleContent className="pl-4">
        {/* Menu Item: Help */}
        <SheetClose asChild>
          <Link
            href="/help"
            className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Help
          </Link>
        </SheetClose>

        {/* Menu Item: Pricing */}
        <SheetClose asChild>
          <Link
            href="/pricing"
            className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Pricing
          </Link>
        </SheetClose>
      </CollapsibleContent>
    </Collapsible>
  );
}