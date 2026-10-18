export default function Process({ process }) {
  return (
    <section className="section-shell process" id="process">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{process.kicker}</p>
        <h2>{process.title}</h2>
        <p>{process.subtitle}</p>
      </div>
      <div className="process-grid">
        {process.steps.map((step, index) => (
          <article className="process-card" key={step} data-reveal>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
