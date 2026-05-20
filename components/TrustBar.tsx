const CheckIcon = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function TrustBar() {
  const items = [
    "Registrert i Foretaksregisteret",
    "Sentral godkjenning",
    "Forsikret og ansvarlig",
    "Lokal i Stavern og Larvik",
  ];

  return (
    <div className="trust">
      <div className="container trust-inner">
        {items.map((label) => (
          <div key={label} className="trust-item">
            <CheckIcon />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
