import { useState } from "react";
import { Play } from "lucide-react";
import { resolveEmbed } from "../utils/embed";

export default function MediaBlock({ media = {}, label = "Video preview", tall = false, hoverPlay = false, deferEmbed = false }) {
  const [embedActive, setEmbedActive] = useState(false);
  const hasPreview = Boolean(media.preview);
  const hasThumbnail = Boolean(media.thumbnail);
  const embed = resolveEmbed(media.embedUrl);

  if (embed && !hoverPlay && (!deferEmbed || embedActive)) {
    return (
      <div className={`video-frame embed-frame embed-frame--${embed.ratio} ${tall ? "video-frame--tall" : ""}`}>
        <iframe
          className="embed-player"
          src={embed.src}
          title={`${label} — ${embed.provider}`}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  if (embed) {
    return (
      <div className={`video-frame embed-preview ${tall ? "video-frame--tall" : ""}`}>
        {hasThumbnail ? <img className="case-video" src={media.thumbnail} alt="" loading="lazy" decoding="async" /> : <div className="video-grid" />}
        {deferEmbed && !hoverPlay ? (
          <button className="embed-activate" type="button" onClick={() => setEmbedActive(true)} aria-label={`${label} — ${embed.provider}`}>
            <span className="play-mark"><Play size={24} fill="currentColor" /></span>
          </button>
        ) : <div className="play-mark"><Play size={24} fill="currentColor" /></div>}
        <span>{embed.provider} · {label}</span>
      </div>
    );
  }

  if (hasPreview) {
    return (
      <div className={`video-frame ${tall ? "video-frame--tall" : ""}`}>
        <video
          className="case-video"
          src={media.preview}
          poster={hasThumbnail ? media.thumbnail : undefined}
          muted
          loop
          playsInline
          preload={hoverPlay ? "none" : "metadata"}
          controls={!hoverPlay}
          onMouseEnter={event => hoverPlay && event.currentTarget.play()}
          onMouseLeave={event => {
            if (!hoverPlay) return;
            event.currentTarget.pause();
            event.currentTarget.currentTime = 0;
          }}
        />
      </div>
    );
  }

  if (hasThumbnail) {
    return (
      <div className={`video-frame ${tall ? "video-frame--tall" : ""}`}>
        <img className="case-video" src={media.thumbnail} alt="" loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div className={`video-frame ${tall ? "video-frame--tall" : ""}`}>
      <div className="video-grid" />
      <div className="play-mark"><Play size={24} fill="currentColor" /></div>
      <span>{label}</span>
    </div>
  );
}
