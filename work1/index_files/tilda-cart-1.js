function tcart__init(t, r) {
    window.tcart__ymapApiKey = r;
    var o, a = $(".t706");
    void 0 !== window.tcart_initted && "yes" == window.tcart_initted && 1 < a.length ? $(".t706__previewmode-infobox center").append('<div style="color:red;">Error: Two cart widgets on the page</div>') : (void 0 !== (o = a.attr("data-cart-dontstore")) && "y" == o && (window.tcart_dontstore = "y"), void 0 !== (o = a.attr("data-cart-oneproduct")) && "y" == o && (window.tcart_oneproduct = "y"), void 0 !== (o = a.attr("data-cart-maxstoredays")) && "" != o && 0 <= o && (window.tcart_maxstoredays = o), void 0 !== (o = a.attr("data-cart-sendevent-onadd")) && "y" == o && (window.tcart_sendevent_onadd = "y"), window.tcart_initted = "yes", tcart__drawBottomTotalAmount(), tcart__loadLocalObj(), tcart__reDrawCartIcon(), tcart__addEvent__links(), setInterval(function() {
        tcart__addEvent__links()
    }, 5e3), tcart__addEvents(), tcart__addEvent__selectpayment(), $("#rec" + t).attr("data-animationappear", "off"), $("#rec" + t).css("opacity", "1"), window.tildaBrowserLang = window.navigator.userLanguage || window.navigator.language, window.tildaBrowserLang = window.tildaBrowserLang.toUpperCase(), -1 != window.tildaBrowserLang.indexOf("RU") ? window.tildaBrowserLang = "RU" : -1 != window.tildaBrowserLang.indexOf("FR") ? window.tildaBrowserLang = "FR" : -1 != window.tildaBrowserLang.indexOf("DE") ? window.tildaBrowserLang = "DE" : -1 != window.tildaBrowserLang.indexOf("ES") ? window.tildaBrowserLang = "ES" : -1 != window.tildaBrowserLang.indexOf("PT") ? window.tildaBrowserLang = "PT" : -1 != window.tildaBrowserLang.indexOf("UK") ? window.tildaBrowserLang = "UK" : -1 != window.tildaBrowserLang.indexOf("JA") ? window.tildaBrowserLang = "JA" : -1 != window.tildaBrowserLang.indexOf("CN") ? window.tildaBrowserLang = "CN" : window.tildaBrowserLang = "EN", a.find(".t-input-group_dl").length ? ($(".t706__cartwin-prodamount-label").html(tcart__dict(2, "Subtotal") + ":&nbsp;"), $(".t706__cartwin-totalamount-label").html(tcart__dict(3, "Total") + ":&nbsp;")) : ($(".t706__cartwin-prodamount-label").html(tcart__dict(1, "Total") + ":&nbsp;"), $(".t706__cartwin-totalamount-label").html(tcart__dict(1, "Total") + ":&nbsp;")), "" == $(".t706__cartwin-heading").html() && $(".t706__cartwin-heading").html(tcart__dict(4, "Your order") + ":"), "Submit" == $(".t706 .t-form__submit .t-submit").html() && $(".t706 .t-form__submit .t-submit").html(tcart__dict(5, "Submit order")), a.find(".t-input-group_pm").length && a.find(".t-input-group_pm").find(".t-input-title").html(tcart__dict(6, "Payment method")), $(".t-form__submit").on({
        mouseenter: function() {
            $(".t706__minimal").addClass("active")
        },
        mouseleave: function() {
            $(".t706__minimal").removeClass("active")
        }
    }))
}

