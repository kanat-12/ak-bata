"use strict";

    const categories = [
      { id: "all", title: "Все" },
      { id: "first", title: "Первое блюдо" },
      { id: "second", title: "Второе блюдо" },
      { id: "salads", title: "Салаты" },
      { id: "snacks", title: "Закуски" },
      { id: "shashlyk", title: "Шашлыки" },
      { id: "drinks", title: "Напитки" },
      { id: "tea", title: "Чай" },
      { id: "desserts", title: "Десерты" }
    ];

    const tagFilters = [
      { id: "all", title: "Все теги" },
      { id: "hit", title: "Хит" },
      { id: "new", title: "Новинка" },
      { id: "spicy", title: "Острое" },
      { id: "halal", title: "Халяль" }
    ];

    const defaultMenu = [
      {
        id: 1,
        name: "Шорпо",
        category: "first",
        price: 280,
        weight: "450 г",
        composition: "говядина, картофель, морковь, зелень",
        tags: ["halal", "hit"],
        desc: "Наваристый суп с мясом и овощами.",
        img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 2,
        name: "Мастава",
        category: "first",
        price: 260,
        weight: "420 г",
        composition: "рис, мясо, овощи, специи",
        tags: ["halal"],
        desc: "Рисовый суп с мясом и овощами.",
        img: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 3,
        name: "Плов",
        category: "second",
        price: 350,
        weight: "450 г",
        composition: "рис, мясо, морковь, специи",
        tags: ["halal", "hit"],
        desc: "Классический плов с мясом.",
        img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 4,
        name: "Манты",
        category: "second",
        price: 320,
        weight: "5 шт",
        composition: "тесто, мясо, лук, специи",
        tags: ["halal"],
        desc: "Манты с мясом и луком.",
        img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 5,
        name: "Босо лагман",
        category: "second",
        price: 380,
        weight: "420 г",
        composition: "лапша, мясо, овощи, соус",
        tags: ["halal", "spicy"],
        desc: "Жареный лагман с овощами.",
        img: "https://images.unsplash.com/photo-1569058242567-93de6f36f8eb?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 6,
        name: "Свежий салат",
        category: "salads",
        price: 180,
        weight: "220 г",
        composition: "огурцы, помидоры, зелень",
        tags: ["new"],
        desc: "Легкий овощной салат.",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 7,
        name: "Цезарь с курицей",
        category: "salads",
        price: 320,
        weight: "280 г",
        composition: "курица, салат, сухари, соус",
        tags: ["hit"],
        desc: "Популярный салат с курицей.",
        img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 8,
        name: "Сырные палочки",
        category: "snacks",
        price: 240,
        weight: "180 г",
        composition: "сыр, панировка, соус",
        tags: ["new"],
        desc: "Горячая закуска к столу.",
        img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 9,
        name: "Шашлык из баранины",
        category: "shashlyk",
        price: 480,
        weight: "250 г",
        composition: "баранина, лук, специи",
        tags: ["halal", "hit"],
        desc: "Сочный шашлык на углях.",
        img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 10,
        name: "Шашлык из курицы",
        category: "shashlyk",
        price: 390,
        weight: "250 г",
        composition: "курица, специи, соус",
        tags: ["halal"],
        desc: "Куриный шашлык на углях.",
        img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 11,
        name: "Лимонад",
        category: "drinks",
        price: 180,
        weight: "0.5 л",
        composition: "лимон, мята, газированная вода",
        tags: ["new"],
        desc: "Освежающий напиток.",
        img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 12,
        name: "Чай с мятой",
        category: "tea",
        price: 120,
        weight: "чайник",
        composition: "чай, мята",
        tags: ["hit"],
        desc: "Ароматный горячий чай.",
        img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80"
      },
      {
        id: 13,
        name: "Медовик",
        category: "desserts",
        price: 220,
        weight: "150 г",
        composition: "медовые коржи, крем",
        tags: ["new"],
        desc: "Классический десерт к чаю.",
        img: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=700&q=80"
      }
    ];
    let menu = load("akbataMenu", defaultMenu);
    if (!Array.isArray(menu) || menu.length === 0) {
      menu = defaultMenu;
      save("akbataMenu", menu);
    }

    // Схема столов редактируется здесь:
    // Чтобы ДОБАВИТЬ место — скопируйте одну строку ниже и поменяйте id, name, status, x/y или right/y.
    // Чтобы УДАЛИТЬ место — удалите нужный объект из массива.
    // status: free = свободно, vip = кабинка/VIP, booked = занято.
    // x/y — позиция слева и сверху на схеме, right/y — позиция справа и сверху.
    const defaultHallSeats = [
      { id: "7", name: "Стол №7", zone: "Основной зал", capacity: 4, status: "free", x: 45, y: 70 },
      { id: "6", name: "Стол №6", zone: "Основной зал", capacity: 4, status: "free", x: 135, y: 70 },
      { id: "5", name: "Стол №5", zone: "Основной зал", capacity: 4, status: "free", x: 225, y: 70 },
      { id: "4", name: "Стол №4", zone: "Основной зал", capacity: 4, status: "free", x: 315, y: 70 },
      { id: "3", name: "Стол №3", zone: "Основной зал", capacity: 4, status: "free", x: 405, y: 70 },

      { id: "11", name: "Стол №11", zone: "Основной зал", capacity: 4, status: "free", x: 45, y: 160 },
      { id: "10", name: "Стол №10", zone: "Основной зал", capacity: 4, status: "free", x: 135, y: 160 },
      { id: "9", name: "Стол №9", zone: "Основной зал", capacity: 4, status: "free", x: 225, y: 160 },
      { id: "8", name: "Стол №8", zone: "Основной зал", capacity: 4, status: "free", x: 315, y: 160 },
      { id: "21", name: "VIP Кабинка №21", zone: "VIP зона", capacity: 6, status: "vip", x: 405, y: 160 },

      { id: "15", name: "Стол №15", zone: "Основной зал", capacity: 4, status: "free", x: 45, y: 250 },
      { id: "14", name: "Стол №14", zone: "Основной зал", capacity: 4, status: "free", x: 135, y: 250 },
      { id: "13", name: "Стол №13", zone: "Основной зал", capacity: 4, status: "free", x: 225, y: 250 },
      { id: "12", name: "Стол №12", zone: "Основной зал", capacity: 4, status: "free", x: 315, y: 250 },
      { id: "22", name: "VIP Кабинка №22", zone: "VIP зона", capacity: 6, status: "vip", x: 405, y: 250 },

      { id: "17", name: "Стол №17", zone: "Основной зал", capacity: 4, status: "free", x: 45, y: 340 },
      { id: "16", name: "Стол №16", zone: "Основной зал", capacity: 4, status: "free", x: 135, y: 340 },
      { id: "23", name: "VIP Кабинка №23", zone: "VIP зона", capacity: 6, status: "vip", x: 315, y: 340 },

      { id: "2", name: "VIP Кабинка №2", zone: "Отдельная кабинка", capacity: 8, status: "vip", right: 50, y: 90 },
      { id: "1", name: "VIP Кабинка №1", zone: "Отдельная кабинка", capacity: 8, status: "vip", right: 50, y: 180 },

      { id: "18", name: "Стол №18", zone: "Основной зал", capacity: 4, status: "free", x: 45, y: 505 },
      { id: "19", name: "Стол №19", zone: "Основной зал", capacity: 4, status: "free", x: 145, y: 505 },
      { id: "20", name: "Стол №20", zone: "Основной зал", capacity: 4, status: "booked", x: 245, y: 505 }
    ];

    let hallSeats = load("akbataHallSeats", defaultHallSeats);

    const branches = [
      {
        name: "АК БАТА — Центральный филиал",
        address: "Бишкек, проспект Чуй 120",
        phone: "+996 700 000 001",
        time: "10:00 — 23:00",
        coords: [42.8750, 74.6100],
        url: "https://2gis.kg/bishkek/search/Бишкек%2C%20проспект%20Чуй%20120"
      },
      {
        name: "АК БАТА — Южный филиал",
        address: "Бишкек, улица Ахунбаева 97",
        phone: "+996 700 000 002",
        time: "10:00 — 23:00",
        coords: [42.8345, 74.6023],
        url: "https://2gis.kg/bishkek/search/Бишкек%2C%20улица%20Ахунбаева%2097"
      },
      {
        name: "АК БАТА — Восточный филиал",
        address: "Бишкек, улица Ибраимова 115",
        phone: "+996 700 000 003",
        time: "10:00 — 23:00",
        coords: [42.8795, 74.6235],
        url: "https://2gis.kg/bishkek/search/Бишкек%2C%20улица%20Ибраимова%20115"
      },
      {
        name: "АК БАТА — Западный филиал",
        address: "Бишкек, проспект Манаса 40",
        phone: "+996 700 000 004",
        time: "10:00 — 23:00",
        coords: [42.8721, 74.5905],
        url: "https://2gis.kg/bishkek/search/Бишкек%2C%20проспект%20Манаса%2040"
      }
    ];

    const vacancies = [
      {
        title: "Официант",
        schedule: "09:00–18:00",
        age: "18+",
        experience: "от 4 месяцев",
        salary: "от 30 000 сом",
        duties: "Встреча гостей|Принятие заказов|Обслуживание столиков|Поддержание чистоты"
      },
      {
        title: "Повар",
        schedule: "10:00–22:00",
        age: "20+",
        experience: "от 1 года",
        salary: "от 45 000 сом",
        duties: "Приготовление блюд|Соблюдение рецептур|Контроль качества|Поддержание чистоты кухни"
      },
      {
        title: "Администратор",
        schedule: "09:00–21:00",
        age: "21+",
        experience: "от 6 месяцев",
        salary: "от 38 000 сом",
        duties: "Работа с бронями|Контроль персонала|Встреча гостей|Решение вопросов гостей"
      },
      {
        title: "Оператор поддержки",
        schedule: "09:00–18:00",
        age: "18+",
        experience: "можно без опыта",
        salary: "от 25 000 сом",
        duties: "Ответы в чате|Обработка онлайн-заявок|Передача информации администратору"
      },
      {
        title: "Уборщик",
        schedule: "08:00–17:00",
        age: "18+",
        experience: "не требуется",
        salary: "от 22 000 сом",
        duties: "Поддержание чистоты в зале|Уборка кабинок|Уборка служебных помещений"
      }
    ];

    let activeCategory = "all";
    let activeTag = "all";
    let searchQuery = "";
    let sortMode = "default";
    let cart = load("akbataCart", {});
    let selectedSeat = null;
    let pendingSeatPreview = null;
    let twoGisMap = null;
    let twoGisMarker = null;
    let isHallAdmin = false;
    let editingSeatId = null;
    let currentUser = load("akbataCurrentUser", null);
    let currentPayment = null;
    const ADMIN_LOGIN = "kanat";
    const ADMIN_PASSWORD = "20";

    function load(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch {
        return fallback;
      }
    }

    function save(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    function escapeHtml(value) {
      return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }

    function showToast(text) {
      const toast = document.getElementById("toast");
      toast.textContent = text;
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2400);
    }

    async function postBookingToServer(booking) {
      try {
        const response = await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(booking)
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          throw new Error(errorData?.error || `Ошибка сервера ${response.status}`);
        }

        return await response.json();
      } catch (err) {
        console.error("Ошибка отправки бронирования на сервер:", err);
        showToast("Не удалось отправить заявку на сервер. Сохранено локально.");
        return null;
      }
    }

    function isAllowedActionUser() {
      return currentUser && (currentUser.role === "user" || currentUser.role === "admin");
    }

    function requireActionLogin(actionText) {
      if (isAllowedActionUser()) return true;
      showToast(`Чтобы ${actionText}, нужно войти или зарегистрироваться.`);
      openAuthModal("login");
      return false;
    }

    function getCategoryTitle(id) {
      const item = categories.find(cat => cat.id === id);
      return item ? item.title : id;
    }

    function getTagTitle(id) {
      const labels = { hit: "Хит", new: "Новинка", spicy: "Острое", halal: "Халяль" };
      return labels[id] || id;
    }

    function renderMenuFilters() {
      document.getElementById("menuCategories").innerHTML = categories.map(cat => `
        <button class="chip ${activeCategory === cat.id ? "active" : ""}" data-category="${cat.id}" type="button">
          ${escapeHtml(cat.title)}
        </button>
      `).join("");

      document.getElementById("menuTags").innerHTML = tagFilters.map(tag => `
        <button class="chip ${activeTag === tag.id ? "active" : ""}" data-tag="${tag.id}" type="button">
          ${escapeHtml(tag.title)}
        </button>
      `).join("");
    }

    function normalizeSearchText(value) {
      const text = String(value || "")
        .toLowerCase()
        .replaceAll("ё", "е")
        .trim();

      const latinToCyrillic = {
        shch: "щ", yo: "е", yu: "ю", ya: "я", ch: "ч", sh: "ш", zh: "ж",
        a: "а", b: "б", c: "ц", d: "д", e: "е", f: "ф", g: "г", h: "х",
        i: "и", j: "ж", k: "к", l: "л", m: "м", n: "н", o: "о", p: "п",
        q: "к", r: "р", s: "с", t: "т", u: "у", v: "в", w: "в", x: "кс",
        y: "ы", z: "з"
      };

      const latin = text.replace(/[a-z]+/g, word => {
        let converted = word;
        Object.keys(latinToCyrillic)
          .sort((a, b) => b.length - a.length)
          .forEach(key => {
            converted = converted.replaceAll(key, latinToCyrillic[key]);
          });
        return converted;
      });

      return `${text} ${latin}`.replace(/[^а-яa-z0-9\s]/gi, " ").replace(/\s+/g, " ").trim();
    }

    function getFilteredMenu() {
      const queryWords = normalizeSearchText(searchQuery).split(" ").filter(Boolean);

      let result = menu.filter(item => {
        const categoryOk = activeCategory === "all" || item.category === activeCategory;
        const tagOk = activeTag === "all" || item.tags.includes(activeTag);
        const haystack = normalizeSearchText([
          item.name,
          item.desc,
          item.composition,
          getCategoryTitle(item.category),
          item.tags.map(getTagTitle).join(" ")
        ].join(" "));

        const searchOk = !queryWords.length || queryWords.every(word => haystack.includes(word));
        return categoryOk && tagOk && searchOk;
      });

      if (sortMode === "priceAsc") result.sort((a, b) => a.price - b.price);
      if (sortMode === "priceDesc") result.sort((a, b) => b.price - a.price);
      if (sortMode === "nameAsc") result.sort((a, b) => a.name.localeCompare(b.name, "ru"));

      return result;
    }

    function getCartQty(id) {
      return cart[String(id)] || 0;
    }

    function setCartQty(id, qty) {
      const key = String(id);
      if (qty <= 0) {
        delete cart[key];
      } else {
        cart[key] = qty;
      }
      save("akbataCart", cart);
      renderMenu();
      renderCart();
    }

    function renderMenu() {
      const grid = document.getElementById("menuGrid");
      const items = getFilteredMenu();

      if (!items.length) {
        grid.innerHTML = `<div class="empty-state">Блюда не найдены. Попробуйте другой запрос или категорию.</div>`;
        return;
      }

      grid.innerHTML = items.map(item => {
        const qty = getCartQty(item.id);
        return `
          <article class="dish-card">
            <div class="dish-img" style="background-image:url('${escapeHtml(item.img)}')">
              <div class="dish-tags">
                ${item.tags.map(tag => `<span class="dish-tag">${escapeHtml(getTagTitle(tag))}</span>`).join("")}
              </div>
            </div>
            <div class="dish-body">
              <h3>${escapeHtml(item.name)}</h3>
              <p>${escapeHtml(item.desc)}</p>
              <div class="dish-meta">
                ${escapeHtml(getCategoryTitle(item.category))} · ${escapeHtml(item.weight)}<br>
                Состав: ${escapeHtml(item.composition)}
              </div>
              <div class="dish-bottom">
                <div class="dish-price">${item.price} сом</div>
                <div class="qty-control">
                  <button type="button" data-dec="${item.id}">−</button>
                  <span>${qty}</span>
                  <button type="button" data-inc="${item.id}">+</button>
                </div>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    function getCartItems() {
      return Object.entries(cart)
        .map(([id, qty]) => {
          const item = menu.find(dish => String(dish.id) === String(id));
          return item ? { ...item, qty } : null;
        })
        .filter(Boolean);
    }

    function getCartTotal() {
      return getCartItems().reduce((acc, item) => acc + item.price * item.qty, 0);
    }

    function getPaymentAmount() {
      const prepayment = document.getElementById("prepayment")?.value || "";
      const cartTotal = getCartTotal();
      if (prepayment.includes("500")) return 500;
      if (prepayment.includes("1000")) return 1000;
      if (prepayment.includes("Полная")) return cartTotal > 0 ? cartTotal : 1000;
      return 0;
    }

    function getPaymentMethodTitle(method) {
  const titles = {
    visa: "Visa",
    mastercard: "MasterCard",
    elcart: "Элкарт",
    mbank: "Мбанк карта",
    optima: "Optima Bank карта",
    bakai: "Бакай Банк карта",
    companion: "Компаньон Банк карта",
    finca: "Финка Банк карта"
  };

  return titles[method] || "Не выбрано";
}

    function renderPaymentSummary() {
      const hint = document.getElementById("paymentHint");
      const status = document.getElementById("paymentStatus");
      const openBtn = document.getElementById("openPaymentBtn");
      const clearBtn = document.getElementById("clearPaymentBtn");
      if (!hint || !status || !openBtn || !clearBtn) return;

      const amount = getPaymentAmount();

      if (currentPayment) {
        hint.textContent = `Оплата №${currentPayment.id} через ${getPaymentMethodTitle(currentPayment.method)} · ${currentPayment.paidAt}`;
        status.textContent = `Оплачено: ${currentPayment.amount} сом`;
        status.classList.add("paid");
        openBtn.textContent = "Оплатить заново";
        clearBtn.classList.remove("hidden");
        return;
      }

      status.classList.remove("paid");
      clearBtn.classList.add("hidden");
      openBtn.textContent = "Оплатить онлайн";

      if (amount <= 0) {
        hint.textContent = "Выберите задаток 500/1000 сом или полную оплату.";
        status.textContent = "Не требуется";
      } else {
        hint.textContent = `Можно оплатить ${amount} сом картой, Optima, Компаньон, Финка или Бакай Банк.`;
        status.textContent = "Не оплачено";
      }
    }

    function renderCart() {
      const list = document.getElementById("cartList");
      const total = document.getElementById("cartTotal");
      const orderList = document.getElementById("orderList");
      const orderTotal = document.getElementById("orderTotal");
      const items = getCartItems();
      const sum = getCartTotal();

      const html = items.length
        ? items.map(item => `
          <div class="cart-row">
            <span>${escapeHtml(item.name)} × ${item.qty}</span>
            <b>${item.price * item.qty} сом</b>
          </div>
        `).join("")
        : "Пока блюда не выбраны.";

      list.innerHTML = html;
      orderList.innerHTML = html;
      total.textContent = `Итого: ${sum} сом`;
      orderTotal.textContent = `Итого: ${sum} сом`;
      renderPaymentSummary();
    }

    function getSeatStatusText(status) {
      if (status === "booked") return "Занято";
      if (status === "vip") return "VIP";
      return "Свободно";
    }

    function renderHallScheme() {
      const hallMap = document.getElementById("hallMap");
      const existingButtons = hallMap.querySelectorAll(".table-seat");
      existingButtons.forEach(btn => btn.remove());

      hallSeats.forEach(seat => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `table-seat ${seat.status}`;
        btn.dataset.seatId = seat.id;
        btn.textContent = seat.id;

        if (typeof seat.x === "number") btn.style.left = `${seat.x}px`;
        if (typeof seat.y === "number") btn.style.top = `${seat.y}px`;
        if (typeof seat.right === "number") btn.style.right = `${seat.right}px`;

        if (selectedSeat && selectedSeat.id === seat.id) {
          btn.classList.add("selected");
        }

        hallMap.appendChild(btn);
      });

      const freeCount = hallSeats.filter(seat => seat.status !== "booked").length;
      document.getElementById("freeSeatsCount").textContent = `Свободных мест: ${freeCount}`;
    }

    function renderHallList() {
      document.getElementById("hallList").innerHTML = hallSeats.map(seat => `
        <article class="hall-card ${seat.status} ${selectedSeat && selectedSeat.id === seat.id ? "selected" : ""}" data-card-seat="${seat.id}">
          <div class="hall-card-top">
            <span class="hall-status">${getSeatStatusText(seat.status)}</span>
            <span class="hall-dot ${seat.status}"></span>
          </div>
          <div class="hall-card-visual"></div>
          <p>${escapeHtml(seat.zone)}</p>
          <h4>${escapeHtml(seat.name)}</h4>
          <p>👥 ${seat.capacity} гостей</p>
        </article>
      `).join("");
    }

    function getSeatImage(seat) {
      if (!seat) return "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=90";
      if (seat.img) return seat.img;
      if (String(seat.zone || "").toLowerCase().includes("vip") || String(seat.name || "").toLowerCase().includes("кабин")) {
        return "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=90";
      }
      if (String(seat.zone || "").toLowerCase().includes("2")) {
        return "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=90";
      }
      return "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=90";
    }

    function updateSelectedSeatBox(seat) {
      const box = document.getElementById("selectedSeatBox");
      const useBtn = document.getElementById("useSeatBtn");

      if (!seat) {
        box.querySelector("h3").textContent = "Место не выбрано";
        box.querySelector("p").textContent = "Нажмите на свободный столик или кабинку на схеме.";
        useBtn.classList.add("hidden");
        return;
      }

      box.querySelector("h3").textContent = `Выбрано: ${seat.name}`;
      box.querySelector("p").textContent = `Зона: ${seat.zone} · Вместимость: ${seat.capacity} гостей · Статус: ${getSeatStatusText(seat.status)}`;

      if (seat.status === "booked") {
        useBtn.classList.add("hidden");
      } else {
        useBtn.classList.remove("hidden");
      }
    }

    function openSeatPreview(seat) {
      if (!seat) return;
      pendingSeatPreview = seat;

      const modal = document.getElementById("seatPreviewModal");
      const img = document.getElementById("seatPreviewImg");
      const title = document.getElementById("seatPreviewTitle");
      const info = document.getElementById("seatPreviewInfo");
      const confirmBtn = document.getElementById("confirmSeatPreview");

      img.style.backgroundImage = `url('${getSeatImage(seat)}')`;
      title.textContent = seat.name;
      info.textContent = `Зона: ${seat.zone}. Вместимость: ${seat.capacity} гостей. Статус: ${getSeatStatusText(seat.status)}.`;

      if (seat.status === "booked") {
        confirmBtn.disabled = true;
        confirmBtn.textContent = "Это место занято";
        showToast("Это место занято. Выберите свободное место.");
      } else {
        confirmBtn.disabled = false;
        confirmBtn.textContent = "Подтвердить и перейти к бронированию";
      }

      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
    }

    function closeSeatPreview() {
      document.getElementById("seatPreviewModal").classList.remove("show");
      document.getElementById("seatPreviewModal").setAttribute("aria-hidden", "true");
    }

    function selectSeat(seat) {
      if (!seat) return;
      selectedSeat = seat;
      renderHallScheme();
      renderHallList();
      updateSelectedSeatBox(seat);
      openSeatPreview(seat);
    }

    function applySeatToBooking() {
      const seat = pendingSeatPreview || selectedSeat;
      if (!seat || seat.status === "booked") return;

      selectedSeat = seat;
      document.getElementById("selectedSeatInput").value = seat.name;
      document.getElementById("sumSeat").textContent = seat.name;
      updateSelectedSeatBox(seat);
      renderHallScheme();
      renderHallList();
      closeSeatPreview();
      updateSummary();
      showToast(`${seat.name} добавлен в бронь`);
      document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
    }

    function openImageViewer(src, title) {
      const modal = document.getElementById("imageViewerModal");
      document.getElementById("imageViewerImg").src = src;
      document.getElementById("imageViewerTitle").textContent = title || "Фото";
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
    }

    function closeImageViewer() {
      const modal = document.getElementById("imageViewerModal");
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      document.getElementById("imageViewerImg").src = "";
    }

    function getBranchRouteUrl(branch) {
      const rawUrl = String(branch?.url || "").trim();
      if (rawUrl) return rawUrl;

      const searchText = [branch?.name, branch?.address].filter(Boolean).join(" ");
      if (searchText) {
        return `https://2gis.kg/bishkek/search/${encodeURIComponent(searchText)}`;
      }

      return "https://2gis.kg/bishkek/search/АК%20БАТА";
    }

    function renderBranches() {
      document.getElementById("branchList").innerHTML = branches.map((branch, index) => {
        const routeUrl = getBranchRouteUrl(branch);
        return `
          <article class="branch-card ${index === 0 ? "active" : ""}" data-branch="${index}">
            <h3>${escapeHtml(branch.name)}</h3>
            <p><b>Адрес:</b> <a href="${escapeHtml(routeUrl)}" target="_blank" rel="noreferrer">${escapeHtml(branch.address)}</a></p>
            <p><b>Телефон:</b> ${escapeHtml(branch.phone)}</p>
            <p><b>График:</b> ${escapeHtml(branch.time)}</p>
            <a class="btn btn-dark" href="${escapeHtml(routeUrl)}" target="_blank" rel="noreferrer">Построить маршрут в 2GIS</a>
          </article>
        `;
      }).join("");

      document.getElementById("bookingBranch").innerHTML =
        `<option value="">Выберите филиал</option>` +
        branches.map((branch, index) => `<option value="${index}">${escapeHtml(branch.name)}</option>`).join("");
    }

    function initTwoGis() {
      const fallbackText = document.querySelector(".map-fallback");
      if (!window.DG) {
        fallbackText.textContent = "Карта 2GIS не загрузилась. Проверьте интернет или используйте кнопки маршрута в карточках филиалов.";
        return;
      }

      DG.then(function () {
        const first = branches[0];
        twoGisMap = DG.map("twoGisMap", {
          center: first.coords,
          zoom: 13
        });

        twoGisMarker = DG.marker(first.coords).addTo(twoGisMap);
        twoGisMarker.bindPopup(first.name + "<br>" + first.address).openPopup();
      });
    }

    function selectBranch(index) {
      const branch = branches[index];
      if (!branch) return;

      document.querySelectorAll(".branch-card").forEach(card => card.classList.remove("active"));
      const active = document.querySelector(`[data-branch="${index}"]`);
      if (active) active.classList.add("active");

      if (twoGisMap && window.DG) {
        twoGisMap.setView(branch.coords, 15);
        if (twoGisMarker) {
          twoGisMap.removeLayer(twoGisMarker);
        }
        twoGisMarker = DG.marker(branch.coords).addTo(twoGisMap);
        twoGisMarker.bindPopup(branch.name + "<br>" + branch.address).openPopup();
      }
    }

    function renderVacancies() {
      document.getElementById("vacancyGrid").innerHTML = vacancies.map((job, index) => `
        <article class="vacancy-card ${index === 0 ? "active" : ""}" data-vacancy="${index}">
          <h3>${escapeHtml(job.title)}</h3>
          <p><b>График:</b> ${escapeHtml(job.schedule)}</p>
          <p><b>Возраст:</b> ${escapeHtml(job.age)}</p>
          <p><b>Опыт:</b> ${escapeHtml(job.experience)}</p>
          <p><b>Зарплата:</b> ${escapeHtml(job.salary)}</p>
        </article>
      `).join("");

      document.getElementById("resumePosition").innerHTML = vacancies.map((job, index) => `
        <option value="${index}">${escapeHtml(job.title)}</option>
      `).join("");

      selectVacancy(0);
    }

    function selectVacancy(index) {
      const job = vacancies[index];
      if (!job) return;

      document.querySelectorAll(".vacancy-mini").forEach(card => card.classList.remove("active"));
      const active = document.querySelector(`.vacancy-mini[data-vacancy="${index}"]`);
      if (active) active.classList.add("active");

      document.getElementById("resumePosition").value = String(index);
      document.getElementById("vacancyTitle").textContent = job.title;
      document.getElementById("vacancySchedule").textContent = job.schedule;
      document.getElementById("vacancyAge").textContent = job.age;
      document.getElementById("vacancyExperience").textContent = job.experience;
      document.getElementById("vacancySalary").textContent = job.salary;

      const duties = String(job.duties).split("|").map(item => item.trim()).filter(Boolean);
      document.getElementById("vacancyDutiesList").innerHTML = duties.map(item => `<li>${escapeHtml(item)}</li>`).join("");

      document.getElementById("vacancyRequirements").value =
        `Вакансия: ${job.title}
` +
        `График: ${job.schedule}
` +
        `Возраст: ${job.age}
` +
        `Опыт: ${job.experience}
` +
        `Зарплата: ${job.salary}
` +
        `Обязанности: ${duties.join(", ")}`;
    }

    function updateSummary() {
      const branchIndex = document.getElementById("bookingBranch").value;
      document.getElementById("sumBranch").textContent = branchIndex !== "" ? branches[Number(branchIndex)].name : "Не выбрано";
      document.getElementById("sumDate").textContent = document.getElementById("bookingDate").value || "Не выбрано";
      document.getElementById("sumTime").textContent = document.getElementById("bookingTime").value || "Не выбрано";
      document.getElementById("sumGuests").textContent = document.getElementById("guestCount").value || "Не выбрано";
      document.getElementById("sumSeat").textContent = document.getElementById("selectedSeatInput").value || "Не выбрано";
      document.getElementById("sumReason").textContent = document.getElementById("visitReason").value || "Не выбрано";
      renderPaymentSummary();
    }

    async function saveBooking(event) {
      event.preventDefault();

      const id = "AB-" + Date.now().toString().slice(-6);
      const bookings = load("akbataBookings", []);
      const amount = getPaymentAmount();

      if (amount > 0 && !currentPayment) {
        showToast("Сначала оплатите онлайн или выберите 'Без предоплаты'.");
        openPaymentModal();
        return;
      }

      const booking = {
        id,
        name: document.getElementById("clientName").value.trim(),
        phone: document.getElementById("clientPhone").value.trim(),
        user: currentUser ? currentUser.username : "Гость",
        branch: document.getElementById("bookingBranch").value !== "" ? branches[Number(document.getElementById("bookingBranch").value)].name : "",
        date: document.getElementById("bookingDate").value,
        time: document.getElementById("bookingTime").value,
        guests: Number(document.getElementById("guestCount").value) || 0,
        seat: document.getElementById("selectedSeatInput").value,
        reason: document.getElementById("visitReason").value,
        prepayment: document.getElementById("prepayment").value,
        comment: document.getElementById("bookingComment").value.trim(),
        order: getCartItems().map(item => `${item.name} × ${item.qty}`).join(", ") || "Без блюд",
        orderTotal: getCartTotal(),
        paymentAmount: currentPayment ? currentPayment.amount : 0,
        amountPaid: currentPayment ? currentPayment.amount : 0,
        paymentMethod: currentPayment ? getPaymentMethodTitle(currentPayment.method) : "Без оплаты",
        paymentId: currentPayment ? currentPayment.id : "",
        paymentStatus: currentPayment ? "Оплачено" : "Не требуется",
        status: currentPayment ? "Оплачено, ожидает подтверждения" : "Ожидает",
        createdAt: new Date().toLocaleString("ru-RU")
      };

      bookings.push(booking);
      save("akbataBookings", bookings);
      await postBookingToServer(booking);

      document.getElementById("successText").textContent = `Ваша заявка №${id} принята. ${booking.paymentStatus === "Оплачено" ? "Оплата получена." : "Администратор свяжется с вами в ближайшее время."}`;
      document.getElementById("successModal").classList.add("show");

      event.target.reset();
      cart = {};
      selectedSeat = null;
      currentPayment = null;
      save("akbataCart", cart);
      renderMenu();
      renderCart();
      renderHallScheme();
      renderHallList();
      updateSummary();
      renderAdminDashboard();
    }

    function openPaymentModal() {
      const amount = getPaymentAmount();
      if (amount <= 0) {
        showToast("Сначала выберите предоплату 500/1000 сом или полную оплату.");
        return;
      }

      if (!currentUser) {
        showToast("Для онлайн-оплаты сначала войдите или зарегистрируйтесь.");
        openAuthModal("login");
        return;
      }

      document.getElementById("paymentAmountText").textContent = `${amount} сом`;
      document.getElementById("payerName").value = currentUser.name || "";
      document.getElementById("paymentModal").classList.add("show");
    }

    function closePaymentModal() {
      document.getElementById("paymentModal").classList.remove("show");
    }

    function handlePaymentMethodChange() {
  const method = document.getElementById("paymentMethod").value;
  const cardFields = document.getElementById("cardFields");

  if (!method) {
    cardFields.classList.add("hidden");
  } else {
    cardFields.classList.remove("hidden");
  }
}

    function formatCardNumber(value) {
      return String(value).replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
    }

    function submitPayment(event) {
      event.preventDefault();
      const amount = getPaymentAmount();
      const method = document.getElementById("paymentMethod").value;

      if (amount <= 0) {
        showToast("Сумма оплаты не выбрана.");
        return;
      }

      if (!method) {
  showToast("Выберите карту для оплаты.");
  return;
}

const cardNumber = document.getElementById("cardNumber").value.replace(/\D/g, "");
const cardDate = document.getElementById("cardDate").value.trim();
const cvv = document.getElementById("cardCvv").value.replace(/\D/g, "");

if (cardNumber.length !== 16 || !/^\d{2}\/\d{2}$/.test(cardDate) || cvv.length !== 3) {
  showToast("Проверьте номер карты, срок и CVV.");
  return;
}

      currentPayment = {
        id: "PAY-" + Date.now().toString().slice(-7),
        amount,
        method,
        payer: document.getElementById("payerName").value.trim(),
        paidAt: new Date().toLocaleString("ru-RU"),
        status: "Оплачено"
      };

      closePaymentModal();
      renderPaymentSummary();
      showToast("Оплата успешно подтверждена.");
      event.target.reset();
      handlePaymentMethodChange();
    }

    function clearPayment() {
      currentPayment = null;
      renderPaymentSummary();
      showToast("Оплата отменена.");
    }

    function showAdminTab(tab) {
      document.querySelectorAll(".admin-tab").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.adminTab === tab);
      });

      document.querySelectorAll(".admin-tab-panel").forEach(panel => {
        panel.classList.remove("active");
      });

      const panelMap = {
        dashboard: "adminDashboardPanel",
        about: "adminAboutPanel",
        scheme: "adminSchemePanel"
      };

      const panel = document.getElementById(panelMap[tab] || "adminDashboardPanel");
      if (panel) panel.classList.add("active");
      if (tab === "dashboard") renderAdminDashboard();
    }

    function renderAdminDashboard() {
      const stats = document.getElementById("adminStats");
      const bookingsBody = document.getElementById("adminBookingsList");
      const usersList = document.getElementById("adminUsersList");
      const resumesList = document.getElementById("adminResumesList");
      const reviewsList = document.getElementById("adminReviewsList");
      if (!stats || !bookingsBody || !usersList || !resumesList) return;

      const bookings = load("akbataBookings", []);
      const users = getUsers();
      const resumes = load("akbataResumes", []);
      const reviews = load("akbataReviews", []);
      const paidSum = bookings.reduce((acc, item) => acc + Number(item.paymentAmount || 0), 0);
      const accepted = bookings.filter(item => ["Принято", "Подтверждено"].includes(item.status)).length;
      const pending = bookings.filter(item => !item.status || item.status === "Новая" || item.status === "Ожидает").length;

      stats.innerHTML = `
        <div class="admin-stat"><span>Пользователей</span><b>${users.length}</b></div>
        <div class="admin-stat"><span>Заявок</span><b>${bookings.length}</b><small>${pending} ожидает · ${accepted} принято</small></div>
        <div class="admin-stat"><span>Оплачено</span><b>${paidSum} сом</b></div>
        <div class="admin-stat"><span>Отзывы / резюме</span><b>${reviews.length} / ${resumes.length}</b></div>
      `;

      bookingsBody.innerHTML = bookings.length ? bookings.map(item => {
        const status = item.status || "Ожидает";
        const statusClass = status === "Принято" || status === "Подтверждено" ? "accepted" : status === "Отклонено" ? "declined" : "pending";
        return `
        <tr>
          <td><b>${escapeHtml(item.id)}</b><br><small>${escapeHtml(item.createdAt || "")}</small></td>
          <td><b>${escapeHtml(item.name || "Без имени")}</b><br><small>${escapeHtml(item.phone || "")}<br>${escapeHtml(item.user || item.email || "")}</small></td>
          <td>${escapeHtml(item.date || "—")}<br><small>${escapeHtml(item.time || "—")} · ${escapeHtml(item.guests || "—")} гостей</small></td>
          <td>${escapeHtml(item.seat || "—")}<br><small>${escapeHtml(item.branch || "")}</small></td>
          <td>${escapeHtml(item.order || "Без блюд")}<br><small>${Number(item.orderTotal || 0)} сом</small></td>
          <td><span class="pay-badge ${item.paymentStatus === "Оплачено" ? "paid" : ""}">${escapeHtml(item.paymentStatus || "Не оплачено")}</span><br><small>${escapeHtml(item.paymentMethod || "")} ${item.paymentAmount ? `· ${item.paymentAmount} сом` : ""}</small></td>
          <td><span class="admin-status-pill ${statusClass}">${escapeHtml(status)}</span></td>
          <td class="admin-action-cell">
            <button class="mini-admin-btn" type="button" data-booking-status="${escapeHtml(item.id)}" data-status="Принято">Принять</button>
            <button class="mini-admin-btn warn" type="button" data-booking-status="${escapeHtml(item.id)}" data-status="Отклонено">Отклонить</button>
            <button class="mini-admin-btn danger" type="button" data-booking-delete="${escapeHtml(item.id)}">Удалить</button>
          </td>
        </tr>`;
      }).join("") : `<tr><td colspan="8" class="admin-empty">Пока заявок нет.</td></tr>`;

      usersList.innerHTML = users.length ? users.map(user => {
        const card = user.card && user.card.number ? `**** ${String(user.card.number).slice(-4)}<br><small>${escapeHtml(user.card.holder || "")}</small>` : "Не привязана";
        return `
        <tr>
          <td><b>${escapeHtml(user.name || "Без имени")}</b><br><small>${escapeHtml(user.role || "user")}</small></td>
          <td>${escapeHtml(user.email || user.username || "—")}</td>
          <td>${escapeHtml(user.phone || "—")}</td>
          <td>${escapeHtml(user.age || "—")}</td>
          <td>${card}</td>
          <td><button class="mini-admin-btn danger" type="button" data-user-delete="${escapeHtml(user.id || user.email || user.phone)}">Удалить</button></td>
        </tr>`;
      }).join("") : `<tr><td colspan="6" class="admin-empty">Пользователей пока нет.</td></tr>`;

      if (reviewsList) {
        reviewsList.innerHTML = reviews.length ? reviews.map((item, index) => `
          <div class="admin-small-item">
            <b>${escapeHtml(item.name || "Пользователь")} ${item.rating ? `· ${escapeHtml(item.rating)}★` : ""}</b>
            <span>${escapeHtml(item.createdAt || item.date || "")}</span>
            <p>${escapeHtml(item.text || item.message || item.review || "")}</p>
            <button class="mini-admin-btn danger" type="button" data-review-delete="${index}">Удалить отзыв</button>
          </div>
        `).join("") : `<div class="admin-empty">Отзывов пока нет.</div>`;
      }

      resumesList.innerHTML = resumes.length ? resumes.map(item => `
        <div class="admin-small-item"><b>${escapeHtml(item.name)} — ${escapeHtml(item.position)}</b><span>${escapeHtml(item.phone)} · ${escapeHtml(item.createdAt)}</span><p>${escapeHtml(item.text || "")}</p></div>
      `).join("") : `<div class="admin-empty">Резюме пока нет.</div>`;
    }

    function updateBookingStatus(id, status) {
      const bookings = load("akbataBookings", []);
      const booking = bookings.find(item => item.id === id);
      if (!booking) return;
      booking.status = status;
      save("akbataBookings", bookings);
      renderAdminDashboard();
      showToast("Статус заявки обновлён.");
    }

    function deleteBooking(id) {
      const bookings = load("akbataBookings", []).filter(item => item.id !== id);
      save("akbataBookings", bookings);
      renderAdminDashboard();
      showToast("Заявка удалена.");
    }

    function deleteUser(id) {
      const users = getUsers().filter(user => String(user.id || user.email || user.phone) !== String(id));
      saveUsers(users);
      renderAdminDashboard();
      showToast("Пользователь удалён.");
    }

    function deleteReview(index) {
      const reviews = load("akbataReviews", []);
      reviews.splice(Number(index), 1);
      save("akbataReviews", reviews);
      renderAdminDashboard();
      showToast("Отзыв удалён.");
    }

    function runTests() {
      console.assert(menu.length > 0, "Menu should have dishes");
      console.assert(getFilteredMenu().length > 0, "Filtered menu should work");
      console.assert(hallSeats.some(seat => seat.status === "booked"), "Hall should have booked seat");
      console.assert(branches.length >= 4, "Branches should exist");
      console.assert(vacancies.some(job => job.title === "Официант" && job.experience.includes("4")), "Waiter requirements should exist");
      console.assert(document.getElementById("twoGisMap"), "2GIS container should exist");
      console.assert(document.getElementById("hallAdminModal"), "Hall admin editor should exist");
      console.assert(document.querySelector(".burger"), "Mobile burger menu should exist");
      console.assert(document.getElementById("authModal"), "Auth modal should exist");
      console.assert(document.getElementById("adminPanelBtn"), "Admin button should exist but be hidden for users");
      console.assert(document.getElementById("paymentModal"), "Payment modal should exist");
      console.assert(document.getElementById("adminDashboardPanel"), "Admin dashboard should exist");
      console.assert(Array.isArray(defaultHallSeats), "Default hall scheme should exist");
      console.log("AK BATA redesign tests passed");
    }


    function renderHallAdminList() {
      const list = document.getElementById("hallAdminList");
      if (!list) return;

      list.innerHTML = hallSeats.map(seat => `
        <div class="hall-admin-item ${editingSeatId === seat.id ? "active" : ""}" data-admin-seat="${escapeHtml(seat.id)}">
          <div>
            <b>${escapeHtml(seat.name)}</b><br>
            <span>${escapeHtml(seat.zone)} · ${seat.capacity} гостей · x:${seat.x ?? "-"} right:${seat.right ?? "-"} y:${seat.y}</span>
          </div>
          <div class="hall-admin-status ${seat.status}">${getSeatStatusText(seat.status)}</div>
        </div>
      `).join("");
    }

    function fillSeatForm(seat) {
      if (!seat) return;

      editingSeatId = seat.id;
      document.getElementById("editSeatIdOld").value = seat.id;
      document.getElementById("editSeatId").value = seat.id;
      document.getElementById("editSeatName").value = seat.name;
      document.getElementById("editSeatZone").value = seat.zone;
      document.getElementById("editSeatCapacity").value = seat.capacity;
      document.getElementById("editSeatStatus").value = seat.status;
      document.getElementById("editSeatX").value = seat.x ?? "";
      document.getElementById("editSeatRight").value = seat.right ?? "";
      document.getElementById("editSeatY").value = seat.y ?? "";

      renderHallAdminList();
    }

    function clearSeatForm() {
      editingSeatId = null;
      document.getElementById("hallSeatForm").reset();
      document.getElementById("editSeatIdOld").value = "";
      document.getElementById("editSeatStatus").value = "free";
      renderHallAdminList();
    }

    function saveSeatFromForm(event) {
      event.preventDefault();

      const oldId = document.getElementById("editSeatIdOld").value.trim();
      const id = document.getElementById("editSeatId").value.trim();
      const name = document.getElementById("editSeatName").value.trim();
      const zone = document.getElementById("editSeatZone").value.trim();
      const capacity = Number(document.getElementById("editSeatCapacity").value);
      const status = document.getElementById("editSeatStatus").value;
      const xRaw = document.getElementById("editSeatX").value;
      const rightRaw = document.getElementById("editSeatRight").value;
      const y = Number(document.getElementById("editSeatY").value);

      if (!id || !name || !zone || !capacity || Number.isNaN(y)) {
        showToast("Заполните обязательные поля.");
        return;
      }

      if (xRaw === "" && rightRaw === "") {
        showToast("Укажите X слева или позицию справа.");
        return;
      }

      const seat = {
        id,
        name,
        zone,
        capacity,
        status,
        y
      };

      if (xRaw !== "") seat.x = Number(xRaw);
      if (rightRaw !== "") seat.right = Number(rightRaw);

      const duplicate = hallSeats.some(item => item.id === id && item.id !== oldId);
      if (duplicate) {
        showToast("Такой ID уже есть. Укажите другой номер.");
        return;
      }

      if (oldId) {
        hallSeats = hallSeats.map(item => item.id === oldId ? seat : item);
      } else {
        hallSeats.push(seat);
      }

      save("akbataHallSeats", hallSeats);
      selectedSeat = null;
      renderHallScheme();
      renderHallList();
      fillSeatForm(seat);
      showToast("Схема сохранена.");
    }

    function deleteEditingSeat() {
      if (!editingSeatId) {
        showToast("Сначала выберите место из списка.");
        return;
      }

      if (!confirm("Удалить выбранное место со схемы?")) return;

      hallSeats = hallSeats.filter(item => item.id !== editingSeatId);
      save("akbataHallSeats", hallSeats);
      selectedSeat = null;
      renderHallScheme();
      renderHallList();
      clearSeatForm();
      showToast("Место удалено.");
    }

    function resetHallScheme() {
      if (!confirm("Сбросить схему к стандартному варианту?")) return;

      hallSeats = JSON.parse(JSON.stringify(defaultHallSeats));
      save("akbataHallSeats", hallSeats);
      selectedSeat = null;
      renderHallScheme();
      renderHallList();
      clearSeatForm();
      showToast("Схема сброшена.");
    }

    function openHallAdmin() {
      if (!isHallAdmin) {
        showToast("Доступ только для администратора. Войдите через форму входа.");
        openAuthModal("login");
        return;
      }

      document.getElementById("hallAdminModal").classList.add("show");
      showAdminTab("dashboard");
      renderHallAdminList();
      renderAdminDashboard();

      if (hallSeats.length && !editingSeatId) {
        fillSeatForm(hallSeats[0]);
      }
    }

    function closeHallAdmin() {
      document.getElementById("hallAdminModal").classList.remove("show");
    }


    function openAuthModal(tab = "login") {
      document.getElementById("authModal").classList.add("show");
      showAuthTab(tab);
    }

    function closeAuthModal() {
      document.getElementById("authModal").classList.remove("show");
      document.getElementById("authStatus").textContent = "";
    }

    function showAuthTab(tab) {
      document.querySelectorAll(".auth-tab").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".auth-form").forEach(form => form.classList.remove("active"));

      document.querySelector(`[data-auth-tab="${tab}"]`).classList.add("active");
      document.getElementById(tab === "register" ? "registerForm" : "loginForm").classList.add("active");
      document.getElementById("authStatus").textContent = "";
    }

    function getUsers() {
      return load("akbataUsers", []);
    }

    function saveUsers(users) {
      save("akbataUsers", users);
    }

    function updateAuthInterface() {
  const adminBtn = document.getElementById("adminPanelBtn");
  const loginBtn = document.getElementById("openLoginBtn");
  const registerBtn = document.getElementById("openRegisterBtn");

  isHallAdmin = currentUser && currentUser.role === "admin";

  if (isHallAdmin) {
    adminBtn.classList.remove("hidden");
    adminBtn.textContent = "Админ-панель";

    loginBtn.textContent = "Администратор";
    registerBtn.textContent = "Выйти";
  } else if (currentUser && currentUser.role === "user") {
    adminBtn.classList.add("hidden");

    loginBtn.textContent = currentUser.name || "Профиль";
    registerBtn.textContent = "Выйти";
  } else {
    adminBtn.classList.add("hidden");

    loginBtn.textContent = "Вход";
    registerBtn.textContent = "Регистрация";
  }
}

    function loginAccount(event) {
      event.preventDefault();

      const username = document.getElementById("loginUsername").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      const status = document.getElementById("authStatus");

      if (username === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
        currentUser = { role: "admin", name: "Администратор", username: ADMIN_LOGIN };
        save("akbataCurrentUser", currentUser);
        updateAuthInterface();
        closeAuthModal();
        showToast("Вы вошли как администратор. Админ-панель открыта.");
        openHallAdmin();
        event.target.reset();
        return;
      }

      const user = getUsers().find(item => (item.username === username || item.email === username || item.phone === username) && item.password === password);

      if (user) {
        currentUser = { role: "user", name: user.name, username: user.username || user.email, email: user.email, phone: user.phone, age: user.age, card: user.card || null };
        save("akbataCurrentUser", currentUser);
        updateAuthInterface();
        closeAuthModal();
        showToast("Вы вошли как пользователь.");
        event.target.reset();
        return;
      }

      status.textContent = "Неверный логин или пароль.";
      status.style.color = "#b91c1c";
    }

    function registerAccount(event) {
      event.preventDefault();

      const name = document.getElementById("regName")?.value.trim() || "";
      const phone = document.getElementById("regPhone")?.value.trim() || "";
      const email = document.getElementById("regEmail")?.value.trim() || "";
      const password = document.getElementById("regPassword")?.value.trim() || "";
      const age = document.getElementById("regAge")?.value.trim() || "";
      const status = document.getElementById("authStatus");

      const setError = (text) => {
        status.textContent = text;
        status.style.color = "#b91c1c";
      };

      if (!name || !phone || !email || !password || !age) {
        setError("Заполните ФИО, номер телефона, email, пароль и возраст.");
        return;
      }

      if (!/^[А-Яа-яЁёA-Za-z\s-]{2,}$/.test(name)) {
        setError("В поле ФИО можно вводить только буквы.");
        return;
      }

      if (!/^\+996\d{9}$/.test(phone)) {
        setError("Телефон должен начинаться с +996 и содержать дальше 9 цифр.");
        return;
      }

      if (!/^\d{1,3}$/.test(age) || Number(age) < 10 || Number(age) > 100) {
        setError("Возраст должен быть числом от 10 до 100.");
        return;
      }

      if (email === ADMIN_LOGIN || phone === ADMIN_LOGIN) {
        setError("Этот логин зарезервирован для администратора.");
        return;
      }

      const users = getUsers();

      if (users.some(item => item.email === email || item.phone === phone || item.username === email || item.username === phone)) {
        setError("Пользователь с таким email или телефоном уже зарегистрирован.");
        return;
      }

      const user = {
        id: Date.now(),
        role: "user",
        name,
        phone,
        email,
        username: email,
        password,
        age
      };

      users.push(user);
      saveUsers(users);

      currentUser = { role: "user", name, username: email, email, phone, age };
      save("akbataCurrentUser", currentUser);

      updateAuthInterface();
      closeAuthModal();
      showToast("Регистрация успешна. Вы вошли как пользователь.");
      event.target.reset();
    }

    function logoutAccount() {
      currentUser = null;
      isHallAdmin = false;
      localStorage.removeItem("akbataCurrentUser");
      updateAuthInterface();
      showToast("Вы вышли из аккаунта.");
    }

    function initEvents() {


     document.getElementById("openLoginBtn").addEventListener("click", function () {
  if (currentUser && currentUser.role === "admin") {
    openHallAdmin();
    return;
  }

  if (currentUser && currentUser.role === "user") {
    openProfileModal();
    return;
  }

  openAuthModal("login");
});

      document.getElementById("openRegisterBtn").addEventListener("click", () => {
        if (currentUser) {
          logoutAccount();
          return;
        }
        openAuthModal("register");
      });

      document.getElementById("adminPanelBtn").addEventListener("click", openHallAdmin);
      document.getElementById("closeAuthModal").addEventListener("click", closeAuthModal);

      document.getElementById("authModal").addEventListener("click", event => {
        if (event.target.id === "authModal") closeAuthModal();
      });

      document.querySelectorAll("[data-auth-tab]").forEach(btn => {
        btn.addEventListener("click", () => showAuthTab(btn.dataset.authTab));
      });

      document.getElementById("loginForm").addEventListener("submit", loginAccount);
      document.getElementById("registerForm").addEventListener("submit", registerAccount);

      const adminEditorLoginBtn = document.getElementById("adminEditorLogin");
      if (adminEditorLoginBtn) {
        adminEditorLoginBtn.addEventListener("click", openHallAdmin);
      }
      document.getElementById("closeHallAdmin").addEventListener("click", closeHallAdmin);
      document.getElementById("hallSeatForm").addEventListener("submit", saveSeatFromForm);
      document.getElementById("newSeatBtn").addEventListener("click", clearSeatForm);
      document.getElementById("deleteSeatBtn").addEventListener("click", deleteEditingSeat);
      document.getElementById("resetHallBtn").addEventListener("click", resetHallScheme);

      document.getElementById("hallAdminList").addEventListener("click", event => {
        const item = event.target.closest("[data-admin-seat]");
        if (!item) return;
        const seat = hallSeats.find(seat => seat.id === item.dataset.adminSeat);
        fillSeatForm(seat);
      });

      document.getElementById("hallAdminModal").addEventListener("click", event => {
        if (event.target.id === "hallAdminModal") closeHallAdmin();
        const statusBtn = event.target.closest("[data-booking-status]");
        const deleteBtn = event.target.closest("[data-booking-delete]");
        const userDeleteBtn = event.target.closest("[data-user-delete]");
        const reviewDeleteBtn = event.target.closest("[data-review-delete]");
        if (statusBtn) updateBookingStatus(statusBtn.dataset.bookingStatus, statusBtn.dataset.status);
        if (deleteBtn) deleteBooking(deleteBtn.dataset.bookingDelete);
        if (userDeleteBtn && confirm("Удалить этого пользователя?")) deleteUser(userDeleteBtn.dataset.userDelete);
        if (reviewDeleteBtn && confirm("Удалить этот отзыв?")) deleteReview(reviewDeleteBtn.dataset.reviewDelete);
      });

      document.querySelectorAll("[data-admin-tab]").forEach(btn => {
        btn.addEventListener("click", () => showAdminTab(btn.dataset.adminTab));
      });

      document.getElementById("clearBookingsBtn").addEventListener("click", () => {
        if (!confirm("Очистить все брони?")) return;
        save("akbataBookings", []);
        renderAdminDashboard();
        showToast("Все брони очищены.");
      });

      document.getElementById("openPaymentBtn").addEventListener("click", openPaymentModal);
      document.getElementById("clearPaymentBtn").addEventListener("click", clearPayment);
      document.getElementById("closePaymentModal").addEventListener("click", closePaymentModal);
      document.getElementById("paymentModal").addEventListener("click", event => {
        if (event.target.id === "paymentModal") closePaymentModal();
      });
      document.getElementById("paymentMethod").addEventListener("change", handlePaymentMethodChange);
      document.getElementById("paymentForm").addEventListener("submit", submitPayment);
      document.getElementById("cardNumber").addEventListener("input", event => {
        event.target.value = formatCardNumber(event.target.value);
      });
      document.getElementById("cardDate").addEventListener("input", event => {
        let value = event.target.value.replace(/\D/g, "").slice(0, 4);
        if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
        event.target.value = value;
      });

      document.getElementById("burgerBtn").addEventListener("click", () => {
        document.getElementById("navLinks").classList.toggle("open");
      });

      document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"));
      });

      document.getElementById("menuSearch").addEventListener("input", event => {
        searchQuery = event.target.value.trim();

        // При поиске показываем блюда по всему меню, чтобы фильтр категории не мешал результатам.
        if (searchQuery) {
          activeCategory = "all";
          activeTag = "all";
          renderMenuFilters();
        }

        renderMenu();
      });

      document.getElementById("menuSort").addEventListener("change", event => {
        sortMode = event.target.value;
        renderMenu();
      });

      document.getElementById("menuCategories").addEventListener("click", event => {
        const btn = event.target.closest("[data-category]");
        if (!btn) return;
        activeCategory = btn.dataset.category;
        renderMenuFilters();
        renderMenu();
      });

      document.getElementById("menuTags").addEventListener("click", event => {
        const btn = event.target.closest("[data-tag]");
        if (!btn) return;
        activeTag = btn.dataset.tag;
        renderMenuFilters();
        renderMenu();
      });

      document.getElementById("menuGrid").addEventListener("click", event => {
        const inc = event.target.closest("[data-inc]");
        const dec = event.target.closest("[data-dec]");
        if (inc) {
          if (!requireActionLogin("добавить блюдо в корзину")) return;
          const id = inc.dataset.inc;
          setCartQty(id, getCartQty(id) + 1);
        }
        if (dec) {
          if (!requireActionLogin("изменить корзину")) return;
          const id = dec.dataset.dec;
          setCartQty(id, getCartQty(id) - 1);
        }
      });

      document.getElementById("goBookingFromCart").addEventListener("click", () => {
        document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
      });

      document.querySelectorAll(".hall-switch-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".hall-switch-btn").forEach(item => item.classList.remove("active"));
          btn.classList.add("active");

          document.getElementById("schemeView").classList.toggle("active", btn.dataset.view === "scheme");
          document.getElementById("listView").classList.toggle("active", btn.dataset.view === "list");
        });
      });

      document.getElementById("hallMap").addEventListener("click", event => {
        const btn = event.target.closest("[data-seat-id]");
        if (!btn) return;
        const seat = hallSeats.find(item => item.id === btn.dataset.seatId);
        selectSeat(seat);
      });

      document.getElementById("hallList").addEventListener("click", event => {
        const card = event.target.closest("[data-card-seat]");
        if (!card) return;
        const seat = hallSeats.find(item => item.id === card.dataset.cardSeat);
        selectSeat(seat);
      });

      document.getElementById("useSeatBtn").addEventListener("click", applySeatToBooking);
      document.getElementById("confirmSeatPreview").addEventListener("click", applySeatToBooking);
      document.getElementById("cancelSeatPreview").addEventListener("click", closeSeatPreview);
      document.getElementById("closeSeatPreview").addEventListener("click", closeSeatPreview);
      document.getElementById("seatPreviewModal").addEventListener("click", event => {
        if (event.target.id === "seatPreviewModal") closeSeatPreview();
      });

      document.getElementById("galleryGrid").addEventListener("click", event => {
        const item = event.target.closest("[data-gallery-src]");
        if (!item) return;
        openImageViewer(item.dataset.gallerySrc, item.dataset.galleryTitle);
      });
      document.getElementById("closeImageViewer").addEventListener("click", closeImageViewer);
      document.getElementById("imageViewerModal").addEventListener("click", event => {
        if (event.target.id === "imageViewerModal") closeImageViewer();
      });

      document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
          closeImageViewer();
          closeSeatPreview();
        }
      });

      document.getElementById("branchList").addEventListener("click", event => {
        const card = event.target.closest("[data-branch]");
        if (!card) return;
        selectBranch(Number(card.dataset.branch));
      });

      document.querySelector(".vacancy-mini-list").addEventListener("click", event => {
        const card = event.target.closest("[data-vacancy]");
        if (!card) return;
        selectVacancy(Number(card.dataset.vacancy));
      });

      document.getElementById("resumePosition").addEventListener("change", event => {
        selectVacancy(Number(event.target.value));
      });

      ["bookingBranch", "bookingDate", "bookingTime", "guestCount", "visitReason", "selectedSeatInput", "prepayment"].forEach(id => {
        document.getElementById(id).addEventListener("input", updateSummary);
        document.getElementById(id).addEventListener("change", updateSummary);
      });

      document.getElementById("bookingForm").addEventListener("submit", saveBooking);

      document.getElementById("vacancyForm").addEventListener("submit", event => {
        event.preventDefault();
        const resumes = load("akbataResumes", []);
        resumes.push({
          name: document.getElementById("resumeName").value.trim(),
          phone: document.getElementById("resumePhone").value.trim(),
          position: vacancies[Number(document.getElementById("resumePosition").value)].title,
          text: document.getElementById("resumeText").value.trim(),
          createdAt: new Date().toLocaleString("ru-RU")
        });
        save("akbataResumes", resumes);
        showToast("Резюме отправлено!");
        event.target.reset();
        selectVacancy(0);
      });

      document.getElementById("contactForm").addEventListener("submit", event => {
        event.preventDefault();
        showToast("Сообщение отправлено!");
        event.target.reset();
      });

      document.getElementById("closeSuccess").addEventListener("click", () => {
        document.getElementById("successModal").classList.remove("show");
      });

      document.getElementById("chatToggle").addEventListener("click", () => {
        document.getElementById("chatBox").classList.toggle("show");
      });

      document.getElementById("sendChat").addEventListener("click", sendChat);
      document.getElementById("chatMessage").addEventListener("keydown", event => {
        if (event.key === "Enter") sendChat();
      });

      document.getElementById("whatsappFloat").addEventListener("click", () => {
        window.open("https://wa.me/996700000001", "_blank");
      });
    }

    function sendChat() {
      const input = document.getElementById("chatMessage");
      const msg = input.value.trim();
      if (!msg) return;

      const body = document.getElementById("chatBody");
      body.innerHTML += `<p><b>Вы:</b> ${escapeHtml(msg)}</p>`;
      body.innerHTML += `<p><b>Админ:</b> Спасибо! Мы скоро ответим.</p>`;
      input.value = "";
      body.scrollTop = body.scrollHeight;
    }

    function init() {
      renderMenuFilters();
      renderMenu();
      renderCart();
      renderHallScheme();
      renderHallList();
      renderBranches();
      initEvents();
      updateAuthInterface();
      selectVacancy(0);
      updateSummary();
      renderPaymentSummary();
      handlePaymentMethodChange();
      runTests();

      setTimeout(initTwoGis, 600);
    }

    document.addEventListener("DOMContentLoaded", init);
