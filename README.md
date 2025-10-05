# 🚀 Modern Portfolio Sitesi

Bu proje, GitHub Pages'de ücretsiz olarak yayınlayabileceğiniz modern ve responsive bir portfolio sitesidir. JSON dosyası üzerinden kolayca veri girişi yapabilirsiniz.

## ✨ Özellikler

- 📱 **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- 🎨 **Modern UI/UX** - Gradient renkler ve smooth animasyonlar
- ⚡ **Hızlı Yükleme** - Optimize edilmiş kod ve görseller
- 🔧 **Kolay Özelleştirme** - JSON dosyası ile basit veri yönetimi
- 🌐 **GitHub Pages Uyumlu** - Ücretsiz hosting desteği
- 📊 **SEO Optimizasyonu** - Arama motorları için optimize edilmiş
- 🎯 **Accessibility** - Erişilebilirlik standartlarına uygun

## 🛠️ Teknolojiler

- **HTML5** - Semantik markup
- **CSS3** - Modern CSS özellikleri ve Grid/Flexbox
- **JavaScript (ES6+)** - Modern JavaScript özellikleri
- **Font Awesome** - İkon kütüphanesi
- **Google Fonts** - Inter font ailesi

## 📁 Proje Yapısı

```
portfolio/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript kodu
├── data.json           # Portfolio verileri
└── README.md           # Bu dosya
```

## 🚀 Kurulum ve Kullanım

### 1. Projeyi İndirin
```bash
git clone https://github.com/kullaniciadi/portfolio.git
cd portfolio
```

### 2. Verilerinizi Düzenleyin
`data.json` dosyasını açın ve kendi bilgilerinizi girin:

#### Kişisel Bilgiler
```json
{
  "personal": {
    "name": "Adınız Soyadınız",
    "title": "Mesleğiniz",
    "description": "Kısa tanıtım metniniz",
    "profileImage": "profil-fotoğrafınızın-url'si",
    "about": "Hakkınızda detaylı açıklama",
    "stats": {
      "experience": "3+",
      "projects": "20+",
      "clients": "15+"
    }
  }
}
```

#### İletişim Bilgileri
```json
{
  "contact": {
    "email": "email@adresiniz.com",
    "phone": "+90 555 123 45 67",
    "location": "Şehir, Ülke",
    "social": [
      {
        "name": "GitHub",
        "url": "https://github.com/kullaniciadi",
        "icon": "fab fa-github"
      }
    ]
  }
}
```

#### Yetenekler
```json
{
  "skills": [
    {
      "name": "JavaScript",
      "description": "Açıklama metni",
      "icon": "fab fa-js-square"
    }
  ]
}
```

#### Projeler
```json
{
  "projects": [
    {
      "title": "Proje Adı",
      "description": "Proje açıklaması",
      "technologies": ["React", "Node.js"],
      "image": "fas fa-laptop-code",
      "links": {
        "live": "https://canli-demo.com",
        "github": "https://github.com/kullaniciadi/proje"
      }
    }
  ]
}
```

### 3. GitHub Pages'de Yayınlayın

1. **Repository Oluşturun**
   - GitHub'da yeni bir repository oluşturun
   - Repository adını `kullaniciadi.github.io` olarak ayarlayın

2. **Dosyaları Yükleyin**
   ```bash
   git add .
   git commit -m "Portfolio sitesi eklendi"
   git push origin main
   ```

3. **GitHub Pages'i Aktifleştirin**
   - Repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

4. **Site Yayında!**
   - Birkaç dakika sonra siteniz `https://kullaniciadi.github.io` adresinde yayında olacak

## 🎨 Özelleştirme

### Renk Teması
`styles.css` dosyasında renk değişkenlerini düzenleyebilirsiniz:

```css
/* Ana renkler */
--primary-color: #4f46e5;
--secondary-color: #7c3aed;
--accent-color: #fbbf24;
```

### Font Değiştirme
`index.html` dosyasında Google Fonts linkini değiştirin:

```html
<link href="https://fonts.googleapis.com/css2?family=YeniFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### İkon Ekleme
Font Awesome ikonlarını kullanabilirsiniz:
- [Font Awesome İkonları](https://fontawesome.com/icons)

## 📱 Responsive Tasarım

Site aşağıdaki ekran boyutlarında test edilmiştir:
- 📱 Mobil: 320px - 768px
- 💻 Tablet: 768px - 1024px
- 🖥️ Desktop: 1024px+

## 🔧 Gelişmiş Özellikler

### PWA Desteği
Service Worker ekleyerek Progressive Web App özelliklerini aktifleştirebilirsiniz.

### SEO Optimizasyonu
- Meta tagları ekleyin
- Open Graph etiketleri
- Schema.org markup

### Analytics
Google Analytics veya başka bir analytics servisi ekleyebilirsiniz.

## 🐛 Sorun Giderme

### JSON Dosyası Yüklenmiyor
- Dosya yolu doğru mu kontrol edin
- JSON syntax'ı doğru mu kontrol edin
- Browser console'da hata mesajlarını kontrol edin

### Görseller Görünmüyor
- Görsel URL'lerinin doğru olduğundan emin olun
- HTTPS protokolü kullanın
- CORS politikalarını kontrol edin

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

- **Email**: ornek@email.com
- **GitHub**: [@kullaniciadi](https://github.com/kullaniciadi)
- **LinkedIn**: [Profiliniz](https://linkedin.com/in/kullaniciadi)

## 🙏 Teşekkürler

- [Font Awesome](https://fontawesome.com/) - İkonlar için
- [Google Fonts](https://fonts.google.com/) - Fontlar için
- [GitHub Pages](https://pages.github.com/) - Ücretsiz hosting için

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
