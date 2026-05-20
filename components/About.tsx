import Image from "next/image";

export default function About() {
  return (
    <section id="om-oss" className="about">
      <div className="container about-grid">
        <div className="about-image">
          <Image
            src="/OM OSS BILDE.png"
            alt="Patrick Svartdahl utenfor et byggeprosjekt, ikledd Svartdahl Bygg-jakke"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="about-text">
          <div className="section-eyebrow">Om oss</div>
          <h2>En snekker fra Stavern, for folk i Stavern.</h2>
          <p>
            Svartdahl bygg og eiendom AS ble etablert i 2026 av Patrick Svartdahl. Etter mange år
            som snekker hos andre, bestemte han seg for å gjøre det på sin egen måte:
            rett pris, ærlig kommunikasjon, og en jobb som er ordentlig gjort —
            fra grunnmur til lister.
          </p>
          <p>
            Vi holder til i Stavern og tar oppdrag i hele Larvik kommune og nedre
            Vestfold.
          </p>
        </div>
      </div>
    </section>
  );
}
