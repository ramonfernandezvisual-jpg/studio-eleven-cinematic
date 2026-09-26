/**
 * Datos de contacto y portada. Son marcadores: sustitúyelos cuando estén
 * los definitivos.
 */
export const site = {
  name: "Studio Eleven Cinematic",
  /** Marcador EMAIL: sustituir por la dirección de correo */
  email: "EMAIL",
  /** Marcador WHATSAPP: sustituir por el número con código de país */
  whatsapp: "WHATSAPP",
  /** Marcador RESERVA: sustituir por el enlace de reserva de llamada */
  booking: "RESERVA",
  /**
   * Marcador LOGO_ANIMADO: más adelante, un vídeo del logo animado
   * sustituirá a la imagen del logo en la portada, en el mismo sitio y al
   * mismo tamaño. Mientras sea null se muestra la imagen fija.
   */
  logoAnimado: null as string | null,
};

export function emailHref(): string {
  return site.email === "EMAIL" ? "#contacto" : `mailto:${site.email}`;
}

export function whatsappHref(): string {
  if (site.whatsapp === "WHATSAPP") return "#contacto";
  const digits = site.whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

export function bookingHref(): string {
  return site.booking === "RESERVA" ? "#contacto" : site.booking;
}