/* =========================
   АДМИН-ПАНЕЛЬ
========================= */

(function () {
  const ADMIN_LOGIN = "kanat";
  const ADMIN_PASSWORD = "20";

  const defaultAdminSeats = [
    { id: "7", name: "Стол №7", zone: "Основной зал", capacity: 4, status: "free", x: 45, y: 70 },
    { id: "6", name: "Стол №6", zone: "Основной зал", capacity: 4, status: "free", x: 135, y: 70 },
    { id: "5", name: "Стол №5", zone: "Основной зал", capacity: 4, status: "free", x: 225, y: 70 },
    { id: "4", name: "Стол №4", zone: "Основной зал", capacity: 4, status: "free", x: 315, y: 70 },
    { id: "3", name: "Стол №3", zone: "Основной зал", capacity: 4, status: "free", x: 405, y: 70 },

    { id: "11", name: "Стол №11", zone: "Основной зал", capacity: 4, status: "free", x: 45, y: 160 },
    { id: "10", name: "Стол №10", zone: "Основной зал", capacity: 4, status: "free", x: 135, y: 160 },
    { id: "9", name: "Стол №9", zone: "Основной зал", capacity: 4, status: "free", x: 225, y: 160 },
    { id: "8", name: "Стол №8", zone: "Основной зал", capacity: 4, status: "free", x: 315, y: 160 },
    { id: "21", name: "VIP Кабинка №21", zone: "VIP зона", capacity: 6, status: "vip", x: 405, y: 160 },

    { id: "15", name: "Стол №15", zone: "Основной зал", capacity: 4, status: "free", x: 45, y: 250 },
    { id: "14", name: "Стол №14", zone: "Основной зал", capacity: 4, status: "free", x: 135, y: 250 },
    { id: "13", name: "Стол №13", zone: "Основной зал", capacity: 4, status: "free", x: 225, y: 250 },
    { id: "12", name: "Стол №12", zone: "Основной зал", capacity: 4, status: "free", x: 315, y: 250 },
    { id: "22", name: "VIP Кабинка №22", zone: "VIP зона", capacity: 6, status: "vip", x: 405, y: 250 },

    { id: "17", name: "Стол №17", zone: "Основной зал", capacity: 4, status: "free", x: 45, y: 340 },
    { id: "16", name: "Стол №16", zone: "Основной зал", capacity: 4, status: "free", x: 135, y: 340 },
    { id: "23", name: "VIP Кабинка №23", zone: "VIP зона", capacity: 6, status: "vip", x: 315, y: 340 },

    { id: "2", name: "VIP Кабинка №2", zone: "Отдельная кабинка", capacity: 8, status: "vip", right: 50, y: 90 },
    { id: "1", name: "VIP Кабинка №1", zone: "Отдельная кабинка", capacity: 8, status: "vip", right: 50, y: 180 },

    { id: "18", name: "Стол №18", zone: "Основной зал", capacity: 4, status: "free", x: 45, y: 505 },
    { id: "19", name: "Стол №19", zone: "Основной зал", capacity: 4, status: "free", x: 145, y: 505 },
    { id: "20", name: "Стол №20", zone: "Основной зал", capacity: 4, status: "booked", x: 245, y: 505 }
  ];

  let editingSeatId = null;

  function adminLoad(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function adminSave(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function adminEscape(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getSeats() {
    return adminLoad("akbataHallSeats", defaultAdminSeats);
  }

  function saveSeats(seats) {
    adminSave("akbataHallSeats", seats);
  }

  function getBookings() {
    return adminLoad("akbataBookings", []);
  }

  function saveBookings(bookings) {
    adminSave("akbataBookings", bookings);
  }

  function openAdmin() {
    document.getElementById("adminOverlay").classList.add("show");

    const isLogged = localStorage.getItem("akbataAdminLogged") === "yes";

    if (isLogged) {
      document.getElementById("adminLoginBox").classList.add("hidden");
      document.getElementById("adminContent").classList.remove("hidden");
      renderAdminAll();
    } else {
      document.getElementById("adminLoginBox").classList.remove("hidden");
      document.getElementById("adminContent").classList.add("hidden");
    }
  }

  function closeAdmin() {
    document.getElementById("adminOverlay").classList.remove("show");
  }

  function adminLogin() {
    const login = document.getElementById("adminLoginInput").value.trim();
    const password = document.getElementById("adminPasswordInput").value.trim();

    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      localStorage.setItem("akbataAdminLogged", "yes");
      document.getElementById("adminLoginBox").classList.add("hidden");
      document.getElementById("adminContent").classList.remove("hidden");
      renderAdminAll();
    } else {
      alert("Неверный логин или пароль");
    }
  }

  function adminLogout() {
    localStorage.removeItem("akbataAdminLogged");
    document.getElementById("adminLoginBox").classList.remove("hidden");
    document.getElementById("adminContent").classList.add("hidden");
  }

  function showAdminTab(tab) {
    document.querySelectorAll(".admin-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.adminTab === tab);
    });

    document.getElementById("adminBookingsPanel").classList.toggle("active", tab === "bookings");
    document.getElementById("adminSeatsPanel").classList.toggle("active", tab === "seats");
    document.getElementById("adminStatsPanel").classList.toggle("active", tab === "stats");

    renderAdminAll();
  }

  function renderAdminAll() {
    renderBookings();
    renderSeats();
    renderStats();
  }

  function renderBookings() {
    const body = document.getElementById("adminBookingsBody");
    if (!body) return;

    const bookings = getBookings();

    if (!bookings.length) {
      body.innerHTML = `
        <tr>
          <td colspan="8">Пока броней нет</td>
        </tr>
      `;
      return;
    }

    body.innerHTML = bookings.map((booking) => {
      const id = booking.id || booking.number || "";
      const name = booking.name || booking.clientName || "";
      const phone = booking.phone || booking.clientPhone || "";
      const date = booking.date || "";
      const time = booking.time || "";
      const seat = booking.seat || booking.selectedSeat || "";
      const status = booking.status || "Новая";

      return `
        <tr>
          <td>${adminEscape(id)}</td>
          <td>${adminEscape(name)}</td>
          <td>${adminEscape(phone)}</td>
          <td>${adminEscape(date)}</td>
          <td>${adminEscape(time)}</td>
          <td>${adminEscape(seat)}</td>
          <td><span class="admin-status">${adminEscape(status)}</span></td>
          <td>
            <div class="admin-mini-actions">
              <button class="admin-mini-btn" type="button" data-confirm-booking="${adminEscape(id)}">
                Подтвердить
              </button>
              <button class="admin-mini-btn danger" type="button" data-delete-booking="${adminEscape(id)}">
                Удалить
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  function confirmBooking(id) {
    const bookings = getBookings();

    const updated = bookings.map((booking) => {
      const bookingId = booking.id || booking.number || "";

      if (String(bookingId) === String(id)) {
        return {
          ...booking,
          status: "Подтверждено"
        };
      }

      return booking;
    });

    saveBookings(updated);
    renderAdminAll();
  }

  function deleteBooking(id) {
    const bookings = getBookings();

    const updated = bookings.filter((booking) => {
      const bookingId = booking.id || booking.number || "";
      return String(bookingId) !== String(id);
    });

    saveBookings(updated);
    renderAdminAll();
  }

  function clearBookings() {
    const yes = confirm("Удалить все брони?");
    if (!yes) return;

    saveBookings([]);
    renderAdminAll();
  }

  function renderSeats() {
    const list = document.getElementById("adminSeatsList");
    if (!list) return;

    const seats = getSeats();

    if (!seats.length) {
      list.innerHTML = "Пока мест нет";
      return;
    }

    list.innerHTML = seats.map((seat) => `
      <div class="admin-seat-item">
        <div>
          <h4>${adminEscape(seat.name)}</h4>
          <p>
            ID: ${adminEscape(seat.id)}<br>
            Зона: ${adminEscape(seat.zone)}<br>
            Гостей: ${adminEscape(seat.capacity)}<br>
            Статус: ${adminEscape(getSeatStatusTitle(seat.status))}<br>
            X: ${adminEscape(seat.x || "")}, Y: ${adminEscape(seat.y || "")}, Right: ${adminEscape(seat.right || "")}
          </p>
        </div>

        <div class="admin-mini-actions">
          <button class="admin-mini-btn" type="button" data-edit-seat="${adminEscape(seat.id)}">
            Изм.
          </button>
          <button class="admin-mini-btn danger" type="button" data-remove-seat="${adminEscape(seat.id)}">
            Удал.
          </button>
        </div>
      </div>
    `).join("");
  }

  function getSeatStatusTitle(status) {
    if (status === "free") return "Свободно";
    if (status === "vip") return "VIP / кабинка";
    if (status === "booked") return "Занято";
    return status;
  }

  function fillSeatForm(id) {
    const seats = getSeats();
    const seat = seats.find((item) => String(item.id) === String(id));
    if (!seat) return;

    editingSeatId = seat.id;

    document.getElementById("seatIdInput").value = seat.id || "";
    document.getElementById("seatNameInput").value = seat.name || "";
    document.getElementById("seatZoneInput").value = seat.zone || "";
    document.getElementById("seatCapacityInput").value = seat.capacity || "";
    document.getElementById("seatStatusInput").value = seat.status || "free";
    document.getElementById("seatXInput").value = seat.x || "";
    document.getElementById("seatYInput").value = seat.y || "";
    document.getElementById("seatRightInput").value = seat.right || "";
  }

  function clearSeatForm() {
    editingSeatId = null;
    document.getElementById("adminSeatForm").reset();
  }

  function saveSeat(event) {
    event.preventDefault();

    const id = document.getElementById("seatIdInput").value.trim();
    const name = document.getElementById("seatNameInput").value.trim();
    const zone = document.getElementById("seatZoneInput").value.trim();
    const capacity = Number(document.getElementById("seatCapacityInput").value);
    const status = document.getElementById("seatStatusInput").value;
    const xValue = document.getElementById("seatXInput").value.trim();
    const yValue = document.getElementById("seatYInput").value.trim();
    const rightValue = document.getElementById("seatRightInput").value.trim();

    if (!id || !name || !zone || !capacity || !yValue) {
      alert("Заполните обязательные поля");
      return;
    }

    const seat = {
      id,
      name,
      zone,
      capacity,
      status,
      y: Number(yValue)
    };

    if (xValue !== "") {
      seat.x = Number(xValue);
    }

    if (rightValue !== "") {
      seat.right = Number(rightValue);
    }

    let seats = getSeats();

    if (editingSeatId) {
      seats = seats.map((item) => {
        if (String(item.id) === String(editingSeatId)) {
          return seat;
        }
        return item;
      });
    } else {
      const exists = seats.some((item) => String(item.id) === String(id));

      if (exists) {
        alert("Место с таким ID уже существует");
        return;
      }

      seats.push(seat);
    }

    saveSeats(seats);
    clearSeatForm();
    renderAdminAll();

    alert("Место сохранено. Чтобы схема обновилась на странице, перезагрузите сайт.");
  }

  function removeSeat(id) {
    const yes = confirm("Удалить это место?");
    if (!yes) return;

    const seats = getSeats().filter((seat) => String(seat.id) !== String(id));
    saveSeats(seats);
    renderAdminAll();

    alert("Место удалено. Чтобы схема обновилась на странице, перезагрузите сайт.");
  }

  function resetSeats() {
    const yes = confirm("Вернуть стандартную схему зала?");
    if (!yes) return;

    saveSeats(defaultAdminSeats);
    clearSeatForm();
    renderAdminAll();

    alert("Схема сброшена. Перезагрузите сайт.");
  }

  function renderStats() {
    const box = document.getElementById("adminStatsBox");
    if (!box) return;

    const bookings = getBookings();
    const seats = getSeats();

    const free = seats.filter((seat) => seat.status === "free").length;
    const vip = seats.filter((seat) => seat.status === "vip").length;
    const booked = seats.filter((seat) => seat.status === "booked").length;

    box.innerHTML = `
      <div class="admin-stat-card">
        <b>${bookings.length}</b>
        <span>Броней</span>
      </div>

      <div class="admin-stat-card">
        <b>${free}</b>
        <span>Свободных мест</span>
      </div>

      <div class="admin-stat-card">
        <b>${vip}</b>
        <span>VIP мест</span>
      </div>

      <div class="admin-stat-card">
        <b>${booked}</b>
        <span>Занято</span>
      </div>
    `;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("adminOpenBtn");
    const closeBtn = document.getElementById("adminCloseBtn");
    const loginBtn = document.getElementById("adminLoginBtn");
    const logoutBtn = document.getElementById("adminLogoutBtn");
    const clearBookingsBtn = document.getElementById("clearBookingsBtn");
    const resetSeatsBtn = document.getElementById("resetSeatsBtn");
    const clearSeatFormBtn = document.getElementById("clearSeatFormBtn");
    const seatForm = document.getElementById("adminSeatForm");

    if (openBtn) openBtn.addEventListener("click", openAdmin);
    if (closeBtn) closeBtn.addEventListener("click", closeAdmin);
    if (loginBtn) loginBtn.addEventListener("click", adminLogin);
    if (logoutBtn) logoutBtn.addEventListener("click", adminLogout);
    if (clearBookingsBtn) clearBookingsBtn.addEventListener("click", clearBookings);
    if (resetSeatsBtn) resetSeatsBtn.addEventListener("click", resetSeats);
    if (clearSeatFormBtn) clearSeatFormBtn.addEventListener("click", clearSeatForm);
    if (seatForm) seatForm.addEventListener("submit", saveSeat);

    document.querySelectorAll(".admin-tab").forEach((btn) => {
      btn.addEventListener("click", function () {
        showAdminTab(btn.dataset.adminTab);
      });
    });

    document.addEventListener("click", function (event) {
      const confirmBtn = event.target.closest("[data-confirm-booking]");
      const deleteBtn = event.target.closest("[data-delete-booking]");
      const editSeatBtn = event.target.closest("[data-edit-seat]");
      const removeSeatBtn = event.target.closest("[data-remove-seat]");

      if (confirmBtn) {
        confirmBooking(confirmBtn.dataset.confirmBooking);
      }

      if (deleteBtn) {
        deleteBooking(deleteBtn.dataset.deleteBooking);
      }

      if (editSeatBtn) {
        fillSeatForm(editSeatBtn.dataset.editSeat);
      }

      if (removeSeatBtn) {
        removeSeat(removeSeatBtn.dataset.removeSeat);
      }
    });
  });
})();
/* ================================
   ЛИЧНЫЙ КАБИНЕТ ПОЛЬЗОВАТЕЛЯ
================================ */

function openProfileModal() {
  if (!currentUser || currentUser.role !== "user") {
    showToast("Сначала войдите как пользователь.");
    openAuthModal("login");
    return;
  }

  renderUserProfile();
  document.getElementById("profileModal").classList.add("show");
}

function closeProfileModal() {
  document.getElementById("profileModal").classList.remove("show");
}

function renderUserProfile() {
  const name = currentUser.name || "Пользователь";
  const username = currentUser.username || "Не указано";
  const photo = localStorage.getItem("akbataProfilePhoto_" + username);

  document.getElementById("profileName").textContent = name;
  document.getElementById("profileEmail").textContent = username;
  document.getElementById("profileRole").textContent = "Пользователь";
  document.getElementById("profileBadge").textContent = "Пользователь";
  document.getElementById("profileInfoName").textContent = name;
  document.getElementById("profileInfoUsername").textContent = username;

  const avatar = document.getElementById("profileAvatar");
  const firstLetter = name.trim().charAt(0).toUpperCase() || "П";

  if (photo) {
    avatar.innerHTML = `<img src="${photo}" alt="Фото профиля">`;
  } else {
    avatar.innerHTML = `<span id="profileAvatarLetter">${firstLetter}</span>`;
  }

  const bookings = load("akbataBookings", []).filter(function (booking) {
    return booking.username === username || booking.phone === username || booking.clientPhone === username;
  });

  const cartItems = typeof getCartItems === "function" ? getCartItems() : [];
  const payments = bookings.filter(function (booking) {
    return booking.payment && booking.payment.status === "paid";
  });

  document.getElementById("profileBookingsCount").textContent = bookings.length;
  document.getElementById("profileOrdersCount").textContent = cartItems.length;
  document.getElementById("profilePaymentsCount").textContent = payments.length;

  const list = document.getElementById("profileBookingsList");

  if (!bookings.length) {
    list.innerHTML = "Броней пока нет.";
    return;
  }

  list.innerHTML = bookings.map(function (booking) {
    return `
      <div class="profile-booking-item">
        <b>Бронь №${escapeHtml(booking.id || booking.number || "—")}</b>
        <span>
          ${escapeHtml(booking.date || "Дата не указана")} ·
          ${escapeHtml(booking.time || "Время не указано")}<br>
          Место: ${escapeHtml(booking.seat || booking.selectedSeat || "Не указано")}<br>
          Статус: ${escapeHtml(booking.status || "Новая")}
        </span>
      </div>
    `;
  }).join("");
}

function saveProfilePhoto(event) {
  const file = event.target.files[0];

  if (!file || !currentUser) return;

  const reader = new FileReader();

  reader.onload = function () {
    localStorage.setItem("akbataProfilePhoto_" + currentUser.username, reader.result);
    renderUserProfile();
    showToast("Фото профиля обновлено.");
  };

  reader.readAsDataURL(file);
}

function logoutFromProfile() {
  currentUser = null;
  localStorage.removeItem("akbataCurrentUser");

  closeProfileModal();
  updateAuthInterface();

  showToast("Вы вышли из аккаунта.");
}

document.addEventListener("DOMContentLoaded", function () {
  const closeProfileBtn = document.getElementById("closeProfileModal");
  const photoInput = document.getElementById("profilePhotoInput");
  const logoutBtn = document.getElementById("profileLogoutBtn");
  const goBookingBtn = document.getElementById("profileGoBooking");

  if (closeProfileBtn) {
    closeProfileBtn.addEventListener("click", closeProfileModal);
  }

  if (photoInput) {
    photoInput.addEventListener("change", saveProfilePhoto);
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", logoutFromProfile);
  }

  if (goBookingBtn) {
    goBookingBtn.addEventListener("click", function () {
      closeProfileModal();
    });
  }
});
/* ================================
   ЛИЧНЫЙ КАБИНЕТ ПОЛЬЗОВАТЕЛЯ
================================ */

function openProfileModal() {
  if (!currentUser || currentUser.role !== "user") {
    showToast("Сначала войдите как пользователь.");
    openAuthModal("login");
    return;
  }

  renderUserProfile();

  const profileModal = document.getElementById("profileModal");
  if (profileModal) {
    profileModal.classList.add("show");
  }
}

function closeProfileModal() {
  const profileModal = document.getElementById("profileModal");
  if (profileModal) {
    profileModal.classList.remove("show");
  }
}

function renderUserProfile() {
  const name = currentUser.name || "Пользователь";
  const username = currentUser.username || "Не указано";
  const photo = localStorage.getItem("akbataProfilePhoto_" + username);

  document.getElementById("profileName").textContent = name;
  document.getElementById("profileEmail").textContent = username;
  document.getElementById("profileRole").textContent = "Пользователь";
  document.getElementById("profileBadge").textContent = "Пользователь";
  document.getElementById("profileInfoName").textContent = name;
  document.getElementById("profileInfoUsername").textContent = username;

  const avatar = document.getElementById("profileAvatar");
  const firstLetter = name.trim().charAt(0).toUpperCase() || "П";

  if (photo) {
    avatar.innerHTML = `<img src="${photo}" alt="Фото профиля">`;
  } else {
    avatar.innerHTML = `<span id="profileAvatarLetter">${firstLetter}</span>`;
  }

  const bookings = load("akbataBookings", []).filter(function (booking) {
    return (
      booking.username === username ||
      booking.phone === username ||
      booking.clientPhone === username
    );
  });

  const cartItems = typeof getCartItems === "function" ? getCartItems() : [];

  document.getElementById("profileBookingsCount").textContent = bookings.length;
  document.getElementById("profileOrdersCount").textContent = cartItems.length;
  document.getElementById("profilePaymentsCount").textContent = "0";

  const list = document.getElementById("profileBookingsList");

  if (!bookings.length) {
    list.innerHTML = "Броней пока нет.";
    return;
  }

  list.innerHTML = bookings.map(function (booking) {
    return `
      <div class="profile-booking-item">
        <b>Бронь №${escapeHtml(booking.id || booking.number || "—")}</b>
        <span>
          ${escapeHtml(booking.date || "Дата не указана")} ·
          ${escapeHtml(booking.time || "Время не указано")}<br>
          Место: ${escapeHtml(booking.seat || booking.selectedSeat || "Не указано")}<br>
          Статус: ${escapeHtml(booking.status || "Новая")}
        </span>
      </div>
    `;
  }).join("");
}

function saveProfilePhoto(event) {
  const file = event.target.files[0];

  if (!file || !currentUser) return;

  const reader = new FileReader();

  reader.onload = function () {
    localStorage.setItem("akbataProfilePhoto_" + currentUser.username, reader.result);
    renderUserProfile();
    showToast("Фото профиля обновлено.");
  };

  reader.readAsDataURL(file);
}

function logoutFromProfile() {
  currentUser = null;
  localStorage.removeItem("akbataCurrentUser");

  closeProfileModal();
  updateAuthInterface();

  showToast("Вы вышли из аккаунта.");
}

document.addEventListener("DOMContentLoaded", function () {
  const closeProfileBtn = document.getElementById("closeProfileModal");
  const photoInput = document.getElementById("profilePhotoInput");
  const logoutBtn = document.getElementById("profileLogoutBtn");
  const goBookingBtn = document.getElementById("profileGoBooking");

  if (closeProfileBtn) {
    closeProfileBtn.addEventListener("click", closeProfileModal);
  }

  if (photoInput) {
    photoInput.addEventListener("change", saveProfilePhoto);
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", logoutFromProfile);
  }

  if (goBookingBtn) {
    goBookingBtn.addEventListener("click", function () {
      closeProfileModal();
    });
  }
});
/* ==================================================
   АДМИН: РЕДАКТОР МЕНЮ + ПЕРЕТАСКИВАНИЕ СТОЛИКОВ
================================================== */

let editingMenuId = null;
let dragSeatId = null;
let dragOffsetX = 0;
let dragOffsetY = 0;

/* ---------- МЕНЮ: сохранение ---------- */

function saveMenuToStorage() {
  save("akbataMenu", menu);
}

function getNextMenuId() {
  if (!menu.length) return 1;
  return Math.max(...menu.map(item => Number(item.id) || 0)) + 1;
}

/* ---------- МЕНЮ: список в админке ---------- */

function renderAdminMenuList() {
  const list = document.getElementById("adminMenuList");
  if (!list) return;

  if (!menu.length) {
    list.innerHTML = `<div class="admin-empty">Меню пустое.</div>`;
    return;
  }

  list.innerHTML = menu.map(item => `
    <div class="admin-menu-row ${String(editingMenuId) === String(item.id) ? "active" : ""}" data-admin-menu-id="${escapeHtml(item.id)}">
      <div class="admin-menu-row-info">
        <b>${escapeHtml(item.name)}</b>
        <span>${escapeHtml(getCategoryTitle(item.category))} | ${Number(item.price) || 0} сом</span>
        <small>${escapeHtml(item.weight || "")} ${item.cookTime ? " · " + escapeHtml(item.cookTime) : ""} ${item.servings ? " · " + escapeHtml(item.servings) + " порц." : ""}</small>
      </div>

      <div class="admin-menu-row-actions">
        <button class="admin-edit-btn" type="button" data-edit-menu="${escapeHtml(item.id)}">Редактировать</button>
        <button class="admin-delete-btn" type="button" data-delete-menu="${escapeHtml(item.id)}">Удалить</button>
      </div>
    </div>
  `).join("");
}

/* ---------- МЕНЮ: заполнить форму ---------- */

function fillMenuForm(item) {
  if (!item) return;

  editingMenuId = item.id;

  document.getElementById("editMenuIdOld").value = item.id;
  document.getElementById("editMenuId").value = item.id;
  document.getElementById("editMenuName").value = item.name || "";
  document.getElementById("editMenuCategory").value = item.category || "second";
  document.getElementById("editMenuPrice").value = item.price || "";
  document.getElementById("editMenuWeight").value = item.weight || "";
  document.getElementById("editMenuCookTime").value = item.cookTime || "";
  document.getElementById("editMenuServings").value = item.servings || "";
  document.getElementById("editMenuComposition").value = item.composition || "";
  document.getElementById("editMenuTags").value = Array.isArray(item.tags) ? item.tags.join(", ") : "";
  document.getElementById("editMenuDesc").value = item.desc || "";
  document.getElementById("editMenuImg").value = item.img || "";
  document.getElementById("editMenuIngredients").value = Array.isArray(item.ingredients) ? item.ingredients.join(", ") : (item.ingredients || "");
  document.getElementById("editMenuInstructions").value = Array.isArray(item.instructions) ? item.instructions.join("; ") : (item.instructions || "");

  renderAdminMenuList();
}

/* ---------- МЕНЮ: очистить форму ---------- */

function clearMenuForm() {
  editingMenuId = null;

  const form = document.getElementById("adminMenuForm");
  if (form) form.reset();

  document.getElementById("editMenuIdOld").value = "";
  document.getElementById("editMenuId").value = getNextMenuId();
  document.getElementById("editMenuCategory").value = "second";
  document.getElementById("editMenuCookTime").value = "";
  document.getElementById("editMenuServings").value = "";
  document.getElementById("editMenuIngredients").value = "";
  document.getElementById("editMenuInstructions").value = "";

  renderAdminMenuList();
}

/* ---------- МЕНЮ: сохранить блюдо ---------- */

function saveMenuFromForm(event) {
  event.preventDefault();

  const oldId = document.getElementById("editMenuIdOld").value.trim();
  const id = Number(document.getElementById("editMenuId").value);
  const name = document.getElementById("editMenuName").value.trim();
  const category = document.getElementById("editMenuCategory").value;
  const price = Number(document.getElementById("editMenuPrice").value);
  const weight = document.getElementById("editMenuWeight").value.trim();
  const cookTime = document.getElementById("editMenuCookTime")?.value.trim() || "";
  const servings = Number(document.getElementById("editMenuServings")?.value || 0);
  const composition = document.getElementById("editMenuComposition").value.trim();
  const tags = document.getElementById("editMenuTags").value
    .split(",")
    .map(tag => tag.trim())
    .filter(Boolean);
  const desc = document.getElementById("editMenuDesc").value.trim();
  const img = document.getElementById("editMenuImg").value.trim();
  const ingredients = (document.getElementById("editMenuIngredients")?.value || "")
    .split(",")
    .map(item => item.trim())
    .filter(Boolean);
  const instructions = (document.getElementById("editMenuInstructions")?.value || "")
    .split(";")
    .map(item => item.trim())
    .filter(Boolean);

  if (!id || !name || !category || !price || !weight || !composition || !desc || !img) {
    showToast("Заполните все поля блюда.");
    return;
  }

  const duplicate = menu.some(item => Number(item.id) === id && String(item.id) !== String(oldId));

  if (duplicate) {
    showToast("Блюдо с таким ID уже есть.");
    return;
  }

  const dish = {
    id,
    name,
    category,
    price,
    weight,
    cookTime,
    servings,
    composition,
    tags,
    desc,
    img,
    ingredients,
    instructions
  };

  if (oldId) {
    menu = menu.map(item => String(item.id) === String(oldId) ? dish : item);
  } else {
    menu.push(dish);
  }

  saveMenuToStorage();

  renderMenuFilters();
  renderMenu();
  renderCart();
  fillMenuForm(dish);

  showToast("Блюдо сохранено.");
}

/* ---------- МЕНЮ: удалить блюдо ---------- */

function deleteMenuItem() {
  if (!editingMenuId) {
    showToast("Сначала выберите блюдо из списка.");
    return;
  }

  if (!confirm("Удалить выбранное блюдо из меню?")) return;

  menu = menu.filter(item => String(item.id) !== String(editingMenuId));

  const savedCart = load("akbataCart", {});
  delete savedCart[String(editingMenuId)];
  save("akbataCart", savedCart);

  cart = savedCart;

  saveMenuToStorage();
  clearMenuForm();

  renderMenuFilters();
  renderMenu();
  renderCart();

  showToast("Блюдо удалено.");
}

/* ---------- МЕНЮ: сброс ---------- */

function resetMenuItems() {
  if (!confirm("Сбросить меню к стандартному варианту?")) return;

  menu = JSON.parse(JSON.stringify(defaultMenu));

  saveMenuToStorage();
  clearMenuForm();

  renderMenuFilters();
  renderMenu();
  renderCart();

  showToast("Меню сброшено.");
}

/* ==================================================
   АДМИН: ВКЛАДКИ
================================================== */

function showAdminTab(tab) {
  document.querySelectorAll(".admin-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.adminTab === tab);
  });

  document.querySelectorAll(".admin-tab-panel").forEach(panel => {
    panel.classList.remove("active");
  });

  if (tab === "dashboard") {
    document.getElementById("adminDashboardPanel").classList.add("active");

    if (typeof renderAdminDashboard === "function") {
      renderAdminDashboard();
    }
  }

  if (tab === "scheme") {
    document.getElementById("adminSchemePanel").classList.add("active");

    if (typeof renderHallAdminList === "function") {
      renderHallAdminList();
    }

    enableAdminSeatDrag();
  }

  if (tab === "menu") {
    document.getElementById("adminMenuPanel").classList.add("active");
    renderAdminMenuList();
  }
}

/* ==================================================
   АДМИН: ПЕРЕТАСКИВАНИЕ СТОЛИКОВ
================================================== */

function enableAdminSeatDrag() {
  if (!isHallAdmin) return;

  const hallMap = document.getElementById("hallMap");
  if (!hallMap) return;

  document.querySelectorAll(".table-seat").forEach(btn => {
    btn.classList.add("admin-draggable");
  });
}

document.addEventListener("mousedown", function (event) {
  if (!isHallAdmin) return;

  const adminPanelIsOpen = document.getElementById("hallAdminModal")?.classList.contains("show");
  const schemePanelIsOpen = document.getElementById("adminSchemePanel")?.classList.contains("active");

  if (!adminPanelIsOpen || !schemePanelIsOpen) return;

  const seatBtn = event.target.closest(".table-seat[data-seat-id]");
  if (!seatBtn) return;

  event.preventDefault();
  event.stopPropagation();

  dragSeatId = seatBtn.dataset.seatId;

  const rect = seatBtn.getBoundingClientRect();
  dragOffsetX = event.clientX - rect.left;
  dragOffsetY = event.clientY - rect.top;

  seatBtn.classList.add("selected");
});

document.addEventListener("mousemove", function (event) {
  if (!dragSeatId) return;

  const hallMap = document.getElementById("hallMap");
  if (!hallMap) return;

  const mapRect = hallMap.getBoundingClientRect();

  let x = Math.round(event.clientX - mapRect.left - dragOffsetX);
  let y = Math.round(event.clientY - mapRect.top - dragOffsetY);

  x = Math.max(0, Math.min(x, hallMap.offsetWidth - 70));
  y = Math.max(0, Math.min(y, hallMap.offsetHeight - 70));

  const seat = hallSeats.find(item => String(item.id) === String(dragSeatId));
  if (!seat) return;

  delete seat.right;
  seat.x = x;
  seat.y = y;

  const seatBtn = document.querySelector(`.table-seat[data-seat-id="${CSS.escape(String(dragSeatId))}"]`);

  if (seatBtn) {
    seatBtn.style.left = x + "px";
    seatBtn.style.top = y + "px";
    seatBtn.style.right = "auto";
  }

  if (typeof fillSeatForm === "function") {
    fillSeatForm(seat);
  }
});

document.addEventListener("mouseup", function () {
  if (!dragSeatId) return;

  save("akbataHallSeats", hallSeats);

  if (typeof renderHallAdminList === "function") {
    renderHallAdminList();
  }

  dragSeatId = null;

  document.querySelectorAll(".table-seat").forEach(btn => {
    btn.classList.remove("selected");
  });

  showToast("Позиция столика сохранена.");
});

/* ==================================================
   АДМИН: ОБРАБОТЧИКИ ДЛЯ МЕНЮ
================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const adminMenuForm = document.getElementById("adminMenuForm");
  const newMenuItemBtn = document.getElementById("newMenuItemBtn");
  const deleteMenuItemBtn = document.getElementById("deleteMenuItemBtn");
  const resetMenuBtn = document.getElementById("resetMenuBtn");
  const adminMenuList = document.getElementById("adminMenuList");

  if (adminMenuForm) {
    adminMenuForm.addEventListener("submit", saveMenuFromForm);
  }

  if (newMenuItemBtn) {
    newMenuItemBtn.addEventListener("click", clearMenuForm);
  }

  if (deleteMenuItemBtn) {
    deleteMenuItemBtn.addEventListener("click", deleteMenuItem);
  }

  if (resetMenuBtn) {
    resetMenuBtn.addEventListener("click", resetMenuItems);
  }

  if (adminMenuList) {
    adminMenuList.addEventListener("click", function (event) {
      const deleteBtn = event.target.closest("[data-delete-menu]");
      if (deleteBtn) {
        editingMenuId = deleteBtn.dataset.deleteMenu;
        deleteMenuItem();
        return;
      }

      const editBtn = event.target.closest("[data-edit-menu]");
      const item = event.target.closest("[data-admin-menu-id]");
      const id = editBtn?.dataset.editMenu || item?.dataset.adminMenuId;
      if (!id) return;

      const dish = menu.find(dish => String(dish.id) === String(id));
      fillMenuForm(dish);
    });
  }

  document.querySelectorAll(".admin-tab").forEach(btn => {
    btn.addEventListener("click", function () {
      showAdminTab(btn.dataset.adminTab);
    });
  });
});

/* ==================================================
   НОВАЯ АДМИН-ПАНЕЛЬ: категории разделов, карта и галерея
================================================== */
function showAdminTab(tab) {
  document.querySelectorAll(".admin-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.adminTab === tab);
  });

  document.querySelectorAll(".admin-tab-panel").forEach(panel => {
    panel.classList.remove("active");
  });

  const map = {
    about: "adminAboutPanel",
    menu: "adminMenuPanel",
    scheme: "adminSchemePanel",
    booking: "adminDashboardPanel",
    payment: "adminPaymentPanel",
    branches: "adminBranchesPanel",
    vacancies: "adminVacanciesPanel",
    contacts: "adminContactsPanel",
    gallery: "adminGalleryPanel",
    resumes: "adminResumesPanel"
  };

  const panel = document.getElementById(map[tab] || "adminAboutPanel");
  if (panel) panel.classList.add("active");

  if (tab === "branches") fillBranchEditor();
  if (tab === "gallery") fillGalleryEditor();
  if (tab === "about") fillAboutEditor();
  if (tab === "payment") fillPaymentEditor();
  if (tab === "contacts") fillContactsEditor();

  if (tab === "scheme") {
    renderHallScheme();
    renderHallAdminList();
  }
  if (tab === "menu") renderAdminMenuList();
  if (tab === "booking") renderAdminDashboard();
}

function applySavedBranches() {
  const saved = load("akbataBranches", null);
  if (Array.isArray(saved)) {
    saved.forEach((item, index) => {
      if (branches[index]) branches[index] = item;
    });
  }
}

function fillBranchEditor() {
  applySavedBranches();
  const select = document.getElementById("adminBranchIndex");
  if (!select) return;
  select.innerHTML = branches.map((branch, index) => `<option value="${index}">${escapeHtml(branch.name)}</option>`).join("");
  const index = Number(select.value || 0);
  const branch = branches[index] || branches[0];
  if (!branch) return;
  document.getElementById("adminBranchName").value = branch.name || "";
  document.getElementById("adminBranchAddress").value = branch.address || "";
  document.getElementById("adminBranchPhone").value = branch.phone || "";
  document.getElementById("adminBranchTime").value = branch.time || "";
  document.getElementById("adminBranchLat").value = branch.coords?.[0] || "";
  document.getElementById("adminBranchLng").value = branch.coords?.[1] || "";
  document.getElementById("adminBranchUrl").value = branch.url || "";
}

function saveBranchEditor() {
  const index = Number(document.getElementById("adminBranchIndex")?.value || 0);
  if (!branches[index]) return;

  const branchData = {
    name: document.getElementById("adminBranchName").value.trim(),
    address: document.getElementById("adminBranchAddress").value.trim(),
    phone: document.getElementById("adminBranchPhone").value.trim(),
    time: document.getElementById("adminBranchTime").value.trim(),
    coords: [Number(document.getElementById("adminBranchLat").value), Number(document.getElementById("adminBranchLng").value)]
  };

  branches[index] = {
    ...branchData,
    url: document.getElementById("adminBranchUrl").value.trim() || getBranchRouteUrl(branchData)
  };
  save("akbataBranches", branches);
  renderBranches();
  showToast("Филиал и данные карты сохранены.");
}

function fillGalleryEditor() {
  const select = document.getElementById("adminGalleryIndex");
  const items = Array.from(document.querySelectorAll("#galleryGrid .gallery-img"));
  if (!select || !items.length) return;
  select.innerHTML = items.map((item, index) => `<option value="${index}">${escapeHtml(item.dataset.galleryTitle || "Фото " + (index + 1))}</option>`).join("");
  const index = Number(select.value || 0);
  const item = items[index];
  document.getElementById("adminGalleryTitle").value = item?.dataset.galleryTitle || "";
  document.getElementById("adminGallerySrc").value = item?.dataset.gallerySrc || "";
}

function saveGalleryEditor() {
  const index = Number(document.getElementById("adminGalleryIndex")?.value || 0);
  const items = Array.from(document.querySelectorAll("#galleryGrid .gallery-img"));
  const item = items[index];
  if (!item) return;
  const title = document.getElementById("adminGalleryTitle").value.trim();
  const src = document.getElementById("adminGallerySrc").value.trim();
  item.dataset.galleryTitle = title;
  item.dataset.gallerySrc = src;
  item.style.backgroundImage = `url('${src}')`;
  save("akbataGallery", items.map(el => ({ title: el.dataset.galleryTitle, src: el.dataset.gallerySrc })));
  fillGalleryEditor();
  showToast("Фото галереи сохранено.");
}

function applySavedGallery() {
  const saved = load("akbataGallery", null);
  if (!Array.isArray(saved)) return;
  const items = Array.from(document.querySelectorAll("#galleryGrid .gallery-img"));
  saved.forEach((photo, index) => {
    if (!items[index]) return;
    items[index].dataset.galleryTitle = photo.title || "Фото";
    items[index].dataset.gallerySrc = photo.src || "";
    items[index].style.backgroundImage = `url('${photo.src || ""}')`;
  });
}

function fillAboutEditor() {
  const title = document.querySelector("#about .about-card h3")?.textContent || "";
  const text = document.querySelector("#about .about-card p")?.textContent.trim() || "";
  const saved = load("akbataAbout", null);
  document.getElementById("adminAboutTitle").value = saved?.title || title;
  document.getElementById("adminAboutText").value = saved?.text || text;
}

function saveAboutEditor() {
  const title = document.getElementById("adminAboutTitle").value.trim();
  const text = document.getElementById("adminAboutText").value.trim();
  save("akbataAbout", { title, text });
  const h = document.querySelector("#about .about-card h3");
  const p = document.querySelector("#about .about-card p");
  if (h) h.textContent = title;
  if (p) p.textContent = text;
  showToast("Раздел «О ресторане» сохранён.");
}

function applySavedAbout() {
  const saved = load("akbataAbout", null);
  if (!saved) return;
  const h = document.querySelector("#about .about-card h3");
  const p = document.querySelector("#about .about-card p");
  if (h) h.textContent = saved.title || h.textContent;
  if (p) p.textContent = saved.text || p.textContent;
}

function fillPaymentEditor() {
  const saved = load("akbataPaymentText", "");
  document.getElementById("adminPaymentText").value = saved || document.getElementById("paymentHint")?.textContent || "";
}

function savePaymentEditor() {
  const text = document.getElementById("adminPaymentText").value.trim();
  save("akbataPaymentText", text);
  const target = document.getElementById("paymentHint");
  if (target) target.textContent = text;
  showToast("Текст оплаты сохранён.");
}

function getDefaultContacts() {
  return {
    phone: "+996 700 000 001",
    whatsapp: "+996 700 000 001",
    email: "info@akbata.kg",
    city: "Бишкек, Кыргызстан"
  };
}

function fillContactsEditor() {
  const saved = { ...getDefaultContacts(), ...load("akbataContacts", {}) };
  const phoneInput = document.getElementById("adminContactPhone");
  const whatsappInput = document.getElementById("adminContactWhatsapp");
  const emailInput = document.getElementById("adminContactEmail");
  const cityInput = document.getElementById("adminContactCity");

  if (phoneInput) phoneInput.value = saved.phone;
  if (whatsappInput) whatsappInput.value = saved.whatsapp;
  if (emailInput) emailInput.value = saved.email;
  if (cityInput) cityInput.value = saved.city;
}

function normalizePhoneForWhatsapp(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits || "996700000001";
}

function saveContactsEditor(event) {
  if (event) event.preventDefault();

  const contacts = {
    phone: document.getElementById("adminContactPhone")?.value.trim() || "+996 700 000 001",
    whatsapp: document.getElementById("adminContactWhatsapp")?.value.trim() || "+996 700 000 001",
    email: document.getElementById("adminContactEmail")?.value.trim() || "info@akbata.kg",
    city: document.getElementById("adminContactCity")?.value.trim() || "Бишкек, Кыргызстан"
  };

  save("akbataContacts", contacts);
  applySavedContacts();
  fillContactsEditor();
  showToast("Контакты сохранены.");
}

function applySavedContacts() {
  const saved = { ...getDefaultContacts(), ...load("akbataContacts", {}) };

  const phoneText = document.getElementById("contactPhoneText");
  const whatsappText = document.getElementById("contactWhatsappText");
  const emailText = document.getElementById("contactEmailText");
  const cityText = document.getElementById("contactCityText");
  const whatsappLink = document.getElementById("contactWhatsappLink");

  if (phoneText) phoneText.textContent = saved.phone;
  if (whatsappText) whatsappText.textContent = saved.whatsapp;
  if (emailText) emailText.textContent = saved.email;
  if (cityText) cityText.textContent = saved.city;
  if (whatsappLink) whatsappLink.href = `https://wa.me/${normalizePhoneForWhatsapp(saved.whatsapp)}`;
}

document.addEventListener("DOMContentLoaded", function () {
  applySavedBranches();
  applySavedGallery();
  applySavedAbout();
  applySavedContacts();

  document.getElementById("adminBranchIndex")?.addEventListener("change", fillBranchEditor);
  document.getElementById("saveBranchBtn")?.addEventListener("click", saveBranchEditor);
  document.getElementById("adminGalleryIndex")?.addEventListener("change", fillGalleryEditor);
  document.getElementById("saveGalleryBtn")?.addEventListener("click", saveGalleryEditor);
  document.getElementById("saveAboutBtn")?.addEventListener("click", saveAboutEditor);
  document.getElementById("savePaymentBtn")?.addEventListener("click", savePaymentEditor);
  document.getElementById("saveContactsBtn")?.addEventListener("click", saveContactsEditor);

  document.querySelectorAll(".admin-tab").forEach(btn => {
    btn.addEventListener("click", () => showAdminTab(btn.dataset.adminTab));
  });
});


/* === FIX: вход, регистрация, карта, схема, ограничения ввода === */
document.addEventListener("DOMContentLoaded", function () {
  const authModal = document.getElementById("authModal");
  const openLoginBtn = document.getElementById("openLoginBtn");
  const openRegisterBtn = document.getElementById("openRegisterBtn");
  const closeAuth = document.getElementById("closeAuthModal");

  function openFixedAuth(tab) {
    if (!authModal) return;
    authModal.classList.add("show");
    document.querySelectorAll(".auth-tab").forEach(btn => btn.classList.toggle("active", btn.dataset.authTab === tab));
    document.querySelectorAll(".auth-form").forEach(form => form.classList.remove("active"));
    document.getElementById(tab === "register" ? "registerForm" : "loginForm")?.classList.add("active");
  }

  openLoginBtn?.addEventListener("click", function (e) {
    if (!window.currentUser && !(typeof currentUser !== "undefined" && currentUser)) {
      e.preventDefault();
      openFixedAuth("login");
    }
  }, true);

  openRegisterBtn?.addEventListener("click", function (e) {
    if (!window.currentUser && !(typeof currentUser !== "undefined" && currentUser)) {
      e.preventDefault();
      openFixedAuth("register");
    }
  }, true);

  closeAuth?.addEventListener("click", () => authModal?.classList.remove("show"));

  function onlyLettersInput(input) {
    input.value = input.value.replace(/[^А-Яа-яЁёA-Za-z\s-]/g, "");
  }
  function onlyNumbersInput(input) {
    input.value = input.value.replace(/\D/g, "");
  }
  function formatKgPhoneInput(input) {
    let digits = input.value.replace(/\D/g, "");
    if (digits.startsWith("996")) digits = digits.slice(3);
    digits = digits.slice(0, 9);
    input.value = "+996" + digits;
  }

  document.querySelectorAll("#regName,#clientName,#resumeName,#profileName,#profileCardHolder,#cardHolder").forEach(input => {
    input.addEventListener("input", () => onlyLettersInput(input));
  });
  document.querySelectorAll("#regAge,#guestCount,#profileCardNumber,#cardNumber").forEach(input => {
    input.addEventListener("input", () => onlyNumbersInput(input));
  });
  document.querySelectorAll("#regPhone,#clientPhone,#resumePhone,#profilePhone").forEach(input => {
    input.addEventListener("focus", () => { if (!input.value) input.value = "+996"; });
    input.addEventListener("input", () => formatKgPhoneInput(input));
  });

  document.querySelectorAll("[data-toggle-password]").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.togglePassword);
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
      btn.textContent = input.type === "password" ? "👁" : "🙈";
    });
  });

  // Если 2GIS не загрузился, показываем понятную заглушку, чтобы блок карты не был пустым.
  setTimeout(() => {
    const map = document.getElementById("twoGisMap");
    if (map && !map.querySelector(".leaflet-pane") && !map.querySelector(".map-fixed-fallback")) {
      map.innerHTML = `<div class="map-fixed-fallback">
        <strong>Карта 2GIS</strong>
        <span>Если карта не открылась, нажмите кнопку маршрута в карточке филиала.</span>
        <a href="https://2gis.kg/bishkek/search/АК%20БАТА" target="_blank" rel="noreferrer">Открыть в 2GIS</a>
      </div>`;
    }
  }, 2500);

  // Защита: если схема зала не прорисовалась, создаём столики повторно из сохранённых данных.
  setTimeout(() => {
    const hall = document.getElementById("hallMap");
    if (hall && !hall.querySelector(".table-seat") && typeof hallSeats !== "undefined") {
      hallSeats.forEach(seat => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `table-seat ${seat.status || "free"}`;
        btn.dataset.seatId = seat.id;
        btn.textContent = seat.id;
        if (typeof seat.x === "number") btn.style.left = `${seat.x}px`;
        if (typeof seat.y === "number") btn.style.top = `${seat.y}px`;
        if (typeof seat.right === "number") btn.style.right = `${seat.right}px`;
        hall.appendChild(btn);
      });
    }
  }, 800);
});


