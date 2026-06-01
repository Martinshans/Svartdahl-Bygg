import Image from "next/image";
import Link from "next/link";

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
              <li><Link href="/tjenester/tilbygg">Tilbygg og påbygg</Link></li>
              <li><Link href="/tjenester/terrasser">Terrasser</Link></li>
              <li><Link href="/tjenester/snekring">Innvendig snekring</Link></li>
              <li><Link href="/tjenester/renovering">Renovering</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Firma</h5>
            <ul>
              <li><Link href="/#om-oss">Om oss</Link></li>
              <li><Link href="/#prosess">Slik jobber vi</Link></li>
              <li><Link href="/trygghetsgaranti">Trygghetsgaranti</Link></li>
              <li><Link href="/#kontakt">Kontakt</Link></li>
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
            <Link href="/personvern">Personvern</Link> · <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
