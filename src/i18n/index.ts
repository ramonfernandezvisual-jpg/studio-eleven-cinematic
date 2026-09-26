import { es } from "./es";
import type { Dictionary } from "./es";

export type Locale = "es" | "en";

/** Idiomas disponibles. Cuando exista /en, añade "en" aquí y el selector aparecerá. */
export const locales: Locale[] = ["es"];
export const defaultLocale: Locale = "es";

const dictionaries: Record<string, Dictionary> = { es };

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale] ?? es;
}

export const t = es;
export type { Dictionary };