/* === FIX: меню и плавающая корзина === */
document.addEventListener("DOMContentLoaded", function () {
  const cartBtn = document.getElementById("floatingCartBtn");
  const cartModal = document.getElementById("floatingCartModal");
  const closeBtn = document.getElementById("floatingCartClose");
  const list = document.getElementById("floatingCartList");
  const total = document.getElementById("floatingCartTotal");

  function openCartModal() {
    if (typeof requireActionLogin === "function" && !requireActionLogin("открыть корзину")) return;
    renderFloatingCart();
    cartModal?.classList.add("show");
  }

  function closeCartModal() {
    cartModal?.classList.remove("show");
  }

  function renderFloatingCart() {
    if (!list || !total) return;
    const items = typeof getCartItems === "function" ? getCartItems() : [];
    const sum = typeof getCartTotal === "function" ? getCartTotal() : 0;

    if (!items.length) {
      list.innerHTML = '<div class="floating-cart-empty">Корзина пустая.</div>';
    } else {
      list.innerHTML = items.map(item => `
        <div class="floating-cart-row">
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <span>${item.price} сом × ${item.qty}</span>
            <b>${item.price * item.qty} сом</b>
          </div>
          <div class="floating-cart-actions">
            <button type="button" data-float-dec="${item.id}">−</button>
            <em>${item.qty}</em>
            <button type="button" data-float-inc="${item.id}">+</button>
            <button type="button" class="remove" data-float-remove="${item.id}">Удалить</button>
          </div>
        </div>
      `).join("");
    }
    total.textContent = `Итого: ${sum} сом`;
  }

  cartBtn?.addEventListener("click", openCartModal);
  closeBtn?.addEventListener("click", closeCartModal);
  cartModal?.addEventListener("click", function (event) {
    if (event.target === cartModal) closeCartModal();

    const inc = event.target.closest("[data-float-inc]");
    const dec = event.target.closest("[data-float-dec]");
    const remove = event.target.closest("[data-float-remove]");

    if (inc) {
      const id = inc.dataset.floatInc;
      setCartQty(id, getCartQty(id) + 1);
      renderFloatingCart();
    }
    if (dec) {
      const id = dec.dataset.floatDec;
      setCartQty(id, getCartQty(id) - 1);
      renderFloatingCart();
    }
    if (remove) {
      const id = remove.dataset.floatRemove;
      setCartQty(id, 0);
      renderFloatingCart();
      showToast("Блюдо удалено из корзины.");
    }
  });

  document.getElementById("floatingCartBooking")?.addEventListener("click", closeCartModal);

  // Если старые данные меню в браузере случайно пустые, меню восстанавливается.
  try {
    if (typeof menu !== "undefined" && (!Array.isArray(menu) || menu.length === 0)) {
      menu = defaultMenu;
      save("akbataMenu", menu);
    }
    if (typeof renderMenuFilters === "function") renderMenuFilters();
    if (typeof renderMenu === "function") renderMenu();
  } catch (e) {
    console.warn("Menu restore skipped", e);
  }
});

