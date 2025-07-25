"use client"

import {Globe} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import UserAccountNav from "@/components/user-account-nav";
import {DesktopNav} from '@/components/desktop-nav';
import {MobileNav} from "@/components/mobile-nav";
import {ThemeModeToggle} from "@/components/theme-mode-toggle";
import {SignedOut, SignInButton, SignUpButton} from '@clerk/nextjs';
import {Button} from '@/components/ui/button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Globe className="h-6 w-6"/>
          <span className="hidden sm:inline-block">MyApp</span>
        </Link>

        {/* Navigation */}
        <DesktopNav/>

        <div className="flex items-center gap-2">
          <ThemeModeToggle/>
          <SignedOut>
            <Button variant="outline">
              <SignInButton/>
            </Button>
            <Button>
              <SignUpButton/>
            </Button>
          </SignedOut>
          <UserAccountNav/>
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};