import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div>
            <Image
              src="/Logo/GULL (2).png"
              alt="Svartdahl Bygg"
              width={216}
              height={60}
              className="footer-logo-mark"
            />
            <p className="footer-tagline">
              Snekker og håndverker i Stavern. Solide jobber, ærlige priser.
            </p>
          </div>

          <div className="footer-col">
            <h5>Tjenester</h5>
            <ul>
              <li><a href="/#tjenester">Tilbygg og påbygg</a></li>
              <li><a href="/#tjenester">Terrasser</a></li>
              <li><a href="/#tjenester">Innvendig snekring</a></li>
              <li><a href="/#tjenester">Renovering</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Firma</h5>
            <ul>
              <li><a href="/#om-oss">Om oss</a></li>
              <li><a href="/#prosess">Slik jobber vi</a></li>
              <li><a href="/trygghetsgaranti">Trygghetsgaranti</a></li>
              <li><a href="/#kontakt">Kontakt</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Kontakt</h5>
            <ul>
              <li><a href="tel:+4790737487">907 37 487</a></li>
              <li><a href="mailto:post@svartdahlbygg.no">post@svartdahlbygg.no</a></li>
              <li>Stavern</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Svartdahl bygg og eiendom AS · Org.nr. 000 000 000</div>
          <div>
            <a href="/personvern">Personvern</a> · <a href="/cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