/* === PROFILE FIX: привязка карты + заявка пользователя === */
function normalizeProfilePhone(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.startsWith("996")) digits = digits.slice(3);
  digits = digits.slice(0, 9);
  return "+996" + digits;
}

function normalizeCardNumber(value) {
  return String(value || "").replace(/\D/g, "").slice(0, 16);
}

function formatCardNumber(value) {
  return normalizeCardNumber(value).replace(/(.{4})/g, "$1 ").trim();
}

function normalizeCardDate(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return digits.slice(0, 2) + "/" + digits.slice(2);
}

function onlyPersonName(value) {
  return String(value || "").replace(/[^А-Яа-яЁёA-Za-z\s-]/g, "");
}

function getCurrentProfileUserFromUsers() {
  if (!currentUser) return null;
  const users = typeof getUsers === "function" ? getUsers() : load("akbataUsers", []);
  return users.find(user =>
    user.email === currentUser.email ||
    user.phone === currentUser.phone ||
    user.username === currentUser.username
  ) || null;
}

function saveCurrentProfileUserPatch(patch) {
  if (!currentUser) return;

  currentUser = { ...currentUser, ...patch };
  save("akbataCurrentUser", currentUser);

  const users = typeof getUsers === "function" ? getUsers() : load("akbataUsers", []);
  const updatedUsers = users.map(user => {
    const sameUser =
      user.email === currentUser.email ||
      user.phone === currentUser.phone ||
      user.username === currentUser.username;
    return sameUser ? { ...user, ...patch } : user;
  });

  if (typeof saveUsers === "function") {
    saveUsers(updatedUsers);
  } else {
    save("akbataUsers", updatedUsers);
  }
}

