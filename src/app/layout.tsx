import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const body = JetBrains_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://stanleychiu.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stanley Chiu",
    template: "%s — Stanley Chiu",
  },
  description:
    "Stanley Chiu is a software engineer in New York who builds tooling for coding agents.",
  openGraph: {
    title: "Stanley Chiu",
    description: "Software engineer in New York. I build tooling for coding agents.",
    url: siteUrl,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Stanley Chiu",
    url: siteUrl,
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/stanleychiu0314",
      "https://www.linkedin.com/in/stanleychiu0314/",
    ],
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
