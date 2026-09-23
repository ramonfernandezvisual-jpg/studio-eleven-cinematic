import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import emblem from "@/assets/logo-emblema-1600.webp.asset.json";
import { t } from "@/i18n";

export const Route = createFileRoute("/estudio")({
  head: () => ({
    meta: [
      { title: "Estudio — Studio Eleven Cinematic" },
      {
        name: "description",
        content:
          "Un estudio reducido que combina criterio cinematográfico con herramientas generativas de última generación.",
      },
      { property: "og:title", content: "Estudio — Studio Eleven Cinematic" },
      {
        property: "og:description",
        content: "Criterio de estudio clásico con los tiempos de la producción digital.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Estudio,
});

function Estudio() {
  return (
    <div className="px-5 pb-32 pt-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <img
            src={emblem.url}
            alt={t.estudio.emblemAlt}
            className="mx-auto w-28 md:w-40"
            loading="lazy"
          />
          <h1 className="mt-14 text-4xl font-semibold tracking-tight md:text-6xl">
            {t.estudio.title}
          </h1>
          <p className="mt-8 text-lg text-foreground md:text-2xl">{t.estudio.lead}</p>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-10 text-base text-secondary-text md:text-lg">{t.estudio.body1}</p>
          <p className="mt-6 text-base text-secondary-text md:text-lg">{t.estudio.body2}</p>
        </Reveal>
      </div>
    </div>
  );
}