function renderProfileCardInfo() {
  const status = document.getElementById("profileCardStatus");
  if (!status || !currentUser) return;

  const savedUser = getCurrentProfileUserFromUsers();
  const card = currentUser.card || savedUser?.card || null;

  if (!card || !card.number) {
    status.textContent = "Карта не привязана";
    return;
  }

  const last4 = String(card.number).slice(-4);
  status.textContent = `Карта привязана: **** **** **** ${last4} · ${card.holder || "Владелец не указан"}`;
}

function saveProfileCard() {
  if (!currentUser || currentUser.role !== "user") {
    showToast("Сначала войдите как пользователь.");
    if (typeof openAuthModal === "function") openAuthModal("login");
    return;
  }

  const numberInput = document.getElementById("profileCardNumber");
  const holderInput = document.getElementById("profileCardHolder");
  const dateInput = document.getElementById("profileCardDate");

  const number = normalizeCardNumber(numberInput?.value || "");
  const holder = onlyPersonName(holderInput?.value || "").trim();
  const date = normalizeCardDate(dateInput?.value || "");

  if (number.length !== 16) {
    showToast("Номер карты должен содержать 16 цифр.");
    return;
  }

  if (!holder || holder.length < 3) {
    showToast("Введите ФИО владельца карты буквами.");
    return;
  }

  if (!/^\d{2}\/\d{2}$/.test(date)) {
    showToast("Срок карты должен быть в формате MM/YY.");
    return;
  }

  saveCurrentProfileUserPatch({
    card: {
      number,
      holder,
      date
    }
  });

  numberInput.value = "";
  holderInput.value = "";
  dateInput.value = "";
  renderProfileCardInfo();
  showToast("Карта успешно привязана.");
}

