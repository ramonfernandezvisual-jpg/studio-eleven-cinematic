/** Textos en español. Para el inglés, crea en.ts con la misma estructura. */
export const es = {
  meta: {
    title: "Studio Eleven Cinematic",
    description: "Contenido cinematográfico para la web y las redes de tu negocio.",
  },
  brand: "Studio Eleven Cinematic",
  nav: { aria: "Navegación principal", inicio: "Inicio", proyectos: "Proyectos", estudio: "Estudio", contacto: "Contacto" },
  hero: {
    aria: "Portada",
    title: "Contenido cinematográfico para la web y las redes de tu negocio.",
    cta: "Hablemos",
    link: "Ver proyectos por sector",
  },
  sectores: {
    label: "Proyectos por sector",
    title: "Encuentra tu sector.",
    text: "Cada sector tiene su pieza horizontal para la web y su versión vertical para las redes.",
    tabsAria: "Sectores",
    proximamente: "Próximamente",
    reproducir: "Reproducir",
  },
  estudio: {
    label: "Estudio",
    title: "Cada detalle, pensado para que tu negocio se vea, se entienda y se recuerde.",
    p1: "Studio Eleven Cinematic es un estudio creativo independiente dedicado al contenido audiovisual y a la narrativa visual. Creamos contenido cinematográfico para marcas y negocios, desde el primer concepto hasta el montaje final.",
    p2: "Cuidamos la atmósfera, el ritmo y cada detalle para que haya un antes y un después en cómo se percibe tu negocio.",
    rows: [
      ["Marcas y campañas", "Producto · Moda · Publicidad"],
      ["Contenido para redes", "Instagram · TikTok · YouTube"],
      ["Piezas de marca", "Web · Lanzamientos · Presentaciones"],
      ["Animación", "Personajes de marca"],
    ] as [string, string][],
  },
  proceso: {
    aria: "Cómo trabajamos",
    label: "Cómo trabajamos",
    title: "Cada pieza pasa por el mismo cuidado: idea, guion, dirección de arte y edición final.",
    text: "Cada proyecto empieza con una conversación y tiene su propio plazo y su propia dinámica.",
  },
  equipo: {
    aria: "Equipo",
    label: "Equipo",
    people: [{ name: "Erica Santos", role: "Dirección creativa" }],
  },
  contacto: {
    label: "Contacto",
    title: "Creemos algo que merezca ser visto.",
    text: "Cuéntanos qué tienes en mente, dónde se va a publicar y para cuándo lo necesitas. Prepararemos una propuesta a la medida de tu proyecto.",
    reserva: "Reservar una llamada",
    whatsapp: "WhatsApp",
    escribenos: "Escríbenos a",
  },
  footer: {
    copy: "© 2026 Studio Eleven Cinematic",
    tagline: "Atmósfera · Movimiento · Narrativa visual",
  },
  sectorList: {
    clinicas: { name: "Clínicas estéticas", text: "Piezas que muestran tu clínica y explican tus tratamientos con calma, para generar confianza antes de la primera cita.", htitle: "Pieza de marca", vtitle: "Vertical" },
    belleza: { name: "Belleza y cosmética", text: "Campañas de producto para tu marca, tu tienda y tus redes.", htitle: "Cosmética", vtitle: "Vertical" },
    wellness: { name: "Wellness y spa", text: "La atmósfera de tu espacio y de tus rituales, para la web y las redes.", htitle: "Pieza de marca", vtitle: "Vertical" },
    moda: { name: "Moda", text: "Tus colecciones en movimiento, en formato horizontal y vertical.", htitle: "Pieza de marca", vtitle: "Vertical" },
    restauracion: { name: "Restauración", text: "Contenido constante para tus redes y una pieza que transmite la experiencia de tu mesa.", htitle: "Pieza de marca", vtitle: "Vertical" },
    hoteles: { name: "Hoteles", text: "La experiencia de tu hotel antes de que llegue el huésped.", htitle: "Pieza de marca", vtitle: "Vertical" },
    bebidas: { name: "Bebidas premium", text: "Vino, café, cerveza y destilados, del origen a la copa, para campañas y redes.", htitle: "Calaca Viva", vtitle: "Vertical" },
    nautica: { name: "Náutica y yates", text: "Tus embarcaciones y la experiencia a bordo, con la estética del lujo.", htitle: "Pieza de marca", vtitle: "Vertical" },
  },
};

export type Dictionary = typeof es;
