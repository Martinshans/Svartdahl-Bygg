import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trygghetsgaranti — Svartdahl Bygg & Eiendom",
  description:
    "Vårt løfte om riktig kvalitet, fast pris og levering til avtalt tid. 12 års tetthetsgaranti på bad og full dokumentasjon i Boligmappa.",
};

const benefits = [
  "Én fast kontaktperson gjennom hele prosjektet",
  "Egne, faste håndverkere — ingen tilfeldige underleverandører",
  "Håndverk av dokumentert høy kvalitet",
  "Fast pris, avtalt på forhånd",
];

const CheckIcon = () => (
  <svg
    className="check-icon"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function TrygghetsgarantiPage() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="guarantee-hero">
          <div className="container guarantee-hero-grid">
            <div className="guarantee-hero-text">
              <div className="section-eyebrow">Vårt løfte</div>
              <h1>Trygghetsgaranti</h1>
              <p className="lead">
                Når du velger Svartdahl bygg og eiendom AS, tar vi ansvar for
                hele prosjektet — fra første befaring til ferdig resultat.
                Trygghetsgarantien er vårt løfte om riktig kvalitet, fast pris
                og levering til avtalt tid.
              </p>
              <ul className="guarantee-bullets">
                {benefits.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="guarantee-hero-image">
              <Image
                src="/trygghetsgaranti.jpg"
                alt="Håndverkere fra Svartdahl Bygg som monterer trapp i et trehus"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* THREE PILLARS */}
        <section className="guarantee-pillars">
          <div className="container">
            <div className="section-head">
              <div className="section-eyebrow">Garantiene i detalj</div>
              <h2>Tre løfter du kan ta oss på</h2>
            </div>
            <div className="pillars-grid">
              <article className="guarantee-pillar">
                <h3>Kvalitetsgaranti</h3>
                <p>
                  Alt arbeid utføres av våre egne fagfolk — faglærte håndverkere,
                  mestere og spesialister med tilleggskompetanse. Vi følger
                  gjeldende byggeforskrifter i alle ledd, og bygger videre på
                  solid norsk håndverkstradisjon.
                </p>
              </article>
              <article className="guarantee-pillar">
                <h3>Leveringsgaranti</h3>
                <p>
                  Alle fag er samlet under ett tak, med en prosjektleder som
                  koordinerer fra start til slutt. Tydelige avtaler og faste
                  priser gjør at vi kan garantere ferdigstillelse til avtalt tid
                  — og at du alltid har én ansvarlig å forholde deg til.
                </p>
              </article>
              <article className="guarantee-pillar">
                <h3>Dokumentasjon som følger boligen</h3>
                <p>
                  All dokumentasjon legges inn i Boligmappa på boligens eget
                  nummer, slik at den følger boligen uansett hvem som eier den.
                  Garantibevis og dokumentasjon utarbeides etter NS 3600.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="guarantee-cta">
          <div className="container">
            <h2>Klar til å starte prosjektet ditt?</h2>
            <p>
              Ring oss eller send en forespørsel — vi tar en uforpliktende prat
              om hva du trenger.
            </p>
            <div className="cta-actions">
              <Link href="/#kontakt" className="btn-primary">
                Be om tilbud
              </Link>
              <a href="tel:+4790737487" className="btn-secondary">
                Ring 907 37 487
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