function submitProfileApplication(event) {
  event.preventDefault();

  if (!currentUser || currentUser.role !== "user") {
    showToast("Сначала войдите как пользователь.");
    if (typeof openAuthModal === "function") openAuthModal("login");
    return;
  }

  const type = document.getElementById("profileApplicationType")?.value || "Заявка";
  const date = document.getElementById("profileApplicationDate")?.value || "";
  const guests = document.getElementById("profileApplicationGuests")?.value || "";
  const text = document.getElementById("profileApplicationText")?.value.trim() || "";

  if (!date || !guests || !text) {
    showToast("Заполните дату, количество гостей и комментарий.");
    return;
  }

  const id = "AB-" + Date.now().toString().slice(-6);
  const bookings = load("akbataBookings", []);

  bookings.push({
    id,
    name: currentUser.name || "Пользователь",
    phone: currentUser.phone || "Не указан",
    email: currentUser.email || currentUser.username || "Не указан",
    username: currentUser.username || currentUser.email || currentUser.phone,
    user: currentUser.username || currentUser.email || currentUser.phone,
    branch: "Не выбран",
    date,
    time: "Не выбрано",
    guests,
    seat: "Не выбрано",
    reason: type,
    prepayment: "Не выбрана",
    comment: text,
    order: "Без блюд",
    orderTotal: 0,
    paymentAmount: 0,
    paymentMethod: "Без оплаты",
    paymentStatus: "Не требуется",
    status: "Заявка из профиля",
    createdAt: new Date().toLocaleString("ru-RU")
  });

  save("akbataBookings", bookings);
  event.target.reset();
  renderUserProfile();
  showToast(`Заявка №${id} отправлена администратору.`);
}

