export default function About({ about }) {
  return (
    <section className="about section-shell" id="about" data-reveal>
      <div className="about-intro">
        <p className="eyebrow">{about.kicker}</p>
        <h2>{about.heading}</h2>
      </div>
      <div className="about-copy">
        {about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}
