// Real projects. Each one is also exposed as an "endpoint" in the API console
// (GET /projects/<slug>) and can light up a node in the system map via `service`.

export const projects = [
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
      fa: 'مدیریت درخواست‌های پشتیبانی، گردش‌کار و نقش‌های کاربری برای یک سازمان.',
      en: 'Support requests, workflow, and role-based access for an organization.',
      de: 'Support-Anfragen, Workflow und rollenbasierter Zugriff für eine Organisation.',
    },
    problem: {
      fa: 'درخواست‌های پشتیبانی در ایمیل و پیام‌رسان‌ها گم می‌شدند و هیچ دید روشنی از وضعیت کارها وجود نداشت.',
      en: 'Support requests were scattered across email and chat with no clear view of who owned what or where it stood.',
      de: 'Support-Anfragen verteilten sich über E-Mail und Chat, ohne klare Sicht auf Zuständigkeit und Status.',
    },
    approach: {
      fa: 'یک API با Django REST Framework و احراز هویت JWT، رابط React با نقش‌های تفکیک‌شده، و داشبورد وضعیت. مدل داده روی SQL Server طراحی شد.',
      en: 'A Django REST Framework API with JWT auth, a React client with separated roles, and a status dashboard. Data model designed on SQL Server.',
      de: 'Eine Django-REST-Framework-API mit JWT-Auth, ein React-Client mit getrennten Rollen und ein Status-Dashboard. Datenmodell auf SQL Server.',
    },
    result: {
      fa: 'هر تیکت یک مالک، وضعیت و تاریخچه دارد؛ گردش‌کار از ثبت تا بستن قابل ردیابی است.',
      en: 'Every ticket has an owner, a status, and a history; the flow from open to close is fully traceable.',
      de: 'Jedes Ticket hat Eigentümer, Status und Verlauf; der Ablauf von offen bis geschlossen ist nachvollziehbar.',
    },
    stack: ['Django', 'Django REST Framework', 'JWT', 'React', 'Axios', 'Tailwind CSS', 'SQL Server'],
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
    kind: { fa: 'ابزار / امنیت', en: 'Tooling / Security', de: 'Tooling / Sicherheit' },
    featured: true,
    title: {
      fa: 'IP Kill-Switch',
      en: 'IP Kill-Switch',
      de: 'IP-Kill-Switch',
    },
    tagline: {
      fa: 'اسکریپت پایتونی که با تغییر IP عمومی، برنامه‌های حساس را می‌بندد تا IP واقعی لو نرود.',
      en: 'A Python script that closes sensitive apps the moment your public IP changes, so your real IP never leaks.',
      de: 'Ein Python-Skript, das sensible Apps schließt, sobald sich die öffentliche IP ändert — kein Leak der echten IP.',
    },
    problem: {
      fa: 'اگر اتصال VPN بی‌صدا قطع شود، ترافیک از IP واقعی ادامه پیدا می‌کند بدون اینکه کاربر متوجه شود.',
      en: 'If a VPN drops silently, traffic keeps flowing from the real IP with no signal to the user.',
      de: 'Fällt ein VPN still aus, läuft der Verkehr über die echte IP weiter — ohne Hinweis an den Nutzer.',
    },
    approach: {
      fa: 'بررسی دوره‌ای IP عمومی با بازه‌ی قابل تنظیم، و رفتار fail-safe: چند خطای پیاپی مثل تغییر IP در نظر گرفته می‌شود و فهرست فرایندهای تعریف‌شده با psutil بسته می‌شوند.',
      en: 'Periodic public-IP checks on a configurable interval, with fail-safe behavior: repeated check failures count as an IP change and the configured process list is killed via psutil.',
      de: 'Regelmäßige Prüfung der öffentlichen IP in einstellbarem Intervall, mit Fail-Safe: wiederholte Fehlversuche gelten als IP-Wechsel, konfigurierte Prozesse werden per psutil beendet.',
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
      fa: 'سایتی که الان روی آن هستید — از صفر، بدون قالب آماده. صفحه‌ی اصلی یک نقشه‌ی معماری تعاملی است و یک کنسول API هم دارد.',
      en: 'The site you are on — built from scratch, no template. The home page is an interactive architecture map, and there is an API console.',
      de: 'Die Seite, auf der Sie sind — von Grund auf gebaut, ohne Vorlage. Die Startseite ist eine interaktive Architekturkarte, mit API-Konsole.',
    },
    problem: {
      fa: 'اکثر پورتفولیوهای توسعه‌دهنده شبیه هم‌اند. هدف: چیزی که خود سایت، نمونه‌ی کار باشد.',
      en: 'Most developer portfolios look alike. The goal: a site that is itself the work sample.',
      de: 'Die meisten Entwickler-Portfolios ähneln sich. Ziel: eine Seite, die selbst die Arbeitsprobe ist.',
    },
    approach: {
      fa: 'React و Vite بدون فریم‌ورک اضافه، مسیر‌دهی چندزبانه (fa/en/de) و RTL، انیمیشن SVG دستی برای نقشه‌ی سیستم، و یک کنسول که بخش‌ها را مثل endpointهای یک API برمی‌گرداند.',
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
