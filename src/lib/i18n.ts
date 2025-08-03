import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import de from "@/locales/de.json";

export function createI18nInstance() {
  const locale = localStorage.getItem("lang") || "en";

  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: "en",
    messages: { en, de },
  });
}
