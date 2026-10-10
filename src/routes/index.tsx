import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo-studio-eleven-transparente.png";
import { t } from "@/i18n";
import { SECTORES, ytId, type SectorId } from "@/config/videos";
import { site } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
      { property: "og:title", content: t.meta.title },
      { property: "og:description", content: t.meta.description },
      { property: "og:type", content: "website" },
      // DOMINIO: sustituir por el dominio definitivo
      { property: "og:image", content: `${site.dominio}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STARTS = [18.0, 20.6, 23.1, 25.7, 28.3, 30.9, 33.4, 36.0, 38.6, 41.1, 43.7, 46.3, 48.9, 51.4];
const ENDS = [26.6, 29.1, 31.7, 34.3, 36.9, 39.4, 42.0, 44.6, 47.1, 49.7, 52.3, 54.9, 57.4, 60.0];

function PlayIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M2 1.5 L12.5 8 L2 14.5 Z"></path>
    </svg>
  );
}

function Player({ url, title, kind }: { url: string; title: string; kind: "h" | "v" }) {
  const [playing, setPlaying] = useState(false);
  const id = ytId(url);
  return (
    <div className={`player ${kind}`}>
      {!id ? (
        <div className="ph">
          <span className="ph-title">{title}</span>
          <span className="label">{t.sectores.proximamente}</span>
        </div>
      ) : playing ? (
        <iframe
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title={title}
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
        />
      ) : (
        <>
          <img className="thumb" alt={title} loading="lazy" src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} />
          <button className="play" type="button" aria-label={`${t.sectores.reproducir} ${title}`} onClick={() => setPlaying(true)}>
            <PlayIcon />
          </button>
        </>
      )}
    </div>
  );
}

function Index() {
  const [active, setActive] = useState<SectorId>(SECTORES[0].id);
  const s = SECTORES.find((x) => x.id === active) ?? SECTORES[0];
  const txt = t.sectorList[s.id];
  const words = t.estudio.title.split(" ");

  return (
    <>
      <section id="inicio" className="hero" aria-label={t.hero.aria}>
        <div className="hero-logo">
          {/* LOGO_ANIMADO: el vídeo del logo animado sustituirá a esta imagen, en el mismo sitio y al mismo tamaño */}
          {site.logoAnimado ? (
            <video src={site.logoAnimado} autoPlay muted loop playsInline aria-label={t.brand} style={{ width: 280, height: 280, display: "block" }} />
          ) : (
            <img src={logo} alt={t.brand} />
          )}
        </div>
        <header className="header">
          <a href="#inicio" className="brand">{t.brand}</a>
          <nav className="nav" aria-label={t.nav.aria}>
            <a href="#inicio">{t.nav.inicio}</a>
            <a href="#sectores">{t.nav.proyectos}</a>
            <a href="#estudio">{t.nav.estudio}</a>
            <a href="#contacto">{t.nav.contacto}</a>
          </nav>
        </header>
        <div className="hero-text">
          <h1 className="h1"><span className="l">{t.hero.title1}</span> <span className="l">{t.hero.title2}</span></h1>
          <p className="lead muted">{t.hero.sub}</p>
          <div className="actions">
            <a className="btn" href="#contacto">{t.hero.cta}</a>
            <a className="link" href="#sectores">{t.hero.link}<span className="arr">›</span></a>
          </div>
        </div>
        <div className="cue" aria-hidden="true"><div></div></div>
      </section>

      <section id="sectores" className="sec">
        <div className="wrap">
          <div className="sec-head reveal">
            <div className="stack">
              <span className="label">{t.sectores.label}</span>
              <h2 className="h2">{t.sectores.title}</h2>
            </div>
            <p className="muted" style={{ maxWidth: 440 }}>{t.sectores.text}</p>
          </div>
          <div id="se-tabs" className="tabs" role="tablist" aria-label={t.sectores.tabsAria}>
            {SECTORES.map((x) => (
              <button key={x.id} className="tab" type="button" role="tab" data-id={x.id} aria-selected={x.id === s.id ? "true" : "false"} onClick={() => setActive(x.id)}>
                {t.sectorList[x.id].name}
              </button>
            ))}
          </div>
          <div className="players zoom">
            <Player key={`${s.id}-h`} url={s.yt} title={txt.htitle} kind="h" />
            <Player key={`${s.id}-v`} url={s.ytv} title={txt.vtitle} kind="v" />
          </div>
          <div className="meta reveal">
            <span id="se-name" className="sub">{txt.name}</span>
            <span id="se-text" className="muted">{txt.text}</span>
          </div>
        </div>
      </section>

      <section id="estudio" className="sec">
        <div className="wrap">
          <span className="label reveal">{t.estudio.label}</span>
          <div className="two">
            <h2 className="h2 lit" aria-label={t.estudio.title}>
              {words.map((w, i) => (
                <span key={i}>
                  <span className="w" style={{ animationRange: `cover ${(STARTS[i] ?? 0).toFixed(1)}% cover ${(ENDS[i] ?? 60).toFixed(1)}%` } as React.CSSProperties}>{w}</span>
                  {i < words.length - 1 ? " " : ""}
                </span>
              ))}
            </h2>
            <div className="col reveal">
              <p className="muted">{t.estudio.p1}</p>
              <p className="muted">{t.estudio.p2}</p>
              <div className="rows">
                {t.estudio.rows.map(([a, b]) => (
                  <div className="row" key={a}><span className="lead">{a}</span><span className="detail">{b}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proceso" className="sec cont" aria-label={t.proceso.aria}>
        <div className="wrap">
          <span className="label reveal">{t.proceso.label}</span>
          <h2 className="h2 reveal" style={{ marginTop: 48, maxWidth: 900 }}>{t.proceso.title}</h2>
          <p className="muted reveal" style={{ marginTop: 24, maxWidth: 620 }}>{t.proceso.text}</p>
        </div>
      </section>

      <section id="equipo" className="sec" aria-label={t.equipo.aria}>
        <div className="wrap">
          <span className="label reveal">{t.equipo.label}</span>
          <div className="team">
            {t.equipo.people.map((p) => (
              <div className="person reveal" key={p.name}><span className="name">{p.name}</span><span className="label">{p.role}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="sec contact" style={{ paddingBottom: 48 }}>
        <div className="wrap">
          <span className="label reveal">{t.contacto.label}</span>
          <h2 className="h2 reveal" style={{ marginTop: 24 }}>{t.contacto.title}</h2>
          <p className="muted reveal" style={{ marginTop: 24, maxWidth: 600 }}>{t.contacto.text}</p>
          <div className="actions reveal" style={{ marginTop: 32, justifyContent: "center" }}>
            {/* RESERVA: sustituir por el enlace de reservas real */}
            <a className="btn" href={site.reserva}>{t.contacto.reserva}</a>
            <a className="link" href={site.whatsapp}>{t.contacto.whatsapp}</a>
          </div>
          <p className="muted reveal" style={{ marginTop: 24, fontSize: 15 }}>
            {t.contacto.escribenos} <a href={`mailto:${site.email}`} className="mail" style={{ userSelect: "all" }}>{site.email}</a>
          </p>
          <footer className="footer">
            <span>{t.footer.copy}</span>
            <img src={logo} alt={t.brand} />
            <span>{t.footer.tagline}</span>
          </footer>
        </div>
      </section>
    </>
  );
}
