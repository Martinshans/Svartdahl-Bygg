# Svartdahl bygg og eiendom AS — nettside

Next.js 15 (App Router, TypeScript). Klar for deploy til Vercel.

## Kom i gang lokalt

```bash
cd "/Users/martin/Claude/projects/SVARTDAHL. BYGG"
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

## Mappestruktur

```
.
├── app/
│   ├── layout.tsx        # Root layout + metadata (SEO, OG, favicon)
│   ├── page.tsx          # Forsiden — komponerer seksjonene
│   └── globals.css       # All styling (CSS-variabler øverst i fila)
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── Services.tsx      # Tjenestekortene (data i toppen av fila)
│   ├── About.tsx
│   ├── Process.tsx
│   ├── Contact.tsx       # "use client" — håndterer skjema-state
│   └── Footer.tsx
├── public/               # Logoer, bilder, favicon (legg filer her)
└── next.config.mjs
```

## Bilder og logo

Legg disse filene i `public/`:

| Fil               | Bruk                                          | Format        |
|-------------------|-----------------------------------------------|---------------|
| `logo.svg`        | Hovedlogo i nav-baren                         | SVG, helst    |
| `logo-dark.svg`   | Logo for mørk bakgrunn (footer)               | SVG           |
| `favicon.svg`     | Nettleser-fane                                | SVG, 512×512  |
| `hero.jpg`        | Hero-bilde av Patrick ved firmabilen          | 4:5 vertikal  |
| `about.jpg`       | "Om oss"-portrett                             | 5:6 vertikal  |
| `og-image.png`    | Bilde til sosiale medier-deling (Open Graph)  | 1200×630      |

### Bytte ut plassholderne i koden

I `components/Nav.tsx` — fjern kommentaren rundt `<Image>`-blokken og slett tekst-logoen:

```tsx
<Image src="/logo.svg" alt="Svartdahl Bygg & Eiendom" width={140} height={32} className="logo-mark" priority />
```

I `components/Hero.tsx` og `components/About.tsx` — bytt ut `<div className="img-placeholder">…</div>` med `<Image>`-komponenten som ligger som kommentar i samme fil.

## Deploy til Vercel

### Alternativ A — gjennom GitHub (anbefalt)

1. Opprett et nytt GitHub-repo (privat eller offentlig).
2. I dette prosjektet:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin git@github.com:<bruker>/svartdahl-bygg.git
   git push -u origin main
   ```
3. Gå til [vercel.com/new](https://vercel.com/new), velg repoet, og klikk **Deploy**. Vercel detekterer Next.js automatisk — ingen konfig nødvendig.

### Alternativ B — direkte med Vercel CLI

```bash
npm i -g vercel
vercel
```

Følg promptene. Første gang får du spørsmål om project name, scope og om du vil linke til et eksisterende prosjekt.

### Egen domene

I Vercel-prosjektet → **Settings → Domains** → legg til `svartdahlbygg.no` (eller hva domenet ditt heter). Vercel gir deg DNS-records som du legger inn hos domeneregistraren.

## Kontaktskjema

Skjemaet i `components/Contact.tsx` er foreløpig en fake-submit. Tre veier videre:

- **Vercel + Resend** — opprett en API route (`app/api/contact/route.ts`) som sender e-post via [Resend](https://resend.com). Enkel, billig.
- **Formspree / Getform** — bytt skjemaets `action` til en Formspree-URL, ingen backend trengs.
- **Vercel Postgres / KV** — lagre forespørsler i database hvis du vil bygge en innboks senere.

Si fra hvis du vil ha hjelp med å koble til en av dem.

## Firma og kontaktinfo å fylle inn

Søk-og-erstatt disse plassholderne i koden før lansering:

- `+47 900 00 000` → faktisk telefonnummer
- `post@svartdahlbygg.no` → faktisk e-postadresse
- `Org.nr. 000 000 000` → faktisk org.nr.
- `svartdahlbygg.no` (i `app/layout.tsx` `metadataBase`) → faktisk domene

## Tilpasning

- **Farger**: alle i `:root` øverst i `app/globals.css` — endre `--accent` for å endre profilfargen.
- **Skrifttyper**: Fraunces (overskrifter) + Inter (brødtekst). Lastes fra Google Fonts i `app/layout.tsx`.
- **Tjenestekort**: rediger `services`-arrayen i `components/Services.tsx`.

## Lisens

© Svartdahl bygg og eiendom AS. All rights reserved.
