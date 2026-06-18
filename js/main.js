'use strict';

/* ============================================================
   ARSLAN TORNA — Main JS
   ============================================================ */

/* ---------- Lang Data ---------- */
const langData = {
  tr: {
    /* Nav */
    'nav-home':       'Ana Sayfa',
    'nav-about':      'Hakkımızda',
    'nav-services':   'Hizmetler',
    'nav-gallery':    'Galeri',
    'nav-contact':    'İletişim',
    'nav-cta':        'Teklif Al',

    /* Breadcrumb */
    'bc-home': 'Ana Sayfa',

    /* Hero */
    'hero-badge': "Beyoğlu'ndan Dünyaya · İstanbul",
    'hero-h1':    'CNC Talaşlı İmalatta <em>Ustalık ve Güven</em>',
    'hero-p':     'Rovelver torna, CNC otomat işleri ve özel sipariş metal imalatında 20 yılı aşkın deneyim. Pirinç, demir ve paslanmaz çelik işleme uzmanlığımızla hassas parçalar üretiyoruz.',
    'hero-btn1':  'Hizmetlerimiz',
    'hero-btn2':  'Bize Ulaşın',

    /* Stats */
    'stat-1': 'Yıllık Deneyim',
    'stat-2': 'Tamamlanan Proje',
    'stat-3': 'Farklı Malzeme',
    'stat-4': 'Mutlu Müşteri',

    /* About */
    'about-label': 'Hakkımızda',
    'about-h2':    'Beyoğlu\'nun Kalbinden <em>Hassas Talaşlı İmalat</em>',
    'about-p1':    "Arslan Torna, İstanbul'un tarihi Beyoğlu ilçesinde, Birlik İşhanı'nda faaliyet gösteren bir CNC talaşlı imalat atölyesidir. 20 yılı aşkın deneyimimizle rovelver torna ve CNC otomat işlerinde sektörün güvenilir ismi olmayı sürdürüyoruz.",
    'about-p2':    'Pirinç, demir ve paslanmaz çelik malzemelerle mobilya kulpları, gizli menteşeler, baharatlıklar, yangın musluğu yedek parçaları ve çok daha fazlasını itina ile üretiyoruz. Her parçada kalite ve hassasiyetten taviz vermiyoruz.',

    /* Services */
    'services-h2': 'Hizmetlerimiz',
    'services-p':  'CNC otomat işlemeden özel sipariş imalata kadar geniş bir hizmet yelpazesiyle, metal işleme ihtiyaçlarınızı eksiksiz karşılıyoruz.',
    'svc-1-title': 'CNC Otomat İşleme',
    'svc-1-desc':  'Seri üretim için yüksek hassasiyetli CNC otomat işleme. Karmaşık geometriler, sıkı toleranslar ve tekrarlanabilir kalite.',
    'svc-2-title': 'Rovelver Torna',
    'svc-2-desc':  'Çok milli rovelver torna ile hızlı ve hassas parça üretimi. Küçük ve orta ölçekli serilerde uzman hizmet.',
    'svc-3-title': 'Özel Sipariş İmalat',
    'svc-3-desc':  'Prototipler, tekil parçalar ve küçük seriler için özel imalat hizmeti. Müşteri teknik çizimleriyle çalışıyoruz.',
    'svc-4-title': 'Pirinç İşleme',
    'svc-4-desc':  'Pirinç malzemede uzman işleme. Mobilya aksesuarları, dekoratif parçalar ve endüstriyel bileşenler.',
    'svc-5-title': 'Demir/Çelik İşleme',
    'svc-5-desc':  'Demir ve paslanmaz çelik malzemelerde hassas torna ve frezeleme işlemleri.',
    'svc-6-title': 'Yedek Parça Üretimi',
    'svc-6-desc':  'Orijinal yedek parça üretimi ve mevcut parçaların birebir kopyalanması. Yangın ekipmanları ve endüstriyel parçalar.',

    /* Sectors */
    'sectors-h2': 'Hizmet Verdiğimiz Sektörler',
    'sectors-p':  'Geniş malzeme yelpazesi ve çok yönlü imalat kapasitemizle farklı sektörlere çözüm üretiyoruz.',
    'sec-1-title': 'Mobilya Sektörü',
    'sec-1-desc':  'Kulp, menteşe, raf sistemi aksesuarları',
    'sec-2-title': 'Restoran & Gastronomi',
    'sec-2-desc':  'Baharatlık, QR menü standı, mutfak ekipmanı',
    'sec-3-title': 'Yangın Güvenliği',
    'sec-3-desc':  'Yangın musluğu ve vana yedek parçaları',
    'sec-4-title': 'Nargile & Aksesuar',
    'sec-4-desc':  'Özel nargile parçaları ve aksesuarlar',
    'sec-5-title': 'İç Mimarlık',
    'sec-5-desc':  'Dekoratif metal aksesuar ve özel parçalar',
    'sec-6-title': 'Genel Sanayi',
    'sec-6-desc':  'Her türlü endüstriyel hassas parça üretimi',

    /* CTA */
    'cta-h2':   'Projenizi Hayata Geçirelim',
    'cta-p':    'Teknik çiziminizi veya fikrinizi paylaşın — size en uygun çözümü ve fiyatı sunalım.',
    'cta-btn1': 'WhatsApp ile Yaz',
    'cta-btn2': 'Telefon ile Ara',

    /* FAQ */
    'faq-title': 'Sık Sorulan Sorular',
    'faq-1-q': 'Minimum sipariş miktarı nedir?',
    'faq-1-a': 'Minimum sipariş miktarı parça türüne göre değişmektedir. Prototip ve tekil parça taleplerini de değerlendiriyoruz. Detaylı bilgi için bizi arayabilir veya WhatsApp üzerinden iletişime geçebilirsiniz.',
    'faq-2-q': 'Hangi malzemelerle çalışıyorsunuz?',
    'faq-2-a': 'Ağırlıklı olarak pirinç (sarı çelik), demir ve paslanmaz çelik ile çalışıyoruz. Pirinç işleme konusunda özellikle uzmanlaşmış olup yüksek hassasiyetli sonuçlar üretiyoruz.',
    'faq-3-q': 'Teslimat süresi ne kadar?',
    'faq-3-a': 'Teslimat süresi sipariş miktarı ve karmaşıklığına göre değişmektedir. Küçük seriler genellikle 3–7 iş günü içinde teslim edilmektedir. Acil talepler için de çözüm üretebiliriz.',
    'faq-4-q': 'Teknik çizim ile sipariş verebilir miyim?',
    'faq-4-a': 'Evet, müşteri teknik çizimleri (DWG, DXF, PDF veya kağıt çizim) ile çalışmaktayız. Numuneye bakarak da birebir kopya üretim yapabiliyoruz.',
    'faq-5-q': 'Atölyeniz nerede ve nasıl ulaşabilirim?',
    'faq-5-a': 'Atölyemiz Beyoğlu, Emekyemez Mah. Yanıkkapı Sk. Birlik İşhanı No:26/5 adresinde bulunmaktadır. Taksim ve Karaköy metrolarına yürüme mesafesindeyiz. Detaylı yol tarifi için bizi arayabilirsiniz.',

    /* Footer */
    'footer-desc': 'Beyoğlu\'ndan tüm dünyaya; rovelver torna ve CNC otomat işlerinde 20+ yıllık ustalık.',

    /* Inner page labels */
    'pg-about-title': 'Hakkımızda',
    'pg-about-sub':   'Beyoğlu\'ndan dünyaya uzanan bir imalat hikayesi',
    'pg-services-title': 'Hizmetlerimiz',
    'pg-services-sub':   'CNC talaşlı imalatta kapsamlı çözümler',
    'pg-gallery-title': 'Galeri',
    'pg-gallery-sub':   'İşlerimizden kareler',
    'pg-contact-title': 'İletişim',
    'pg-contact-sub':   'Teklif almak veya bilgi edinmek için bize ulaşın',

    /* 404 */
    '404-title': 'Sayfa Bulunamadı',
    '404-p':     'Aradığınız sayfa mevcut değil veya taşınmış olabilir.',
    '404-btn1':  'Ana Sayfaya Dön',
    '404-btn2':  'Bize Ulaşın',
  },
  en: {
    /* Nav */
    'nav-home':       'Home',
    'nav-about':      'About Us',
    'nav-services':   'Services',
    'nav-gallery':    'Gallery',
    'nav-contact':    'Contact',
    'nav-cta':        'Get a Quote',

    /* Breadcrumb */
    'bc-home': 'Home',

    /* Hero */
    'hero-badge': 'From Beyoğlu to the World · Istanbul',
    'hero-h1':    'Precision CNC Machining with <em>Expertise & Trust</em>',
    'hero-p':     'Over 20 years of experience in revolver lathe, CNC automatic machining, and custom metal fabrication. We produce precision parts in brass, iron, and stainless steel.',
    'hero-btn1':  'Our Services',
    'hero-btn2':  'Contact Us',

    /* Stats */
    'stat-1': 'Years Experience',
    'stat-2': 'Completed Projects',
    'stat-3': 'Different Materials',
    'stat-4': 'Happy Clients',

    /* About */
    'about-label': 'About Us',
    'about-h2':    'Precision Machining from the <em>Heart of Beyoğlu</em>',
    'about-p1':    "Arslan Torna is a CNC machining workshop operating in Istanbul's historic Beyoğlu district. With over 20 years of experience, we are a trusted name in revolver lathe and CNC automatic machining.",
    'about-p2':    'Working with brass, iron, and stainless steel, we meticulously produce furniture handles, hidden hinges, spice racks, fire hydrant spare parts, and much more. We never compromise on quality and precision.',

    /* Services */
    'services-h2': 'Our Services',
    'services-p':  'From CNC automatic machining to custom fabrication, we fully meet your metal processing needs.',
    'svc-1-title': 'CNC Automatic Machining',
    'svc-1-desc':  'High-precision CNC automatic machining for mass production. Complex geometries, tight tolerances, repeatable quality.',
    'svc-2-title': 'Revolver Lathe',
    'svc-2-desc':  'Fast and precise part production with multi-spindle revolver lathe. Expert service for small and medium runs.',
    'svc-3-title': 'Custom Order Manufacturing',
    'svc-3-desc':  'Custom manufacturing for prototypes, single pieces, and small series. We work with customer technical drawings.',
    'svc-4-title': 'Brass Machining',
    'svc-4-desc':  'Expert machining in brass. Furniture accessories, decorative parts, and industrial components.',
    'svc-5-title': 'Iron/Steel Machining',
    'svc-5-desc':  'Precision turning and milling in iron and stainless steel materials.',
    'svc-6-title': 'Spare Parts Production',
    'svc-6-desc':  'Original spare part production and exact replication of existing parts. Fire equipment and industrial parts.',

    /* Sectors */
    'sectors-h2': 'Sectors We Serve',
    'sectors-p':  'With a wide range of materials and versatile manufacturing capacity, we provide solutions for different sectors.',
    'sec-1-title': 'Furniture Industry',
    'sec-1-desc':  'Handles, hinges, shelf system accessories',
    'sec-2-title': 'Restaurant & Gastronomy',
    'sec-2-desc':  'Spice racks, QR menu stands, kitchen equipment',
    'sec-3-title': 'Fire Safety',
    'sec-3-desc':  'Fire hydrant and valve spare parts',
    'sec-4-title': 'Hookah & Accessories',
    'sec-4-desc':  'Custom hookah parts and accessories',
    'sec-5-title': 'Interior Architecture',
    'sec-5-desc':  'Decorative metal accessories and custom parts',
    'sec-6-title': 'General Industry',
    'sec-6-desc':  'All kinds of industrial precision parts production',

    /* CTA */
    'cta-h2':   'Let\'s Bring Your Project to Life',
    'cta-p':    'Share your technical drawing or idea — we\'ll offer the best solution and price for you.',
    'cta-btn1': 'Message on WhatsApp',
    'cta-btn2': 'Call by Phone',

    /* FAQ */
    'faq-title': 'Frequently Asked Questions',
    'faq-1-q': 'What is the minimum order quantity?',
    'faq-1-a': 'Minimum order quantity varies by part type. We also consider prototype and single-piece requests. For details, you can call us or contact via WhatsApp.',
    'faq-2-q': 'What materials do you work with?',
    'faq-2-a': 'We primarily work with brass, iron, and stainless steel. We are especially specialized in brass machining, producing highly precise results.',
    'faq-3-q': 'How long is the delivery time?',
    'faq-3-a': 'Delivery time varies by order quantity and complexity. Small series are typically delivered within 3–7 business days. We can also accommodate urgent requests.',
    'faq-4-q': 'Can I place an order with technical drawings?',
    'faq-4-a': 'Yes, we work with customer technical drawings (DWG, DXF, PDF, or paper drawings). We can also produce exact copies by examining a sample.',
    'faq-5-q': 'Where is your workshop and how can I reach you?',
    'faq-5-a': 'Our workshop is located at Birlik İşhanı No:26/5, Yanıkkapı Sk., Emekyemez Mah., Beyoğlu. We are within walking distance of Taksim and Karaköy metro stations.',

    /* Footer */
    'footer-desc': 'From Beyoğlu to the world; 20+ years of craftsmanship in revolver lathe and CNC automatic machining.',

    /* Inner page labels */
    'pg-about-title': 'About Us',
    'pg-about-sub':   'A manufacturing story stretching from Beyoğlu to the world',
    'pg-services-title': 'Our Services',
    'pg-services-sub':   'Comprehensive solutions in CNC precision machining',
    'pg-gallery-title': 'Gallery',
    'pg-gallery-sub':   'Snapshots from our work',
    'pg-contact-title': 'Contact',
    'pg-contact-sub':   'Get in touch for a quote or information',

    /* 404 */
    '404-title': 'Page Not Found',
    '404-p':     'The page you are looking for does not exist or may have been moved.',
    '404-btn1':  'Return to Home',
    '404-btn2':  'Contact Us',
  }
};

