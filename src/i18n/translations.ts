export type Locale = "es" | "en";
export const LANGUAGE_KEY = "studio-eleven-language";
export function resolveLocale(saved: string | null, browser: string): Locale {
  if (saved === "es" || saved === "en") return saved;
  return browser.toLowerCase().startsWith("es") ? "es" : "en";
}
export const translations = {
  es: {
    meta: { title: "Studio Eleven Cinematic — Historias que se recuerdan", description: "Cortos, vídeos de marca y personajes con atmósfera de cine. Studio Eleven Cinematic, estudio creativo independiente." },
    brand: "Studio Eleven Cinematic",
    nav: { aria: "Navegación principal", inicio: "Inicio", proyectos: "Proyectos", estudio: "Estudio", contacto: "Contacto", language: "Seleccionar idioma", es: "Español", en: "Inglés" },
    hero: { aria: "Portada", title: "Historias que se recuerdan.", sub: "Cortos, vídeos de marca y personajes con atmósfera de cine.", cta: "Hablemos", projects: "Ver proyectos", trailer: "Ver trailer completo", scroll: "Desliza" },
    projects: { title: "Proyectos", sub: "Cada pieza cuenta una historia.", play: "Reproducir", close: "Cerrar vídeo", viewer: "Visor de vídeo" },
    estudio: { label: "Estudio", title: "Cada detalle, pensado para que tu negocio se vea, se entienda y se recuerde.", p1: "Studio Eleven Cinematic es un estudio creativo independiente dedicado al contenido audiovisual y a la narrativa visual. Creamos contenido cinematográfico para marcas y negocios, desde el primer concepto hasta el montaje final.", p2: "Cuidamos la atmósfera, el ritmo y cada detalle para que haya un antes y un después en cómo se percibe tu negocio.", services: ["Spots y vídeos de marca: piezas que cuentan quién sois y se quedan en la memoria.", "Cortos y animación: historias con guion, dirección de arte y montaje.", "Personajes y avatares: caras propias para vuestra marca y vuestro contenido.", "Moda y arquitectura: espacios y prendas contados con una sola mirada."] },
    proceso: { label: "Cómo trabajamos", title: "Cada pieza pasa por el mismo cuidado: idea, guion, dirección de arte y edición final.", text: "Cada proyecto empieza con una conversación y tiene su propio plazo y su propia dinámica." },
    equipo: { label: "Equipo", people: [{ name: "Erica Santos", role: "Dirección creativa" }] },
    contacto: { label: "Contacto", question: "¿Tienes una historia que contar?", title: "Creemos algo que merezca ser visto.", text: "Cuéntanos tu idea, dónde se publicará y para cuándo la necesitas. Te respondemos con una propuesta.", reserva: "Reservar una llamada", whatsapp: "WhatsApp", email: "Correo" },
    social: { youtube: "Visitar Studio Eleven Cinematic en YouTube", instagram: "Visitar Studio Eleven Cinematic en Instagram" },
    footer: { copy: "© 2026 Studio Eleven Cinematic", tagline: "Atmósfera · Movimiento · Narrativa visual" },
    errors: { notFound: "La página que buscas no existe.", home: "Volver al inicio", failed: "Esta página no se ha cargado", retry: "Reintentar" },
  },
  en: {
    meta: { title: "Studio Eleven Cinematic — Stories that stay with you", description: "Short films, brand videos and characters with a cinematic atmosphere. Studio Eleven Cinematic, an independent creative studio." },
    brand: "Studio Eleven Cinematic",
    nav: { aria: "Main navigation", inicio: "Home", proyectos: "Projects", estudio: "Studio", contacto: "Contact", language: "Select language", es: "Spanish", en: "English" },
    hero: { aria: "Cover", title: "Stories that stay with you.", sub: "Short films, brand videos and characters with a cinematic atmosphere.", cta: "Let's talk", projects: "See projects", trailer: "Watch full trailer", scroll: "Scroll" },
    projects: { title: "Projects", sub: "Every piece tells a story.", play: "Play", close: "Close video", viewer: "Video viewer" },
    estudio: { label: "Studio", title: "Every detail, considered so your business is seen, understood and remembered.", p1: "Studio Eleven Cinematic is an independent creative studio dedicated to audiovisual content and visual storytelling. We create cinematic content for brands and businesses, from the first concept to the final edit.", p2: "We shape the atmosphere, the rhythm and every detail to transform the way your business is perceived.", services: ["Ads and brand videos: pieces that tell who you are and stay in the mind.", "Short films and animation: stories with script, art direction and editing.", "Characters and avatars: faces of your own for your brand and your content.", "Fashion and architecture: spaces and garments told with a single vision."] },
    proceso: { label: "How we work", title: "Every piece receives the same care: concept, script, art direction and final edit.", text: "Every project starts with a conversation and has its own timeline and way of working." },
    equipo: { label: "Team", people: [{ name: "Erica Santos", role: "Creative direction" }] },
    contacto: { label: "Contact", question: "Got a story to tell?", title: "Let's create something worth seeing.", text: "Tell us your idea, where it will be published and when you need it. We'll get back to you with a proposal.", reserva: "Book a call", whatsapp: "WhatsApp", email: "Email" },
    social: { youtube: "Visit Studio Eleven Cinematic on YouTube", instagram: "Visit Studio Eleven Cinematic on Instagram" },
    footer: { copy: "© 2026 Studio Eleven Cinematic", tagline: "Atmosphere · Movement · Visual storytelling" },
    errors: { notFound: "The page you are looking for does not exist.", home: "Back to home", failed: "This page could not be loaded", retry: "Try again" },
  },
};
export type Dictionary = (typeof translations)[Locale];