function tcart__dict(t) {
    var r = [],
        o = {
            EN: "Total",
            RU: "Сумма",
            FR: "Total",
            DE: "Gesamtsumme",
            ES: "Total",
            PT: "Total",
            UK: "Сума",
            JA: "合計",
            CN: "总额。"
        };
    r[1] = o, o = {
        EN: "Subtotal",
        RU: "Сумма",
        FR: "Sous-total",
        DE: "Zwischensumme",
        ES: "Subtotal",
        PT: "Subtotal",
        UK: "Сума",
        JA: "小計",
        CN: "小计。"
    }, r[2] = o, o = {
        EN: "Total",
        RU: "Итоговая сумма",
        FR: "Total",
        DE: "Gesamtsumme",
        ES: "Total",
        PT: "Total",
        UK: "Підсумкова сума",
        JA: "合計",
        CN: "总额。"
    }, r[3] = o, o = {
        EN: "Your order",
        RU: "Ваш заказ",
        FR: "Votre commande",
        DE: "Ihre Bestellung",
        ES: "Su pedido",
        PT: "Seu pedido",
        UK: "Ваше замовлення",
        JA: "注文済",
        CN: "你的订货。"
    }, r[4] = o, o = {
        EN: "Submit order",
        RU: "Оформить заказ",
        FR: "Commander",
        DE: "Bestellung abschicken",
        ES: "Enviar pedido",
        PT: "Enviar pedido",
        UK: "Оформити замовлення",
        JA: "注文を確定",
        CN: "办妥订货。"
    }, r[5] = o, o = {
        EN: "Payment method",
        RU: "Способ оплаты",
        FR: "Mode de paiement",
        DE: "Zahlungsmethode",
        ES: "Método de pago",
        PT: "Método de pagamento",
        UK: "Спосіб оплати",
        JA: "支払方法",
        CN: "付款方式。"
    }, r[6] = o, o = {
        EN: "Click to order\t",
        RU: "Оформить заказать",
        FR: "Commander",
        DE: "Bestellung abschicken",
        ES: "Enviar pedido",
        PT: "Enviar pedido",
        UK: "Оформити замовлення",
        JA: "注文を確定",
        CN: "提交订单。"
    }, r[7] = o, o = {
        EN: "Subtotal with discount",
        RU: "Сумма со скидкой",
        FR: "Sous-total avec remise",
        DE: "Zwischensumme mit Rabatt",
        ES: "Subtotal con descuento",
        PT: "Subtotal com desconto",
        UK: "Сума зі знижкою",
        JA: "割引後小計",
        CN: "减价同小计。"
    }, r[8] = o, o = {
        EN: "Promo code",
        RU: "Промокод",
        FR: "Code promo",
        DE: "Aktionscode",
        ES: "Código promocional",
        PT: "Código promocional",
        UK: "Промокод",
        JA: "プロモコード",
        CN: "促销代码。"
    }, r[9] = o, o = {
        EN: "Discount",
        RU: "Скидка",
        FR: "Remise",
        DE: "Rabatt",
        ES: "Descuento",
        PT: "Desconto",
        UK: "Знижка",
        JA: "割引",
        CN: "减价。"
    }, r[10] = o, o = {
        EN: "Minimal order",
        RU: "Минимальный заказ",
        FR: "Commande minimale",
        DE: "Minimale Bestellung",
        ES: "Pedido mínimo",
        PT: "Pedido mínimo",
        UK: "Мінімальне замовлення",
        JA: "最小注文価格",
        CN: "最小的订货。"
    }, r[11] = o, o = {
        EN: "Minimal order quantity",
        RU: "Минимальное количество в заказе",
        FR: "Quantité de commande minimale",
        DE: "Mindestbestellmenge",
        ES: "Cantidad mínima del pedido",
        PT: "Quantidade mínima por pedido",
        UK: "Мінімальна кількість у замовленні",
        JA: "最小注文数",
        CN: "最小的总数。"
    }, r[12] = o, o = {
        EN: "Sorry, limit has been reached. This is the maximum quantity of goods in stock",
        RU: "Извините, достигнут лимит. Это максимально возможное количество товаров в наличии"
    }, r[13] = o, o = {
        EN: "free",
        RU: "бесплатно",
        FR: "gratuit",
        DE: "kostenlos",
        ES: "gratis",
        PT: "livre",
        UK: "безкоштовно",
        JA: "無料で",
        CN: "免费"
    }, r[14] = o, o = {
        EN: "Street",
        RU: "Улица"
    }, r[15] = o, o = {
        EN: "House",
        RU: "Дом"
    }, r[16] = o, o = {
        EN: "Entrance",
        RU: "Подъезд"
    }, r[17] = o, o = {
        EN: "Floor",
        RU: "Этаж"
    }, r[18] = o, o = {
        EN: "Apt/Office",
        RU: "Квартира/офис"
    }, r[19] = o, o = {
        EN: "Phone",
        RU: "Телефон"
    }, r[20] = o, o = {
        EN: "Entrance code",
        RU: "Домофон"
    }, r[21] = o, o = {
        EN: "Comment",
        RU: "Комментарий"
    }, r[22] = o, o = {
        EN: "City",
        RU: "Город"
    }, r[23] = o, o = {
        EN: "Select pickup location",
        RU: "Выберите пункт получения"
    }, r[24] = o, o = {
        EN: "day",
        RU: "дня"
    }, r[25] = o, o = {
        EN: "days",
        RU: "дней"
    }, r[26] = o, o = {
        EN: "from",
        RU: "от"
    }, r[27] = o, o = {
        EN: "rubles",
        RU: "рублей"
    }, r[28] = o, o = {
        EN: "Unfortunately, delivery to your chosen city is not possible",
        RU: "К сожалению, в выбранный вами город доставка не осуществляется"
    }, r[29] = o, o = {
        EN: "Delivery",
        RU: "Доставка"
    }, r[30] = o, o = {
        EN: "Address",
        RU: "Адрес"
    }, r[31] = o, o = {
        EN: "Cannot find address in database",
        RU: "Не удается найти адрес в базе"
    }, r[32] = o, o = {
        EN: "Pickup location",
        RU: "Пункт получения"
    }, r[33] = o, o = {
        EN: "Please select an address from the options provided",
        RU: "Пожалуйста, выберите адрес из предложенных вариантов"
    }, r[34] = o, o = {
        EN: "Please select an city from the options provided",
        RU: "Пожалуйста, выберите город из предложенных вариантов"
    }, r[35] = o, o = {
        EN: "Order comment",
        RU: "Комментарий к заказу"
    }, r[36] = o, o = {
        EN: "Select",
        RU: "Выбрать"
    }, r[37] = o, o = {
        EN: "Phones",
        RU: "Телефоны"
    }, r[38] = o, o = {
        EN: "Phone",
        RU: "Телефон"
    }, r[39] = o, o = {
        EN: "Working hours",
        RU: "Время работы"
    }, r[40] = o, o = {
        EN: "Delivery data for manager",
        RU: "Данные о доставке для менеджера"
    }, r[41] = o, o = {
        EN: 'Unfortunately, the delivery service is currently unavailable. Please indicate the delivery address in a free form in the "Comment" field, the store manager will contact you to place an order in the near future on the contact information provided.',
        RU: 'К сожалению, в данный момент сервис доставки недоступен. Пожалуйста, укажите адрес доставки в свободной форме в поле "Комментарий", менеджер магазина свяжется с Вами для оформления заказа в ближайшее время по предоставленным контактным данным.'
    }, r[42] = o, o = {
        EN: "Receiving delivery services",
        RU: "Получение сервисов доставки"
    }, r[43] = o, o = {
        EN: "Getting a list of points of issue of orders",
        RU: "Получение списка пунктов выдачи заказов"
    }, r[44] = o, o = {
        EN: "No results were found for your request",
        RU: "По Вашему запросу ничего не найдено"
    }, r[45] = o, o = {
        EN: "Change",
        RU: "Изменить"
    }, r[46] = o, o = {
        EN: "Full name",
        RU: "Получатель (ФИО полностью) "
    }, r[47] = o, o = {
        EN: "Ivanov Ivan Ivanovich",
        RU: "Иванов Иван Иванович"
    }, r[48] = o;
    var a = window.tildaBrowserLang;
    if (null != typeof r[t]) return void 0 !== r[t][a] && typeof r[t][a] ? r[t][a] : r[t].EN
}

function tcart__nullObj() {
    var t = {
        products: [],
        prodamount: 0,
        amount: 0,
        system: ""
    };
    return t
}

