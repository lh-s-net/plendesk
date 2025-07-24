"use client"

import {Globe} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import UserAccountNav from "@/components/user-account-nav";
import { DesktopNav } from '@/components/desktop-nav';

export default function Navbar1() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header>
      <div>
        <Link href="/">
          <Globe/>
          <span>PlenDesk</span>
        </Link>

        {/*Navigation*/}
        <DesktopNav/>

        <div>
          <UserAccountNav/>
          MobileNav
        </div>
      </div>
    </header>
  );
};