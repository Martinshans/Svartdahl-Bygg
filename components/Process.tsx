const steps = [
  {
    title: "Vi snakkes",
    description:
      "Send oss en melding eller ring direkte. Vi tar en uforpliktende prat om hva du trenger.",
  },
  {
    title: "Befaring",
    description:
      "For større jobber kommer vi innom og ser. Befaring i Stavern og Larvik er gratis.",
  },
  {
    title: "Skriftlig tilbud",
    description:
      "Du får et tydelig tilbud med fast pris eller estimat, materialvalg og start- og sluttdato.",
  },
  {
    title: "Vi setter i gang",
    description:
      "Vi rydder etter oss hver dag, og du vet alltid hva som skjer i morgen.",
  },
];

export default function Process() {
  return (
    <section id="prosess">
      <div className="container">
        <div className="section-head">
          <div className="section-eyebrow">Slik jobber vi</div>
          <h2>Fra forespørsel til ferdig jobb — uten overraskelser.</h2>
        </div>

        <div className="process-steps">
          {steps.map((step) => (
            <div key={step.title} className="step">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
