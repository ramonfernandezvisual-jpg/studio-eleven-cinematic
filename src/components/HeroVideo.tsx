import { getVideo, youtubeId } from "@/config/videos";
import emblem from "@/assets/logo-emblema-1600.webp.asset.json";
import { t } from "@/i18n";

export function HeroVideo() {
  const video = getVideo("VIDEO_PORTADA");
  const id = video ? youtubeId(video.youtube) : null;

  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={emblem.url}
          alt={t.estudio.emblemAlt}
          className="w-28 opacity-25 md:w-36"
          loading="eager"
        />
      </div>
      {id ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&rel=0&modestbranding=1&showinfo=0`}
          title={video?.title ?? "Portada"}
          allow="autoplay; encrypted-media"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
        />
      ) : null}
      <div className="absolute inset-0 bg-black/45" />
    </div>
  );
}
