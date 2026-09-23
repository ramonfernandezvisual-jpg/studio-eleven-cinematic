/**
 * Datos de contacto. Son marcadores: sustitúyelos cuando estén los definitivos.
 */
export const site = {
  name: "Studio Eleven Cinematic",
  /** Marcador EMAIL */
  email: "EMAIL",
  /** Marcador WHATSAPP */
  whatsapp: "WHATSAPP",
  /** Marcador RESERVA */
  booking: "RESERVA",
};

export function emailHref() {
  return site.email === "EMAIL" ? undefined : `mailto:${site.email}`;
}

export function whatsappHref() {
  if (site.whatsapp === "WHATSAPP") return undefined;
  const digits = site.whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

export function bookingHref() {
  return site.booking === "RESERVA" ? undefined : site.booking;
}
