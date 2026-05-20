"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: koble til faktisk endepunkt (f.eks. Vercel Form, Resend, Formspree)
    setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <section id="kontakt" className="contact">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Kontakt oss</div>
          <h2>Fortell oss om prosjektet ditt.</h2>
          <p>Vi svarer som regel innen én arbeidsdag. For akutte saker, ring direkte.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item">
              <h4>Telefon</h4>
              <a href="tel:+4790737487">907 37 487</a>
            </div>
            <div className="contact-info-item">
              <h4>E-post</h4>
              <a href="mailto:post@svartdahlbygg.no">post@svartdahlbygg.no</a>
            </div>
            <div className="contact-info-item">
              <h4>Adresse</h4>
              <p>
                Svartdahl bygg og eiendom AS
                <br />
                Stavern
              </p>
            </div>
            <div className="contact-info-item">
              <h4>Åpningstider</h4>
              <p>
                Man–fre: 07.00 – 16.00
                <br />
                Lør: etter avtale
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <h3 style={{ marginBottom: 12 }}>Takk for forespørselen!</h3>
                <p style={{ color: "var(--ink-soft)" }}>
                  Vi tar kontakt så snart som mulig — som regel innen én arbeidsdag.
                </p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Navn</label>
                    <input type="text" id="name" name="name" required placeholder="Ola Nordmann" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Telefon</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+47 900 00 000" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">E-post</label>
                  <input type="email" id="email" name="email" required placeholder="ola@eksempel.no" />
                </div>

                <div className="form-field">
                  <label htmlFor="service">Hva gjelder det?</label>
                  <select id="service" name="service" required defaultValue="">
                    <option value="" disabled>Velg tjeneste</option>
                    <option>Tilbygg eller påbygg</option>
                    <option>Terrasse eller platting</option>
                    <option>Innvendig snekring</option>
                    <option>Kjøkkenmontering</option>
                    <option>Renovering</option>
                    <option>Småreparasjoner</option>
                    <option>Annet</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Beskriv prosjektet</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Fortell kort hva du tenker — størrelse, ønsket oppstart, og gjerne et bilde hvis du har."
                  />
                  <div className="form-help">
                    Jo mer du forteller, jo mer presist tilbud kan vi gi.
                  </div>
                </div>

                <button type="submit" className="form-submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sender …" : "Send forespørsel"}
                </button>
                <div className="form-privacy">
                  Vi bruker opplysningene dine kun til å svare deg. Ingen nyhetsbrev, ingen videresalg.
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
