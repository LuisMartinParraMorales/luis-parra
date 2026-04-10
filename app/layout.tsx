import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Instrument_Serif,
  Space_Grotesk,
} from "next/font/google";
import { NavigationProvider } from "@/components/navigation-provider";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteIdentity } from "@/lib/site-content";
import "./globals.css";

const heading = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const sans = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: siteIdentity.name,
  description:
    "Backend-heavy software and ML engineer building analytical products across transport, geospatial, simulation, and public-sector systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <NavigationProvider>
          <RouteScrollReset />
          <div className="site-background" />
          <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col px-4 sm:px-6 lg:px-10">
            <SiteHeader />
            <main className="flex-1 pb-16 pt-8 sm:pb-24 sm:pt-12">
              {children}
            </main>
            <SiteFooter />
          </div>
        </NavigationProvider>
      </body>
    </html>
  );
}
