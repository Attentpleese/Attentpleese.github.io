import { ExternalLink, X } from "lucide-react";
import MediaBlock from "./MediaBlock";

export default function CaseModal({ labels, item, onClose }) {
  const detailRows = [
    [labels.shortDescription, item.description],
    [labels.role, item.role],
    [labels.result, item.result],
    [labels.context, item.context],
    [labels.contentAngle, item.contentAngle],
    [labels.execution, item.execution],
    [labels.learning, item.learning]
  ];

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" onClick={onClose}>
      <section className="case-modal" onClick={event => event.stopPropagation()}>
        <button className="close-button" aria-label={labels.close} type="button" onClick={onClose}><X size={20} /></button>
        <div>
          <p className="eyebrow">{labels.kicker}</p>
          <h2>{item.title}</h2>
          <p className="category">{item.category}</p>
          <MediaBlock media={item.media} label={item.previewLabel} />
        </div>
        <div className="detail-grid">
          {detailRows.map(([label, value]) => (
            <article key={label}><span>{label}</span><p>{value}</p></article>
          ))}
        </div>
        {item.metrics?.length > 0 && (
          <div className="metrics-row">
            {item.metrics.map(metric => <span key={metric}>{metric}</span>)}
          </div>
        )}
        {item.media?.statsImage && (
          <figure className="stats-screenshot">
            <img src={item.media.statsImage} alt={labels.statsImageAlt} loading="lazy" />
          </figure>
        )}
        <div className="original-post">
          {item.media?.showOriginalUrl && item.media?.originalUrl ? (
            <a className="button button-primary" href={item.media.originalUrl} target="_blank" rel="noreferrer">
              {labels.originalPost} <ExternalLink size={16} />
            </a>
          ) : (
            <p>{labels.originalOnRequest}</p>
          )}
        </div>
      </section>
    </div>
  );
}
