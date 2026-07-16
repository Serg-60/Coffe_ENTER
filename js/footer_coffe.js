  (function () {
        "use strict";
        //  FOOTER
        /* ===================== СЛОВНИК ПЕРЕКЛАДІВ (доповнює hero + about + location + menu + contacts) ===================== */
        var translations = {
          uk: {
            footerHeading: "Підвал сайту ENTER",
            footerCopyright: "\u00A9 2026 ENTER. Всі права захищено.",
            footerPrivacy: "Політика конфіденційності",
            footerTerms: "Умови використання",
          },
          en: {
            footerHeading: "ENTER site footer",
            footerCopyright: "\u00A9 2026 ENTER. All rights reserved.",
            footerPrivacy: "Privacy Policy",
            footerTerms: "Terms of Use",
          },
        };

        var currentLang = "uk";

        function applyLanguage(lang) {
          currentLang = lang;
          document.documentElement.setAttribute("lang", lang);
          var dict = translations[lang];

          document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (dict[key]) {
              el.textContent = dict[key];
            }
          });
        }

        /* Робимо доступною глобально для синхронізації з перемикачем мови в navbar hero-блоку */
        window.footerApplyLanguage = applyLanguage;

        var globalLangToggle = document.getElementById("langToggle");
        var globalLangToggleMobile =
          document.getElementById("langToggleMobile");
        function syncWithGlobalLang() {
          var lang =
            document.documentElement.getAttribute("lang") === "en"
              ? "en"
              : "uk";
          applyLanguage(lang);
        }
        if (globalLangToggle) {
          globalLangToggle.addEventListener("click", syncWithGlobalLang);
        }
        if (globalLangToggleMobile) {
          globalLangToggleMobile.addEventListener("click", syncWithGlobalLang);
        }
      })();