function tcart__loadLocalObj() {
    var t, r = null;
    if ("object" == typeof localStorage) try {
        r = localStorage.getItem("tcart")
    } catch (t) {
        console.error("Your web browser does not support storing a Cart data locally.")
    }
    window.tcart = null === r ? tcart__nullObj() : JSON.parse(r), void 0 !== window.tcart_maxstoredays && "" != window.tcart_maxstoredays ? 0 < (t = window.tcart_maxstoredays) ? void 0 !== window.tcart.updated && 0 < window.tcart.updated && 86400 * t < Math.floor(Date.now() / 1e3) - window.tcart.updated && (window.tcart = tcart__nullObj()) : "0" == t && (window.tcart = tcart__nullObj()) : void 0 !== window.tcart.updated && 0 < window.tcart.updated && 2592e3 < Math.floor(Date.now() / 1e3) - window.tcart.updated && (window.tcart = tcart__nullObj()), void 0 !== window.tcart_dontstore && "y" == window.tcart_dontstore && (window.tcart = tcart__nullObj()), delete window.tcart.currency, delete window.tcart.currency_txt, delete window.tcart.currency_txt_l, delete window.tcart.currency_txt_r, delete window.tcart.currency_side, delete window.tcart.currency_sep, delete window.tcart.currency_dec, window.tcart.currency = "$", window.tcart.currency_side = "l", window.tcart.currency_sep = ".", window.tcart.currency_dec = "", void 0 !== window.tcart.delivery && delete window.tcart.delivery, void 0 !== window.tcart.promocode && delete window.tcart.promocode;
    var o = $(".t706").attr("data-project-currency");
    void 0 !== o && "" != o && (window.tcart.currency = o), window.tcart.currency_txt = window.tcart.currency, void 0 !== (o = $(".t706").attr("data-project-currency-side")) && "r" == o && (window.tcart.currency_side = "r"), "l" == window.tcart.currency_side ? (window.tcart.currency_txt_l = window.tcart.currency_txt + "", window.tcart.currency_txt_r = "") : (window.tcart.currency_txt_r = "&nbsp;" + window.tcart.currency_txt, window.tcart.currency_txt_l = ""), void 0 === (o = $(".t706").attr("data-project-currency-sep")) || "." != o && "," != o ? "$" == window.tcart.currency || "€" == window.tcart.currency || "USD" == window.tcart.currency || "EUR" == window.tcart.currency ? window.tcart.currency_sep = "." : window.tcart.currency_sep = "," : window.tcart.currency_sep = o, o = $(".t706").attr("data-project-currency-dec"), window.tcart.currency_dec = void 0 !== o && "00" == o ? o : "", delete window.tcart.system;
    var a = $(".t706").attr("data-payment-system");
    window.tcart.system = void 0 !== a && "" != a ? a : "none";
    var c = $(".t706").attr("data-cart-minorder");
    void 0 !== c && "" != c && 0 < c && void 0 === window.tcart_minorder && (c = +c, window.tcart_minorder = c, $(".t706__cartwin-prodamount-wrap").prepend('<div class="t706__cartwin-prodamount-minorder t706__minimal"><span>' + tcart__dict(11, "Minimum order") + ": " + tcart__showPrice(c) + "</span></div>"), $(".t706__cartwin-totalamount-wrap").prepend('<div class="t706__cartwin-prodamount-minorder t706__minimal"><span>' + tcart__dict(11, "Minimum order") + ": " + tcart__showPrice(c) + "</span></div>"), $(".js-errorbox-all .t-form__errorbox-text").append('<p data-rule-filled="true" class="t-form__errorbox-item js-rule-error js-rule-error-minorder" style="display: none;">' + tcart__dict(11, "Minimum order") + ": " + tcart__showPrice(c) + "</p>"));
    var i = $(".t706").attr("data-cart-mincntorder");
    void 0 !== i && "" != i && 0 < i && void 0 === window.tcart_mincntorder && (i = +i, window.tcart_mincntorder = i, $(".t706__cartwin-prodamount-wrap").prepend('<div class="t706__cartwin-prodamount-mincntorder t706__minimal"><span>' + tcart__dict(12, "Minimal quantity") + ": " + i + "</span></div>"), $(".t706__cartwin-totalamount-wrap").prepend('<div class="t706__cartwin-prodamount-mincntorder t706__minimal"><span>' + tcart__dict(12, "Minimal quantity") + ": " + i + "</span></div>"), $(".js-errorbox-all .t-form__errorbox-text").append('<p data-rule-filled="true"  class="t-form__errorbox-item js-rule-error js-rule-error-minquantity" style="display: none;">' + tcart__dict(12, "Minimal quantity") + ": " + i + "</p>")), tcart__addDelivery(), tcart__updateTotalProductsinCartObj()
}

function tcart__saveLocalObj() {
    if (!(void 0 !== window.tcart_dontstore && "y" == window.tcart_dontstore || void 0 !== window.tcart_maxstoredays && 0 == window.tcart_maxstoredays)) {
        if ("object" == typeof window.tcart) {
            window.tcart.updated = Math.floor(Date.now() / 1e3);
            var t = JSON.stringify(window.tcart);
            if ("object" == typeof localStorage) try {
                localStorage.setItem("tcart", t)
            } catch (t) {
                console.error("Your web browser does not support storing a Cart data locally.")
            }
        }
        window.tcart_newDeliveryActive && window.tcart.amount && tcart__rerenderDeliveryServices()
    }
}

function tcart__syncProductsObject__LStoObj() {
    if (!(void 0 !== window.tcart_dontstore && "y" == window.tcart_dontstore || void 0 !== window.tcart_maxstoredays && 0 == window.tcart_maxstoredays || "object" != typeof localStorage)) try {
        var t = localStorage.getItem("tcart"),
            r = JSON.parse(t);
        "object" == typeof r.products && (window.tcart.products = r.products, tcart__updateTotalProductsinCartObj())
    } catch (t) {}
}

function tcart__addEvents() {
    // $(".t706__carticon").click(function() {
    //     // tcart__openCart()
    // }), $(".t706__cartwin-close").click(function() {
    //     tcart__closeCart()
    // }), $(".t706__cartwin-closebtn").click(function() {
    //     tcart__closeCart()
    // }), $(".t706").find(".js-form-proccess").attr("data-formcart", "y"), $(".t706__cartwin").mousedown(function(t) {
    //     if (t.target == this) {
    //         var r = $(window).width() - 17;
    //         if (t.clientX > r) return;
    //         tcart__closeCart()
    //     }
    // })
}

