(function () {
        "use strict";

        /* ===================== СЛОВНИК ПЕРЕКЛАДІВ (доповнює словник hero-блоку) ===================== */
        var translations = {
          uk: {
            aboutImgAlt: "Команда бариста ENTER за роботою в кав'ярні",
            aboutEyebrow: "5 років ENTER",
            aboutTitle: "Пʼять років ми варимо каву так, як варто",
            aboutLead:
              "Пʼять років тому ENTER почався з однієї барної стійки та ідеї варити каву так, як вона того заслуговує. Сьогодні за цією стійкою працює команда, що виросла разом із нами -- і продовжує рости.",
            aboutMore1:
              "Ми відкрились у 2021 році як маленька кавʼярня на розі -- смажили каву самі, вручну обирали зерна й вчились на власних помилках. За пʼять років команда зросла з трьох людей до пʼятнадцяти бариста, обсмажувачів і кондитерів, які щодня повторюють один і той самий ритуал: зробити чиюсь каву, тістечко чи просто ранок трохи кращими.",
            aboutMore2:
              "Сьогодні ENTER -- це власна обсмажувальна станція, авторська карта напоїв, домашня випічка щодня та простір, де швидкий Wi-Fi і затишок значать так само багато, як і кава в чашці. Ми досі вважаємо, що найкраща вершина -- це та, до якої ще йти, тож продовжуємо рости далі.",
            aboutToggleOpen: "Мені цікаво",
            aboutToggleClose: "Згорнути",
          },
          en: {
            aboutImgAlt: "ENTER baristas at work in the coffee shop",
            aboutEyebrow: "5 years of ENTER",
            aboutTitle: "Five years of brewing coffee the way it deserves",
            aboutLead:
              "Five years ago ENTER started with one counter and a simple idea: brew coffee the way it deserves. Today the team behind that counter has grown together with us -- and keeps growing.",
            aboutMore1:
              "We opened in 2021 as a small corner coffee shop -- roasting our own beans, hand-picking green coffee, and learning from our own mistakes. Over five years the team grew from three people to fifteen baristas, roasters, and pastry makers who repeat the same ritual every day: make someone's coffee, pastry, or morning a little better.",
            aboutMore2:
              "Today ENTER runs its own roasting station, a signature drinks menu, fresh pastries every day, and a space where fast Wi-Fi and comfort matter just as much as the coffee in your cup. We still believe the best milestone is the next one, so we keep growing.",
            aboutToggleOpen: "Tell me more",
            aboutToggleClose: "Show less",
          },
        };

        var currentLang = "uk";

        function applyLanguage(lang) {
          currentLang = lang;
          document.documentElement.setAttribute("lang", lang);
          var dict = translations[lang];

          document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            /* Текст кнопки залежить від стану відкрито/закрито -- обробляється окремо нижче */
            if (key === "aboutToggleClosed") {
              return;
            }
            if (dict[key]) {
              el.textContent = dict[key];
            }
          });

          document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-alt");
            if (dict[key]) {
              el.setAttribute("alt", dict[key]);
            }
          });

          updateToggleLabel();
        }

        /* Робимо функцію доступною глобально, щоб кнопка перемикання мови в navbar
       (з hero-блоку) могла синхронно оновити і цей блок при обʼєднанні сторінки */
        window.aboutApplyLanguage = applyLanguage;

        /* ===================== РОЗКРИТТЯ ПОВНОГО ТЕКСТУ ===================== */
        var toggleBtn = document.getElementById("aboutToggle");
        var toggleText = toggleBtn.querySelector(".about__toggle-text");
        var moreBlock = document.getElementById("aboutMore");
        var isOpen = false;

        function updateToggleLabel() {
          var dict = translations[currentLang];
          toggleText.textContent = isOpen
            ? dict.aboutToggleClose
            : dict.aboutToggleOpen;
        }

        toggleBtn.addEventListener("click", function () {
          isOpen = !isOpen;
          moreBlock.classList.toggle("is-open", isOpen);
          toggleBtn.setAttribute("aria-expanded", String(isOpen));
          updateToggleLabel();
        });

        updateToggleLabel();

        /* Якщо на сторінці вже є глобальний перемикач мови (з navbar hero-блоку),
       підʼєднуємось до нього, щоб обидва блоки перемикались синхронно */
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