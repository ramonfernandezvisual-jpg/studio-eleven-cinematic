import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { bookingHref, emailHref, site, whatsappHref } from "@/config/site";
import { t } from "@/i18n";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Studio Eleven Cinematic" },
      {
        name: "description",
        content: "Escríbenos por email o WhatsApp, o reserva una llamada con el estudio.",
      },
      { property: "og:title", content: "Contacto — Studio Eleven Cinematic" },
      {
        property: "og:description",
        content: "Hablemos de tu marca. Respondemos en menos de 24 horas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string | undefined;
}) {
  return (
    <div className="border-b border-hairline py-8">
      <span className="text-[11px] tracking-[0.3em] text-secondary-text">
        {label.toUpperCase()}
      </span>
      <div className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
        {href ? (
          <a href={href} className="transition-colors duration-300 hover:text-accent">
            {value}
          </a>
        ) : (
          <span className="text-secondary-text">{value}</span>
        )}
      </div>
    </div>
  );
}

function Contacto() {
  return (
    <div className="px-5 pb-32 pt-36">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight md:text-7xl">{t.contacto.title}</h1>
          <p className="mt-6 text-base text-secondary-text md:text-lg">{t.contacto.intro}</p>
        </Reveal>
        <Reveal delay={80} className="mt-20">
          <Row label={t.contacto.email} value={site.email} href={emailHref()} />
          <Row label={t.contacto.whatsapp} value={site.whatsapp} href={whatsappHref()} />
          <Row label={t.contacto.booking} value={site.booking} href={bookingHref()} />
        </Reveal>
      </div>
    </div>
  );
}
