import type React from "react";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import {
  PersonStructuredData,
  OrganizationStructuredData,
  PortfolioStructuredData,
} from "@/components/common/structured-data";

import ogImage from "../public/og-image.png";

const BASE_URLS = [
  "https://eduardoaugusto.squareweb.app",
  "https://eduardoaugusto.is-a.dev",
];
const BASE_URL = BASE_URLS[0]; // principal
const OG_IMAGE_URL = ogImage.src;

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Eduardo Augusto - Desenvolvedor Front-End",
    template: "%s | Eduardo Augusto - Desenvolvedor Front-End",
  },
  description:
    "Portfólio de Eduardo Augusto, desenvolvedor web front-end especializado em React, Next.js e TypeScript",
  keywords: [
    "desenvolvedor",
    "front-end",
    "react",
    "nextjs",
    "typescript",
    "eduardo augusto",
    "portfolio",
    "web development",
    "javascript",
    "programador",
  ],
  authors: BASE_URLS.map((url) => ({ name: "Eduardo Augusto", url })),
  creator: "Eduardo Augusto",
  publisher: "Eduardo Augusto",
  openGraph: {
    title: "Eduardo Augusto - Desenvolvedor Front-End",
    description:
      "Desenvolvedor apaixonado por criar soluções digitais que fazem a diferença",
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Eduardo Augusto Portfolio",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Eduardo Augusto - Desenvolvedor Front-End",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Augusto - Desenvolvedor Front-End",
    description:
      "Desenvolvedor apaixonado por criar soluções digitais que fazem a diferença",
    images: [OG_IMAGE_URL],
    creator: "@the_duh7",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    yahoo: "",
    yandex: "",
    other: {},
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        {BASE_URLS.map((url) => (
          <link key={url} rel="canonical" href={url} />
        ))}
      </head>
      <body className={`${bricolageGrotesque.variable} font-sans antialiased`}>
        <PersonStructuredData />
        <OrganizationStructuredData />
        <PortfolioStructuredData />
        {children}
      </body>
    </html>
  );
}
