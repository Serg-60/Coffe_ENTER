 (function () {
        "use strict";

        // LOCATION
        /* ===================== СЛОВНИК ПЕРЕКЛАДІВ (доповнює hero + about) ===================== */
        var translations = {
          uk: {
            locationEyebrow: "Знайти нас",
            locationTitle: "Розташування",
            locationAddressLabel: "Адреса",
            locationAddressValue: "м. Вінниця, вул. Брацлавська, 68",
            locationPhoneLabel: "Телефон",
            locationHoursLabel: "Години роботи",
            locationHoursValue: "Щодня з 07:00 до 22:00",
            locationCta: "Прокласти маршрут",
          },
          en: {
            locationEyebrow: "Find us",
            locationTitle: "Location",
            locationAddressLabel: "Address",
            locationAddressValue: "68 Bratslavska St, Vinnytsia",
            locationPhoneLabel: "Phone",
            locationHoursLabel: "Opening hours",
            locationHoursValue: "Daily from 7:00 AM to 10:00 PM",
            locationCta: "Get directions",
          },
        };

        var currentLang = "uk";

        function applyLanguage(lang) {
          currentLang = lang;
          document.documentElement.setAttribute("lang", lang);
          var dict = translations[lang];

          document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (!dict[key]) {
              return;
            }

            /* Кнопка маршруту містить іконку всередині -- оновлюємо лише текстовий вузол */
            if (el.id === "directionsLink") {
              var textNode = Array.prototype.find.call(
                el.childNodes,
                function (node) {
                  return (
                    node.nodeType === Node.TEXT_NODE &&
                    node.textContent.trim() !== ""
                  );
                },
              );
              if (textNode) {
                textNode.textContent = " " + dict[key];
              } else {
                el.appendChild(document.createTextNode(" " + dict[key]));
              }
              return;
            }

            el.textContent = dict[key];
          });
        }

        /* Робимо доступною глобально для синхронізації з перемикачем мови в navbar hero-блоку */
        window.locationApplyLanguage = applyLanguage;

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

        /* ===================== КАРТА ТА МАРШРУТ: будуються з data-address ===================== */
        var section = document.getElementById("location");
        var address = section.getAttribute("data-address");
        var encodedAddress = encodeURIComponent(address);

        var mapFrame = document.getElementById("locationMap");
        mapFrame.src =
          "https://www.google.com/maps?q=" + encodedAddress + "&output=embed";

        var directionsLink = document.getElementById("directionsLink");
        directionsLink.href =
          "https://www.google.com/maps/dir/?api=1&destination=" +
          encodedAddress;
      })();