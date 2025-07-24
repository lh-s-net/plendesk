import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import {Toaster} from "sonner";
import {ThemeProvider} from "@/components/theme-provider";
import {Metadata} from "next";
import {Analytics} from '@vercel/analytics/next';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {cn} from "@/lib/utils";
import MainLayout from "@/components/main-layout";

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
        <head/>
        <body
          className={cn("min-h-screen bg-gray-100 font-sans antialiased dark:bg-neutral-900", geistSans.variable, geistMono.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system" // dark ord system
            enableSystem
            disableTransitionOnChange
          >
            <Toaster/>
            <MainLayout>
              {children}
            </MainLayout>
            <Analytics/>
            <SpeedInsights/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
