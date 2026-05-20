import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section id="tjenester">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Tjenester</div>
          <h2>Det meste en snekker bør kunne — gjort skikkelig.</h2>
          <p>Vi tar små og store oppdrag for privatpersoner, hytteeiere og borettslag i Vestfold.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/tjenester/${service.slug}`}
              className="service-card"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <span className="service-link">{service.cta} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
