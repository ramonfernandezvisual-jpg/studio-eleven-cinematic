/**
 * Configuración de vídeos de YouTube.
 *
 * Mientras un vídeo no tenga enlace, su campo `youtube` mantiene el propio
 * código (VIDEO_01, VIDEO_01V…) y la web muestra el recuadro con el código.
 * Cuando tengas el enlace, pégalo en `youtube` (vale youtube.com/watch,
 * youtu.be o Shorts) y se mostrará la miniatura con el botón de reproducción;
 * el reproductor se carga solo al pulsar, desde youtube-nocookie.com.
 */

export interface Sector {
  id: string;
  name: string;
  text: string;
  /** Título del recuadro horizontal */
  htitle: string;
  /** Título del recuadro vertical */
  vtitle: string;
  /** Código del vídeo horizontal (16:9) */
  h: string;
  /** Código del vídeo vertical (9:16) */
  v: string;
  /** Enlace de YouTube del vídeo horizontal (o su código mientras no exista) */
  hYoutube: string;
  /** Enlace de YouTube del vídeo vertical (o su código mientras no exista) */
  vYoutube: string;
}

export const SECTORES: Sector[] = [
  {
    id: "clinicas",
    name: "Clínicas estéticas",
    text: "Piezas que muestran tu clínica y explican tus tratamientos con calma, para generar confianza antes de la primera cita.",
    h: "VIDEO_01",
    v: "VIDEO_01V",
    htitle: "Pieza de marca",
    vtitle: "Vertical",
    hYoutube: "VIDEO_01",
    vYoutube: "VIDEO_01V",
  },
  {
    id: "belleza",
    name: "Belleza y cosmética",
    text: "Campañas de producto para tu marca, tu tienda y tus redes.",
    h: "VIDEO_02",
    v: "VIDEO_02V",
    htitle: "Cosmética",
    vtitle: "Vertical",
    hYoutube: "VIDEO_02",
    vYoutube: "VIDEO_02V",
  },
  {
    id: "wellness",
    name: "Wellness y spa",
    text: "La atmósfera de tu espacio y de tus rituales, para la web y las redes.",
    h: "VIDEO_03",
    v: "VIDEO_03V",
    htitle: "Pieza de marca",
    vtitle: "Vertical",
    hYoutube: "VIDEO_03",
    vYoutube: "VIDEO_03V",
  },
  {
    id: "moda",
    name: "Moda",
    text: "Tus colecciones en movimiento, en formato horizontal y vertical.",
    h: "VIDEO_04",
    v: "VIDEO_04V",
    htitle: "Pieza de marca",
    vtitle: "Vertical",
    hYoutube: "VIDEO_04",
    vYoutube: "VIDEO_04V",
  },
  {
    id: "restauracion",
    name: "Restauración",
    text: "Contenido constante para tus redes y una pieza que transmite la experiencia de tu mesa.",
    h: "VIDEO_05",
    v: "VIDEO_05V",
    htitle: "Pieza de marca",
    vtitle: "Vertical",
    hYoutube: "VIDEO_05",
    vYoutube: "VIDEO_05V",
  },
  {
    id: "hoteles",
    name: "Hoteles",
    text: "La experiencia de tu hotel antes de que llegue el huésped.",
    h: "VIDEO_06",
    v: "VIDEO_06V",
    htitle: "Pieza de marca",
    vtitle: "Vertical",
    hYoutube: "VIDEO_06",
    vYoutube: "VIDEO_06V",
  },
  {
    id: "bebidas",
    name: "Bebidas premium",
    text: "Vino, café, cerveza y destilados, del origen a la copa, para campañas y redes.",
    h: "VIDEO_07",
    v: "VIDEO_07V",
    htitle: "Calaca Viva",
    vtitle: "Vertical",
    hYoutube: "VIDEO_07",
    vYoutube: "VIDEO_07V",
  },
  {
    id: "nautica",
    name: "Náutica y yates",
    text: "Tus embarcaciones y la experiencia a bordo, con la estética del lujo.",
    h: "VIDEO_08",
    v: "VIDEO_08V",
    htitle: "Pieza de marca",
    vtitle: "Vertical",
    hYoutube: "VIDEO_08",
    vYoutube: "VIDEO_08V",
  },
];

/**
 * Acepta youtube.com/watch?v=, youtu.be/, /shorts/ y /embed/.
 * Devuelve null cuando el enlace sigue siendo un marcador (VIDEO_XX).
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
      if (m && m[2]) return m[2];
    }
  } catch {
    return null;
  }
  return null;
}
