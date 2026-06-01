import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Svartdahl Bygg & Eiendom — Snekker og håndverker i Stavern",
  description:
    "Svartdahl bygg og eiendom AS leverer solide snekkertjenester i Stavern og omegn. Tilbygg, terrasser, kjøkken, renovering og reparasjoner — utført av lokal håndverker du kan stole på.",
  metadataBase: new URL("https://svartdahlbygg.no"),
  openGraph: {
    title: "Svartdahl Bygg & Eiendom — Snekker i Stavern",
    description:
      "Solide snekkertjenester i Stavern og Larvik. Tilbygg, terrasser, kjøkken, renovering og småreparasjoner.",
    type: "website",
    locale: "nb_NO",
    siteName: "Svartdahl Bygg & Eiendom",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
