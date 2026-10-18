import { ArrowDown } from "lucide-react";
import MediaBlock from "./MediaBlock";

export default function Hero({ hero }) {
  return (
    <section className="hero section-shell">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">{hero.kicker}</p>
        <h1>{hero.title}</h1>
        <p className="hero-subtitle">{hero.subtitle}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">{hero.primaryButton}</a>
          <a className="button button-ghost" href="#contact">{hero.secondaryButton} <ArrowDown size={16} /></a>
        </div>
      </div>
      <div className="hero-media" data-reveal>
        <MediaBlock media={hero.media} label={hero.showreelLabel} tall deferEmbed />
      </div>
    </section>
  );
}
