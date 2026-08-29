// Real projects, public and private. Private repos have no `code` link and
// carry `private: true`. Each entry also feeds the API console
// (GET /projects/<slug>) and can light a node on the system map via `service`.

export const projects = [
  {
    slug: 'language-school-platform',
    service: 'ticket-service',
    year: '2025',
    private: true,
    kind: { fa: 'فول‌استک · مالتی‌تننت', en: 'Full Stack · Multi-tenant', de: 'Full Stack · Mandantenfähig' },
    featured: true,
    title: {
      fa: 'پلتفرم مدیریت آموزشگاه زبان',
      en: 'Language School Platform',
      de: 'Sprachschul-Plattform',
    },
    tagline: {
      fa: 'یک پلتفرم کامل آموزشگاه زبان که هم به‌صورت نصب اختصاصی و هم به‌صورت SaaS چند-آموزشگاهی روی یک سرور ارائه می‌شود.',
      en: 'A full language-academy platform that ships both as a single-tenant install and as a multi-tenant SaaS on one server.',
      de: 'Eine komplette Sprachakademie-Plattform — als Einzelinstallation und als mandantenfähiges SaaS auf einem Server.',
    },
    problem: {
      fa: 'آموزشگاه‌ها به سامانه‌ای نیاز داشتند که کل چرخه — ثبت‌نام، کلاس، آزمون، پرداخت، گواهی و گزارش مالی — را پوشش دهد؛ و باید هم برای یک مشتری مستقل و هم برای چند مشتری روی یک نصب کار می‌کرد.',
      en: 'Academies needed one system for the whole cycle — enrollment, classes, exams, payments, certificates, financial reporting — that works both for a single client and for many clients on one deployment.',
      de: 'Akademien brauchten ein System für den gesamten Zyklus — Anmeldung, Kurse, Prüfungen, Zahlungen, Zertifikate, Finanzberichte — für einen einzelnen wie für viele Kunden auf einer Installation.',
    },
    approach: {
      fa: 'مدل تننت (`School`) در هسته: همه‌ی داده‌ها بر اساس آموزشگاهِ کاربر لاگین‌شده ایزوله می‌شوند و هر آموزشگاه برند، رنگ و سرویس پیامک/ایمیل/درگاه خودش را دارد. ویزارد راه‌اندازی برای اولین اجرا، آزمون آنلاین با بانک سؤال و تصحیح خودکار و دستی، کتابخانه‌ی ویدیو با پلن اشتراک، و تولید PDF گواهی برندشده با QR و صفحه‌ی تأیید عمومی (ReportLab + arabic-reshaper + python-bidi برای متن فارسی درست).',
      en: 'A `School` tenant model at the core: every record is scoped to the logged-in user’s academy, each with its own branding and SMS/email/gateway config. A first-run setup wizard, online exams with a question bank and auto + manual grading, a video library with subscription plans, and branded certificate PDFs with a QR code and a public verification page (ReportLab + arabic-reshaper + python-bidi for correct Persian text).',
      de: 'Ein `School`-Mandantenmodell im Kern: jeder Datensatz ist auf die Akademie des angemeldeten Nutzers begrenzt, je mit eigenem Branding und SMS/E-Mail/Gateway. Ein Setup-Assistent beim Erststart, Online-Prüfungen mit Fragenpool und automatischer + manueller Bewertung, eine Videobibliothek mit Abo-Plänen und gebrandete Zertifikat-PDFs mit QR-Code und öffentlicher Prüfseite (ReportLab + arabic-reshaper + python-bidi).',
    },
    result: {
      fa: 'یک کدبیس واحد که با یک حساب اپراتور پلتفرم، ساخت آموزشگاه جدید و مدیریت وضعیت اشتراک را ممکن می‌کند؛ گزارش درآمد ماهانه، مطالبات و حقوق اساتید با خروجی اکسل.',
      en: 'One codebase where a platform-owner account can create a new academy and manage its subscription state; monthly revenue, receivables, and teacher-payroll reports with Excel export.',
      de: 'Eine Codebasis, in der ein Plattformbetreiber-Konto eine neue Akademie anlegen und deren Abo-Status verwalten kann; Monatsumsatz-, Forderungs- und Lehrergehalts-Berichte mit Excel-Export.',
    },
    stack: ['Django', 'Django REST Framework', 'JWT', 'ReportLab', 'openpyxl', 'React', 'Chart.js', 'moment-jalaali'],
    links: {},
  },
  {
    slug: 'enterprise-asset-valuation',
    service: 'datastore',
    year: '2025',
    private: true,
    kind: { fa: 'بک‌اند · یکپارچه‌سازی', en: 'Backend · Integration', de: 'Backend · Integration' },
    featured: true,
    title: {
      fa: 'سامانه‌ی دارایی و ارزش‌گذاری بازار',
      en: 'Asset & Market-Valuation System',
      de: 'Anlagen- & Marktbewertungssystem',
    },
    tagline: {
      fa: 'یک لایه‌ی وب مدرن روی یک پایگاه‌داده‌ی SQL Server موجود، به‌همراه تخمین قیمت روز بازار برای هر قلم دارایی.',
      en: 'A modern web layer over an existing SQL Server database, plus a live market-price estimate for every asset.',
      de: 'Eine moderne Web-Schicht über einer bestehenden SQL-Server-Datenbank, plus eine aktuelle Marktpreis-Schätzung je Anlage.',
    },
    problem: {
      fa: 'داده‌ی دارایی‌ها در یک پایگاه‌داده‌ی قدیمی SQL Server بود و ارزش دفتری با ارزش واقعی بازار فاصله داشت؛ هیچ رابط وبی هم برای کار با آن وجود نداشت.',
      en: 'Asset data lived in a legacy SQL Server database, book value had drifted from real market value, and there was no web interface to work with it.',
      de: 'Die Anlagendaten lagen in einer alten SQL-Server-Datenbank, der Buchwert wich vom realen Marktwert ab, und es gab keine Weboberfläche dafür.',
    },
    approach: {
      fa: 'مدل‌های Django با `managed=False` روی جدول‌های موجود (`Amo_Assets`، `Amo_Places`، `Amo_StateTypes`) بدون تغییر شمای قدیمی، به‌همراه یک جدول جدید برای قیمت بازار. یک سرویس ارزش‌گذاری که کوئری جست‌وجو را از مشخصات دارایی می‌سازد، آگهی‌های دیوار را می‌خواند و بهترین تطبیق را با عنوان، لینک و قیمت ذخیره می‌کند — با سقف روزانه‌ی خودساخته برای پایداری. فرانت‌اند React با Ant Design و نمودارهای Recharts.',
      en: 'Django models with `managed=False` over the existing tables (`Amo_Assets`, `Amo_Places`, `Amo_StateTypes`) without touching the legacy schema, plus one new table for market price. A valuation service builds a search query from each asset’s attributes, reads Divar listings, and stores the best match with title, link, and price — behind a self-imposed daily quota for stability. React frontend with Ant Design and Recharts dashboards.',
      de: 'Django-Modelle mit `managed=False` über die bestehenden Tabellen (`Amo_Assets`, `Amo_Places`, `Amo_StateTypes`), ohne das Altschema anzufassen, plus eine neue Tabelle für den Marktpreis. Ein Bewertungsdienst baut aus den Attributen jeder Anlage eine Suchanfrage, liest Divar-Anzeigen und speichert den besten Treffer mit Titel, Link und Preis — hinter einem selbst gesetzten Tageslimit. React-Frontend mit Ant Design und Recharts.',
    },
    result: {
      fa: 'دارایی‌ها با وضعیت مجاز فیلتر می‌شوند و کنار ارزش دفتری، یک تخمین قیمت بازار به‌روز دارند؛ همه از طریق یک داشبورد وب.',
      en: 'Assets are filtered by allowed status and carry a fresh market-price estimate alongside book value — all through one web dashboard.',
      de: 'Anlagen werden nach zulässigem Status gefiltert und tragen neben dem Buchwert eine aktuelle Marktpreis-Schätzung — alles über ein Web-Dashboard.',
    },
    stack: ['Django', 'SQL Server', 'Raw SQL', 'Web scraping', 'React', 'Ant Design', 'Recharts'],
    links: {},
  },
  {
    slug: 'ticket-management-system',
    service: 'ticket-service',
    year: '2025',
    kind: { fa: 'فول‌استک', en: 'Full Stack', de: 'Full Stack' },
    featured: true,
    title: {
      fa: 'سامانه مدیریت تیکت',
      en: 'Ticket Management System',
      de: 'Ticket-Management-System',
    },
    tagline: {
      fa: 'ثبت و پیگیری درخواست‌های پشتیبانی با گردش‌کار، نقش‌های کاربری و شماره‌ی خودکار تیکت.',
      en: 'Log and track support requests with a workflow, user roles, and auto ticket numbers.',
      de: 'Support-Anfragen erfassen und verfolgen — mit Workflow, Rollen und automatischer Ticketnummer.',
    },
    problem: {
      fa: 'درخواست‌های پشتیبانی در ایمیل و پیام‌رسان‌ها گم می‌شدند و دید روشنی از مالک و وضعیت هر کار وجود نداشت.',
      en: 'Support requests got lost across email and chat, with no clear view of who owned what or where it stood.',
      de: 'Support-Anfragen gingen in E-Mail und Chat verloren, ohne klare Sicht auf Zuständigkeit und Status.',
    },
    approach: {
      fa: 'API با Django REST Framework و احراز هویت JWT روی SQL Server؛ مدل تیکت با نوع (ایراد/پیشنهاد/درخواست/سؤال)، اولویت، وضعیت و پیوست، و شماره‌ی خودکار `TK-0001`. فرانت‌اند React با Tailwind: داشبورد، فهرست، جزئیات و فرم تیکت جدید، با دسترسی مبتنی بر نقش.',
      en: 'A Django REST Framework API with JWT auth on SQL Server; a ticket model with type (bug/suggestion/feature/question), priority, status, and attachment, and an auto `TK-0001` number. React + Tailwind frontend: dashboard, list, detail, and new-ticket form, with role-based access.',
      de: 'Eine Django-REST-Framework-API mit JWT-Auth auf SQL Server; ein Ticket-Modell mit Typ (Bug/Vorschlag/Feature/Frage), Priorität, Status und Anhang sowie automatischer `TK-0001`-Nummer. React-+-Tailwind-Frontend: Dashboard, Liste, Detail und Neu-Formular, mit rollenbasiertem Zugriff.',
    },
    result: {
      fa: 'هر تیکت مالک، وضعیت و تاریخچه دارد و مسیر از ثبت تا بستن قابل ردیابی است.',
      en: 'Every ticket has an owner, a status, and a history; the path from open to close is traceable.',
      de: 'Jedes Ticket hat Eigentümer, Status und Verlauf; der Weg von offen bis geschlossen ist nachvollziehbar.',
    },
    stack: ['Django', 'Django REST Framework', 'JWT', 'SQL Server', 'React', 'Tailwind CSS', 'Axios'],
    links: {
      code: 'https://github.com/erfanmohammadi1998/ticket-management-system',
    },
  },
  {
    slug: 'cv-management-system',
    service: 'cv-service',
    year: '2025',
    kind: { fa: 'فول‌استک', en: 'Full Stack', de: 'Full Stack' },
    featured: true,
    title: {
      fa: 'سامانه مدیریت رزومه',
      en: 'CV Management System',
      de: 'Lebenslauf-Management-System',
    },
    tagline: {
      fa: 'ثبت و مدیریت رزومه‌ی متقاضیان با سوابق شغلی، تحصیلی و مهارت‌ها؛ API مستند و داشبورد React.',
      en: 'Candidate resumes with work history, education, and skills — a documented API and a React dashboard.',
      de: 'Bewerber-Lebensläufe mit Berufserfahrung, Ausbildung und Fähigkeiten — dokumentierte API und React-Dashboard.',
    },
    problem: {
      fa: 'اطلاعات متقاضیان در فایل‌های پراکنده بود و رابطه‌ی بین سوابق، تحصیلات و مهارت‌های هر نفر ساختار مشخصی نداشت.',
      en: 'Candidate data was scattered across files, with no clear structure linking each person’s history, education, and skills.',
      de: 'Bewerberdaten lagen verstreut in Dateien, ohne klare Struktur zwischen Verlauf, Ausbildung und Fähigkeiten.',
    },
    approach: {
      fa: 'مدل داده‌ی رابطه‌ای در Django (متقاضی، سابقه‌ی شغلی، تحصیلات، مهارت) با API از نوع DRF، احراز هویت JWT و مستندسازی خودکار OpenAPI؛ فرانت‌اند React با داشبورد و فهرست متقاضیان.',
      en: 'A relational data model in Django (candidate, work experience, education, skill) exposed via a DRF API with JWT auth and auto-generated OpenAPI docs; a React frontend with a dashboard and candidate list.',
      de: 'Ein relationales Datenmodell in Django (Bewerber, Berufserfahrung, Ausbildung, Fähigkeit) über eine DRF-API mit JWT-Auth und automatischer OpenAPI-Doku; ein React-Frontend mit Dashboard und Bewerberliste.',
    },
    result: {
      fa: 'اطلاعات متقاضیان یک‌جا، ساختارمند و از طریق API قابل مصرف شد؛ با فیلتر روی مهارت‌ها و سوابق.',
      en: 'Candidate data became structured, centralized, and API-consumable, with filtering over skills and history.',
      de: 'Bewerberdaten wurden strukturiert, zentral und über die API nutzbar, mit Filterung über Fähigkeiten und Verlauf.',
    },
    stack: ['Django', 'Django REST Framework', 'JWT', 'drf-spectacular', 'React', 'Vite', 'Tailwind CSS', 'Axios'],
    links: {
      code: 'https://github.com/erfanmohammadi1998/cv-management-system',
    },
  },
  {
    slug: 'ip-killswitch',
    service: 'auth-service',
    year: '2025',
    kind: { fa: 'ابزار · امنیت', en: 'Tooling · Security', de: 'Tooling · Sicherheit' },
    featured: false,
    title: {
      fa: 'IP Kill-Switch',
      en: 'IP Kill-Switch',
      de: 'IP-Kill-Switch',
    },
    tagline: {
      fa: 'اسکریپت پایتونی که با تغییر IP عمومی، برنامه‌های حساس را می‌بندد تا IP واقعی لو نرود.',
      en: 'A Python script that closes sensitive apps the moment your public IP changes, so your real IP never leaks.',
      de: 'Ein Python-Skript, das sensible Apps schließt, sobald sich die öffentliche IP ändert.',
    },
    problem: {
      fa: 'اگر اتصال VPN بی‌صدا قطع شود، ترافیک از IP واقعی ادامه پیدا می‌کند بدون اینکه کاربر متوجه شود.',
      en: 'If a VPN drops silently, traffic keeps flowing from the real IP with no signal to the user.',
      de: 'Fällt ein VPN still aus, läuft der Verkehr über die echte IP weiter — ohne Hinweis.',
    },
    approach: {
      fa: 'بررسی دوره‌ای IP عمومی با بازه‌ی قابل تنظیم و رفتار fail-safe: چند خطای پیاپی مثل تغییر IP در نظر گرفته می‌شود و فهرست فرایندهای تعریف‌شده با psutil بسته می‌شوند.',
      en: 'Periodic public-IP checks on a configurable interval, with fail-safe behavior: repeated failures count as an IP change and the configured process list is killed via psutil.',
      de: 'Regelmäßige Prüfung der öffentlichen IP in einstellbarem Intervall, mit Fail-Safe: wiederholte Fehler gelten als IP-Wechsel, konfigurierte Prozesse werden per psutil beendet.',
    },
    result: {
      fa: 'یک اسکریپت تک‌فایلی بدون سرویس پس‌زمینه — نصب requests و psutil و اجرا.',
      en: 'A single-file script with no background service — install requests and psutil, then run.',
      de: 'Ein Ein-Datei-Skript ohne Hintergrunddienst — requests und psutil installieren, dann starten.',
    },
    stack: ['Python', 'requests', 'psutil', 'Windows'],
    links: {
      code: 'https://github.com/erfanmohammadi1998/ip_killswitch',
    },
  },
  {
    slug: 'tidaland-pet-shop',
    service: 'client',
    year: '2024',
    kind: { fa: 'فرانت‌اند', en: 'Frontend', de: 'Frontend' },
    featured: false,
    title: {
      fa: 'فروشگاه حیوانات خانگی تیدالند',
      en: 'TidaLand Pet Shop',
      de: 'TidaLand Zoohandlung',
    },
    tagline: {
      fa: 'یک وب‌سایت فروشگاهی ریسپانسیو با HTML و CSS، تمرکز روی رابط تمیز و بارگذاری سریع.',
      en: 'A responsive shop site in HTML and CSS, focused on a clean interface and fast loading.',
      de: 'Eine responsive Shop-Website in HTML und CSS, mit Fokus auf klarer Oberfläche und schnellem Laden.',
    },
    problem: {
      fa: 'نیاز به یک نمای فروشگاهی سبک بدون وابستگی به فریم‌ورک و قابل میزبانی روی هاست ساده.',
      en: 'A lightweight storefront was needed with no framework dependency, hostable on plain static hosting.',
      de: 'Eine leichte Storefront ohne Framework-Abhängigkeit, hostbar auf einfachem Static-Hosting.',
    },
    approach: {
      fa: 'ساختار چندصفحه‌ای (غذا، اسباب‌بازی، مراقبت) با CSS دستی و چیدمان واکنش‌گرا.',
      en: 'A multi-page structure (food, toys, care) with hand-written CSS and a responsive layout.',
      de: 'Eine mehrseitige Struktur (Futter, Spielzeug, Pflege) mit handgeschriebenem CSS und responsivem Layout.',
    },
    result: {
      fa: 'سایت روی GitHub Pages منتشر شده و روی موبایل و دسکتاپ روان است.',
      en: 'Published on GitHub Pages, smooth on both mobile and desktop.',
      de: 'Auf GitHub Pages veröffentlicht, flüssig auf Mobil und Desktop.',
    },
    stack: ['HTML5', 'CSS3', 'Responsive Design'],
    links: {
      code: 'https://github.com/erfanmohammadi1998/tidaland-pet-shop',
      demo: 'https://erfan-mohammadi77.github.io/tidaland-pet-shop/',
    },
  },
  {
    slug: 'this-portfolio',
    service: 'api-gateway',
    year: '2026',
    kind: { fa: 'فرانت‌اند', en: 'Frontend', de: 'Frontend' },
    featured: false,
    title: {
      fa: 'همین پورتفولیو',
      en: 'This Portfolio',
      de: 'Dieses Portfolio',
    },
    tagline: {
      fa: 'سایتی که الان روی آن هستید — از صفر، بدون قالب. صفحه‌ی اصلی یک نقشه‌ی معماری تعاملی است و یک کنسول API هم دارد.',
      en: 'The site you are on — from scratch, no template. The home page is an interactive architecture map, with an API console.',
      de: 'Die Seite, auf der Sie sind — von Grund auf, ohne Vorlage. Die Startseite ist eine interaktive Architekturkarte, mit API-Konsole.',
    },
    problem: {
      fa: 'اکثر پورتفولیوهای توسعه‌دهنده شبیه هم‌اند. هدف: چیزی که خود سایت، نمونه‌ی کار باشد.',
      en: 'Most developer portfolios look alike. The goal: a site that is itself the work sample.',
      de: 'Die meisten Entwickler-Portfolios ähneln sich. Ziel: eine Seite, die selbst die Arbeitsprobe ist.',
    },
    approach: {
      fa: 'React و Vite بدون فریم‌ورک اضافه، مسیر‌دهی چندزبانه (fa/en/de) و RTL، انیمیشن SVG دستی برای نقشه‌ی سیستم، و کنسولی که بخش‌ها را مثل endpointهای یک API برمی‌گرداند.',
      en: 'React and Vite with nothing extra, multilingual routing (fa/en/de) with RTL, a hand-built SVG system map, and a console that returns sections like API endpoints.',
      de: 'React und Vite ohne Extras, mehrsprachiges Routing (fa/en/de) mit RTL, eine handgebaute SVG-Systemkarte und eine Konsole, die Bereiche wie API-Endpunkte zurückgibt.',
    },
    result: {
      fa: 'استقرار خودکار روی GitHub Pages با GitHub Actions و دامنه‌ی اختصاصی.',
      en: 'Auto-deployed to GitHub Pages via GitHub Actions on a custom domain.',
      de: 'Automatisch auf GitHub Pages via GitHub Actions unter eigener Domain.',
    },
    stack: ['React', 'Vite', 'React Router', 'SVG', 'GitHub Actions'],
    links: {
      code: 'https://github.com/erfanmohammadi1998/portfolio',
      demo: 'https://erfanmohammadi.ir',
    },
  },
]
