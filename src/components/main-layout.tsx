import React from 'react';
import Navbar from '@/components/navbar';

export default function MainLayout({children}: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto bg-background min-h-screen flex flex-col shadow-md">
      <Navbar/>
      <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      <footer className="py-4 px-6 border-t text-center text-sm text-muted-foreground">
        © 2024 - {new Date().getFullYear()} · www.PlenDesk.com
      </footer>
    </div>
  )
}