function tcart__addEvent__links() {
    $('[href^="#order"]').not("[data-link-event-setted]").click(function(t) {
        t.preventDefault();
        var r = $(this);
        if (r.attr("data-link-event-setted", "yes"), void 0 === r.attr("data-dbclk-prevent") || "yes" != r.attr("data-dbclk-prevent")) {
            r.attr("data-dbclk-prevent", "yes"), setTimeout(function() {
                r.removeAttr("data-dbclk-prevent")
            }, 1e3), $("body").hasClass("t-body_popupshowed") && ($("body").removeClass("t-body_popupshowed"), $(".t-popup").removeClass("t-popup_show"), setTimeout(function() {
                $(".t-popup").not(".t-popup_show").css("display", "none")
            }, 300), tcart__clearProdUrl());
            var o, a, c, i, n = r.attr("href"),
                e = "0",
                d = "",
                s = "",
                _ = "",
                w = "",
                u = "",
                l = "",
                p = "",
                m = "",
                v = "",
                y = "",
                f = "",
                h = "";
            "#order:" != n.substring(0, 7) || void 0 !== (c = n.substring(7)) && "" != c && (0 < c.indexOf(":::") && (o = c.indexOf(":::"), 0 < c.indexOf("=") && c.indexOf("=") < c.indexOf(":::") && (a = c.substring(o + 3), c = c.substring(0, o))), 0 < c.indexOf("=") ? (void 0 !== (i = c.split("="))[0] && (d = i[0]), void 0 !== i[1] && (e = i[1]), e = tcart__cleanPrice(e)) : d = c, void 0 !== a && "" != a && 0 < a.indexOf("=") && void 0 !== (i = a.split("="))[0] && void 0 !== i[1] && "" != i[0] && "" != i[1] && "image" == i[0] && 0 < i[1].indexOf("tildacdn.com") && (s = i[1]), "" == l && void 0 === (l = r.closest(".r").attr("id").replace("rec", "")) && (l = ""));
            var b, g, E, P = $(this).closest(".js-product");
            if (void 0 !== P && ("" == d && void 0 === (d = P.find(".js-product-name").text()) && (d = ""), "" != e && 0 != e || (e = tcart__cleanPrice(e = P.find(".js-product-price").text())), "" == s && (void 0 !== P.attr("data-product-img") && "" != P.attr("data-product-img") ? s = P.attr("data-product-img") : void 0 !== (b = P.find(".js-product-img")) && (b.is("img") && (s = b.attr("src")), b.is("div") && (s = "", void 0 !== (g = b.css("background-image")) && "" != g && (s = g.replace("url(", "").replace(")", "").replace(/\"/gi, ""))))), "" == w && void 0 === (w = P.attr("data-product-lid")) && (w = ""), "" == u && void 0 === (u = P.attr("data-product-uid")) && (u = ""), "" == l && void 0 === (l = P.closest(".r").attr("id").replace("rec", "")) && (l = ""), "" == p && void 0 === (p = P.attr("data-product-inv")) && (p = ""), E = [], P.find(".js-product-edition-option").each(function() {
                    var t, r = $(this),
                        o = r.find(".js-product-edition-option-name").text(),
                        a = r.find("option:selected").val(),
                        c = tcart__cleanPrice(c = r.find("option:selected").attr("data-product-edition-variant-price"));
                    void 0 !== o && void 0 !== a && (t = {}, "" != o && (o = tcart__escapeHtml(o)), "" != a && (a = (a = tcart__escapeHtml(a)).replace(/(?:\r\n|\r|\n)/g, "")), 1 < o.length && ":" == o.charAt(o.length - 1) && (o = o.substring(0, o.length - 1)), t.option = o, t.variant = a, t.price = c, E.push(t))
                }), P.find(".js-product-option").each(function() {
                    var t, r = $(this),
                        o = r.find(".js-product-option-name").text(),
                        a = r.find("option:selected").val(),
                        c = tcart__cleanPrice(c = r.find("option:selected").attr("data-product-variant-price"));
                    void 0 !== o && void 0 !== a && (t = {}, "" != o && (o = tcart__escapeHtml(o)), "" != a && (a = (a = tcart__escapeHtml(a)).replace(/(?:\r\n|\r|\n)/g, "")), 1 < o.length && ":" == o.charAt(o.length - 1) && (o = o.substring(0, o.length - 1)), t.option = o, t.variant = a, t.price = c, E.push(t))
                }), "" == _ && void 0 === (_ = P.find(".js-product-sku").text()) && (_ = ""), "" == m && void 0 === (m = P.attr("data-product-pack-label")) && (m = ""), "" == v && void 0 === (v = P.attr("data-product-pack-m")) && (v = ""), "" == y && void 0 === (y = P.attr("data-product-pack-x")) && (y = ""), "" == f && void 0 === (f = P.attr("data-product-pack-y")) && (f = ""), "" == h && void 0 === (h = P.attr("data-product-pack-z")) && (h = "")), "" != d || "" != e && 0 != e) {
                "" == d && (d = "NoName"), "" == e && (e = 0), "" != d && (d = tcart__escapeHtml(d)), "" != s && (s = tcart__escapeHtmlImg(s));
                var x, k = {};
                if (k.name = d, k.price = e, k.img = s, k.recid = l, k.lid = w, k.pack_label = m, k.pack_m = v, k.pack_x = y, k.pack_y = f, k.pack_z = h, void 0 !== E && 0 < E.length && (k.options = E), void 0 !== _ && "" != _ && (_ = tcart__escapeHtml(_), k.sku = _), void 0 !== u && "" != u && (k.uid = u), void 0 !== w && "" != w && (k.lid = w), void 0 !== p && 0 < p && (k.inv = parseInt(p, 10)), tcart__addProduct(k), void 0 !== window.tcart_sendevent_onadd && "y" == window.tcart_sendevent_onadd) try {
                    Tilda.sendEcommerceEvent("add", [k])
                } catch (t) {
                    window.Tilda && "function" == typeof Tilda.sendEventToStatistics && (x = "/tilda/cart/add/", 0 < l && (x += l), u && 0 < u ? x += "-u" + u : w && 0 < w && (x += "-" + w), Tilda.sendEventToStatistics(x, d, window.location.href, e))
                }
            }
        }
    })
}

function tcart__addProduct(c) {
    var i = Math.floor(Date.now() / 1e3);
    tcart__syncProductsObject__LStoObj();
    var t = window.tcart.products,
        n = "";
    0 < t.length && $.each(t, function(t, r) {
        if (void 0 !== window.tcart_oneproduct && "y" == window.tcart_oneproduct) {
            if (r.name == c.name && r.price == c.price) {
                if (void 0 === r.options && void 0 === c.options && void 0 === r.sku && void 0 === c.sku) return !(n = "yes");
                if (void 0 === r.options && void 0 === c.options && void 0 !== r.sku && void 0 !== c.sku && r.sku == c.sku) return !(n = "yes")
            }
        } else if (r.name == c.name && r.price == c.price) {
            var o = "y",
                a = "";
            if ("object" == typeof r.options && "object" == typeof c.options && $.each(r.options, function(t, r) {
                    if ("object" == typeof r && "object" == typeof c.options[t]) {
                        if (r.option !== c.options[t].option || r.variant !== c.options[t].variant || r.price !== c.options[t].price) return o = !1
                    } else if (void 0 === r || void 0 === c.options[t]) return o = !1
                }), (void 0 === r.sku && void 0 === c.sku || r.sku == c.sku) && (a = "y"), "y" == o && "y" == a) return 0 < window.tcart.products[t].quantity && void 0 !== c.inv && 0 < c.inv && window.tcart.products[t].quantity == c.inv ? alert(tcart__dict(13, "Sorry, limit reached, this is the maximum quantity of goods in stock")) : (window.tcart.products[t].quantity++, window.tcart.products[t].amount = window.tcart.products[t].price * window.tcart.products[t].quantity, window.tcart.products[t].amount = tcart__roundPrice(window.tcart.products[t].amount), window.tcart.products[t].ts = i), !(n = "yes")
        }
    }), "" == n && (c.amount = c.price, c.quantity = 1, c.ts = i, window.tcart.products.push(c)), tcart__updateTotalProductsinCartObj(), tcart__reDrawCartIcon(), tcart__saveLocalObj(), "yes" == $(".t706").attr("data-opencart-onorder") ? setTimeout(function() {
        tcart__openCart()
    }, 10) : ($(".t706__carticon").addClass("t706__carticon_neworder"), setTimeout(function() {
        $(".t706__carticon").removeClass("t706__carticon_neworder")
    }, 2e3))
}

function tcart__updateTotalProductsinCartObj() {
    var o, a, t, r, c = window.tcart.products;
    0 < c.length ? (a = o = 0, $.each(c, function(t, r) {
        o += +r.quantity, a = +a + +r.amount
    }), a = tcart__roundPrice(a), window.tcart.total = o, t = window.tcart.prodamount = a, "object" == typeof window.tcart.promocode && void 0 !== window.tcart.promocode.promocode && "" != window.tcart.promocode.promocode && (void(r = 0) !== window.tcart.promocode.discountsum && 0 < window.tcart.promocode.discountsum ? r = +window.tcart.promocode.discountsum : void 0 !== window.tcart.promocode.discountpercent && 0 < window.tcart.promocode.discountpercent ? r = tcart__roundPrice(t * window.tcart.promocode.discountpercent * 1 / 100) : console.error("Cart Some error."), (t = tcart__roundPrice(t -= r)) < 0 && (t = 0), window.tcart.prodamount_discountsum = r, window.tcart.prodamount_withdiscount = t), "object" == typeof window.tcart.delivery && void 0 !== window.tcart.delivery.price && 0 < window.tcart.delivery.price && 0 < window.tcart.prodamount && (void 0 !== window.tcart.delivery.freedl && 0 < window.tcart.delivery.freedl && t >= window.tcart.delivery.freedl || (t += +window.tcart.delivery.price)), 0 < t && (t = tcart__roundPrice(t)), window.tcart.amount = t) : (window.tcart.total = 0, window.tcart.prodamount = 0, window.tcart.amount = 0)
}

function tcart__reDrawCartIcon() {
    var t = window.tcart,
        r = $(".t706__carticon");
    1 == t.total && (r.css("opacity", 0), r.animate({
        opacity: 1
    }, 300)), 0 < t.total ? (r.find(".t706__carticon-counter").html(t.total)) : (r.removeClass("t706__carticon_showed"), r.find(".t706__carticon-counter").html("")), $(".t706__carticon-text").html("=&nbsp;" + tcart__showPrice(window.tcart.prodamount))
}

function tcart__openCart() {
    // $(".t706__carticon").removeClass("t706__carticon_showed"), $("body").addClass("t706__body_cartwinshowed"), setTimeout(function() {
    //     tcart__lockScroll()
    // }, 500), tcart__syncProductsObject__LStoObj();
    // var t = $(".t706__cartwin");
    // if (t.css("opacity", 0), t.addClass("t706__cartwin_showed"), t.animate({
    //         opacity: 1
    //     }, 300), tcart__reDrawProducts(), tcart__reDrawTotal(), $(document).keyup(tcart__keyUpFunc), "y" == window.lazy) try {
    //     t_lazyload_update()
    // } catch (t) {
    //     console.error("js lazyload not loaded")
    // }
    // $(".t706 .t-form .t-radio__wrapper-delivery").each(function(t, r) {
    //     "y" !== $(r).attr("data-delivery-services") || window.tcart_newDeliveryActive || ("undefined" != typeof tcart_newDelivery && "function" == typeof tcart_newDelivery.init ? tcart_newDelivery.init(window.tcart__ymapApiKey) : (jQuery.cachedZoomScript || (jQuery.cachedZoomScript = function(t) {
    //         var r = {
    //             dataType: "script",
    //             cache: !0,
    //             url: t
    //         };
    //         return jQuery.ajax(r)
    //     }), $.cachedZoomScript("https://static.tildacdn.com/js/tilda-delivery-1.0.min.js").done(function(t, r) {
    //         "success" == r ? tcart_newDelivery.init(window.tcart__ymapApiKey) : console.log("Upload script failed, error: " + r)
    //     })))
    // })
}

function tcart__reDrawProducts() {
    var o, t = $(".t706__cartwin-products"),
        r = window.tcart.products,
        a = "";
    0 < r.length && $.each(r, function(t, r) {
        "" != r.img && (a = "yes")
    }), 0 < r.length ? (o = "", $.each(r, function(t, r) {
        o += '<div class="t706__product" data-cart-product-i="' + t + '">', "yes" == a && (o += '<div class="t706__product-thumb"><div class="t706__product-imgdiv" style="background-image:url(' + r.img + ');"></div></div>'), o += '<div class="t706__product-title t-descr t-descr_sm">', o += r.name, void 0 !== r.options && 0 < r.options.length && (o += '<div style="opacity:0.7;font-size:12px;font-weight:400;">', $.each(r.options, function(t, r) {
            o += "<div>" + r.option + ": " + r.variant + "</div>"
        }), o += "</div>"), void 0 !== r.sku && "" != r.sku && (o += '<div style="opacity:0.7;font-size:12px;font-weight:400;">', o += r.sku, o += "</div>"), o += "</div>", void 0 !== window.tcart_oneproduct && "y" == window.tcart_oneproduct ? o += '<div class="t706__product-plusminus t-descr t-descr_sm" style="display:none;"><span class="t706__product-quantity">' + r.quantity + "</span></div>" : o += '<div class="t706__product-plusminus t-descr t-descr_sm"><span class="t706__product-minus"><img src="https://static.tildacdn.com/lib/linea/c8eecd27-9482-6c4f-7896-3eb09f6a1091/arrows_circle_minus.svg" style="width:16px;height:16px;border:0;"></span><span class="t706__product-quantity">' + r.quantity + '</span><span class="t706__product-plus"><img src="https://static.tildacdn.com/lib/linea/c47d1e0c-6880-dc39-ae34-521197f7fba7/arrows_circle_plus.svg" style="width:16px;height:16px;border:0;"></span></div>', o += '<div class="t706__product-amount t-descr t-descr_sm">', 0 < r.amount && (o += tcart__showPrice(r.amount)), o += "</div>", o += '<div class="t706__product-del"><img src="https://static.tildacdn.com/lib/linea/1bec3cd7-e9d1-2879-5880-19b597ef9f1a/arrows_circle_remove.svg" style="width:20px;height:20px;border:0;"></div>', o += "</div>"
    }), t.html(o), tcart__addEvents__forProducts()) : t.html("")
}

function tcart__reDrawTotal() {
    $(".t706__cartwin-prodamount").html(tcart__showPrice(window.tcart.prodamount)), $(".t706__cartwin-totalamount").html(tcart__showPrice(window.tcart.amount));
    var t, r, o = $(".t706__cartwin-totalamount-info");
    o.html(""), "object" != typeof window.tcart.promocode && "object" != typeof window.tcart.delivery || (o.css("display", "block"), t = '<span class="t706__cartwin-totalamount-info_label">' + tcart__dict(2, "Subtotal") + ":</span>", r = '<span class="t706__cartwin-totalamount-info_value">' + tcart__showPrice(window.tcart.prodamount) + "</span>", o.append(t + r + "<br>")), "object" == typeof window.tcart.promocode && (t = '<span class="t706__cartwin-totalamount-info_label">' + tcart__dict(9, "Promo code") + ":</span>", r = '<span class="t706__cartwin-totalamount-info_value">' + window.tcart.promocode.promocode + (void 0 !== window.tcart.promocode.discountpercent ? " " + window.tcart.promocode.discountpercent + "% " : "") + "</span>", o.append(t + r + "<br>"), t = '<span class="t706__cartwin-totalamount-info_label">' + tcart__dict(10, "Discount") + ":</span>", r = '<span class="t706__cartwin-totalamount-info_value">' + tcart__showPrice(window.tcart.prodamount_discountsum) + "</span>", o.append(t + r + "<br>"), 0 < window.tcart.prodamount_withdiscount ? (t = '<span class="t706__cartwin-totalamount-info_label">' + tcart__dict(8, "Subtotal with discount") + ":</span>", r = '<span class="t706__cartwin-totalamount-info_value">' + tcart__showPrice(window.tcart.prodamount_withdiscount) + "</span>", o.append(t + r + "<br>")) : (t = '<span class="t706__cartwin-totalamount-info_label">' + tcart__dict(8, "Subtotal with discount") + ":</span>", r = '<span class="t706__cartwin-totalamount-info_value"> 0<br></span>', o.append(t + r))), "object" == typeof window.tcart.delivery && void 0 !== window.tcart.delivery.name && void 0 !== window.tcart.delivery.price && 0 < window.tcart.delivery.price && (void 0 !== window.tcart.delivery.freedl && 0 < window.tcart.delivery.freedl && window.tcart.prodamount >= window.tcart.delivery.freedl && (window.tcart.prodamount_withdiscount >= window.tcart.delivery.freedl || void 0 === window.tcart.prodamount_withdiscount) ? (t = '<span class="t706__cartwin-totalamount-info_label">' + window.tcart.delivery.name + ":</span>", r = '<span class="t706__cartwin-totalamount-info_value"> 0 (' + tcart__dict(14, "free") + ")<br></span>", o.append(t + r)) : (t = '<span class="t706__cartwin-totalamount-info_label">' + window.tcart.delivery.name + ":</span>", r = '<span class="t706__cartwin-totalamount-info_value">' + tcart__showPrice(window.tcart.delivery.price) + "</span>", o.append(t + r + "<br>"))), 0 == window.tcart.prodamount ? $(".t706__cartwin-prodamount-wrap").css("display", "none") : $(".t706__cartwin-prodamount-wrap").css("display", "block"), tcart__changeSubmitStatus(), 0 != window.tcart.amount && (window.tcart.prodamount != window.tcart.amount || $(".t706__orderform").length && 700 < $(".t706__orderform").height()) ? $(".t706__cartwin-totalamount-wrap").css("display", "block") : $(".t706__cartwin-totalamount-wrap").css("display", "none"), void 0 !== window.tcart.promocode && ($(".t706__cartwin-totalamount-wrap").css("display", "block"), 0 == window.tcart.amount && $(".t706__cartwin-totalamount").html("0")), void 0 !== window.tcart.delivery && void 0 !== window.tcart.delivery.price && 0 < window.tcart.delivery.price && $(".t706__cartwin-totalamount-wrap").css("display", "block"), $(".t706__carticon-text").html("=&nbsp;" + tcart__showPrice(window.tcart.prodamount))
}

function tcart__changeSubmitStatus() {
    var t = void 0 !== window.tcart_minorder && 0 < window.tcart_minorder,
        r = void 0 !== window.tcart_mincntorder && 0 < window.tcart_mincntorder;
    t && r ? (t && (window.tcart.prodamount >= window.tcart_minorder ? $(".t706__cartwin-prodamount-minorder").css("display", "none") : $(".t706__cartwin-prodamount-minorder").css("display", "block")), r && (window.tcart.total >= window.tcart_mincntorder ? $(".t706__cartwin-prodamount-mincntorder").css("display", "none") : $(".t706__cartwin-prodamount-mincntorder").css("display", "block")), window.tcart.prodamount >= window.tcart_minorder && (window.tcart.total, window.tcart_mincntorder)) : (t || r) && (t && (window.tcart.prodamount >= window.tcart_minorder ? $(".t706__cartwin-prodamount-minorder").css("display", "none") : $(".t706__cartwin-prodamount-minorder").css("display", "block")), r && (window.tcart.total >= window.tcart_mincntorder ? $(".t706__cartwin-prodamount-mincntorder").css("display", "none") : $(".t706__cartwin-prodamount-mincntorder").css("display", "block")))
}

function tcart__addEvents__forProducts() {
    $(".t706__product-plus").click(function() {
        tcart__product__plus($(this))
    }), $(".t706__product-minus").click(function() {
        tcart__product__minus($(this))
    }), $(".t706__product-del").click(function() {
        tcart__product__del($(this))
    }), $(".t706__product-quantity").click(function() {
        tcart__product__editquantity($(this))
    })
}

function tcart__closeCart() {
    $("body").removeClass("t706__body_cartwinshowed"), tcart__unlockScroll(), void 0 !== window.tcart_dontstore && "y" == window.tcart_dontstore && ("undefind" != typeof window.tcart && "undefind" != typeof window.tcart.products && (window.tcart.products = []), tcart__updateTotalProductsinCartObj(), tcart__saveLocalObj(), $(".t706__carticon-counter").html(window.tcart.total), tcart__reDrawTotal(), tcart__reDrawProducts()), 0 < window.tcart.total && $(".t706__carticon").addClass("t706__carticon_showed"), tcart__delZeroquantity_inCartObj(), $(document).unbind("keyup", tcart__keyUpFunc), $(".t706__carticon").removeClass("t706__carticon_neworder"), $(".t706__cartwin").animate({
        opacity: 0
    }, 300), setTimeout(function() {
        $(".t706__cartwin").removeClass("t706__cartwin_showed"), $(".t706__cartwin").css("opacity", "1")
    }, 300), void 0 !== window.tcart_success && "yes" == window.tcart_success && location.reload()
}

function tcart__keyUpFunc(t) {
    27 == t.keyCode && tcart__closeCart()
}

function tcart__product__plus(t) {
    var r = t.closest(".t706__product"),
        o = r.attr("data-cart-product-i");
    0 < window.tcart.products[o].quantity && void 0 !== window.tcart.products[o].inv && 0 < window.tcart.products[o].inv && window.tcart.products[o].inv == window.tcart.products[o].quantity ? alert(tcart__dict(13, "Sorry, limit reached, this is the maximum quantity of goods in stock")) : (window.tcart.products[o].quantity++, window.tcart.products[o].amount = window.tcart.products[o].price * window.tcart.products[o].quantity, window.tcart.products[o].amount = tcart__roundPrice(window.tcart.products[o].amount), r.find(".t706__product-quantity").html(window.tcart.products[o].quantity), 0 < window.tcart.products[o].amount ? r.find(".t706__product-amount").html(tcart__showPrice(window.tcart.products[o].amount)) : r.find(".t706__product-amount").html(""), tcart__updateTotalProductsinCartObj(), $(".t706__carticon-counter").html(window.tcart.total), tcart__reDrawTotal(), tcart__saveLocalObj())
}

function tcart__product__minus(t) {
    var r = t.closest(".t706__product"),
        o = r.attr("data-cart-product-i");
    0 < window.tcart.products[o].quantity && window.tcart.products[o].quantity--, window.tcart.products[o].amount = window.tcart.products[o].price * window.tcart.products[o].quantity, window.tcart.products[o].amount = tcart__roundPrice(window.tcart.products[o].amount), r.find(".t706__product-quantity").html(window.tcart.products[o].quantity), 0 < window.tcart.products[o].amount && r.find(".t706__product-amount").html(tcart__showPrice(window.tcart.products[o].amount)), 0 == window.tcart.products[o].quantity && tcart__product__del(t), tcart__updateTotalProductsinCartObj(), $(".t706__carticon-counter").html(window.tcart.total), tcart__reDrawTotal(), tcart__saveLocalObj()
}

function tcart__product__del(t) {
    var r = t.closest(".t706__product"),
        o = r.attr("data-cart-product-i");
    window.tcart.products.splice(o, 1), r.remove(), tcart__updateTotalProductsinCartObj(), $(".t706__carticon-counter").html(window.tcart.total), tcart__reDrawTotal(), tcart__saveLocalObj(), tcart__reDrawProducts(), 0 == window.tcart.products.length && tcart__closeCart()
}

function tcart__product__editquantity(r) {
    var o, a, t, c, i;
    r.find(".t706__product-quantity-inp").length || (o = r.closest(".t706__product"), a = o.attr("data-cart-product-i"), c = '<input type="text" name="tilda-tmp-cart-qnt" class="t706__product-quantity-inp" value="' + (0 == (t = r.text()) || 0 < t ? parseInt(t, 10) : 1) + '" style="width:30px;">', r.html(c), r.addClass("t706__product-quantity_editing"), (i = r.find(".t706__product-quantity-inp")).focus(function() {
        var t = this;
        setTimeout(function() {
            t.selectionStart = t.selectionEnd = 1e4
        }, 0)
    }), i.focus(), i.focusout(function() {
        var t = i.val(),
            t = parseInt(t, 10);
        tcart__product__updateQuantity(r, o, a, 0 < t ? t : 1), r.text(window.tcart.products[a].quantity), r.removeClass("t706__product-quantity_editing")
    }))
}

function tcart__product__updateQuantity(t, r, o, a) {
    0 < a ? (void 0 !== window.tcart.products[o].inv && 0 < window.tcart.products[o].inv && a > window.tcart.products[o].inv && (alert(tcart__dict(13, "Sorry, limit reached, this is the maximum quantity of goods in stock")), a = window.tcart.products[o].inv), window.tcart.products[o].quantity = a, window.tcart.products[o].amount = window.tcart.products[o].price * window.tcart.products[o].quantity, window.tcart.products[o].amount = tcart__roundPrice(window.tcart.products[o].amount), r.find(".t706__product-quantity").html(window.tcart.products[o].quantity), 0 < window.tcart.products[o].amount ? r.find(".t706__product-amount").html(tcart__showPrice(window.tcart.products[o].amount)) : r.find(".t706__product-amount").html("")) : tcart__product__del(t), tcart__updateTotalProductsinCartObj(), $(".t706__carticon-counter").html(window.tcart.total), tcart__reDrawTotal(), tcart__saveLocalObj(), 0 == a && tcart__reDrawProducts()
}

function tcart__delZeroquantity_inCartObj() {
    var t = window.tcart.products,
        o = "";
    0 < t.length && $.each(t, function(t, r) {
        void 0 !== r && 0 == r.quantity && (window.tcart.products.splice(t, 1), o = "yes")
    }), "yes" == o && tcart__saveLocalObj()
}

function tcart__drawBottomTotalAmount() {
    var t = "";
    t += '<div class="t706__cartwin-totalamount-wrap t-descr t-descr_xl">', t += '<div class="t706__cartwin-totalamount-info" style="margin-top: 10px; font-size:14px; font-weight:400;"></div>', t += '<span class="t706__cartwin-totalamount-label">' + tcart__dict(1, "Total") + ":&nbsp;</span>", t += '<span class="t706__cartwin-totalamount"></span>', t += "</div>", $(".t706 .t-form__errorbox-middle").before(t)
}

function tcart__addDelivery() {
    var t, r, o, a, c, i = $(".t706 .t-form .t-radio__wrapper-delivery");
    0 !== i.length && (t = $(".t706 .t-form .t-radio__wrapper-delivery input:checked").val(), r = $(".t706 .t-form .t-radio__wrapper-delivery input:checked").attr("data-delivery-price"), o = $(".t706 .t-form .t-radio__wrapper-delivery .t-radio_delivery:checked").attr("data-service-id"), void 0 !== t && void 0 !== r && "" != t && (r = tcart__cleanPrice(r), 0 < (a = t.indexOf("=")) && (t = (t = t.substring(0, a)).trim()), window.tcart.delivery = {}, window.tcart.delivery.name = t, window.tcart.delivery.price = r, o && (window.tcart.delivery.service_id = o), console.log("set delivery price"), void 0 !== (i = $(".t706 .t-form .t-radio__wrapper-delivery")).attr("data-delivery-free") && 0 < i.attr("data-delivery-free") && (window.tcart.delivery.freedl = parseInt(i.attr("data-delivery-free"), 10))), (c = $(".t706 .t-form .t-radio__wrapper-delivery input")).length && c.change(function() {
        tcart__updateDelivery()
    }))
}

function tcart__updateDelivery() {
    var t, r, o = $(".t706 .t-form .t-radio__wrapper-delivery input:checked").val(),
        a = $(".t706 .t-form .t-radio__wrapper-delivery input:checked").attr("data-delivery-price");
    void 0 !== o && void 0 !== a ? (a = tcart__cleanPrice(a), "" == o || 0 < (t = o.indexOf("=")) && (o = (o = o.substring(0, t)).trim()), window.tcart.delivery = {}, window.tcart.delivery.name = o, window.tcart.delivery.price = a, void 0 !== (r = $(".t706 .t-form .t-radio__wrapper-delivery")).attr("data-delivery-free") && 0 < r.attr("data-delivery-free") && (window.tcart.delivery.freedl = parseInt(r.attr("data-delivery-free")))) : void 0 !== window.tcart.delivery && delete window.tcart.delivery, $(".t706 #customdelivery").length && (tcart_newDelivery.fillTcartDelivery(), tcart_newDelivery.setFullAddress(tcart_newDelivery.getFullAddress())), tcart__updateTotalProductsinCartObj(), tcart__reDrawTotal()
}

function tcart__addPromocode(t) {
    "object" != typeof window.tcart.promocode ? ("object" == typeof t && void 0 !== t.promocode && "" != t.promocode && (0 < t.discountsum || 0 < t.discountpercent) && (window.tcart.promocode = t), tcart__updateTotalProductsinCartObj(), tcart__reDrawTotal()) : console.error("Error. Promocode already activated before")
}

function tcart__addEvent__selectpayment() {
    var t;
    0 == $(".t706").find(".t-input-group_pm").length || (t = $(".t706 .t-form .t-radio__wrapper-payment input")).length && (t.change(function() {
        var t = $(".t706 .t-form .t-radio__wrapper-payment input:checked").attr("data-payment-variant-system");
        void 0 !== t && "" != t || (t = ""), $(".t706").attr("data-payment-variant-system", t), window.tcart.system = t
    }), $(".t706 .t-form .t-radio__wrapper-payment input:checked").trigger("change"))
}

function tcart__escapeHtml(t) {
    var r = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    };
    return t.replace(/[<>"']/g, function(t) {
        return r[t]
    })
}

function tcart__escapeHtmlImg(t) {
    var r = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
    };
    return t.replace(/[<>"]/g, function(t) {
        return r[t]
    })
}

function tcart__cleanPrice(t) {
    return void 0 === t || "" == t || 0 == t ? t = 0 : (t = (t = t.replace(",", ".")).replace(/[^0-9\.]/g, ""), t = parseFloat(t).toFixed(2), isNaN(t) && (t = 0), (t = +(t = parseFloat(t))) < 0 && (t = 0)), t
}

function tcart__roundPrice(t) {
    return void 0 === t || "" == t || 0 == t ? t = 0 : (t = parseFloat(t).toFixed(2), (t = +(t = parseFloat(t))) < 0 && (t = 0)), t
}

function tcart__showPrice(t) {
    return t = void 0 === t || 0 == t || "" == t ? "" : (t = t.toString(), void 0 !== window.tcart.currency_dec && "00" == window.tcart.currency_dec && (-1 === t.indexOf(".") && -1 === t.indexOf(",") ? t += ".00" : 1 === t.substr(t.indexOf(".") + 1).length && (t += "0")), t = t.replace(/\B(?=(\d{3})+(?!\d))/g, " "), void 0 !== window.tcart.currency_sep && "," == window.tcart.currency_sep && (t = t.replace(".", ",")), window.tcart.currency_txt_l + t + window.tcart.currency_txt_r)
}

function tcart__lockScroll() {
    var t, r;
    /iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && ((t = $("body")).hasClass("t-body_scroll-locked") || (r = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop, t.addClass("t-body_scroll-locked"), t.css("top", "-" + r + "px"), t.attr("data-popup-scrolltop", r)))
}

function tcart__unlockScroll() {
    var t, r;
    !/iPhone|iPad|iPod/i.test(navigator.userAgent) || window.MSStream || (t = $("body")).hasClass("t-body_scroll-locked") && (r = $("body").attr("data-popup-scrolltop"), t.removeClass("t-body_scroll-locked"), t.css("top", ""), t.removeAttr("data-popup-scrolltop"), window.scrollTo(0, r))
}

function tcart__clearProdUrl() {
    try {
        var t = window.location.href,
            r = t.indexOf("#!/tproduct/");
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && r < 0 && (r = t.indexOf("%23!/tproduct/")) < 0 && (r = t.indexOf("#%21%2Ftproduct%2F")), r < 0 && ((r = t.indexOf("/tproduct/")) < 0 && (r = t.indexOf("%2Ftproduct%2F"))), r < 0) return;
        t = t.substring(0, r), void 0 !== history.replaceState && window.history.replaceState("", "", t)
    } catch (t) {}
}