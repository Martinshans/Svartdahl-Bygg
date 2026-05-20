import Image from "next/image";

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div>
          <span className="hero-eyebrow">Snekker og bygg i Stavern</span>
          <h1>Solid håndverk, levert til avtalt tid.</h1>
          <p>
            Svartdahl bygg og eiendom AS er din lokale snekker i Stavern. Vi tar oss av
            alt fra terrasser og tilbygg til kjøkkenmontering og småreparasjoner —
            uten å gå på akkord med kvaliteten.
          </p>
          <div className="hero-ctas">
            <a href="#kontakt" className="btn-primary">Få et uforpliktende tilbud</a>
            <a href="#tjenester" className="btn-secondary">Se hva vi gjør</a>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/Hero image.jpg"
            alt="Rødt sjøhus ved fjorden i Stavern med norsk flagg og høst-skog i bakgrunnen"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </header>
  );
}
