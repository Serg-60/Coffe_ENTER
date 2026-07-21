  (function () {
    'use strict';

    /* =========================================================================
       ДАНІ МЕНЮ
       ДОДАТИ страву    -> дописати обʼєкт у items потрібної категорії.
       ВИДАЛИТИ страву  -> видалити відповідний обʼєкт з items.
       ЗМІНИТИ дані     -> відредагувати name / description / price / image.
       ========================================================================= */
    var menuData = [
      {
        id: 'popular', icon: 'cup', label: { uk: 'Популярні', en: 'Popular' },
        items: [
          { id: 'pop-1', price: 85, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwcHVjY2lub3xlbnwwfHwwfHx8MA%3D%3D',
            name: { uk: 'Ароматизована кава з лавандою та медом', en: 'Flavored coffee with lavender and honey' },
            description: { uk: 'Лаванда і мед приборкують гіркоту еспресо -- виходить ніжно, майже як десерт.', en: 'Lavender and honey soften the espresso -- comes out gentle, almost like dessert.' } },
          { id: 'pop-2', price: 90, image: 'https://images.unsplash.com/photo-1533007716222-4b465613a984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1lcmljYW5vfGVufDB8fDB8fHww',
            name: { uk: 'Кава з льодом Айс-латте', en: 'Iced latte' },
            description: { uk: 'Лате з льодом. Просто, чесно, рятує в спеку.', en: 'Latte over ice. Simple, honest, saves you in the heat.' } },
          { id: 'pop-3', price: 80, image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: { uk: 'Гарячий шоколад', en: 'Hot chocolate' },
            description: { uk: 'Густий, майже як розтоплена шоколадка. Для днів, коли потрібне тепло.', en: 'Thick, almost like melted chocolate. For the days that need some warmth.' } },
          { id: 'pop-4', price: 75, image: 'https://images.unsplash.com/photo-1533776992670-a72f4c28235e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FwcHVjY2lubyUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
            name: { uk: 'Капучино з карамельним сиропом', en: 'Cappuccino with caramel syrup' },
            description: { uk: 'Класичний капучино з карамельною хвилею замість цукру.', en: 'Classic cappuccino with a caramel wave instead of sugar.' } },
          { id: 'pop-5', price: 95, image: 'https://images.unsplash.com/photo-1707219811253-b4197a022ffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D',
            name: { uk: 'Раф на кокосовому молоці', en: 'Raf coffee with coconut milk' },
            description: { uk: 'Кокосове молоко робить раф оксамитовим -- без молочки, без компромісів у смаку.', en: 'Coconut milk makes this raf velvety -- no dairy, no compromise on flavor.' } },
          { id: 'pop-6', price: 90, image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhdHRlJTIwY29mZmVlfGVufDB8fDB8fHww',
            name: { uk: 'Матча-латте з мʼятою', en: 'Matcha latte with mint' },
            description: { uk: 'Матча освіжає, мʼята додає прохолоди. Бадьорість без кави.', en: 'Matcha wakes you up, mint cools you down. Energy without coffee.' } },
            { id: 'pop-5', price: 95, image: 'https://images.unsplash.com/photo-1630040995437-80b01c5dd52d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: { uk: 'Лате Макіато', en: 'Latte Macchiato' },
            description: { uk: 'Молоко з додаванням експресо.', en: 'Milk with added espresso.' } },
          { id: 'pop-6', price: 90, image: 'https://images.unsplash.com/photo-1565442048866-22ed635b720f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: { uk: 'Фрапе', en: 'Frappe' },
            description: { uk: 'Збита холодна кава з льодом - освіжаюча прохолода.', en: 'Whipped iced coffee – refreshing coolness.' } }
        ]
      },
      {
        id: 'classics', icon: 'cup', label: { uk: 'Класика', en: 'Classics' },
        items: [
          { id: 'cls-1', price: 45, image: 'https://images.unsplash.com/photo-1635198048049-258746594307?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: { uk: 'Еспресо', en: 'Espresso' },
            description: { uk: 'Один шот, вся суть кави.', en: 'One shot, the whole point of coffee.' } },
          { id: 'cls-2', price: 50, image: 'https://images.unsplash.com/photo-1737099951011-2b6b0bc92fb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8',
            name: { uk: 'Американо', en: 'Americano' },
            description: { uk: 'Еспресо, розведений водою до мʼякшого характеру.', en: 'Espresso cut with water for a softer character.' } },
          { id: 'cls-3', price: 60, image: 'https://images.unsplash.com/photo-1691442098169-42660b7e9370?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: { uk: 'Капучино', en: 'Cappuccino' },
            description: { uk: 'Еспресо і молочна піна в ідеальній рівновазі.', en: 'Espresso and milk foam in perfect balance.' } },
          { id: 'cls-4', price: 65, image: 'https://plus.unsplash.com/premium_photo-1671379526961-1aebb82b317b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGxhdHRlfGVufDB8fDB8fHww',
            name: { uk: 'Лате', en: 'Latte' },
            description: { uk: 'Більше молока, менше різкості -- для тих, хто пʼє каву повільно.', en: 'More milk, less edge -- for slow coffee mornings.' } },
          { id: 'cls-5', price: 65, image: 'https://images.unsplash.com/photo-1603374399574-4cf3f4d79d34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGxhdHRlfGVufDB8fDB8fHww',
            name: { uk: 'Флет-вайт', en: 'Flat white' },
            description: { uk: 'Подвійний еспресо під тонким шаром піни. Міцніше, ніж здається.', en: 'Double espresso under a thin layer of foam. Stronger than it looks.' } },
          { id: 'cls-6', price: 45, image: 'https://images.unsplash.com/photo-1536227661368-deef57acf708?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8',
            name: { uk: 'Ристретто', en: 'Ristretto' },
            description: { uk: 'Коротший постріл еспресо. Густіший смак, менше обʼєму.', en: 'A shorter espresso pull. Denser flavor, smaller cup.' } },
                      { id: 'cls-5', price: 65, image: 'https://images.unsplash.com/photo-1568381263342-c43962fcf6c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc3fHx8ZW58MHx8fHx8',
            name: { uk: 'Глясе', en: 'Glace' },
            description: { uk: 'Холодна кава з морозивом - смак дитинства.', en: 'Iced coffee with ice cream — the taste of childhood.' } },
          { id: 'cls-6', price: 45, image: 'https://plus.unsplash.com/premium_photo-1673459683929-3f3574de7e75?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: { uk: 'Кортадо', en: 'Kortado' },
            description: { uk: 'Експресо та гаряче молоко у пропорції один до одного.', en: 'Espresso and hot milk in a one-to-one ratio..' } },
        ]
      },
      {
        id: 'snacks', icon: 'plate', label: { uk: 'Закуски', en: 'Snacks' },
        items: [
          { id: 'snk-1', price: 110, image: 'https://images.unsplash.com/photo-1696721497013-e90103a41bf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
            name: { uk: 'Круасан із шинкою та сиром', en: 'Croissant with ham and cheese' },
            description: { uk: 'Хрусткий круасан, теплий сир, шинка -- сніданок, який рятує ранок.', en: 'Crispy croissant, warm cheese, ham -- the breakfast that saves your morning.' } },
          { id: 'snk-2', price: 120, image: 'https://images.unsplash.com/photo-1761027101486-d0403a229f88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8',
            name: { uk: 'Сендвіч з авокадо та яйцем-пашот', en: 'Avocado and poached egg sandwich' },
            description: { uk: 'Авокадо, яйце-пашот, цільнозерновий хліб. Легко і надовго.', en: 'Avocado, poached egg, whole grain bread. Light and lasting.' } },
          { id: 'snk-3', price: 105, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FsYWR8ZW58MHx8MHx8fDA%3D',
            name: { uk: 'Кіш з овочами', en: 'Vegetable quiche' },
            description: { uk: 'Домашній пиріг з овочами -- як у бабусі, тільки швидше.', en: 'House-made vegetable pie -- like grandma\u2019s, just faster.' } },
          { id: 'snk-4', price: 90, image: 'https://plus.unsplash.com/premium_photo-1699837153455-a8c0f4e28fc3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: { uk: 'Хумус з чипсами з піти', en: 'Hummus with pita chips' },
            description: { uk: 'Хумус власного приготування і хрумкі чипси з піти.', en: 'House hummus and crispy pita chips.' } }
        ]
      },
      {
        id: 'pastries', icon: 'cookie', label: { uk: 'Тістечка', en: 'Pastries' },
        items: [
          { id: 'pas-1', price: 65, image: 'https://images.unsplash.com/photo-1681218079567-35aef7c8e7e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JvaXNzYW50c3xlbnwwfHwwfHx8MA%3D%3D',
            name: { uk: 'Круасан класичний', en: 'Classic butter croissant' },
            description: { uk: 'Вершкове тісто, шарувата текстура, нічого зайвого.', en: 'Buttery dough, flaky layers, nothing extra.' } },
          { id: 'pas-2', price: 85, image: 'https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGRlc3NlcnR8ZW58MHx8MHx8fDA%3D',
            name: { uk: 'Чизкейк Нью-Йорк', en: 'New York cheesecake' },
            description: { uk: 'Щільний, вершковий, класичний рецепт без експериментів.', en: 'Dense, creamy, the classic recipe, no experiments.' } },
          { id: 'pas-3', price: 90, image: 'https://images.unsplash.com/photo-1712262582593-e13609aaf12b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
            name: { uk: 'Тірамісу порційне', en: 'Individual tiramisu' },
            description: { uk: 'Кава, маскарпоне, какао -- італійська класика в одній чашці.', en: 'Coffee, mascarpone, cocoa -- Italian classic in one cup.' } },
          { id: 'pas-4', price: 80, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc3NlcnR8ZW58MHx8MHx8fDA%3D',
            name: { uk: "Шоколадний торт", en: "chocolate cake" },
            description: { uk: 'Шоколадний бісквіт і вершковий крем. Солодко, але не приторно.', en: 'Chocolate sponge and cream cheese frosting. Sweet, not sickly.' } }
        ]
      }
    ];

    var iconPaths = {
      cup: '<path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z"/><path d="M17 9h1.5A2.5 2.5 0 0 1 21 11.5v0A2.5 2.5 0 0 1 18.5 14H17"/><path d="M7 3.5c0 1-1 1-1 2s1 1 1 2M11 3.5c0 1-1 1-1 2s1 1 1 2"/>',
      plate: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/>',
      cookie: '<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none"/><circle cx="14" cy="9" r="0.9" fill="currentColor" stroke="none"/><circle cx="13" cy="14" r="0.9" fill="currentColor" stroke="none"/><circle cx="9" cy="15" r="0.9" fill="currentColor" stroke="none"/>'
    };

    function svgIcon(name, cssClass) {
      return '<svg class="' + cssClass + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' + (iconPaths[name] || '') + '</svg>';
    }

    var translationsStatic = {
      uk: {
        menuEyebrow: 'Наше меню', menuTitle: 'Меню',
        menuHint: 'Фото, опис і ціна -- одразу перед очима. Натискаєте -- і страва вже в кошику.',
        cartButtonLabel: 'Кошик', cartTitle: 'Ваше замовлення',
        cartTotalLabel: 'Разом', cartEmpty: 'Кошик поки порожній', toastAdded: 'Додано в кошик',
        orderButtonLabel: 'Замовити', orderBackLabel: '\u2190 Назад до кошика',
        orderNameLabel: 'Імʼя', orderNameError: 'Введіть, будь ласка, ваше імʼя',
        orderPhoneLabel: 'Телефон', orderPhoneError: 'Перевірте номер телефону, наприклад +380987654321',
        orderItemsLabel: 'Що замовляємо',
        orderTimeLabel: 'На яку годину виконати замовлення', orderTimeError: 'Оберіть час у межах з 07:00 до 22:00',
        orderSubmitLabel: 'Підтвердити замовлення', orderSuccess: 'Замовлення прийнято! Очікуйте на',
        orderSummaryEmpty: 'Кошик порожній'
      },
      en: {
        menuEyebrow: 'Our menu', menuTitle: 'Menu',
        menuHint: 'Photo, description, and price -- all right here. One tap and it is in your cart.',
        cartButtonLabel: 'Cart', cartTitle: 'Your order',
        cartTotalLabel: 'Total', cartEmpty: 'Your cart is empty', toastAdded: 'Added to cart',
        orderButtonLabel: 'Order', orderBackLabel: '\u2190 Back to cart',
        orderNameLabel: 'Name', orderNameError: 'Please enter your name',
        orderPhoneLabel: 'Phone', orderPhoneError: 'Check the phone number, e.g. +380987654321',
        orderItemsLabel: 'What we are ordering',
        orderTimeLabel: 'What time should we prepare the order', orderTimeError: 'Choose a time between 07:00 and 22:00',
        orderSubmitLabel: 'Confirm order', orderSuccess: 'Order received! Expect it around',
        orderSummaryEmpty: 'Cart is empty'
      }
    };

    var currentLang = 'uk';
    var activeCategory = menuData[0].id;

    var itemsIndex = {};
    menuData.forEach(function (cat) {
      cat.items.forEach(function (item) { itemsIndex[item.id] = item; });
    });

    /* ===================== КОШИК (без змін) =====================
       cart -- обʼєкт { itemId: quantity }. Кількість завжди > 0;
       якщо кількість зменшується до 0 -- позиція видаляється з кошика повністю. */
    var cart = {};

    var cartCountEl = document.getElementById('cartCount');
    var cartListEl = document.getElementById('cartList');
    var cartTotalEl = document.getElementById('cartTotal');
    var orderButton = document.getElementById('orderButton');
    var cartButton = document.getElementById('cartButton');

    function addToCart(itemId) {
      cart[itemId] = (cart[itemId] || 0) + 1;
      renderCart();
      bumpCartCount();
      showToast(translationsStatic[currentLang].toastAdded + ': ' + itemsIndex[itemId].name[currentLang]);
    }

    function changeQuantity(itemId, delta) {
      var next = (cart[itemId] || 0) + delta;
      if (next <= 0) { delete cart[itemId]; } else { cart[itemId] = next; }
      renderCart();
    }

    function removeFromCart(itemId) {
      delete cart[itemId];
      renderCart();
    }

    function cartTotalCount() {
      return Object.keys(cart).reduce(function (sum, id) { return sum + cart[id]; }, 0);
    }

    function cartTotalPrice() {
      return Object.keys(cart).reduce(function (sum, id) { return sum + cart[id] * itemsIndex[id].price; }, 0);
    }

    function bumpCartCount() {
      cartCountEl.classList.remove('is-bump');
      void cartCountEl.offsetWidth;
      cartCountEl.classList.add('is-bump');
    }

    function renderCart() {
      var ids = Object.keys(cart);
      cartCountEl.textContent = String(cartTotalCount());
      orderButton.disabled = ids.length === 0;

      if (ids.length === 0) {
        cartListEl.innerHTML = '<p class="cart-panel__empty">' + translationsStatic[currentLang].cartEmpty + '</p>';
      } else {
        cartListEl.innerHTML = '';
        ids.forEach(function (id) {
          var item = itemsIndex[id];
          var qty = cart[id];
          var row = document.createElement('div');
          row.className = 'cart-item';
          row.innerHTML =
            '<div class="cart-item__photo"><img src="' + item.image + '" alt="' + item.name[currentLang] + '"></div>' +
            '<div class="cart-item__info">' +
              '<div class="cart-item__name">' + item.name[currentLang] + '</div>' +
              '<div class="cart-item__price">' + (item.price * qty) + ' \u0433\u0440\u043d</div>' +
            '</div>' +
            '<div class="cart-item__qty">' +
              '<button class="cart-item__qty-btn" data-action="minus" data-id="' + id + '" aria-label="\u0417\u043c\u0435\u043d\u0448\u0438\u0442\u0438 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c">-</button>' +
              '<span class="cart-item__qty-value">' + qty + '</span>' +
              '<button class="cart-item__qty-btn" data-action="plus" data-id="' + id + '" aria-label="\u0417\u0431\u0456\u043b\u044c\u0448\u0438\u0442\u0438 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c">+</button>' +
            '</div>' +
            '<button class="cart-item__remove" data-action="remove" data-id="' + id + '" aria-label="\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0441\u0442\u0440\u0430\u0432\u0443">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg>' +
            '</button>';
          cartListEl.appendChild(row);
        });
      }

      cartTotalEl.textContent = cartTotalPrice() + ' \u0433\u0440\u043d';
    }

    cartListEl.addEventListener('click', function (event) {
      var btn = event.target.closest('button[data-action]');
      if (!btn) { return; }
      var id = btn.getAttribute('data-id');
      var action = btn.getAttribute('data-action');
      if (action === 'plus') { changeQuantity(id, 1); }
      if (action === 'minus') { changeQuantity(id, -1); }
      if (action === 'remove') { removeFromCart(id); }
    });

    /* ===================== ФОРМА ЗАМОВЛЕННЯ (без змін) ===================== */
    var cartBodyView = document.getElementById('cartBodyView');
    var orderFormView = document.getElementById('orderFormView');
    var orderForm = document.getElementById('orderForm');
    var orderBack = document.getElementById('orderBack');
    var orderNameInput = document.getElementById('orderName');
    var orderPhoneInput = document.getElementById('orderPhone');
    var orderTimeInput = document.getElementById('orderTime');
    var orderNameError = document.getElementById('orderNameError');
    var orderPhoneError = document.getElementById('orderPhoneError');
    var orderTimeError = document.getElementById('orderTimeError');
    var orderSummaryEl = document.getElementById('orderSummary');

    var phonePattern = /^(\+38)?0\d{9}$/;

    function renderOrderSummary() {
      var ids = Object.keys(cart);
      if (ids.length === 0) {
        orderSummaryEl.textContent = translationsStatic[currentLang].orderSummaryEmpty;
        return;
      }
      orderSummaryEl.innerHTML = ids.map(function (id) {
        var item = itemsIndex[id];
        var qty = cart[id];
        return '<div class="form-summary__row"><span>' + item.name[currentLang] + ' \u00d7 ' + qty + '</span>' +
          '<span>' + (item.price * qty) + ' \u0433\u0440\u043d</span></div>';
      }).join('');
    }

    function openOrderForm() {
      if (orderButton.disabled) { return; }
      renderOrderSummary();
      cartBodyView.hidden = true;
      orderFormView.hidden = false;
    }

    function backToCart() {
      orderFormView.hidden = true;
      cartBodyView.hidden = false;
    }

    orderButton.addEventListener('click', openOrderForm);
    orderBack.addEventListener('click', backToCart);

    function setFieldError(input, errorEl, isInvalid) {
      input.classList.toggle('is-invalid', isInvalid);
      errorEl.classList.toggle('is-visible', isInvalid);
    }

    function validateOrderForm() {
      var isNameValid = orderNameInput.value.trim().length >= 2;
      var isPhoneValid = phonePattern.test(orderPhoneInput.value.trim());
      var isTimeValid = Boolean(orderTimeInput.value) && orderTimeInput.value >= '07:00' && orderTimeInput.value <= '22:00';

      setFieldError(orderNameInput, orderNameError, !isNameValid);
      setFieldError(orderPhoneInput, orderPhoneError, !isPhoneValid);
      setFieldError(orderTimeInput, orderTimeError, !isTimeValid);

      return isNameValid && isPhoneValid && isTimeValid;
    }

    orderNameInput.addEventListener('input', function () {
      if (orderNameInput.value.trim().length >= 2) { setFieldError(orderNameInput, orderNameError, false); }
    });
    orderPhoneInput.addEventListener('input', function () {
      if (phonePattern.test(orderPhoneInput.value.trim())) { setFieldError(orderPhoneInput, orderPhoneError, false); }
    });
    orderTimeInput.addEventListener('input', function () {
      var v = orderTimeInput.value;
      if (v && v >= '07:00' && v <= '22:00') { setFieldError(orderTimeInput, orderTimeError, false); }
    });

    orderForm.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!validateOrderForm()) { return; }

      var orderPayload = {
        name: orderNameInput.value.trim(),
        phone: orderPhoneInput.value.trim(),
        time: orderTimeInput.value,
        items: Object.keys(cart).map(function (id) {
          return { id: id, name: itemsIndex[id].name[currentLang], qty: cart[id], price: itemsIndex[id].price };
        })
      };

      showToast(translationsStatic[currentLang].orderSuccess + ' ' + orderPayload.time);

      cart = {};
      orderForm.reset();
      setFieldError(orderNameInput, orderNameError, false);
      setFieldError(orderPhoneInput, orderPhoneError, false);
      setFieldError(orderTimeInput, orderTimeError, false);
      renderCart();
      backToCart();
      closeCart();
    });

    /* ===================== ВІДКРИТТЯ / ЗАКРИТТЯ ПАНЕЛІ КОШИКА (без змін) ===================== */
    var cartOverlay = document.getElementById('cartOverlay');
    var cartClose = document.getElementById('cartClose');

    function openCart() {
      cartOverlay.classList.add('is-open');
      backToCart();
    }

    function closeCart() { cartOverlay.classList.remove('is-open'); }

    cartButton.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', function (event) {
      if (event.target === cartOverlay) { closeCart(); }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && cartOverlay.classList.contains('is-open')) { closeCart(); }
    });

    /* ===================== ТОСТ ПІДТВЕРДЖЕННЯ (без змін) ===================== */
    var toastEl = document.getElementById('toast');
    var toastTimer = null;

    function showToast(text) {
      toastEl.textContent = text;
      toastEl.classList.add('is-visible');
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(function () { toastEl.classList.remove('is-visible'); }, 1800);
    }

    /* ===================== РЕНДЕР МЕНЮ (таби + СІТКА КАРТ) ===================== */
    var tabsContainer = document.getElementById('menuTabs');
    var panelsContainer = document.getElementById('menuPanels');

    function renderTabs() {
      tabsContainer.innerHTML = '';
      menuData.forEach(function (category) {
        var tab = document.createElement('button');
        tab.type = 'button';
        tab.className = 'menu__tab';
        tab.id = 'tab-' + category.id;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', String(category.id === activeCategory));
        tab.setAttribute('aria-controls', 'panel-' + category.id);
        tab.innerHTML = svgIcon(category.icon, 'menu__tab-icon') + '<span>' + category.label[currentLang] + '</span>';
        tab.addEventListener('click', function () {
          activeCategory = category.id;
          renderTabs();
          renderPanels();
        });
        tabsContainer.appendChild(tab);
      });
    }

    function renderPanels() {
      panelsContainer.innerHTML = '';
      menuData.forEach(function (category) {
        var panel = document.createElement('div');
        panel.className = 'menu__panel' + (category.id === activeCategory ? ' is-active' : '');
        panel.id = 'panel-' + category.id;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', 'tab-' + category.id);

        var list = document.createElement('div');
        list.className = 'menu__list';

        category.items.forEach(function (item) {
          var dish = document.createElement('button');
          dish.type = 'button';
          dish.className = 'menu__dish';
          dish.innerHTML =
            '<div class="menu__dish-media"><img src="' + item.image + '" alt="' + item.name[currentLang] + '"></div>' +
            '<div class="menu__dish-body">' +
              '<div class="menu__dish-top">' +
                '<h3 class="menu__dish-name">' + item.name[currentLang] + '</h3>' +
                '<span class="menu__dish-price">' + item.price + ' \u0433\u0440\u043d</span>' +
              '</div>' +
              '<p class="menu__dish-desc">' + item.description[currentLang] + '</p>' +
            '</div>' +
            '<span class="menu__dish-plus" aria-hidden="true">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>' +
            '</span>';
          dish.setAttribute('aria-label', translationsStatic[currentLang].toastAdded + ': ' + item.name[currentLang]);
          dish.addEventListener('click', function () { addToCart(item.id); });
          list.appendChild(dish);
        });

        panel.appendChild(list);
        panelsContainer.appendChild(panel);
      });
    }

    function renderStaticText() {
      var dict = translationsStatic[currentLang];
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (dict[key]) { el.textContent = dict[key]; }
      });
    }

    function applyLanguage(lang) {
      currentLang = lang;
      document.documentElement.setAttribute('lang', lang);
      renderStaticText();
      renderTabs();
      renderPanels();
      renderCart();
      if (!orderFormView.hidden) { renderOrderSummary(); }
    }

    window.menuApplyLanguage = applyLanguage;

    var globalLangToggle = document.getElementById('langToggle');
    var globalLangToggleMobile = document.getElementById('langToggleMobile');
    function syncWithGlobalLang() {
      var lang = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'uk';
      applyLanguage(lang);
    }
    if (globalLangToggle) { globalLangToggle.addEventListener('click', syncWithGlobalLang); }
    if (globalLangToggleMobile) { globalLangToggleMobile.addEventListener('click', syncWithGlobalLang); }

    /* Початковий рендер */
    renderStaticText();
    renderTabs();
    renderPanels();
    renderCart();

    /* ===================== ВИДИМІСТЬ КНОПКИ КОШИКА (без змін) ===================== */
    var visibilitySectionIds = ['location', 'menu', 'contacts'];
    var visibleSections = new Set();

    var cartVisibilityObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });
      cartButton.classList.toggle('is-hidden', visibleSections.size === 0);
    }, { threshold: 0.15 });

    visibilitySectionIds.forEach(function (id) {
      var section = document.getElementById(id);
      if (section) { cartVisibilityObserver.observe(section); }
    });

  })();