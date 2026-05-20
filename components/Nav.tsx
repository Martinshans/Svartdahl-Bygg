import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="logo" aria-label="Svartdahl Bygg — forside">
          <Image
            src="/Logo/GULL (2).png"
            alt="Svartdahl Bygg"
            width={180}
            height={50}
            className="logo-mark"
            priority
          />
        </Link>
        <ul className="nav-links">
          <li><Link href="/#tjenester">Tjenester</Link></li>
          <li><Link href="/#om-oss">Om oss</Link></li>
          <li><Link href="/#prosess">Slik jobber vi</Link></li>
          <li><Link href="/trygghetsgaranti">Trygghetsgaranti</Link></li>
          <li><Link href="/#kontakt">Kontakt</Link></li>
        </ul>
        <Link href="/#kontakt" className="nav-cta">Be om tilbud</Link>
      </div>
    </nav>
  );
}
