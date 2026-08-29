// What I do — capability areas, each backed by shipped work. Rendered on the
// home page and returned by GET /services in the API console.

export const services = [
  {
    key: 'api',
    title: { fa: 'طراحی API و بک‌اند', en: 'API & backend design', de: 'API- & Backend-Design' },
    body: {
      fa: 'API‌های REST با Django REST Framework — قرارداد روشن، احراز هویت JWT، نقش‌ها و صفحه‌بندی و فیلتر. از مدل داده تا مستندسازی OpenAPI.',
      en: 'REST APIs with Django REST Framework — a clear contract, JWT auth, roles, pagination and filtering. From the data model to OpenAPI docs.',
      de: 'REST-APIs mit Django REST Framework — klarer Vertrag, JWT-Auth, Rollen, Pagination und Filter. Vom Datenmodell bis zur OpenAPI-Doku.',
    },
  },
  {
    key: 'fullstack',
    title: { fa: 'اپلیکیشن فول‌استک', en: 'Full-stack applications', de: 'Full-Stack-Anwendungen' },
    body: {
      fa: 'ساخت کامل محصول: بک‌اند Django و فرانت‌اند React با داشبورد، فرم‌ها و گزارش‌ها — یک‌دست از دیتابیس تا رابط کاربری.',
      en: 'The whole product: a Django backend and a React frontend with dashboards, forms, and reports — consistent from the database to the UI.',
      de: 'Das ganze Produkt: ein Django-Backend und ein React-Frontend mit Dashboards, Formularen und Berichten — durchgängig von der Datenbank bis zur UI.',
    },
  },
  {
    key: 'legacy',
    title: { fa: 'یکپارچه‌سازی با سیستم‌های موجود', en: 'Legacy system integration', de: 'Integration von Altsystemen' },
    body: {
      fa: 'ساختن لایه‌ی وب و API روی پایگاه‌داده‌های موجود (از جمله SQL Server) بدون تغییر شمای قدیمی — با مدل‌های `managed=False` و کوئری خام در جای لازم.',
      en: 'Putting a web and API layer over existing databases (SQL Server included) without touching the legacy schema — `managed=False` models and raw SQL where it earns its place.',
      de: 'Eine Web- und API-Schicht über bestehende Datenbanken (auch SQL Server) legen, ohne das Altschema anzufassen — `managed=False`-Modelle und Raw SQL, wo sinnvoll.',
    },
  },
  {
    key: 'automation',
    title: { fa: 'اتوماسیون و داده', en: 'Automation & data', de: 'Automatisierung & Daten' },
    body: {
      fa: 'اسکریپت‌ها و سرویس‌هایی که کار تکراری را حذف می‌کنند: استخراج داده از منابع بیرونی، پردازش دوره‌ای، و سقف/محدودیت خودساخته برای پایداری.',
      en: 'Scripts and services that remove repetitive work: pulling data from external sources, periodic processing, and self-imposed limits for stability.',
      de: 'Skripte und Dienste, die wiederkehrende Arbeit abnehmen: Daten aus externen Quellen ziehen, periodische Verarbeitung und selbst gesetzte Limits für Stabilität.',
    },
  },
  {
    key: 'documents',
    title: { fa: 'گزارش و تولید سند', en: 'Reporting & document generation', de: 'Berichte & Dokumentenerzeugung' },
    body: {
      fa: 'گزارش‌های مالی و عملیاتی با خروجی اکسل، و تولید PDF برندشده (گواهی، فاکتور) با پشتیبانی درست از متن فارسی و QR کد تأیید.',
      en: 'Financial and operational reports with Excel export, and branded PDF generation (certificates, invoices) with correct Persian text shaping and verification QR codes.',
      de: 'Finanz- und Betriebsberichte mit Excel-Export und gebrandete PDF-Erzeugung (Zertifikate, Rechnungen) mit korrektem persischen Textsatz und Prüf-QR-Codes.',
    },
  },
  {
    key: 'ai',
    title: { fa: 'ادغام هوش مصنوعی', en: 'AI integration', de: 'KI-Integration' },
    body: {
      fa: 'آوردن سرویس‌های هوش مصنوعی به جریان کار موجود — نه به‌عنوان یک قابلیت نمایشی، بلکه جایی که یک تصمیم یا یک متن را واقعاً سریع‌تر می‌کند.',
      en: 'Bringing AI services into an existing workflow — not as a demo feature, but where it genuinely speeds up a decision or a piece of text.',
      de: 'KI-Dienste in bestehende Workflows bringen — nicht als Demo-Feature, sondern dort, wo sie eine Entscheidung oder einen Text wirklich beschleunigen.',
    },
  },
]
