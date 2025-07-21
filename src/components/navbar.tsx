"use client";

import Link from "next/link";
import Image from "next/image";
import {SignedIn, SignedOut, SignInButton, SignUpButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {UserControl} from "@/components/user-control";
import {ThemeModeToggle} from "@/components/theme-mode-toggle";

export const Navbar = () => {

  return (
    <nav>
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/globe.svg" alt="PlenDesk" width={24} height={24}/>
          <span className="font-semibold text-lg">PlenDesk</span>
        </Link>
        <ThemeModeToggle/>
        <SignedOut>
          <div className="flex gap-2">
            <SignUpButton>
              <Button variant="outline" size="sm">
                Sign up
              </Button>
            </SignUpButton>
            <SignInButton>
              <Button size="sm">
                Sign in
              </Button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserControl showName/>
        </SignedIn>
      </div>
    </nav>
  );
};