function renderUserProfile() {
  if (!currentUser) return;

  const savedUser = getCurrentProfileUserFromUsers();
  const mergedUser = { ...(savedUser || {}), ...currentUser };
  const name = mergedUser.name || "Пользователь";
  const username = mergedUser.username || mergedUser.email || mergedUser.phone || "Не указано";
  const email = mergedUser.email || mergedUser.username || "Не указано";
  const phone = mergedUser.phone || "Не указано";
  const age = mergedUser.age || "Не указано";
  const photo = localStorage.getItem("akbataProfilePhoto_" + username);

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("profileName", name);
  setText("profileEmail", email);
  setText("profileRole", "Пользователь");
  setText("profileBadge", "Пользователь");
  setText("profileInfoName", name);
  setText("profileInfoUsername", username);
  setText("profileInfoEmail", email);
  setText("profileInfoPhone", phone);
  setText("profileInfoAge", age);

  const avatar = document.getElementById("profileAvatar");
  const firstLetter = name.trim().charAt(0).toUpperCase() || "П";

  if (avatar) {
    if (photo) {
      avatar.innerHTML = `<img src="${photo}" alt="Фото профиля">`;
    } else {
      avatar.innerHTML = `<span id="profileAvatarLetter">${firstLetter}</span>`;
    }
  }

  const bookings = load("akbataBookings", []).filter(function (booking) {
    return (
      booking.username === username ||
      booking.user === username ||
      booking.email === email ||
      booking.phone === phone ||
      booking.clientPhone === phone
    );
  });

  const cartItems = typeof getCartItems === "function" ? getCartItems() : [];
  const payments = bookings.filter(function (booking) {
    return booking.paymentStatus === "Оплачено" || booking.paymentAmount > 0;
  });

  setText("profileBookingsCount", bookings.length);
  setText("profileOrdersCount", cartItems.length);
  setText("profilePaymentsCount", payments.length);

  const list = document.getElementById("profileBookingsList");

  if (list) {
    if (!bookings.length) {
      list.innerHTML = "Броней и заявок пока нет.";
    } else {
      list.innerHTML = bookings.map(function (booking) {
        return `
          <div class="profile-booking-item">
            <b>Заявка №${escapeHtml(booking.id || booking.number || "—")}</b>
            <span>
              ${escapeHtml(booking.date || "Дата не указана")} ·
              ${escapeHtml(booking.time || "Время не выбрано")}<br>
              Гостей: ${escapeHtml(booking.guests || "—")}<br>
              Место: ${escapeHtml(booking.seat || booking.selectedSeat || "Не выбрано")}<br>
              Статус: ${escapeHtml(booking.status || "Новая")}
            </span>
          </div>
        `;
      }).join("");
    }
  }

  renderProfileCardInfo();
}

document.addEventListener("DOMContentLoaded", function () {
  const cardNumber = document.getElementById("profileCardNumber");
  const cardHolder = document.getElementById("profileCardHolder");
  const cardDate = document.getElementById("profileCardDate");
  const saveCardBtn = document.getElementById("profileSaveCardBtn");
  const applicationForm = document.getElementById("profileApplicationForm");
  const guestsInput = document.getElementById("profileApplicationGuests");

  cardNumber?.addEventListener("input", function () {
    cardNumber.value = formatCardNumber(cardNumber.value);
  });

  cardHolder?.addEventListener("input", function () {
    cardHolder.value = onlyPersonName(cardHolder.value);
  });

  cardDate?.addEventListener("input", function () {
    cardDate.value = normalizeCardDate(cardDate.value);
  });

  guestsInput?.addEventListener("input", function () {
    guestsInput.value = String(guestsInput.value || "").replace(/\D/g, "");
  });

  saveCardBtn?.addEventListener("click", saveProfileCard);
  applicationForm?.addEventListener("submit", submitProfileApplication);
});

/* === ФИНАЛ: верхняя панель, заявка из профиля, открытие корзины === */
document.addEventListener("DOMContentLoaded", function () {
  function refreshFinalHeader() {
    const loginBtn = document.getElementById("openLoginBtn");
    const registerBtn = document.getElementById("openRegisterBtn");
    const adminBtn = document.getElementById("adminPanelBtn");

    if (adminBtn) adminBtn.style.display = "none";

    if (typeof currentUser !== "undefined" && currentUser) {
      if (loginBtn) {
        loginBtn.textContent = currentUser.role === "admin" ? "Администратор" : (currentUser.name || "Профиль");
        loginBtn.classList.remove("hidden");
      }
      if (registerBtn) registerBtn.style.display = "none";
    } else {
      if (loginBtn) loginBtn.textContent = "Вход";
      if (registerBtn) {
        registerBtn.textContent = "Регистрация";
        registerBtn.style.display = "inline-flex";
      }
    }
  }

  refreshFinalHeader();
  setTimeout(refreshFinalHeader, 300);
  document.addEventListener("click", function () { setTimeout(refreshFinalHeader, 120); }, true);
  document.addEventListener("submit", function () { setTimeout(refreshFinalHeader, 250); }, true);

  const loginBtn = document.getElementById("openLoginBtn");
  loginBtn?.addEventListener("click", function (event) {
    if (typeof currentUser !== "undefined" && currentUser && currentUser.role === "admin") {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (typeof openHallAdmin === "function") openHallAdmin();
      return;
    }
    if (typeof currentUser !== "undefined" && currentUser && currentUser.role === "user") {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (typeof openProfileModal === "function") openProfileModal();
    }
  }, true);

  const applicationForm = document.getElementById("profileApplicationForm");
  if (applicationForm) {
    applicationForm.onsubmit = function (event) {
      event.preventDefault();

      if (typeof currentUser === "undefined" || !currentUser || currentUser.role !== "user") {
        showToast("Сначала войдите как пользователь.");
        if (typeof openAuthModal === "function") openAuthModal("login");
        return false;
      }

      const type = document.getElementById("profileApplicationType")?.value || "Заявка";
      const date = document.getElementById("profileApplicationDate")?.value || "";
      const guests = document.getElementById("profileApplicationGuests")?.value || "";
      const text = document.getElementById("profileApplicationText")?.value.trim() || "Без комментария";

      if (!date || !guests) {
        showToast("Заполните дату и количество гостей.");
        return false;
      }

      const id = "AB-" + Date.now().toString().slice(-6);
      const bookings = load("akbataBookings", []);
      const userKey = currentUser.username || currentUser.email || currentUser.phone || "user";

      bookings.push({
        id,
        name: currentUser.name || "Пользователь",
        phone: currentUser.phone || "Не указан",
        email: currentUser.email || currentUser.username || "Не указан",
        username: userKey,
        user: userKey,
        branch: "Из профиля",
        date,
        time: "Не выбрано",
        guests,
        seat: "Не выбрано",
        reason: type,
        comment: text,
        order: "Без блюд",
        orderTotal: 0,
        paymentStatus: "Не требуется",
        status: "Новая заявка",
        createdAt: new Date().toLocaleString("ru-RU")
      });

      save("akbataBookings", bookings);
      applicationForm.reset();
      if (typeof renderUserProfile === "function") renderUserProfile();
      showToast("Заявка №" + id + " отправлена администратору.");
      return false;
    };
  }
});


/* === FINAL PATCH 2026-05-25: админ kanat/20, профиль, заявка, корзина === */
(function () {
  const FINAL_ADMIN_LOGIN = "kanat";
  const FINAL_ADMIN_PASSWORD = "20";

  function safeText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function getUserKey(user) {
    return user?.username || user?.email || user?.phone || user?.login || "";
  }

  function sameUser(a, b) {
    const aKeys = [a?.username, a?.email, a?.phone, a?.login].filter(Boolean);
    const bKeys = [b?.username, b?.email, b?.phone, b?.login].filter(Boolean);
    return aKeys.some(key => bKeys.includes(key));
  }

  window.renderUserProfile = function renderUserProfileFinal() {
    if (!window.currentUser && typeof currentUser === "undefined") return;
    const user = typeof currentUser !== "undefined" ? currentUser : window.currentUser;
    if (!user) return;

    const savedUsers = typeof getUsers === "function" ? getUsers() : load("akbataUsers", []);
    const savedUser = savedUsers.find(item => sameUser(item, user)) || {};
    const merged = { ...savedUser, ...user };

    const name = merged.name || "Пользователь";
    const email = merged.email || merged.username || "Не указано";
    const phone = merged.phone || "Не указано";
    const age = merged.age || "Не указано";
    const userKey = getUserKey(merged);

    safeText("profileName", name);
    safeText("profileEmail", email);
    safeText("profileRole", merged.role === "admin" ? "Администратор" : "Пользователь");
    safeText("profileBadge", merged.role === "admin" ? "Администратор" : "Пользователь");
    safeText("profileInfoName", name);
    safeText("profileInfoEmail", email);
    safeText("profileInfoPhone", phone);
    safeText("profileInfoAge", age);
    safeText("profileInfoUsername", email);

    const avatar = document.getElementById("profileAvatar");
    const photo = localStorage.getItem("akbataProfilePhoto_" + userKey);
    if (avatar) {
      if (photo) avatar.innerHTML = `<img src="${photo}" alt="Фото профиля">`;
      else avatar.innerHTML = `<span id="profileAvatarLetter">${(name.trim()[0] || "П").toUpperCase()}</span>`;
    }

    const bookings = load("akbataBookings", []).filter(booking => {
      const keys = [booking.username, booking.user, booking.email, booking.phone, booking.clientPhone].filter(Boolean);
      return keys.includes(userKey) || keys.includes(email) || keys.includes(phone);
    });
    const cartItems = typeof getCartItems === "function" ? getCartItems() : [];
    const payments = bookings.filter(b => b.paymentStatus === "Оплачено" || b.payment?.status === "paid");

    safeText("profileBookingsCount", bookings.length);
    safeText("profileOrdersCount", cartItems.reduce((sum, item) => sum + Number(item.qty || 0), 0));
    safeText("profilePaymentsCount", payments.length);

    const list = document.getElementById("profileBookingsList");
    if (list) {
      if (!bookings.length) {
        list.innerHTML = "Броней пока нет.";
      } else {
        list.innerHTML = bookings.map(booking => `
          <div class="profile-booking-item">
            <b>Заявка №${escapeHtml(booking.id || booking.number || "—")}</b>
            <span>
              ${escapeHtml(booking.date || "Дата не указана")} · ${escapeHtml(booking.time || "Время не указано")}<br>
              Гостей: ${escapeHtml(booking.guests || booking.guestCount || "Не указано")}<br>
              Место: ${escapeHtml(booking.seat || booking.selectedSeat || "Не указано")}<br>
              Статус: ${escapeHtml(booking.status || "Новая")}
            </span>
          </div>
        `).join("");
      }
    }

    const status = document.getElementById("profileCardStatus");
    const card = merged.card || null;
    if (status) {
      status.textContent = card?.number
        ? `Карта привязана: **** **** **** ${String(card.number).slice(-4)} · ${card.holder || "Владелец не указан"}`
        : "Карта не привязана";
    }
  };

  window.openProfileModal = function openProfileModalFinal() {
    const user = typeof currentUser !== "undefined" ? currentUser : window.currentUser;
    if (!user || user.role !== "user") {
      showToast("Сначала войдите как пользователь.");
      if (typeof openAuthModal === "function") openAuthModal("login");
      return;
    }
    window.renderUserProfile();
    document.getElementById("profileModal")?.classList.add("show");
  };

  function saveCardFinal() {
    const user = typeof currentUser !== "undefined" ? currentUser : window.currentUser;
    if (!user || user.role !== "user") {
      showToast("Сначала войдите как пользователь.");
      if (typeof openAuthModal === "function") openAuthModal("login");
      return;
    }
    const numberInput = document.getElementById("profileCardNumber");
    const holderInput = document.getElementById("profileCardHolder");
    const dateInput = document.getElementById("profileCardDate");
    const number = String(numberInput?.value || "").replace(/\D/g, "").slice(0, 16);
    const holder = String(holderInput?.value || "").replace(/[^А-Яа-яЁёA-Za-z\s-]/g, "").trim();
    const date = String(dateInput?.value || "").replace(/\D/g, "").slice(0, 4).replace(/^(\d{2})(\d{1,2})$/, "$1/$2");
    if (number.length !== 16) return showToast("Номер карты должен содержать 16 цифр.");
    if (holder.length < 3) return showToast("ФИО владельца карты вводится только буквами.");
    if (!/^\d{2}\/\d{2}$/.test(date)) return showToast("Срок карты должен быть в формате MM/YY.");

    const card = { number, holder, date };
    currentUser = { ...currentUser, card };
    save("akbataCurrentUser", currentUser);
    let users = typeof getUsers === "function" ? getUsers() : load("akbataUsers", []);
    users = users.map(item => sameUser(item, currentUser) ? { ...item, card } : item);
    if (typeof saveUsers === "function") saveUsers(users); else save("akbataUsers", users);
    if (numberInput) numberInput.value = "";
    if (holderInput) holderInput.value = "";
    if (dateInput) dateInput.value = "";
    window.renderUserProfile();
    showToast("Карта успешно привязана.");
  }

  function submitApplicationFinal(event) {
    event.preventDefault();
    const user = typeof currentUser !== "undefined" ? currentUser : window.currentUser;
    if (!user || user.role !== "user") {
      showToast("Сначала войдите как пользователь.");
      if (typeof openAuthModal === "function") openAuthModal("login");
      return false;
    }
    const type = document.getElementById("profileApplicationType")?.value || "Заявка";
    const date = document.getElementById("profileApplicationDate")?.value || "";
    const guests = document.getElementById("profileApplicationGuests")?.value || "";
    const text = document.getElementById("profileApplicationText")?.value.trim() || "Без комментария";
    if (!date || !guests) return showToast("Заполните дату и количество гостей.");
    const id = "AB-" + Date.now().toString().slice(-6);
    const userKey = getUserKey(user);
    const bookings = load("akbataBookings", []);
    bookings.push({
      id,
      name: user.name || "Пользователь",
      phone: user.phone || "Не указан",
      email: user.email || user.username || "Не указан",
      username: userKey,
      user: userKey,
      branch: "Из профиля",
      date,
      time: "Не выбрано",
      guests,
      seat: "Не выбрано",
      reason: type,
      comment: text,
      order: "Без блюд",
      orderTotal: 0,
      paymentStatus: "Не требуется",
      status: "Новая заявка",
      createdAt: new Date().toLocaleString("ru-RU")
    });
    save("akbataBookings", bookings);
    event.target.reset();
    window.renderUserProfile();
    showToast("Заявка №" + id + " отправлена администратору.");
    return false;
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Админ: логин kanat, пароль 20. Перехватываем форму входа выше старых обработчиков.
    document.getElementById("loginForm")?.addEventListener("submit", function (event) {
      const username = document.getElementById("loginUsername")?.value.trim() || "";
      const password = document.getElementById("loginPassword")?.value.trim() || "";
      if (username === FINAL_ADMIN_LOGIN && password === FINAL_ADMIN_PASSWORD) {
        event.preventDefault();
        event.stopImmediatePropagation();
        currentUser = { role: "admin", name: "Администратор", username: FINAL_ADMIN_LOGIN, login: FINAL_ADMIN_LOGIN };
        save("akbataCurrentUser", currentUser);
        if (typeof updateAuthInterface === "function") updateAuthInterface();
        if (typeof closeAuthModal === "function") closeAuthModal();
        showToast("Вы вошли как администратор.");
        if (typeof openHallAdmin === "function") openHallAdmin();
        event.target.reset();
      }
    }, true);

    // Кнопка с именем открывает профиль, а у админа — админ-панель.
    document.getElementById("openLoginBtn")?.addEventListener("click", function (event) {
      const user = typeof currentUser !== "undefined" ? currentUser : window.currentUser;
      if (user?.role === "admin") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (typeof openHallAdmin === "function") openHallAdmin();
      } else if (user?.role === "user") {
        event.preventDefault();
        event.stopImmediatePropagation();
        window.openProfileModal();
      }
    }, true);

    const cardNumber = document.getElementById("profileCardNumber");
    const cardHolder = document.getElementById("profileCardHolder");
    const cardDate = document.getElementById("profileCardDate");
    cardNumber?.addEventListener("input", () => {
      const digits = cardNumber.value.replace(/\D/g, "").slice(0, 16);
      cardNumber.value = digits.replace(/(.{4})/g, "$1 ").trim();
    });
    cardHolder?.addEventListener("input", () => {
      cardHolder.value = cardHolder.value.replace(/[^А-Яа-яЁёA-Za-z\s-]/g, "");
    });
    cardDate?.addEventListener("input", () => {
      const digits = cardDate.value.replace(/\D/g, "").slice(0, 4);
      cardDate.value = digits.length > 2 ? digits.slice(0, 2) + "/" + digits.slice(2) : digits;
    });

    const saveCardBtn = document.getElementById("profileSaveCardBtn");
    saveCardBtn?.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      saveCardFinal();
    }, true);

    const appForm = document.getElementById("profileApplicationForm");
    appForm?.addEventListener("submit", function (event) {
      event.stopImmediatePropagation();
      submitApplicationFinal(event);
    }, true);

    // глазок на всех паролях
    document.querySelectorAll("[data-toggle-password]").forEach(btn => {
      btn.addEventListener("click", () => {
        const input = document.getElementById(btn.dataset.togglePassword);
        if (!input) return;
        input.type = input.type === "password" ? "text" : "password";
        btn.textContent = input.type === "password" ? "👁" : "🙈";
      });
    });
  });
})();

