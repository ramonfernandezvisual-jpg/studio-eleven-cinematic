import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import wordmark from "@/assets/logo-texto-una-linea-blanco.png.asset.json";
import { t } from "@/i18n";
import { locales } from "@/i18n";

const links = [
  { to: "/proyectos", label: t.nav.proyectos },
  { to: "/servicios", label: t.nav.servicios },
  { to: "/estudio", label: t.nav.estudio },
  { to: "/contacto", label: t.nav.contacto },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-black/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5">
        <Link to="/" onClick={() => setOpen(false)} aria-label={t.footer.logoAlt}>
          <img src={wordmark.url} alt={t.footer.logoAlt} className="h-[21px] w-auto" />
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-[12px] tracking-wide text-secondary-text transition-colors duration-300 hover:text-accent"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          {locales.length > 1 && (
            <li className="text-[12px] tracking-wide text-secondary-text">ES / EN</li>
          )}
        </ul>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center md:hidden"
          aria-label="Menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-[9px] w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-foreground transition-transform duration-300 ${open ? "top-1 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-foreground transition-transform duration-300 ${open ? "top-1 -rotate-45" : "top-2"}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-6 border-t border-hairline px-5 py-10">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
