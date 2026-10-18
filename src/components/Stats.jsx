export default function Stats({ stats }) {
  return (
    <section className="stats-bar section-shell" aria-label="Performance stats">
      {stats.map(stat => (
        <article className="stat-card" key={`${stat.value}-${stat.label}`} data-reveal>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </article>
      ))}
    </section>
  );
}
