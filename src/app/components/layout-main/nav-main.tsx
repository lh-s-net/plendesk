"use client"

import Link from 'next/link';
import React from 'react';
import {NavMainDesktop} from '@/app/components/layout-main/nav-main-desktop';
import {NavMainMobile} from "@/app/components/layout-main/nav-main-mobile";
import {SignedOut, SignInButton, SignUpButton} from '@clerk/nextjs';
import {Button} from '@/components/ui/button';
import Image from "next/image";
import MenuUserButton from '@/app/components/layout-main/menu-user-button';

export default function NavMain() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/icons/icon-96x96.png" alt="PlenDesk Logo" width={32} height={32}/>
          <span className="hidden sm:inline-block">PlenDesk</span>
        </Link>

        {/* Navigation Dektop */}
        <NavMainDesktop/>

        <div className="flex items-center gap-2">
          <SignedOut>
            <Button variant="outline" asChild>
              <SignInButton/>
            </Button>
            <Button asChild>
              <SignUpButton/>
            </Button>
          </SignedOut>
          <MenuUserButton/>

          {/*Navigation Mobile*/}
          <NavMainMobile/>
        </div>

      </div>
    </header>
  );
};