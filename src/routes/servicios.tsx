import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { t } from "@/i18n";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Studio Eleven Cinematic" },
      {
        name: "description",
        content:
          "Spots de marca, producto y e-commerce, avatares con IA, redes sociales, dirección creativa y postproducción.",
      },
      { property: "og:title", content: "Servicios — Studio Eleven Cinematic" },
      {
        property: "og:description",
        content: "Producción audiovisual con inteligencia artificial, de principio a fin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <div className="px-5 pb-32 pt-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight md:text-7xl">{t.servicios.title}</h1>
          <p className="mt-6 max-w-xl text-base text-secondary-text md:text-lg">
            {t.servicios.intro}
          </p>
        </Reveal>

        <div className="mt-24 grid gap-px border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {t.servicios.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 50}>
              <div className="h-full border-b border-hairline py-12 pr-8">
                <span className="text-[11px] tracking-[0.3em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-3 text-sm text-secondary-text md:text-base">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
