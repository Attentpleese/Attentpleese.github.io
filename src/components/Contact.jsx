import { Mail } from "lucide-react";

export default function Contact({ contact }) {
  return (
    <section className="contact section-shell" id="contact" data-reveal>
      <div>
        <p className="eyebrow">{contact.kicker}</p>
        <h2>{contact.heading}</h2>
        <p>{contact.text}</p>
      </div>
      <div className="contact-panel">
        {contact.links.map(link => <a key={link.label} href={link.url}>{link.label}<span>{link.value}</span></a>)}
        <div className="contact-actions">
          <a className="button button-ghost" href={`mailto:${contact.email}`}><Mail size={16} /> {contact.contactButton}</a>
        </div>
      </div>
    </section>
  );
}
