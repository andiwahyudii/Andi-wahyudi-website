import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import "@/app/globals.css";
import {
  buildMetadata,
  personJsonLd,
  professionalServiceJsonLd
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1F3A"
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  const jsonLd = [personJsonLd(), professionalServiceJsonLd()];

  return (
    <html lang="id" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
