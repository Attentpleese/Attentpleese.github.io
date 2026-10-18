export default function Performance({ performance }) {
  return (
    <section className="section-shell" id="performance">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{performance.kicker}</p>
        <h2>{performance.title}</h2>
        <p>{performance.subtitle}</p>
      </div>
      <div className="performance-table" data-reveal>
        {performance.rows.map(row => (
          <article key={row.project}>
            <strong>{row.project}</strong>
            <span>{row.platform}</span>
            <span>{row.views}</span>
            <span>{row.extra}</span>
            <span>{row.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
