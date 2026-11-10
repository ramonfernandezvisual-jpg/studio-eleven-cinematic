const silencePoster = "/posters/silence-guards-poster.jpg";
const drugstorePoster = "/posters/drugstore-poster.webp";
const wesPoster = "/posters/wes-poster.webp";
const nicoPoster = "/posters/nico-poster.webp";
const barcinoPoster = "/posters/barcino-poster.webp";
const perfectPlanPoster = "/posters/perfect-plan-poster.webp";
import type { Locale } from "@/i18n/translations";
export interface Project {
  id: string;
  title: string;
  tag: Record<Locale, string>;
  format: "horizontal" | "vertical";
  videoUrl: string;
  poster?: string;
}
export const TRAILER_FULL_URL = "";
export const projects: Project[] = [
  { id: "silence-guards", title: "THE SILENCE GUARDS", tag: { es: "Spot · Perfume", en: "Ad · Perfume" }, format: "vertical", videoUrl: "https://youtube.com/shorts/AgrxLTd_xc4", poster: silencePoster },
  { id: "drugstore", title: "Drugstore", tag: { es: "Spot · Homenaje a Levi's", en: "Ad · Levi's homage" }, format: "horizontal", videoUrl: "https://youtu.be/TAa3UVsvlIM", poster: drugstorePoster },
  { id: "barcino", title: "Barcino Nº 29", tag: { es: "Spot · Perfume", en: "Ad · Perfume" }, format: "horizontal", videoUrl: "https://youtu.be/4Y3LLGwufhk", poster: barcinoPoster },
  { id: "nico", title: "Nico and the Roof Monster", tag: { es: "Corto animado", en: "Animated short" }, format: "horizontal", videoUrl: "https://youtu.be/5uAEyZtJidI", poster: nicoPoster },
  { id: "avatar-01", title: "Avatar 01", tag: { es: "Personaje", en: "Character" }, format: "vertical", videoUrl: "" },
  { id: "wes", title: "27 | Wes Anderson Style Short Film", tag: { es: "Corto", en: "Short film" }, format: "horizontal", videoUrl: "https://youtu.be/Z6_exORVQ-A", poster: wesPoster },
  { id: "moda-arquitectura", title: "The perfect plan", tag: { es: "Fashion film", en: "Fashion film" }, format: "horizontal", videoUrl: "https://youtu.be/Q1xH6IFF5kc", poster: perfectPlanPoster },
];
export function youtubeId(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") return /^[\w-]{11}$/.test(parsed.pathname.slice(1)) ? parsed.pathname.slice(1) : "";
    if (!["youtube.com", "www.youtube.com", "m.youtube.com", "youtube-nocookie.com", "www.youtube-nocookie.com"].includes(parsed.hostname)) return "";
    const id = parsed.searchParams.get("v") || parsed.pathname.match(/^\/(?:shorts|embed)\/([\w-]{11})(?:\/|$)/)?.[1] || "";
    return /^[\w-]{11}$/.test(id) ? id : "";
  } catch { return ""; }
}
