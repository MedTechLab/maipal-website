import { translations } from "../i18n/translations";

type Lang = "en" | "zh";

function getLang(): Lang {
  const stored = localStorage.getItem("maipal-lang");
  if (stored === "en" || stored === "zh") return stored;
  // Auto-detect: if browser language starts with zh, default to Chinese
  const browserLang = navigator.language || "";
  return browserLang.startsWith("zh") ? "zh" : "en";
}

function setLang(lang: Lang) {
  localStorage.setItem("maipal-lang", lang);
  applyTranslations(lang);
  document.documentElement.setAttribute("lang", lang);
  // Update the toggle button text
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = translations[lang]["lang.label"];
  }
}

function applyTranslations(lang: Lang) {
  const dict = translations[lang];
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key] !== undefined) {
      // Use innerHTML to support <br>, <em>, <strong> etc.
      el.innerHTML = dict[key];
    }
  });
}

// Initialize on DOM ready
function init() {
  const lang = getLang();
  setLang(lang);

  // Bind toggle button
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = getLang();
      const next: Lang = current === "en" ? "zh" : "en";
      setLang(next);
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
