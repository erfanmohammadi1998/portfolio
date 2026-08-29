// Capability areas, each backed by shipped work. Rendered on the home page and
// returned by GET /services. Keep these plain — no library lists, no jargon.

export const services = [
  {
    key: 'api',
    title: { fa: 'طراحی API و بک‌اند', en: 'API & backend', de: 'API & Backend' },
    body: {
      fa: 'توسعه‌ی APIهای REST با Django؛ احراز هویت، نقش‌ها، صفحه‌بندی و فیلتر. از مدل داده تا مستندسازی.',
      en: 'REST APIs with Django — auth, roles, pagination, and filtering. From the data model to the docs.',
      de: 'REST-APIs mit Django — Auth, Rollen, Pagination und Filter. Vom Datenmodell bis zur Doku.',
    },
  },
  {
    key: 'database',
    title: { fa: 'طراحی پایگاه داده', en: 'Database design', de: 'Datenbankdesign' },
    body: {
      fa: 'طراحی و مدل‌سازی پایگاه داده‌ی رابطه‌ای، بهینه‌سازی کوئری، و کار با پایگاه‌داده‌های موجود.',
      en: 'Designing and modeling relational databases, optimizing queries, and working with databases already in place.',
      de: 'Relationale Datenbanken entwerfen und modellieren, Queries optimieren und mit bestehenden Datenbanken arbeiten.',
    },
  },
  {
    key: 'integration',
    title: { fa: 'یکپارچه‌سازی با سیستم‌های موجود', en: 'Legacy integration', de: 'Integration von Altsystemen' },
    body: {
      fa: 'ساختن رابط و API وب روی پایگاه‌داده‌ها و سیستم‌های موجود، بدون نیاز به مهاجرت داده یا بازنویسی از صفر.',
      en: 'Putting a web and API layer over existing databases and systems, with no data migration and no rewrite.',
      de: 'Eine Web- und API-Schicht über bestehende Datenbanken und Systeme legen — ohne Datenmigration, ohne Neuschreiben.',
    },
  },
  {
    key: 'automation',
    title: { fa: 'اتوماسیون و پردازش داده', en: 'Automation & data', de: 'Automatisierung & Daten' },
    body: {
      fa: 'اسکریپت‌ها و سرویس‌هایی که کار تکراری را حذف می‌کنند: پردازش دوره‌ای و جمع‌آوری داده از منابع بیرونی.',
      en: 'Scripts and services that remove repetitive work: periodic processing and pulling data from outside sources.',
      de: 'Skripte und Dienste, die wiederkehrende Arbeit abnehmen: periodische Verarbeitung und Datenabruf aus externen Quellen.',
    },
  },
  {
    key: 'reporting',
    title: { fa: 'گزارش و تولید سند', en: 'Reporting & documents', de: 'Berichte & Dokumente' },
    body: {
      fa: 'گزارش‌های مالی و عملیاتی با خروجی اکسل، و تولید PDF (گواهی، فاکتور) با پشتیبانی درست از متن فارسی.',
      en: 'Financial and operational reports with Excel export, and PDF generation (certificates, invoices) with correct Persian text.',
      de: 'Finanz- und Betriebsberichte mit Excel-Export und PDF-Erzeugung (Zertifikate, Rechnungen) mit korrektem persischem Text.',
    },
  },
  {
    key: 'ai',
    title: { fa: 'ادغام هوش مصنوعی', en: 'AI integration', de: 'KI-Integration' },
    body: {
      fa: 'آوردن سرویس‌های هوش مصنوعی به گردش‌کار موجود، جایی که یک تصمیم یا یک متن را واقعاً سریع‌تر می‌کند.',
      en: 'Bringing AI services into an existing workflow, where they genuinely speed up a decision or a piece of text.',
      de: 'KI-Dienste in bestehende Workflows bringen, wo sie eine Entscheidung oder einen Text wirklich beschleunigen.',
    },
  },
]
