import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import LanguageSwitcher from "@/components/base/LanguageSwitcher.vue"; // Adjust path
import { createI18n } from "vue-i18n";
import { vi } from "vitest";

describe("LanguageSwitch.vue", () => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages: {
      en: { message: "hello" },
      de: { message: "hallo" },
    },
  });

  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal("localStorage", {
      setItem: vi.fn(),
    });
  });

  it("renders with English and Deutsch options", () => {
    const wrapper = mount(LanguageSwitcher, {
      global: {
        plugins: [i18n],
      },
    });

    const options = wrapper.findAll("option").map((o) => o.text());
    expect(options).toContain("English");
    expect(options).toContain("Deutsch");
  });

  it("updates locale and sets localStorage on change", async () => {
    const wrapper = mount(LanguageSwitcher, {
      global: {
        plugins: [i18n],
      },
    });

    const select = wrapper.find("select");
    await select.setValue("de"); // simulate change

    expect(i18n.global.locale.value).toBe("de");
    expect(localStorage.setItem).toHaveBeenCalledWith("lang", "de");
  });
});
