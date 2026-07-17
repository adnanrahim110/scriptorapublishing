import SiteShell from "@/components/layout/site-shell";
import { cn } from "@/utils/cn";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const moglan = localFont({
  src: "../public/fonts/moglan.ttf",
  variable: "--font-moglan",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scriptora Publishing | Your Story, Shaped with Editorial Conviction",
  description:
    "Editing, design, production, distribution, and marketing brought together as one considered publishing partnership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(moglan.variable, manrope.variable, "h-full antialiased")}
    >
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
