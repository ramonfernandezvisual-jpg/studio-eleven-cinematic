/* Enlaces de YouTube: pegar la dirección completa en yt (horizontal) y ytv (vertical).
   Mientras estén vacíos, se ve «Próximamente». */
export const SECTORES = [
  { id: "clinicas", yt: "", ytv: "" },
  { id: "belleza", yt: "", ytv: "" },
  { id: "wellness", yt: "", ytv: "" },
  { id: "moda", yt: "", ytv: "" },
  { id: "restauracion", yt: "", ytv: "" },
  { id: "hoteles", yt: "", ytv: "" },
  { id: "bebidas", yt: "", ytv: "" },
  { id: "nautica", yt: "", ytv: "" },
] as const;

export type SectorId = (typeof SECTORES)[number]["id"];

export function ytId(url: string): string {
  const m = (url || "").match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([A-Za-z0-9_-]{11})/);
  return m?.[1] ?? "";
}
