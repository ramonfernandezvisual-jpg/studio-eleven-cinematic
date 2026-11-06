import silencePoster from "@/assets/silence-guards-poster.jpg.asset.json";
import drugstorePoster from "@/assets/drugstore-poster.webp.asset.json";
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
  { id: "silence-guards", title: "THE SILENCE GUARDS", tag: { es: "Spot · Perfume", en: "Ad · Perfume" }, format: "vertical", videoUrl: "https://youtube.com/shorts/AgrxLTd_xc4", poster: silencePoster.url },
  { id: "drugstore", title: "Drugstore", tag: { es: "Spot · Proyecto personal", en: "Ad · Personal project" }, format: "horizontal", videoUrl: "https://youtu.be/TAa3UVsvlIM", poster: drugstorePoster.url },
  { id: "wes", title: "Wes", tag: { es: "Corto", en: "Short film" }, format: "horizontal", videoUrl: "https://youtu.be/Z6_exORVQ-A" },
  { id: "nico", title: "Nico y el monstruo del tejado", tag: { es: "Corto animado", en: "Animated short" }, format: "horizontal", videoUrl: "" },
  { id: "avatar-01", title: "Avatar 01", tag: { es: "Personaje", en: "Character" }, format: "vertical", videoUrl: "" },
  { id: "barcino", title: "Barcino Nº 29", tag: { es: "Spot · Perfume", en: "Ad · Perfume" }, format: "horizontal", videoUrl: "" },
  { id: "moda-arquitectura", title: "Moda y arquitectura", tag: { es: "Moda y arquitectura", en: "Fashion & architecture" }, format: "horizontal", videoUrl: "" },
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
