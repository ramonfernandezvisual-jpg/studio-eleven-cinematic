import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { VideoSlot } from "@/components/VideoSlot";
import { SECTORES } from "@/config/videos";
import { bookingHref, emailHref, site, whatsappHref } from "@/config/site";
import { locales, t } from "@/i18n";
import logo from "@/assets/logo-studio-eleven-transparente.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
      { property: "og:title", content: t.meta.title },
      { property: "og:description", content: t.meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const SERIF = "Georgia, 'Times New Roman', serif";
const KICKER: React.CSSProperties = {
  fontSize: "10px",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "#8d8982",
};
const HAIRLINE = "1px solid rgba(255, 255, 255, 0.11)";
const WRAP: React.CSSProperties = {
  width: "90%",
  maxWidth: "1296px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
};
const H2: React.CSSProperties = {
  margin: 0,
  fontFamily: SERIF,
  fontSize: "44px",
  fontWeight: 400,
  lineHeight: 1.1,
  letterSpacing: "-0.015em",
};

function HeroLogo() {
  /* Marcador LOGO_ANIMADO: cuando exista el vídeo, sustituye a la imagen
     en el mismo sitio y al mismo tamaño. */
  if (site.logoAnimado) {
    return (
      <video
        src={site.logoAnimado}
        className="se-hero-logo"
        autoPlay
        muted
        loop
        playsInline
        aria-label={t.hero.logoAlt}
        style={{ display: "block" }}
      />
    );
  }
  return (
    <img
      src={logo}
      alt={t.hero.logoAlt}
      className="se-hero-logo"
      style={{ display: "block" }}
    />
  );
}

function Home() {
  const [active, setActive] = useState(SECTORES[0]!.id);
  const sector = SECTORES.find((s) => s.id === active) ?? SECTORES[0]!;

  return (
    <div
      style={{
        width: "100%",
        background: "#050505",
        color: "#f2efe8",
        fontFamily: "Arial, Helvetica, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ============ PORTADA ============ */}
      <section
        id="inicio"
        aria-label={t.hero.aria}
        style={{
          position: "relative",
          height: "760px",
          overflow: "hidden",
          background: "#050505",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "70px",
            boxSizing: "border-box",
          }}
        >
          <HeroLogo />
        </div>
        <header
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "76px",
            boxSizing: "border-box",
            padding: "0 5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(5, 5, 5, 0.58)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <a
            href="#inicio"
            style={{
              fontFamily: SERIF,
              fontSize: "13px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            {t.nav.brand}
          </a>
          <nav
            aria-label={t.nav.mainNav}
            className="se-nav"
            style={{
              display: "flex",
              gap: "34px",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            <a href="#inicio">{t.nav.inicio}</a>
            <a href="#sectores">{t.nav.proyectos}</a>
            <a href="#estudio">{t.nav.estudio}</a>
            <a href="#contacto">{t.nav.contacto}</a>
            {/* Selector de idioma: preparado, oculto hasta que exista /en */}
            {locales.length > 1 && <span>ES / EN</span>}
          </nav>
        </header>
        <div
          style={{
            position: "absolute",
            left: "5%",
            right: "5%",
            bottom: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "40px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "620px" }}>
            <span style={{ ...KICKER, color: "#c9c4ba" }}>{t.hero.kicker}</span>
            <h1
              className="se-hero-title"
              style={{
                margin: 0,
                fontFamily: SERIF,
                fontSize: "40px",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              {t.hero.title}
            </h1>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                gap: "28px",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              <a
                href="#sectores"
                style={{ paddingBottom: "6px", borderBottom: "1px solid rgba(242, 239, 232, 0.6)" }}
              >
                {t.hero.ctaProjects}
              </a>
              <a
                href="#contacto"
                style={{ paddingBottom: "6px", borderBottom: "1px solid rgba(242, 239, 232, 0.25)" }}
              >
                {t.hero.ctaContact}
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            width: "1px",
            height: "56px",
            marginLeft: "-0.5px",
            overflow: "hidden",
            background: "rgba(242, 239, 232, 0.18)",
          }}
        >
          <div className="se-cuedot" style={{ width: "1px", height: "56px", background: "#f2efe8" }} />
        </div>
      </section>

      {/* ============ SECTORES ============ */}
      <section id="sectores" style={{ padding: "110px 0", borderTop: HAIRLINE }}>
        <div style={WRAP}>
          <div
            className="se-split"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "40px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={KICKER}>{t.sectores.kicker}</span>
              <h2 style={H2}>{t.sectores.title}</h2>
            </div>
            <p
              style={{
                margin: 0,
                maxWidth: "440px",
                fontSize: "15px",
                lineHeight: 1.75,
                color: "#8d8982",
              }}
            >
              {t.sectores.intro}
            </p>
          </div>

          <div
            role="tablist"
            aria-label={t.sectores.tabsAria}
            className="se-tabs"
            style={{
              marginTop: "44px",
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              borderBottom: HAIRLINE,
            }}
          >
            {SECTORES.map((s) => {
              const on = s.id === sector.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(s.id)}
                  style={{
                    background: "transparent",
                    border: 0,
                    borderBottom: `1px solid ${on ? "#f2efe8" : "transparent"}`,
                    marginBottom: "-1px",
                    padding: "0 0 14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    color: on ? "#f2efe8" : "#8d8982",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.name}
                </button>
              );
            })}
          </div>

          <div
            className="se-media-grid"
            style={{
              marginTop: "36px",
              display: "grid",
              gridTemplateColumns: "minmax(0, 3.16fr) minmax(0, 1fr)",
              gap: "24px",
              alignItems: "start",
            }}
          >
            <VideoSlot
              code={sector.h}
              title={sector.htitle}
              youtube={sector.hYoutube}
              format="horizontal"
            />
            <VideoSlot
              code={sector.v}
              title={sector.vtitle}
              youtube={sector.vYoutube}
              format="vertical"
            />
          </div>

          <div
            className="se-split"
            style={{
              marginTop: "22px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "40px",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "28px" }}>
              <strong style={{ fontFamily: SERIF, fontSize: "26px", fontWeight: 400 }}>
                {sector.name}
              </strong>
              <span style={{ fontSize: "15px", lineHeight: 1.6, color: "#8d8982" }}>
                {sector.text}
              </span>
            </div>
            <span
              className="se-formats"
              style={{
                fontSize: "9px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8d8982",
                whiteSpace: "nowrap",
              }}
            >
              {t.sectores.formats}
            </span>
          </div>
        </div>
      </section>

      {/* ============ ESTUDIO ============ */}
      <section id="estudio" style={{ padding: "110px 0", borderTop: HAIRLINE }}>
        <div style={WRAP}>
          <span style={KICKER}>{t.estudio.kicker}</span>
          <div
            className="se-estudio-grid"
            style={{
              marginTop: "44px",
              display: "grid",
              gridTemplateColumns: "0.95fr 1.05fr",
              gap: "110px",
              alignItems: "start",
            }}
          >
            <p
              className="se-lead"
              style={{ margin: 0, fontFamily: SERIF, fontSize: "34px", lineHeight: 1.2 }}
            >
              {t.estudio.lead}
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.75, color: "#8d8982" }}>
                {t.estudio.body1}
              </p>
              <p style={{ margin: "20px 0 0", fontSize: "15px", lineHeight: 1.75, color: "#8d8982" }}>
                {t.estudio.body2}
              </p>
              <div style={{ marginTop: "34px", display: "flex", flexDirection: "column" }}>
                {t.estudio.rows.map((r) => (
                  <div
                    key={r.name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      gap: "24px",
                      padding: "15px 0",
                      borderBottom: HAIRLINE,
                    }}
                  >
                    <span style={{ fontFamily: SERIF, fontSize: "20px" }}>{r.name}</span>
                    <span
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#8d8982",
                        textAlign: "right",
                      }}
                    >
                      {r.tags}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESO ============ */}
      <section id="proceso" aria-label={t.proceso.kicker} style={{ padding: "110px 0", borderTop: HAIRLINE }}>
        <div style={WRAP}>
          <span style={KICKER}>{t.proceso.kicker}</span>
          <p
            className="se-lead"
            style={{
              margin: "44px 0 0",
              maxWidth: "900px",
              fontFamily: SERIF,
              fontSize: "34px",
              lineHeight: 1.25,
            }}
          >
            {t.proceso.lead}
          </p>
          <p
            style={{
              margin: "22px 0 0",
              maxWidth: "620px",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "#8d8982",
            }}
          >
            {t.proceso.body}
          </p>
        </div>
      </section>

      {/* ============ EQUIPO ============ */}
      <section id="equipo" aria-label={t.equipo.kicker} style={{ padding: "110px 0", borderTop: HAIRLINE }}>
        <div style={WRAP}>
          <span style={KICKER}>{t.equipo.kicker}</span>
          <div
            className="se-equipo-grid"
            style={{
              marginTop: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "56px",
              alignItems: "end",
            }}
          >
            {t.equipo.members.map((m, i) => (
              <div
                key={m.name}
                className={i === 1 ? "se-equipo-second" : undefined}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  ...(i === 1
                    ? { borderLeft: HAIRLINE, paddingLeft: "56px" }
                    : {}),
                }}
              >
                <span
                  className="se-equipo-name"
                  style={{
                    fontFamily: SERIF,
                    fontSize: "44px",
                    fontWeight: 400,
                    lineHeight: 1.05,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {m.name}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#8d8982",
                  }}
                >
                  {m.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACTO ============ */}
      <section
        id="contacto"
        style={{ padding: "110px 0 56px", borderTop: HAIRLINE, textAlign: "center" }}
      >
        <div style={{ ...WRAP, alignItems: "center" }}>
          <span style={KICKER}>{t.contacto.kicker}</span>
          <h2 style={{ ...H2, margin: "22px 0 0" }}>{t.contacto.title}</h2>
          <p
            style={{
              margin: "24px 0 0",
              maxWidth: "600px",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "#8d8982",
            }}
          >
            {t.contacto.body}
          </p>
          <div
            className="se-contact-links"
            style={{
              marginTop: "34px",
              display: "flex",
              gap: "34px",
              justifyContent: "center",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <a
              href={emailHref()}
              style={{ paddingBottom: "6px", borderBottom: "1px solid rgba(242, 239, 232, 0.5)" }}
            >
              {t.contacto.email}
            </a>
            <a
              href={whatsappHref()}
              style={{ paddingBottom: "6px", borderBottom: "1px solid rgba(242, 239, 232, 0.5)" }}
            >
              {t.contacto.whatsapp}
            </a>
            <a
              href={bookingHref()}
              style={{ paddingBottom: "6px", borderBottom: "1px solid rgba(242, 239, 232, 0.5)" }}
            >
              {t.contacto.booking}
            </a>
          </div>
          <footer
            className="se-footer"
            style={{
              marginTop: "96px",
              width: "100%",
              paddingTop: "24px",
              borderTop: HAIRLINE,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#706c66",
              fontSize: "9px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            <span>{t.footer.rights}</span>
            <img src={logo} alt={t.footer.logoAlt} style={{ width: "88px", height: "88px", display: "block" }} />
            <span>{t.footer.tagline}</span>
          </footer>
        </div>
      </section>
    </div>
  );
}
