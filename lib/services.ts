export type Service = {
  slug: string;
  title: string;
  /** Vises på tjenestekortet på forsiden */
  shortDescription: string;
  /** CTA-tekst på forsidens kort */
  cta: string;
  /** Bilde brukt både på forsidens kort og på tjeneste-siden */
  image: string;
  /** Lengre ingress på selve tjeneste-siden */
  intro: string;
  whatWeDo: {
    heading: string;
    intro?: string;
    bullets: string[];
  };
  whyChoose: {
    heading: string;
    items: { title: string; description: string }[];
  };
  process: {
    heading: string;
    steps: { title: string; description: string }[];
  };
  /** Slugs til 2 andre tjenester som vises som "kanskje du også trenger" */
  related: [string, string];
};

export const services: Service[] = [
  {
    slug: "tilbygg",
    title: "Tilbygg og påbygg",
    shortDescription:
      "Større plass, mer lys, høyere verdi. Vi planlegger, søker og bygger — fra grunnmur til ferdig overflate.",
    cta: "Forespør tilbygg",
    image: "https://picsum.photos/seed/svartdahl-tilbygg/800/1000",
    intro:
      "Et tilbygg er ofte det rimeligste alternativet til å flytte. Vi tar deg gjennom hele prosessen — fra første skisse til ferdig oppmålt rom — og koordinerer alle fag på veien.",
    whatWeDo: {
      heading: "Hva tilbygget dekker",
      intro:
        "Vi følger prosjektet fra A til Å og koordinerer alle håndverkere som trengs underveis.",
      bullets: [
        "Skisse, tegning og dialog med kommunen",
        "Byggesøknad og nabovarsel",
        "Grunnarbeid, fundament og bæring",
        "Reisverk, isolasjon og kledning",
        "Innvendig snekring og overflater",
        "Koordinering av rørlegger og elektriker",
        "Sluttdokumentasjon og ferdigattest",
      ],
    },
    whyChoose: {
      heading: "Derfor velger du Svartdahl til tilbygg",
      items: [
        {
          title: "Én kontaktperson hele veien",
          description:
            "Du slipper å være prosjektleder i ditt eget hjem. Prosjektlederen vår koordinerer alle fag og holder deg oppdatert ukentlig.",
        },
        {
          title: "Fast pris, avtalt på forhånd",
          description:
            "Du vet hva tilbygget koster før vi setter spaden i bakken. Tilleggsarbeid blir alltid avklart og prises skriftlig.",
        },
        {
          title: "Dokumentasjon i Boligmappa",
          description:
            "All dokumentasjon legges inn på boligens eget nummer, slik at den følger boligen videre — og du har garantibevis etter NS 3600.",
        },
      ],
    },
    process: {
      heading: "Slik bygger vi tilbygget ditt",
      steps: [
        {
          title: "Befaring og første skisse",
          description:
            "Vi kommer hjem til deg, ser på muligheter, og lager en første skisse. Gratis og uforpliktende.",
        },
        {
          title: "Søknad og endelig tegning",
          description:
            "Vi tar oss av byggesøknad, nabovarsel og leverer endelige arbeidstegninger.",
        },
        {
          title: "Bygging",
          description:
            "Vi setter i gang når søknaden er godkjent. Du har én kontaktperson hele veien og vet alltid hva som skjer i morgen.",
        },
        {
          title: "Overlevering",
          description:
            "Du får full dokumentasjon i Boligmappa, ferdigattest og våre garantier på utført arbeid.",
        },
      ],
    },
    related: ["renovering", "snekring"],
  },

  {
    slug: "terrasser",
    title: "Terrasser og platting",
    shortDescription:
      "Trygg konstruksjon, pent håndverk og materialer som tåler vestfoldværet. Med eller uten rekkverk og pergola.",
    cta: "Forespør terrasse",
    image: "https://picsum.photos/seed/svartdahl-terrasse/800/1000",
    intro:
      "En riktig bygget terrasse varer i 25 år. En feilbygget terrasse merker du etter tre. Vi bygger som om det var vår egen — med konstruksjon, materialer og detaljer som tåler kystklimaet i Vestfold.",
    whatWeDo: {
      heading: "Hva vi bygger",
      bullets: [
        "Terrasser i alle størrelser, fra liten platting til hagestue",
        "Bæring og fundament tilpasset grunnforholdene",
        "Tre, kompositt eller hardved — vi gir ærlige råd om hva som passer",
        "Rekkverk i tre, glass eller stål",
        "Pergola, levegg og overbygg",
        "Beis, olje eller fargebehandling",
      ],
    },
    whyChoose: {
      heading: "Derfor velger du Svartdahl til terrasse",
      items: [
        {
          title: "Vi bygger for kystklima",
          description:
            "Stavern-værets kombinasjon av salt, regn og sol stiller andre krav til konstruksjon enn innlandsterrasser. Vi vet hvor vannet skal — og ikke skal — sive.",
        },
        {
          title: "Materialer som varer",
          description:
            "Vi anbefaler aldri den billigste planken hvis vi vet at den ikke holder. Det koster deg mer i lengden — og rykte koster oss.",
        },
        {
          title: "Detaljer som ikke ryker",
          description:
            "Fester, vinkler, beslag — det er der billige terrasser feiler først. Vi bruker rustfritt eller varmgalvanisert hele veien.",
        },
      ],
    },
    process: {
      heading: "Slik bygger vi terrassen din",
      steps: [
        {
          title: "Befaring",
          description:
            "Vi kommer ut, måler opp, og snakker om hva du vil bruke terrassen til.",
        },
        {
          title: "Tegning og materialvalg",
          description:
            "Du får en enkel tegning og et tydelig tilbud med materialvalg og fast pris.",
        },
        {
          title: "Bygging",
          description:
            "Vi rydder etter oss hver dag. De fleste terrasser tar 1–2 uker fra start til slutt.",
        },
        {
          title: "Overflatebehandling",
          description:
            "Vi olje- eller beisbehandler etter behov og forteller deg hva du selv bør gjøre årlig.",
        },
      ],
    },
    related: ["snekring", "reparasjoner"],
  },

  {
    slug: "snekring",
    title: "Innvendig snekring",
    shortDescription:
      "Listverk, dører, gulv, garderober og vegger. Detaljer som løfter rommet — uten skjeve hjørner.",
    cta: "Forespør snekring",
    image: "https://picsum.photos/seed/svartdahl-snekring/800/1000",
    intro:
      "Det er detaljene som skiller en grei jobb fra en god en. Vi tar oss av all innvendig snekring, fra ny listverk i en stue til komplett oppussing av et rom — med presisjonen som skal til.",
    whatWeDo: {
      heading: "Hva vi snekrer",
      bullets: [
        "Gulvlegging — parkett, heltre, laminat og vinyl",
        "Listverk, taklister og fotlister",
        "Innvendige dører og karmer",
        "Innebygde garderober og skap",
        "Trapper og rekkverk",
        "Veggkledning og panel",
        "Spesialtilpasninger til skjeve vegger og hjørner",
      ],
    },
    whyChoose: {
      heading: "Derfor velger du Svartdahl til snekring",
      items: [
        {
          title: "Presisjon på gamle hus",
          description:
            "Stavern har mange eldre hus med skjeve vegger og uregelmessige rom. Vi har spesialisert oss på å snekre i hus som ikke er rette.",
        },
        {
          title: "Vi rydder hver dag",
          description:
            "Du skal kunne bruke huset ditt mens vi jobber. Vi rydder, dekker og tar med oss avfallet.",
        },
        {
          title: "Faste håndverkere",
          description:
            "Det er Patrick eller en av hans faste folk som står på jobben. Aldri tilfeldige underleverandører.",
        },
      ],
    },
    process: {
      heading: "Slik utfører vi snekkerjobben",
      steps: [
        {
          title: "Befaring og mål",
          description:
            "Vi måler opp og diskuterer materialvalg og finish.",
        },
        {
          title: "Tilbud",
          description:
            "Du får et skriftlig tilbud med materialer, timer og sluttdato.",
        },
        {
          title: "Utførelse",
          description:
            "Vi jobber raskt og rolig, og kommuniserer underveis hvis vi finner noe uventet.",
        },
        {
          title: "Etterkontroll",
          description:
            "Vi går gjennom jobben sammen med deg og retter opp alt som ikke er 100 %.",
        },
      ],
    },
    related: ["renovering", "reparasjoner"],
  },

  {
    slug: "verdiloft",
    title: "Verdiløft",
    shortDescription:
      "Som håndverkere ser vi det meglerne ikke ser. Vi kommer hjem til deg, peker på hva som faktisk er verdt pengene — gratis og uforpliktende.",
    cta: "Bestill verdiløft",
    image: "https://picsum.photos/seed/svartdahl-verdiloft/800/1000",
    intro:
      "Tenker du på å pusse opp, eller vurderer du å selge? Et verdiløft er en gratis befaring hvor vi forteller deg ærlig hvilke grep som faktisk hever boligens verdi — og hvilke som er bortkastet.",
    whatWeDo: {
      heading: "Hva vi ser etter",
      intro:
        "En time av tiden vår, gratis. Du får ærlige svar fra noen som faktisk vet hva ting koster å bygge.",
      bullets: [
        "Tilstand på bad, kjøkken og våtrom",
        "Synlige tegn på fukt, råte eller setningsskader",
        "Hva som faktisk gir avkastning ved et eventuelt salg",
        "Hva som er overkill og ikke verdt pengene",
        "Grovestimat på kostnader for de tre viktigste tiltakene",
        "Hva du kan gjøre selv kontra hva som bør gjøres av fagfolk",
      ],
    },
    whyChoose: {
      heading: "Derfor er verdiløft annerledes",
      items: [
        {
          title: "Vi er håndverkere, ikke meglere",
          description:
            "Meglere er flinke til å selge bolig. Vi er flinke til å bygge. Det betyr at vi ser ting som ikke kommer fram på en visning.",
        },
        {
          title: "Helt gratis, ingen forpliktelse",
          description:
            "Du bestiller ikke en jobb — du bestiller en samtale. Vi tjener ingenting på selve befaringen, og det er meningen.",
        },
        {
          title: "Ærlige svar",
          description:
            "Hvis vi mener du ikke trenger å gjøre noe, sier vi det. Vi heller sender deg hjem med god samvittighet enn et tilbud du ikke trenger.",
        },
      ],
    },
    process: {
      heading: "Slik foregår et verdiløft",
      steps: [
        {
          title: "Du tar kontakt",
          description:
            "Send oss en melding eller ring. Fortell kort om boligen — alder, størrelse, og hva du lurer på.",
        },
        {
          title: "Vi avtaler et besøk",
          description:
            "Vi finner et tidspunkt som passer for deg, vanligvis innen én uke.",
        },
        {
          title: "Befaring (45–60 min)",
          description:
            "Vi går gjennom boligen sammen med deg. Du får svar på spørsmål og vi peker på det vi ser.",
        },
        {
          title: "Anbefaling og prioritering",
          description:
            "Du får en muntlig prioriteringsliste på stedet — hva som haster, hva som kan vente, og hva som er bortkastede penger.",
        },
      ],
    },
    related: ["renovering", "tilbygg"],
  },

  {
    slug: "renovering",
    title: "Renovering",
    shortDescription:
      "Bad, kjellerstuer, hytter og enkeltrom. Vi koordinerer med rørlegger og elektriker så du slipper.",
    cta: "Forespør renovering",
    image: "https://picsum.photos/seed/svartdahl-renovering/800/1000",
    intro:
      "En god renovering merker du i 20 år. En dårlig merker du etter to. Vi tar totalansvar — fra rive til ferdig fuget — og du har én å forholde deg til hele veien.",
    whatWeDo: {
      heading: "Hva vi renoverer",
      bullets: [
        "Bad og våtrom — med 12 års tetthetsgaranti",
        "Kjøkken — fra IKEA til spesialsnekret",
        "Kjellerstuer og kjellerleilighet",
        "Hytter og fritidsboliger",
        "Enkeltrom og åpne planløsninger",
        "Riving, gjenoppbygging og koordinering av alle fag",
      ],
    },
    whyChoose: {
      heading: "Derfor velger du Svartdahl til renovering",
      items: [
        {
          title: "12 års tetthetsgaranti på bad",
          description:
            "På membran, sluk og rørdeler. I tillegg får du Flisekompaniets 12 års produktgaranti på PCI-membran. Dobbel trygghet på det som betyr mest.",
        },
        {
          title: "Egne, faste håndverkere",
          description:
            "Ingen tilfeldige underleverandører. Det er våre folk som river, bygger og fuger.",
        },
        {
          title: "Dokumentasjon etter NS 3600",
          description:
            "All dokumentasjon legges i Boligmappa, slik at den følger boligen ved et eventuelt salg.",
        },
      ],
    },
    process: {
      heading: "Slik renoverer vi",
      steps: [
        {
          title: "Befaring og budsjettsamtale",
          description:
            "Vi måler opp, snakker om hva du vil, og gir deg et realistisk budsjett før vi går videre.",
        },
        {
          title: "Tegning og materialvalg",
          description:
            "Du får tegninger, materialprøver og et fast pristilbud før vi setter i gang.",
        },
        {
          title: "Utførelse",
          description:
            "Vi koordinerer rørlegger, elektriker og fliselegger så du slipper. Daglig opprydding, ukentlig statusoppdatering.",
        },
        {
          title: "Overlevering og garanti",
          description:
            "Vi går gjennom alt sammen med deg, registrerer dokumentasjon og leverer garantibevis.",
        },
      ],
    },
    related: ["tilbygg", "snekring"],
  },

  {
    slug: "reparasjoner",
    title: "Småreparasjoner",
    shortDescription:
      "Dør som ikke lukker, råteskade, knirkete trapp, ødelagt list. Vi tar de små jobbene som faller mellom alle stoler.",
    cta: "Forespør reparasjon",
    image: "https://picsum.photos/seed/svartdahl-reparasjon/800/1000",
    intro:
      "De fleste håndverkere vil helst ha de store prosjektene. Vi tar gjerne de små. Fordi mange små jobber gjør hjemmet bedre å bo i — og fordi vi liker variasjon.",
    whatWeDo: {
      heading: "Eksempler på det vi fikser",
      bullets: [
        "Dører og vinduer som ikke lukker eller låser",
        "Råteskader i kledning, listverk eller terrassebord",
        "Knirkete trapper og gulv",
        "Ødelagte fotlister, taklister og dørkarmer",
        "Montering av hyller, speil, TV og bilder",
        "Skifte av enkeltbord i terrasse eller gulv",
        "Mindre tilpasninger og finpuss",
      ],
    },
    whyChoose: {
      heading: "Derfor lønner det seg å ringe oss",
      items: [
        {
          title: "Vi tar små jobber",
          description:
            "Mange håndverkere takker nei til 2-timersjobber. Vi gjør dem gjerne — det holder oss skarpe og lokalt forankret.",
        },
        {
          title: "Rask respons",
          description:
            "De fleste småjobber kan vi gjøre innen 1–2 uker. Hastesaker prioriterer vi.",
        },
        {
          title: "Fast timepris",
          description:
            "Du vet hva timen koster før vi setter i gang. Ingen overraskelser, ingen tillegg etterpå.",
        },
      ],
    },
    process: {
      heading: "Slik bestiller du en reparasjon",
      steps: [
        {
          title: "Beskriv jobben",
          description:
            "Send oss en melding med bilde hvis du har. Vi svarer som regel samme dag.",
        },
        {
          title: "Vi avtaler",
          description:
            "Du får et estimat på timer og pris, og vi avtaler et tidspunkt.",
        },
        {
          title: "Utførelse",
          description:
            "Vi kommer når vi har sagt vi kommer, og rydder etter oss.",
        },
        {
          title: "Faktura",
          description:
            "Du betaler etter at jobben er ferdig og du er fornøyd.",
        },
      ],
    },
    related: ["snekring", "verdiloft"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
