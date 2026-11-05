import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Instagram, Play, Youtube } from "lucide-react";
import logoAsset from "@/assets/logo-studio-eleven-sin-fondo-brillante.png.asset.json";
import { Button } from "@/components/ui/button";
import { VideoViewer, type VideoSelection } from "@/components/VideoViewer";
import { projects, TRAILER_FULL_URL, youtubeId } from "@/data/projects";
import { useLanguage } from "@/i18n/language";
import { translations } from "@/i18n/translations";
import { site } from "@/config/site";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: translations.es.meta.title },
    { name: "description", content: translations.es.meta.description },
    { property: "og:title", content: translations.es.meta.title },
    { property: "og:description", content: translations.es.meta.description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Index,
});
const trailerFiles = import.meta.glob("/public/*.mp4");
const hasTrailer = "/public/trailer.mp4" in trailerFiles;
function SocialLinks() {
  const { t } = useLanguage();
  return <div className="social-links">
    <Button asChild variant="ghost" size="icon"><a href="https://www.youtube.com/@ElevenStudioCinematic" target="_blank" rel="noopener noreferrer" aria-label={t.social.youtube} title={t.social.youtube}><Youtube /></a></Button>
    <Button asChild variant="ghost" size="icon"><a href="https://www.instagram.com/studioelevencinematic" target="_blank" rel="noopener noreferrer" aria-label={t.social.instagram} title={t.social.instagram}><Instagram /></a></Button>
  </div>;
}
function Index() {
  const { t, locale, changeLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [video, setVideo] = useState<VideoSelection | null>(null);
  const hero = useRef<HTMLElement>(null);
  const backgroundVideo = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    document.title = t.meta.title;
    for (const [selector, value] of [["meta[name='description']", t.meta.description], ["meta[property='og:title']", t.meta.title], ["meta[property='og:description']", t.meta.description]] as const) {
      document.querySelector(selector)?.setAttribute("content", value);
    }
  }, [t]);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      hero.current?.style.setProperty("--parallax", motion.matches ? "0px" : `${Math.min(y * 0.1, 80)}px`);
      hero.current?.style.setProperty("--scroll-opacity", motion.matches ? "1" : String(Math.max(0, 1 - y / 180)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const onMotion = () => {
      if (motion.matches) backgroundVideo.current?.pause();
      else backgroundVideo.current?.play().catch(() => {});
      update();
    };
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    update(); onMotion();
    window.addEventListener("scroll", onScroll, { passive: true });
    motion.addEventListener("change", onMotion);
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); motion.removeEventListener("change", onMotion); cancelAnimationFrame(frame); };
  }, []);
  return <>
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <a href="#inicio" className="brand" aria-label={t.brand}><img src={logoAsset.url} alt={t.brand} width={640} height={640} /></a>
      <nav className="nav" aria-label={t.nav.aria}>
        <div className="nav-pages"><a href="#inicio">{t.nav.inicio}</a><a href="#proyectos">{t.nav.proyectos}</a><a href="#estudio">{t.nav.estudio}</a><a href="#contacto">{t.nav.contacto}</a></div>
        <div className="language-switch" role="group" aria-label={t.nav.language}>
          <Button variant="ghost" size="sm" aria-label={t.nav.es} aria-pressed={locale === "es"} onClick={() => changeLocale("es")}>ES</Button><span aria-hidden="true">|</span><Button variant="ghost" size="sm" aria-label={t.nav.en} aria-pressed={locale === "en"} onClick={() => changeLocale("en")}>EN</Button>
        </div>
        <Button asChild className="btn nav-cta"><a href="#contacto">{t.hero.cta}</a></Button>
      </nav>
    </header>
    <main>
      <section ref={hero} id="inicio" className="hero" aria-label={t.hero.aria}>
        <div className="hero-background">{hasTrailer && <video ref={backgroundVideo} src="/trailer.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" onError={(event) => { event.currentTarget.hidden = true; }} />}</div>
        <div className="hero-shade" />
        <div className="hero-text">
          <h1 className="h1 hero-enter">{t.hero.title}</h1>
          <p className="lead muted hero-enter hero-delay-1">{t.hero.sub}</p>
          <div className="actions hero-enter hero-delay-2"><Button asChild className="btn"><a href="#contacto">{t.hero.cta}</a></Button><Button asChild variant="link" className="link"><a href="#proyectos">{t.hero.projects}<ArrowUpRight /></a></Button></div>
          {youtubeId(TRAILER_FULL_URL) && <Button variant="ghost" className="trailer-link hero-enter hero-delay-2" onClick={() => setVideo({ title: t.hero.trailer, videoUrl: TRAILER_FULL_URL, format: "horizontal" })}><Play />{t.hero.trailer}</Button>}
        </div>
        <a href="#proyectos" className="scroll-cue"><span>{t.hero.scroll}</span><ArrowDown aria-hidden="true" /></a>
      </section>
      <section id="proyectos" className="sec projects-section">
        <div className="wrap">
          <div className="sec-head reveal"><h2 className="h2">{t.projects.title}</h2><p className="muted">{t.projects.sub}</p></div>
          <div className="project-grid">
            {projects.map((project) => {
              const id = youtubeId(project.videoUrl);
              const tag = project.tag[locale];
              const image = project.poster || (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "");
              const face = <>{image ? <img src={image} alt={project.title} loading="lazy" decoding="async" /> : <div className="project-placeholder"><span>{project.title}</span><span className="label">{tag}</span></div>}{id && <span className="project-play"><Play aria-hidden="true" /></span>}</>;
              return <article key={project.id} className={`project ${project.format} reveal`}>
                {id ? <Button variant="ghost" className="project-visual" aria-label={`${t.projects.play} ${project.title}`} onClick={() => setVideo(project)}>{face}</Button> : <div className="project-visual">{face}</div>}
                <div className="project-caption"><h3>{project.title}</h3><p className="muted">{tag}</p></div>
              </article>;
            })}
          </div>
          <div className="gallery-action reveal"><Button asChild className="btn"><a href="#contacto">{t.hero.cta}</a></Button></div>
        </div>
      </section>
      <section id="estudio" className="sec"><div className="wrap reveal"><span className="label">{t.estudio.label}</span><div className="two"><h2 className="h2">{t.estudio.title}</h2><div className="col"><p className="muted">{t.estudio.p1}</p><p className="muted">{t.estudio.p2}</p><div className="rows">{t.estudio.services.map((service) => { const [title, ...description] = service.split(": "); return <div className="row" key={title}><span className="lead">{title}</span><span className="detail">{description.join(": ")}</span></div>; })}</div></div></div></div></section>
      <section id="proceso" className="sec cont" aria-label={t.proceso.label}><div className="wrap reveal"><span className="label">{t.proceso.label}</span><h2 className="h2 process-title">{t.proceso.title}</h2><p className="muted process-text">{t.proceso.text}</p></div></section>
      <section id="equipo" className="sec" aria-label={t.equipo.label}><div className="wrap reveal"><span className="label">{t.equipo.label}</span><div className="team">{t.equipo.people.map((person) => <div className="person" key={person.name}><span className="name">{person.name}</span><span className="label">{person.role}</span></div>)}</div></div></section>
      <section id="contacto" className="sec contact"><div className="wrap reveal"><span className="label">{t.contacto.label}</span><h2 className="h2 contact-question">{t.contacto.question}</h2><h3 className="contact-title">{t.contacto.title}</h3><p className="muted contact-text">{t.contacto.text}</p><div className="actions contact-actions"><Button asChild className="btn"><a href={site.reserva}>{t.contacto.reserva}</a></Button><Button asChild variant="link" className="link"><a href={site.whatsapp}>{t.contacto.whatsapp}<ArrowUpRight /></a></Button></div><p className="contact-email muted">{t.contacto.email} <a href={`mailto:${site.email}`} className="mail">{site.email}</a></p><SocialLinks /></div></section>
    </main>
    <footer className="footer wrap"><div className="footer-brand"><span className="footer-name">{t.brand}</span><span>{t.footer.copy}</span></div><SocialLinks /><span className="footer-tagline">{t.footer.tagline}</span></footer>
    <VideoViewer video={video} onClose={() => setVideo(null)} />
  </>;
}
