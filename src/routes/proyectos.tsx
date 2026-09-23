import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { VideoEmbed } from "@/components/VideoEmbed";
import { reelVideos } from "@/config/videos";
import { t } from "@/i18n";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — Studio Eleven Cinematic" },
      {
        name: "description",
        content:
          "Piezas cinematográficas por sector: belleza, clínicas, producto, campañas, avatares con IA y redes sociales.",
      },
      { property: "og:title", content: "Proyectos — Studio Eleven Cinematic" },
      {
        property: "og:description",
        content: "Selección de vídeos cinematográficos creados con inteligencia artificial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Proyectos,
});

function Proyectos() {
  const horizontal = reelVideos.filter((v) => v.format === "horizontal");
  const vertical = reelVideos.filter((v) => v.format === "vertical");

  return (
    <div className="px-5 pb-32 pt-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight md:text-7xl">{t.proyectos.title}</h1>
          <p className="mt-6 max-w-xl text-base text-secondary-text md:text-lg">
            {t.proyectos.intro}
          </p>
        </Reveal>

        <div className="mt-24 space-y-24">
          {horizontal.map((v, i) => (
            <Reveal key={v.code} delay={i * 60}>
              <VideoEmbed video={v} />
              <div className="mt-4 flex items-baseline justify-between">
                <h2 className="text-lg font-semibold md:text-2xl">{v.title}</h2>
                <span className="text-[11px] tracking-[0.25em] text-secondary-text">
                  {t.proyectos.horizontal.toUpperCase()}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-10 sm:grid-cols-2">
          {vertical.map((v, i) => (
            <Reveal key={v.code} delay={i * 60}>
              <VideoEmbed video={v} />
              <div className="mt-4 flex items-baseline justify-between">
                <h2 className="text-lg font-semibold md:text-xl">{v.title}</h2>
                <span className="text-[11px] tracking-[0.25em] text-secondary-text">
                  {t.proyectos.vertical.toUpperCase()}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
