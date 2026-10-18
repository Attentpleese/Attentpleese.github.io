import { ExternalLink } from "lucide-react";
import MediaBlock from "./MediaBlock";

export default function Work({ section, cases, onOpenCase }) {
  return (
    <section className="section-shell" id="work">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{section.kicker}</p>
        <h2>{section.title}</h2>
        <p>{section.subtitle}</p>
      </div>
      <div className="case-grid">
        {cases.map(item => (
          <article className="case-card" key={item.title} data-reveal>
            <MediaBlock media={item.media} label={item.previewLabel} hoverPlay />
            <div className="case-body">
              <p className="category">{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <dl>
                <div><dt>{section.roleLabel}</dt><dd>{item.role}</dd></div>
                <div><dt>{section.resultLabel}</dt><dd>{item.result}</dd></div>
              </dl>
              <button className="text-button" type="button" onClick={() => onOpenCase(item)}>
                {section.viewCase} <ExternalLink size={15} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
