import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/navbar";
import {ClerkProvider} from "@clerk/nextjs";
import {Toaster} from "sonner";
import {ThemeProvider} from "@/components/theme-provider";
import {Metadata} from "next";
import {Analytics} from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlenDesk.com | Your Online Support Community",
  description: "PlenDesk.com is your online support community. We help you with everything from tech support to business support. We are here to help you with everything.",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="system" // dark ord system
        enableSystem
        disableTransitionOnChange
      >
        <Navbar/>
        <Toaster/>
        {children}
        <Analytics/>
      </ThemeProvider>
      </body>
      </html>
    </ClerkProvider>
  );
}
