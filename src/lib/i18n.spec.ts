import { describe, it, expect, beforeEach, vi } from "vitest";

vi.mock("@/locales/en.json", () => ({ default: { greeting: "Hello" } }));
vi.mock("@/locales/de.json", () => ({ default: { greeting: "Hallo" } }));

describe("i18n configuration", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should default to English if no language is set", async () => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
    });

    const { createI18nInstance } = await import("@/lib/i18n"); // require or import dynamically
    const i18n = createI18nInstance();

    expect(i18n.global.locale.value).toBe("en");
    expect(i18n.global.t("greeting")).toBe("Hello");
  });

  it("should use the language set in localStorage", async () => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => "de"),
      setItem: vi.fn(),
    });

    const { createI18nInstance } = await import("@/lib/i18n");
    const i18n = createI18nInstance();

    expect(i18n.global.locale.value).toBe("de");
    expect(i18n.global.t("greeting")).toBe("Hallo");
  });

  it("should fallback to English if unknown language", async () => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => "fr"),
      setItem: vi.fn(),
    });

    const { createI18nInstance } = await import("@/lib/i18n");
    const i18n = createI18nInstance();

    expect(i18n.global.locale.value).toBe("fr");
    expect(i18n.global.fallbackLocale.value).toBe("en");
    expect(i18n.global.t("greeting")).toBe("Hello");
  });
});
