   (function () {
        "use strict";

        // CONTACTC
        /* ===================== СЛОВНИК ПЕРЕКЛАДІВ (доповнює hero + about + location + menu) ===================== */
        var translations = {
          uk: {
            contactsEyebrow: "Звʼязатися з нами",
            contactsTitle: "Контакти",
            contactsAddressLabel: "Адреса",
            contactsAddressValue: "м. Вінниця, вул. Брацлавська, 68",
            contactsHoursLabel: "Години роботи",
            contactsHoursValue: "Щодня з 07:00 до 22:00",
            contactsPhoneLabel: "Телефон",
            contactsSocialLabel: "Ми в соціальних мережах",
          },
          en: {
            contactsEyebrow: "Get in touch",
            contactsTitle: "Contacts",
            contactsAddressLabel: "Address",
            contactsAddressValue: "68 Bratslavska St, Vinnytsia",
            contactsHoursLabel: "Opening hours",
            contactsHoursValue: "Daily from 7:00 AM to 10:00 PM",
            contactsPhoneLabel: "Phone",
            contactsSocialLabel: "Find us on social media",
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
        window.contactsApplyLanguage = applyLanguage;

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