/* ===== FINAL FIX: пользователи в админ-панели + рабочие отзывы ===== */
(function(){
  const $ = (id) => document.getElementById(id);
  const read = (key, fallback) => {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; }
  };
  const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const safe = (v) => String(v ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
  const toast = (text) => typeof showToast === "function" ? showToast(text) : alert(text);
  const user = () => read("akbataCurrentUser", null);

  function getAllUsersFinal(){
    let users = read("akbataUsers", []);
    if (!Array.isArray(users)) users = [];
    const cur = user();
    if (cur && cur.role === "user" && !users.some(u => (u.email && u.email === cur.email) || (u.phone && u.phone === cur.phone) || (u.id && u.id === cur.id))) {
      users.push(cur);
      write("akbataUsers", users);
    }
    return users.filter(u => u && u.role !== "admin");
  }

  function ratingStars(n){
    const count = Math.max(1, Math.min(5, Number(n) || 5));
    return "★".repeat(count) + "☆".repeat(5 - count);
  }

  function renderPublicReviewsFinal(){
    const grid = $("publicReviewsGrid");
    if (!grid) return;
    const base = [
      {name:"Айбек", rating:5, text:"Удобно выбрали кабинку и заранее заказали блюда."},
      {name:"Али", rating:5, text:"Красивый зал, вкусный плов и хороший сервис."},
      {name:"Нурбек", rating:4, text:"Понравилось, что можно посмотреть филиалы на карте."}
    ];
    const saved = read("akbataReviews", []);
    const reviews = [...saved, ...base];
    grid.innerHTML = reviews.map(item => `
      <div class="review-card">
        <b>${ratingStars(item.rating)}</b>
        <p>${safe(item.text || item.message || item.review || "")}</p>
        <h3>${safe(item.name || "Пользователь")}</h3>
      </div>
    `).join("");
  }

  function initReviewFormFinal(){
    const form = $("reviewForm");
    if (!form || form.dataset.finalReady) return;
    form.dataset.finalReady = "1";
    const nameInput = $("reviewName");
    nameInput?.addEventListener("input", () => nameInput.value = nameInput.value.replace(/[^А-Яа-яЁёA-Za-z\s-]/g, ""));
    form.addEventListener("submit", function(event){
      event.preventDefault();
      event.stopImmediatePropagation();
      const cur = user();
      if (!cur || (cur.role !== "user" && cur.role !== "admin")) {
        toast("Чтобы оставить отзыв, нужно войти или зарегистрироваться.");
        if (typeof openAuthModal === "function") openAuthModal("login");
        return false;
      }
      const name = ($("reviewName")?.value.trim() || cur.name || "Пользователь");
      const rating = $("reviewRating")?.value || "5";
      const text = $("reviewText")?.value.trim() || "";
      if (!name || !rating || !text) { toast("Заполните имя, оценку и текст отзыва."); return false; }
      const reviews = read("akbataReviews", []);
      reviews.unshift({ id: Date.now(), name, rating, text, user: cur.email || cur.phone || cur.username || "", createdAt: new Date().toLocaleString("ru-RU") });
      write("akbataReviews", reviews);
      form.reset();
      renderPublicReviewsFinal();
      renderAdminDashboardFinal();
      toast("Отзыв добавлен.");
      return false;
    }, true);
  }

  function renderAdminDashboardFinal(){
    const stats = $("adminStats");
    const usersBody = $("adminUsersList");
    const bookingsBody = $("adminBookingsList");
    const reviewsList = $("adminReviewsList");
    const resumesList = $("adminResumesList");
    const resumesPageList = $("adminResumesPageList");
    if (!stats && !usersBody && !bookingsBody && !reviewsList && !resumesList && !resumesPageList) return;

    const users = getAllUsersFinal();
    const bookings = read("akbataBookings", []);
    const reviews = read("akbataReviews", []);
    const resumes = read("akbataResumes", []);
    const pending = bookings.filter(b => !b.status || b.status.includes("Новая") || b.status.includes("Ожидает")).length;
    const accepted = bookings.filter(b => b.status === "Принято" || b.status === "Подтверждено").length;
    const paid = bookings.reduce((sum,b)=> sum + Number(b.paymentAmount || 0),0);

    if (stats) stats.innerHTML = `
      <div class="admin-stat"><span>Пользователей</span><b>${users.length}</b><small>Все зарегистрированные</small></div>
      <div class="admin-stat"><span>Заявок</span><b>${bookings.length}</b><small>${pending} ожидает · ${accepted} принято</small></div>
      <div class="admin-stat"><span>Оплаты</span><b>${paid} сом</b><small>Сумма оплат</small></div>
      <div class="admin-stat"><span>Отзывы</span><b>${reviews.length}</b><small>Можно удалять</small></div>
    `;

    if (usersBody) usersBody.innerHTML = users.length ? users.map((u, i) => {
      const card = u.card && u.card.number ? `**** ${safe(String(u.card.number).replace(/\s/g,"").slice(-4))}<br><small>${safe(u.card.holder || "")}</small>` : "Не привязана";
      const key = safe(u.id || u.email || u.phone || i);
      return `<tr>
        <td><b>${safe(u.name || u.fullName || "Без имени")}</b><br><small>Пользователь</small></td>
        <td>${safe(u.email || u.username || "—")}</td>
        <td>${safe(u.phone || "—")}</td>
        <td>${safe(u.age || "—")}</td>
        <td>${card}</td>
        <td><button class="mini-admin-btn danger" type="button" data-final-user-delete="${key}">Удалить</button></td>
      </tr>`;
    }).join("") : `<tr><td colspan="6" class="admin-empty">Пользователей пока нет.</td></tr>`;

    if (bookingsBody) bookingsBody.innerHTML = bookings.length ? bookings.map((b, i) => {
      const id = safe(b.id || i);
      const status = b.status || "Ожидает";
      const cls = status === "Принято" || status === "Подтверждено" ? "accepted" : status === "Отклонено" ? "declined" : "pending";
      return `<tr>
        <td><b>${id}</b><br><small>${safe(b.createdAt || "")}</small></td>
        <td><b>${safe(b.name || "Без имени")}</b><br><small>${safe(b.phone || "")}<br>${safe(b.email || b.user || "")}</small></td>
        <td>${safe(b.date || "—")}<br><small>${safe(b.time || "—")} · ${safe(b.guests || "—")} гостей</small></td>
        <td>${safe(b.seat || "—")}<br><small>${safe(b.branch || "")}</small></td>
        <td>${safe(b.order || b.comment || "Без блюд")}<br><small>${safe(b.reason || "")}</small></td>
        <td><span class="pay-badge ${b.paymentStatus === "Оплачено" ? "paid" : ""}">${safe(b.paymentStatus || "Не оплачено")}</span></td>
        <td><span class="admin-status-pill ${cls}">${safe(status)}</span></td>
        <td class="admin-action-cell">
          <button class="mini-admin-btn" type="button" data-final-booking-status="${id}" data-status="Принято">Принять</button>
          <button class="mini-admin-btn warn" type="button" data-final-booking-status="${id}" data-status="Отклонено">Отклонить</button>
          <button class="mini-admin-btn danger" type="button" data-final-booking-delete="${id}">Удалить</button>
        </td>
      </tr>`;
    }).join("") : `<tr><td colspan="8" class="admin-empty">Пока заявок нет.</td></tr>`;

    if (reviewsList) reviewsList.innerHTML = reviews.length ? reviews.map((r, i) => `
      <div class="admin-small-item">
        <b>${safe(r.name || "Пользователь")} · ${safe(r.rating || 5)}★</b>
        <span>${safe(r.createdAt || "")}</span>
        <p>${safe(r.text || r.message || r.review || "")}</p>
        <button class="mini-admin-btn danger" type="button" data-final-review-delete="${i}">Удалить отзыв</button>
      </div>
    `).join("") : `<div class="admin-empty">Отзывов пока нет.</div>`;

    const resumesHtml = resumes.length ? resumes.map((r, i) => `
      <div class="admin-small-item resume-item">
        <b>${safe(r.name || r.fullName || "Без имени")}</b>
        <span>${safe(r.createdAt || "")}</span>
        <p><b>Вакансия:</b> ${safe(r.vacancy || r.position || r.job || "—")}</p>
        <p><b>Телефон:</b> ${safe(r.phone || "—")}</p>
        <p><b>Email:</b> ${safe(r.email || "—")}</p>
        <p>${safe(r.message || r.comment || r.text || "")}</p>
        <button class="mini-admin-btn danger" type="button" data-final-resume-delete="${i}">Удалить резюме</button>
      </div>
    `).join("") : `<div class="admin-empty">Резюме пока нет.</div>`;

    if (resumesList) resumesList.innerHTML = resumesHtml;
    if (resumesPageList) resumesPageList.innerHTML = resumesHtml;
  }

  function attachAdminActionsFinal(){
    document.addEventListener("click", function(event){
      const userBtn = event.target.closest("[data-final-user-delete]");
      const statusBtn = event.target.closest("[data-final-booking-status]");
      const bookingDelete = event.target.closest("[data-final-booking-delete]");
      const reviewDelete = event.target.closest("[data-final-review-delete]");
      const resumeDelete = event.target.closest("[data-final-resume-delete]");

      if (userBtn) {
        if (!confirm("Удалить пользователя?")) return;
        const key = userBtn.dataset.finalUserDelete;
        const users = getAllUsersFinal().filter((u,i) => String(u.id || u.email || u.phone || i) !== String(key));
        write("akbataUsers", users);
        renderAdminDashboardFinal();
        toast("Пользователь удалён.");
      }
      if (statusBtn) {
        const id = statusBtn.dataset.finalBookingStatus;
        const status = statusBtn.dataset.status;
        const bookings = read("akbataBookings", []).map((b,i) => String(b.id || i) === String(id) ? {...b, status, decidedAt: new Date().toLocaleString("ru-RU")} : b);
        write("akbataBookings", bookings);
        renderAdminDashboardFinal();
        toast("Статус заявки: " + status);
      }
      if (bookingDelete) {
        if (!confirm("Удалить заявку?")) return;
        const id = bookingDelete.dataset.finalBookingDelete;
        const bookings = read("akbataBookings", []).filter((b,i) => String(b.id || i) !== String(id));
        write("akbataBookings", bookings);
        renderAdminDashboardFinal();
        toast("Заявка удалена.");
      }
      if (reviewDelete) {
        if (!confirm("Удалить отзыв?")) return;
        const reviews = read("akbataReviews", []);
        reviews.splice(Number(reviewDelete.dataset.finalReviewDelete), 1);
        write("akbataReviews", reviews);
        renderPublicReviewsFinal();
        renderAdminDashboardFinal();
        toast("Отзыв удалён.");
      }
      if (resumeDelete) {
        if (!confirm("Удалить резюме?")) return;
        const resumes = read("akbataResumes", []);
        resumes.splice(Number(resumeDelete.dataset.finalResumeDelete), 1);
        write("akbataResumes", resumes);
        renderAdminDashboardFinal();
        toast("Резюме удалено.");
      }
    }, true);
  }

  function startFinalFix(){
    renderPublicReviewsFinal();
    initReviewFormFinal();
    attachAdminActionsFinal();
    renderAdminDashboardFinal();
    ["adminPanelBtn", "openLoginBtn"].forEach(id => $(id)?.addEventListener("click", () => setTimeout(renderAdminDashboardFinal, 80), true));
    document.querySelectorAll("[data-admin-tab='dashboard']").forEach(btn => btn.addEventListener("click", () => setTimeout(renderAdminDashboardFinal, 50), true));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", startFinalFix);
  else startFinalFix();
})();


/* =========================================================
   ФИНАЛЬНОЕ УПРАВЛЕНИЕ ВКЛАДКАМИ АДМИН-ПАНЕЛИ
   Левое меню, открытие разделов, пользователи/заявки/отзывы
========================================================= */
function showAdminTab(tab) {
  const normalizedTab = tab === "dashboard" ? "booking" : tab;

  document.querySelectorAll("#hallAdminModal .admin-tab").forEach(btn => {
    const btnTab = btn.dataset.adminTab === "dashboard" ? "booking" : btn.dataset.adminTab;
    btn.classList.toggle("active", btnTab === normalizedTab);
  });

  document.querySelectorAll("#hallAdminModal .admin-tab-panel").forEach(panel => {
    panel.classList.remove("active");
  });

  const panelMap = {
    booking: "adminDashboardPanel",
    about: "adminAboutPanel",
    menu: "adminMenuPanel",
    scheme: "adminSchemePanel",
    payment: "adminPaymentPanel",
    branches: "adminBranchesPanel",
    vacancies: "adminVacanciesPanel",
    contacts: "adminContactsPanel",
    gallery: "adminGalleryPanel",
    resumes: "adminResumesPanel"
  };

  const panel = document.getElementById(panelMap[normalizedTab] || "adminDashboardPanel");
  if (panel) panel.classList.add("active");

  if (normalizedTab === "booking" && typeof renderAdminDashboard === "function") renderAdminDashboard();
  if (normalizedTab === "resumes" && typeof renderAdminDashboardFinal === "function") renderAdminDashboardFinal();
  if (normalizedTab === "menu" && typeof renderAdminMenuList === "function") renderAdminMenuList();
  if (normalizedTab === "scheme") {
    if (typeof renderHallScheme === "function") renderHallScheme();
    if (typeof renderHallAdminList === "function") renderHallAdminList();
  }
  if (normalizedTab === "branches" && typeof fillBranchEditor === "function") fillBranchEditor();
  if (normalizedTab === "gallery" && typeof fillGalleryEditor === "function") fillGalleryEditor();
  if (normalizedTab === "about" && typeof fillAboutEditor === "function") fillAboutEditor();
  if (normalizedTab === "payment" && typeof fillPaymentEditor === "function") fillPaymentEditor();
  if (normalizedTab === "contacts" && typeof fillContactsEditor === "function") fillContactsEditor();
}

document.addEventListener("click", function(event) {
  const adminTabButton = event.target.closest("#hallAdminModal [data-admin-tab]");
  if (adminTabButton) {
    event.preventDefault();
    showAdminTab(adminTabButton.dataset.adminTab);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("hallAdminModal")) {
    showAdminTab("booking");
  }
});

/* ===== ФИНАЛ: кнопка выхода админа и обновление резюме ===== */
(function(){
  function $(id){ return document.getElementById(id); }
  function adminExit(){
    try {
      localStorage.removeItem("akbataAdminLogged");
      localStorage.removeItem("akbataCurrentUser");
      localStorage.removeItem("currentUser");
    } catch(e) {}
    if ($("hallAdminModal")) $("hallAdminModal").classList.remove("show");
    location.reload();
  }

  function addAdminLogoutButton(){
    const head = document.querySelector("#hallAdminModal .hall-admin-head");
    const closeBtn = $("closeHallAdmin");
    if (!head || !closeBtn || $("adminLogoutFromPanel")) return;

    const wrap = document.createElement("div");
    wrap.className = "hall-admin-head-actions";

    const logout = document.createElement("button");
    logout.type = "button";
    logout.id = "adminLogoutFromPanel";
    logout.className = "admin-logout-btn";
    logout.textContent = "Выйти";
    logout.addEventListener("click", adminExit);

    closeBtn.parentNode.insertBefore(wrap, closeBtn);
    wrap.appendChild(logout);
    wrap.appendChild(closeBtn);
  }

  function refreshResumeReadable(){
    const render = window.renderAdminDashboardFinal || window.renderAdminDashboard;
    if (typeof render === "function") render();
  }

  document.addEventListener("DOMContentLoaded", function(){
    addAdminLogoutButton();
    refreshResumeReadable();
  });

  document.addEventListener("click", function(event){
    if (event.target.closest("#adminPanelBtn") || event.target.closest("#openLoginBtn")) {
      setTimeout(function(){ addAdminLogoutButton(); refreshResumeReadable(); }, 150);
    }
  }, true);
})();

/* ===== ФИНАЛЬНЫЙ ФИКС: рабочий глазок пароля + админка строго сверху ===== */
(function(){
  document.addEventListener("click", function(event){
    const btn = event.target.closest("[data-toggle-password]");
    if (!btn) return;
    event.preventDefault();
    event.stopPropagation();
    const id = btn.getAttribute("data-toggle-password");
    const input = document.getElementById(id);
    if (!input) return;
    input.type = input.type === "password" ? "text" : "password";
    btn.textContent = input.type === "password" ? "👁" : "🙈";
  }, true);

  function forceAdminTop(){
    const modal = document.getElementById("hallAdminModal");
    const box = modal?.querySelector(".hall-admin-box");
    if (!modal || !box) return;
    modal.style.cssText += ";position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;padding:0!important;margin:0!important;overflow:hidden!important;";
    box.style.cssText += ";position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;margin:0!important;padding:0!important;border-radius:0!important;transform:none!important;";
  }

  document.addEventListener("DOMContentLoaded", forceAdminTop);
  document.addEventListener("click", function(event){
    if (event.target.closest("#adminPanelBtn") || event.target.closest("#openLoginBtn") || event.target.closest("#profileBtn")) {
      setTimeout(forceAdminTop, 80);
      setTimeout(forceAdminTop, 250);
    }
  }, true);
})();

