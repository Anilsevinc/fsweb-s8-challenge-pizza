# 🍕 Teknolojik Yemekler

**Kod acıktırır, pizza doyurur.**  
React ile geliştirilmiş, tek sayfa (SPA) pizza sipariş uygulaması.

---

## 📖 Proje Hakkında

Teknolojik Yemekler, anasayfadan sipariş formuna ve sipariş onay ekranına kadar tek sayfa içinde akan bir pizza sipariş deneyimi sunar. State yönetimi için **prop lifting** kullanılır; sayfalar arası veri **React state** ile taşınır, ek bir router veya global state kütüphanesi kullanılmaz.

### ✨ Özellikler

- **Anasayfa** — Hero alanı, özel lezzetler kartları, kategoriler ve ürün listesi
- **Sipariş formu** — Boyut, hamur, ek malzemeler (4–10 adet), isim, notlar, miktar; anlık toplam hesaplama
- **Form doğrulama** — İsim en az 3 karakter; malzeme 4–10 arası; eksik/hatalı durumda "Sipariş Ver" devre dışı
- **Sipariş onayı** — API yanıtına göre sipariş özeti ve toplam fiyat
- **Ağ hatası yönetimi** — POST hatası veya bağlantı yokken kullanıcıya mesaj (örn. "İnternet'e bağlanılamadı")
- **Responsive tasarım** — 480px breakpoint ile mobil uyumlu; header, form, sipariş onay sayfası esnek
- **E2E testler** — Cypress ile form, başarı sayfası, doğrulama ve hata senaryoları

---

## 🛠 Teknolojiler

| Alan | Kullanılan |
|------|------------|
| **Framework** | React 18 |
| **Build** | Vite 5 |
| **Stil** | styled-components, CSS |
| **HTTP** | Axios (mock API: reqres.in) |
| **Test** | Cypress (E2E) |

---

## 📁 Proje Yapısı

```
src/
├── App.jsx                 # Sayfa state (home / order / success), prop lifting
├── main.jsx
├── components/             # Anasayfa bileşenleri
│   ├── Header/
│   ├── CategoryNav/
│   ├── SpecialOffers/
│   ├── ProductSectionHeader/
│   ├── CategoryTabs/
│   ├── ProductCards/
│   └── Footer/
├── HomePage/
├── OrderPizza/             # Sipariş formu
│   ├── OrderForm/          # Form state, doğrulama, API çağrısı
│   └── OrderHeader/
└── OrderSuccess/           # Sipariş onay ekranı
```

---

## 🚀 Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat (http://localhost:5173)
npm run dev

# Production build
npm run build

```

---

## 🧪 Testler

Cypress E2E testleri:

```bash
# Tarayıcıda açık test arayüzü
npm run cypress:open

# Headless (CI için)
npm run cypress:run
```

**Test kapsamı:**  
Form input, malzeme seçimi, form gönderimi, sipariş onay sayfası içeriği, "Anasayfaya Dön", form doğrulama (disabled buton), ağ hatası mesajları.

**Not:** Testlerin çalışması için `npm run dev` ile uygulamanın ayakta olması gerekir (varsayılan: `http://localhost:5173`).

---

## 📱 Uygulama Akışı

```
Anasayfa  →  "ACIKTIM" / "Sipariş Ver"  →  Sipariş Formu  →  "Sipariş Ver" (POST)  →  Sipariş Onayı
                                                                                          ↓
                                                                                    "Anasayfaya Dön"
```

- **Anasayfa:** Header (logo, slogan, ACIKTIM), Özel Lezzetler, kategoriler, ürün kartları.
- **Sipariş formu:** Boyut (S/M/L), hamur, 4–10 malzeme, isim, notlar, miktar; geçerli formda POST atılır.
- **Sipariş onayı:** Gelen sipariş verisi ile özet ve toplam; "Anasayfaya Dön" ile anasayfaya dönülür.

Veri, `App.jsx` içindeki `currentPage` ve `orderResponse` state’i ile yönetilir; formdan gelen `onOrderSuccess` ile sipariş verisi üst bileşene iletilir ve başarı sayfasına aktarılır.

---

## 🎨 Tasarım Notları

- **Renkler:** Kırmızı `#CE2829`, Sarı `#FDC913`, Koyu gri `#292929`, Açık gri `#5F5F5F`, Bej `#FAF7F2`
- **Fontlar:** Barlow, Roboto Condensed, Quattrocento, Satisfy (Google Fonts)
- **Responsive:** 480px altında header, form (2 sütun malzeme, miktar + buton yan yana), sipariş onay sayfası ve anasayfa bileşenleri mobil uyumlu

---

## 📄 Lisans

Proje eğitim amaçlı geliştirilmiştir.