/* ---------- Navbar Scroll ---------- */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- Hamburger ---------- */
(function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('nav-mobile');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Close on link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();

/* ---------- Active Nav Link ---------- */
(function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ---------- Scroll Animations ---------- */
(function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-in, .slide-left, .slide-right, .slide-up');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
})();

/* ---------- Counter Animation ---------- */
(function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1600;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + suffix;
        if (current >= target) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ---------- FAQ Accordion ---------- */
(function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Open clicked if it wasn't open
      if (!isOpen) item.classList.add('open');
    });
  });
})();

/* ---------- Lightbox ---------- */
const lb = {
  overlay: null,
  img: null,
  items: [],
  current: 0,

  init() {
    this.overlay = document.getElementById('lb');
    this.img = document.getElementById('lb-img');
    if (!this.overlay || !this.img) return;

    // Collect items
    this.gatherItems();

    // Controls
    const closeBtn = this.overlay.querySelector('.lb-x');
    const prevBtn = this.overlay.querySelector('.lb-prev');
    const nextBtn = this.overlay.querySelector('.lb-next');

    if (closeBtn) closeBtn.addEventListener('click', () => this.close());
    if (prevBtn) prevBtn.addEventListener('click', () => this.nav(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => this.nav(1));

    // Overlay click to close
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (!this.overlay.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.nav(-1);
      if (e.key === 'ArrowRight') this.nav(1);
    });
  },

  gatherItems() {
    this.items = Array.from(
      document.querySelectorAll('.gallery-item[data-src], .gallery-full-item[data-src]')
    );
    this.items.forEach((el, idx) => {
      el.addEventListener('click', () => this.open(idx));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.open(idx);
        }
      });
    });
  },

  open(idx) {
    if (!this.overlay) return;
    this.current = idx;
    const src = this.items[idx].getAttribute('data-src');
    this.img.src = src;
    this.img.alt = this.items[idx].querySelector('img')?.alt || '';
    this.overlay.classList.add('active');
    this.overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus trap
    const closeBtn = this.overlay.querySelector('.lb-x');
    if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
  },

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
    this.overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  },

  nav(dir) {
    if (!this.items.length) return;
    this.current = (this.current + dir + this.items.length) % this.items.length;
    const src = this.items[this.current].getAttribute('data-src');
    this.img.style.opacity = '0';
    setTimeout(() => {
      this.img.src = src;
      this.img.alt = this.items[this.current].querySelector('img')?.alt || '';
      this.img.style.opacity = '1';
    }, 150);
  }
};

/* ---------- Language Toggle ---------- */
function setLang(lang) {
  const data = langData[lang];
  if (!data) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!data[key]) return;
    // Use innerHTML for elements with <em> tags
    if (data[key].includes('<em>') || data[key].includes('<br')) {
      el.innerHTML = data[key];
    } else {
      el.textContent = data[key];
    }
  });

  // Update lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update html lang attr
  document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';

  // Persist
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

(function initLang() {
  // Bind buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  // Load saved lang
  let saved = 'tr';
  try { saved = localStorage.getItem('lang') || 'tr'; } catch (e) {}
  setLang(saved);
})();

/* ---------- Init on DOM Ready ---------- */
document.addEventListener('DOMContentLoaded', () => {
  lb.init();
});
