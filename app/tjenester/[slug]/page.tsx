import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { services, getService } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Tjeneste ikke funnet — Svartdahl Bygg" };
  return {
    title: `${service.title} — Svartdahl Bygg`,
    description: service.intro,
  };
}

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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedServices = service.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="svc-hero">
          <div className="container svc-hero-grid">
            <div className="svc-hero-text">
              <Link href="/#tjenester" className="svc-back">
                ← Alle tjenester
              </Link>
              <h1>{service.title}</h1>
              <p className="lead">{service.intro}</p>
              <div className="svc-hero-ctas">
                <Link href="/#kontakt" className="btn-primary">
                  Be om tilbud
                </Link>
                <a href="tel:+4790737487" className="btn-secondary">
                  Ring 907 37 487
                </a>
              </div>
            </div>
            <div className="svc-hero-image">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </section>

        {/* HVA VI GJØR */}
        <section className="svc-section svc-section-alt">
          <div className="container svc-text-grid">
            <div>
              <div className="section-eyebrow">Tjenesteomfang</div>
              <h2>{service.whatWeDo.heading}</h2>
              {service.whatWeDo.intro && (
                <p className="svc-section-intro">{service.whatWeDo.intro}</p>
              )}
            </div>
            <ul className="svc-bullets">
              {service.whatWeDo.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckIcon />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* HVORFOR VELGE OSS */}
        <section className="svc-section">
          <div className="container">
            <div className="section-head">
              <div className="section-eyebrow">Hvorfor Svartdahl</div>
              <h2>{service.whyChoose.heading}</h2>
            </div>
            <div className="svc-why-grid">
              {service.whyChoose.items.map((item) => (
                <article key={item.title} className="svc-why-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROSESS */}
        <section className="svc-section svc-section-alt">
          <div className="container">
            <div className="section-head">
              <div className="section-eyebrow">Slik jobber vi</div>
              <h2>{service.process.heading}</h2>
            </div>
            <div className="svc-process-grid">
              {service.process.steps.map((step, i) => (
                <div key={step.title} className="svc-step">
                  <span className="svc-step-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATERTE TJENESTER */}
        {relatedServices.length > 0 && (
          <section className="svc-section">
            <div className="container">
              <div className="section-head">
                <div className="section-eyebrow">Andre tjenester</div>
                <h2>Du trenger kanskje også</h2>
              </div>
              <div className="svc-related-grid">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/tjenester/${rel.slug}`}
                    className="svc-related-card"
                  >
                    <div className="svc-related-image">
                      <Image
                        src={rel.image}
                        alt=""
                        fill
                        sizes="(max-width: 700px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="svc-related-body">
                      <h3>{rel.title}</h3>
                      <p>{rel.shortDescription}</p>
                      <span className="svc-related-link">Les mer →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA (gjenbruker guarantee-cta-stilen) */}
        <section className="guarantee-cta">
          <div className="container">
            <h2>Klar til å starte prosjektet ditt?</h2>
            <p>
              Send oss en kort beskrivelse av hva du tenker — vi svarer
              vanligvis innen én arbeidsdag.
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
