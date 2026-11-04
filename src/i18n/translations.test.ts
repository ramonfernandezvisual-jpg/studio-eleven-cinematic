import { describe, expect, it } from "vitest";
import { resolveLocale } from "./translations";
describe("visitor language rules", () => {
  it("defaults Spanish browsers to Spanish", () => { expect(resolveLocale(null, "es-PA")).toBe("es"); });
  it("defaults any other browser language to English", () => { expect(resolveLocale(null, "fr-FR")).toBe("en"); });
  it("honors a saved language over browser preference", () => { expect(resolveLocale("en", "es-ES")).toBe("en"); expect(resolveLocale("es", "en-US")).toBe("es"); });
  it("ignores unsupported stored values", () => { expect(resolveLocale("fr", "es")).toBe("es"); });
});