export default function Skills({ section }) {
  return (
    <>
      <section className="club-safe section-shell" data-reveal>
        <div>
          <p className="eyebrow">{section.clubSafe.kicker}</p>
          <h2>{section.clubSafe.title}</h2>
          <p>{section.clubSafe.text}</p>
        </div>
        <div className="safe-grid">
          {section.clubSafe.cards.map(card => <article key={card}><span>{card}</span></article>)}
        </div>
      </section>
      <section className="section-shell" id="skills">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">{section.kicker}</p>
          <h2>{section.title}</h2>
        </div>
        <div className="skills-grid">
          {section.groups.map(group => (
            <article className="skill-card" key={group.title} data-reveal>
              <h3>{group.title}</h3>
              <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
