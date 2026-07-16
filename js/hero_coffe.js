        
        
        
        
        (function () {
        "use strict";

        /* ===================== СЛОВНИК ПЕРЕКЛАДІВ ===================== */
        var translations = {
          uk: {
            loaderLabel: "Завантаження",
            navWelcome: "Welcome",
            navAbout: "Про нас",
            navLocation: "Розташування",
            navMenu: "Замовити онлайн / Меню",
            navContacts: "Контакти",
            heroTitle: "Кава, заради якої хочеться повертатися.",
            heroSubtitle:
              "Свіжообсмажена кава, авторські напої, домашня випічка та атмосфера, створена для натхнення, роботи й теплих зустрічей.",
            ctaOrder: "Замовити онлайн",
          },
          en: {
            loaderLabel: "Loading",
            navWelcome: "Welcome",
            navAbout: "About Us",
            navLocation: "Location",
            navMenu: "Order Online / Menu",
            navContacts: "Contacts",
            heroTitle: "Coffee worth coming back for.",
            heroSubtitle:
              "Freshly roasted coffee, signature drinks, homemade pastries, and an atmosphere designed for inspiration, work, and warm gatherings.",
            ctaOrder: "Order Online",
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

          var nextLabel = lang === "uk" ? "EN" : "UA";
          var labelDesktop = document.getElementById("langToggleLabel");
          var labelMobile = document.getElementById("langToggleLabelMobile");
          if (labelDesktop) {
            labelDesktop.textContent = nextLabel;
          }
          if (labelMobile) {
            labelMobile.textContent = nextLabel;
          }
        }

        function toggleLanguage() {
          applyLanguage(currentLang === "uk" ? "en" : "uk");
        }

        var langToggle = document.getElementById("langToggle");
        var langToggleMobile = document.getElementById("langToggleMobile");
        if (langToggle) {
          langToggle.addEventListener("click", toggleLanguage);
        }
        if (langToggleMobile) {
          langToggleMobile.addEventListener("click", toggleLanguage);
        }

        /* ===================== БУРГЕР-МЕНЮ ===================== */
        var burgerBtn = document.getElementById("burgerBtn");
        var mobileMenu = document.getElementById("mobileMenu");

        function openMenu() {
          mobileMenu.classList.add("is-open");
          burgerBtn.setAttribute("aria-expanded", "true");
          burgerBtn.setAttribute("aria-label", "Закрити меню навігації");
          document.body.style.overflow = "hidden";
        }

        function closeMenu() {
          mobileMenu.classList.remove("is-open");
          burgerBtn.setAttribute("aria-expanded", "false");
          burgerBtn.setAttribute("aria-label", "Відкрити меню навігації");
          document.body.style.overflow = "";
        }

        function toggleMenu() {
          var isOpen = mobileMenu.classList.contains("is-open");
          if (isOpen) {
            closeMenu();
          } else {
            openMenu();
          }
        }

        burgerBtn.addEventListener("click", toggleMenu);

        /* Закриття мобільного меню при кліку на пункт навігації */
        mobileMenu.querySelectorAll("a").forEach(function (link) {
          link.addEventListener("click", closeMenu);
        });

        /* ===================== ЗАКРИТТЯ ПО ESC =====================
       Примітка: браузери з міркувань безпеки дозволяють window.close()
       лише для вкладок/вікон, відкритих через window.open() зі скрипта.
       Тому ESC спершу закриває мобільне меню (якщо воно відкрите),
       а якщо меню закрите -- виконується спроба закрити вкладку. */
        document.addEventListener("keydown", function (event) {
          if (event.key === "Escape") {
            if (mobileMenu.classList.contains("is-open")) {
              closeMenu();
            } else {
              window.close();
            }
          }
        });

        /* ===================== NAVBAR: ЗМІНА ФОНУ ПРИ СКРОЛІ ===================== */
        var navbar = document.getElementById("navbar");
        function onScroll() {
          if (window.scrollY > 24) {
            navbar.classList.add("is-scrolled");
          } else {
            navbar.classList.remove("is-scrolled");
          }
        }
        window.addEventListener("scroll", onScroll, { passive: true });

        /* ===================== ВІДЕО: ЛОАДЕР + ГАРАНТОВАНЕ ПОВТОРЕННЯ ===================== */
        var loader = document.getElementById("loader");
        var video = document.getElementById("heroVideo");

        function hideLoader() {
          loader.classList.add("is-hidden");
        }

        video.addEventListener("loadeddata", hideLoader);
        video.addEventListener("canplaythrough", hideLoader);
        video.addEventListener("error", hideLoader);

        /* Явне повторення відео одразу по закінченню (додатково до атрибута loop) */
        video.addEventListener("ended", function () {
          video.currentTime = 0;
          video.play();
        });

        /* Аварійний захист: якщо відео довго не вантажиться, приховати лоадер за 3с */
        window.setTimeout(hideLoader, 3000);
      })();