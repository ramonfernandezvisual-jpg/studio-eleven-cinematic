import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroVideo } from "@/components/HeroVideo";
import { Reveal } from "@/components/Reveal";
import { t } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Eleven Cinematic — Vídeo cinematográfico con IA para marcas" },
      {
        name: "description",
        content:
          "Estudio de vídeo cinematográfico creado con inteligencia artificial para marcas. Spots, producto, avatares y redes sociales.",
      },
      { property: "og:title", content: "Studio Eleven Cinematic" },
      {
        property: "og:description",
        content: "Vídeo cinematográfico hecho con inteligencia artificial para marcas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center px-5">
        <HeroVideo />
        <div className="relative z-10 max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            {t.home.heroTitle}
          </h1>
          <p className="mt-6 text-base text-secondary-text md:text-xl">{t.home.heroSubtitle}</p>
        </div>
        <span className="absolute bottom-10 z-10 text-[11px] tracking-[0.35em] text-secondary-text">
          {t.home.scroll.toUpperCase()}
        </span>
      </section>

      {[
        { title: t.home.s1Title, body: t.home.s1Body },
        { title: t.home.s2Title, body: t.home.s2Body },
        { title: t.home.s3Title, body: t.home.s3Body },
      ].map((s) => (
        <section
          key={s.title}
          className="flex min-h-screen items-center justify-center border-t border-hairline px-5"
        >
          <Reveal className="max-w-2xl text-center">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-6xl">
              {s.title}
            </h2>
            <p className="mt-6 text-base text-secondary-text md:text-lg">{s.body}</p>
          </Reveal>
        </section>
      ))}

      <section className="flex min-h-screen items-center justify-center border-t border-hairline px-5">
        <Reveal className="max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-6xl">{t.home.ctaTitle}</h2>
          <p className="mt-6 text-base text-secondary-text md:text-lg">{t.home.ctaBody}</p>
          <Link
            to="/contacto"
            className="mt-10 inline-block border-b border-hairline pb-1 text-sm text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            {t.home.ctaLink}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
