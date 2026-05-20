import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="nb">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
