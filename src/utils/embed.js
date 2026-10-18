const safeId = value => /^[a-zA-Z0-9_-]+$/.test(value || "");

export function resolveEmbed(rawUrl) {
  if (!rawUrl) return null;

  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;

  const host = url.hostname.toLowerCase();
  const parts = url.pathname.split("/").filter(Boolean);

  if (["youtube.com", "www.youtube.com", "m.youtube.com", "youtube-nocookie.com", "www.youtube-nocookie.com", "youtu.be"].includes(host)) {
    const id = host === "youtu.be" ? parts[0] : parts[0] === "watch" ? url.searchParams.get("v") : ["shorts", "live", "embed"].includes(parts[0]) ? parts[1] : null;
    if (safeId(id)) return { src: `https://www.youtube-nocookie.com/embed/${id}`, provider: "YouTube", ratio: "wide" };
  }

  if (["vimeo.com", "www.vimeo.com", "player.vimeo.com"].includes(host)) {
    const id = parts.find(part => /^\d+$/.test(part));
    if (id) {
      const hash = url.searchParams.get("h");
      const suffix = hash && safeId(hash) ? `?h=${hash}` : "";
      return { src: `https://player.vimeo.com/video/${id}${suffix}`, provider: "Vimeo", ratio: "wide" };
    }
  }

  if (["instagram.com", "www.instagram.com"].includes(host) && ["p", "reel", "tv"].includes(parts[0]) && safeId(parts[1])) {
    return { src: `https://www.instagram.com/${parts[0]}/${parts[1]}/embed/`, provider: "Instagram", ratio: "portrait" };
  }

  if (["tiktok.com", "www.tiktok.com", "m.tiktok.com"].includes(host)) {
    const videoIndex = parts.indexOf("video");
    const id = parts[0] === "player" && parts[1] === "v1" ? parts[2] : videoIndex >= 0 ? parts[videoIndex + 1] : null;
    if (/^\d+$/.test(id || "")) return { src: `https://www.tiktok.com/player/v1/${id}`, provider: "TikTok", ratio: "portrait" };
  }

  if (["facebook.com", "www.facebook.com", "m.facebook.com"].includes(host) && parts.includes("videos")) {
    return { src: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url.href)}&show_text=false`, provider: "Facebook", ratio: "wide" };
  }

  if (["loom.com", "www.loom.com"].includes(host) && ["share", "embed"].includes(parts[0]) && safeId(parts[1])) {
    return { src: `https://www.loom.com/embed/${parts[1]}`, provider: "Loom", ratio: "wide" };
  }

  // Other providers work when their own HTTPS iframe URL is supplied.
  if (["embed", "player"].some(segment => parts.includes(segment)) || host.startsWith("player.")) {
    return { src: url.href, provider: host.replace(/^www\./, ""), ratio: "wide" };
  }

  return null;
}
