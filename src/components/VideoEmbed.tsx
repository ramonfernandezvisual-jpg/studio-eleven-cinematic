import { useState } from "react";
import { youtubeId, type VideoItem } from "@/config/videos";
import { t } from "@/i18n";

interface VideoEmbedProps {
  video: VideoItem;
}

export function VideoEmbed({ video }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const id = youtubeId(video.youtube);
  const ratio = video.format === "vertical" ? "9 / 16" : "16 / 9";

  if (!id) {
    return (
      <div
        className="flex w-full items-center justify-center border border-hairline bg-background"
        style={{ aspectRatio: ratio }}
        role="img"
        aria-label={`${t.videoPlaceholder}: ${video.code}`}
      >
        <span className="text-xs tracking-[0.3em] text-muted-foreground">{video.code}</span>
      </div>
    );
  }

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        aria-label={`${t.play}: ${video.title}`}
        className="group relative block w-full overflow-hidden border border-hairline bg-background"
        style={{ aspectRatio: ratio }}
      >
        <img
          src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/60 backdrop-blur-sm transition-colors duration-300 group-hover:border-accent">
            <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-current text-foreground">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </button>
    );
  }

  return (
    <div className="w-full border border-hairline" style={{ aspectRatio: ratio }}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
