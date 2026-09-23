export type VideoFormat = "horizontal" | "vertical";

export interface VideoItem {
  /** Código / marcador del vídeo */
  code: string;
  title: string;
  /** Sector o categoría */
  sector: string;
  format: VideoFormat;
  /**
   * Enlace de YouTube. Mientras no exista, se deja el propio código como
   * marcador y la web muestra un recuadro con el código centrado.
   */
  youtube: string;
}

export const videos: VideoItem[] = [
  {
    code: "VIDEO_PORTADA",
    title: "Portada",
    sector: "Portada",
    format: "horizontal",
    youtube: "VIDEO_PORTADA",
  },
  {
    code: "VIDEO_01",
    title: "Belleza y cosmética",
    sector: "Belleza y cosmética",
    format: "horizontal",
    youtube: "VIDEO_01",
  },
  {
    code: "VIDEO_02",
    title: "Clínicas estéticas",
    sector: "Clínicas estéticas",
    format: "horizontal",
    youtube: "VIDEO_02",
  },
  {
    code: "VIDEO_03",
    title: "Producto y e-commerce",
    sector: "Producto y e-commerce",
    format: "horizontal",
    youtube: "VIDEO_03",
  },
  {
    code: "VIDEO_04",
    title: "Campañas",
    sector: "Campañas",
    format: "horizontal",
    youtube: "VIDEO_04",
  },
  {
    code: "VIDEO_05",
    title: "Avatares con IA",
    sector: "Avatares con IA",
    format: "vertical",
    youtube: "VIDEO_05",
  },
  {
    code: "VIDEO_06",
    title: "Redes sociales",
    sector: "Redes sociales",
    format: "vertical",
    youtube: "VIDEO_06",
  },
];

export function getVideo(code: string): VideoItem | undefined {
  return videos.find((v) => v.code === code);
}

export const reelVideos = videos.filter((v) => v.code !== "VIDEO_PORTADA");

/**
 * Acepta youtube.com/watch?v=, youtu.be/, /shorts/ y /embed/.
 * Devuelve null cuando el enlace sigue siendo un marcador.
 */
export function youtubeId(url: string): string | null {
  if (!url) return null;
  if (/^VIDEO_[A-Z0-9_]+$/.test(url.trim())) return null;
  const direct = url.trim().match(/^[\w-]{11}$/);
  if (direct) return direct[0];
  try {
    const u = new URL(url.trim());
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return u.pathname.slice(1).split("/")[0] ?? null;
    if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      const v = u.searchParams.get("v");
      if (v) return v;
      const m = u.pathname.match(/\/(shorts|embed|live)\/([\w-]+)/);
      if (m) return m[2];
    }
  } catch {
    return null;
  }
  return null;
}
