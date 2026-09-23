import stacked from "@/assets/logo-texto-apilado-blanco.png.asset.json";
import { t } from "@/i18n";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline px-5 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <img src={stacked.url} alt={t.footer.logoAlt} className="h-16 w-auto opacity-90" />
        <p className="text-[12px] text-secondary-text">
          © {new Date().getFullYear()} Studio Eleven Cinematic. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
