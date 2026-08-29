// Projects, public and private. Private repos have no `code` link and carry
// `private: true`. `arch` drives the generated cover diagram. Each entry also
// feeds the API console (GET /projects/<slug>) and can light a node on the
// system map via `service`.
//
// Writing guide: say what the product does and what changed for the user.
// No internal table names, no scraping targets, no implementation trivia.

export const projects = [
  {
    slug: 'language-school-platform',
    service: 'ticket-service',
    private: true,
    featured: true,
    arch: ['client', 'API', 'tenants', 'database'],
    title: {
      fa: 'پلتفرم مدیریت آموزشگاه زبان',
      en: 'Language School Platform',
      de: 'Sprachschul-Plattform',
    },
    tagline: {
      fa: 'مدیریت کامل یک آموزشگاه زبان در یک سامانه — از ثبت‌نام و کلاس تا آزمون، پرداخت، صدور گواهی و گزارش مالی.',
      en: 'A full language academy in one system — enrollment and classes through exams, payments, certificates, and financial reporting.',
      de: 'Eine ganze Sprachakademie in einem System — Anmeldung und Kurse bis hin zu Prüfungen, Zahlungen, Zertifikaten und Finanzberichten.',
    },
    problem: {
      fa: 'آموزشگاه‌ها هر بخش از کارشان — ثبت‌نام، کلاس‌بندی، آزمون، حسابداری — را با ابزار جداگانه اداره می‌کردند و داده‌ها با هم هم‌خوان نبود.',
      en: 'Academies ran each part of the work — enrollment, scheduling, exams, accounting — on a separate tool, and the data never lined up.',
      de: 'Akademien führten jeden Teil ihrer Arbeit — Anmeldung, Planung, Prüfungen, Buchhaltung — mit einem eigenen Tool, und die Daten passten nie zusammen.',
    },
    approach: {
      fa: 'یک سامانه‌ی وب یکپارچه ساختم که این فرایندها را در یک جریان به هم وصل می‌کند: کلاس‌بندی، آزمون آنلاین با تصحیح خودکار و دستی، پرداخت، کتابخانه‌ی ویدیوی آموزشی با اشتراک، و صدور خودکار گواهی PDF با کد تأیید. معماری طوری است که یک نصب می‌تواند چند آموزشگاه مستقل را با داده و برند جدا سرویس بدهد.',
      en: 'I built one integrated web system that connects these into a single flow: scheduling, online exams with automatic and manual grading, payments, a subscription video library, and automatic PDF certificates with a verification code. The architecture lets a single deployment serve several independent academies with separate data and branding.',
      de: 'Ich habe ein integriertes Web-System gebaut, das diese Teile zu einem Ablauf verbindet: Planung, Online-Prüfungen mit automatischer und manueller Bewertung, Zahlungen, eine Video-Bibliothek mit Abo und automatische PDF-Zertifikate mit Prüfcode. Die Architektur erlaubt es, mit einer Installation mehrere unabhängige Akademien mit getrennten Daten und Branding zu betreiben.',
    },
    result: {
      fa: 'کل چرخه‌ی عملیاتی و مالی آموزشگاه در یک جا؛ افزودن آموزشگاه جدید بدون تغییر کد، و گزارش‌های مالی با خروجی اکسل.',
      en: 'The academy’s whole operational and financial cycle in one place; adding a new academy needs no code change, and financial reports export to Excel.',
      de: 'Der gesamte operative und finanzielle Zyklus der Akademie an einem Ort; eine neue Akademie hinzuzufügen erfordert keine Codeänderung, und Finanzberichte lassen sich nach Excel exportieren.',
    },
    stack: ['Django', 'Django REST Framework', 'JWT', 'React', 'PDF generation'],
    links: {},
  },
  {
    slug: 'enterprise-asset-valuation',
    service: 'datastore',
    private: true,
    featured: true,
    arch: ['client', 'API', 'database', 'valuation'],
    title: {
      fa: 'سامانه‌ی مدیریت و ارزش‌گذاری دارایی‌ها',
      en: 'Asset Management & Valuation',
      de: 'Anlagenverwaltung & Bewertung',
    },
    tagline: {
      fa: 'یک سامانه‌ی وب برای مدیریت دارایی‌های سازمان و مقایسه‌ی ارزش دفتری با ارزش روز بازار.',
      en: 'A web system for managing an organization’s assets and comparing book value against current market value.',
      de: 'Ein Web-System zur Verwaltung der Anlagen einer Organisation und zum Vergleich von Buchwert und aktuellem Marktwert.',
    },
    problem: {
      fa: 'اطلاعات دارایی‌ها در یک پایگاه‌داده‌ی قدیمی بدون رابط کاربری بود، و ارزش ثبت‌شده با قیمت واقعی بازار فاصله‌ی زیادی گرفته بود.',
      en: 'Asset data sat in an old database with no interface, and the recorded value had drifted far from the real market price.',
      de: 'Die Anlagendaten lagen in einer alten Datenbank ohne Oberfläche, und der erfasste Wert hatte sich weit vom realen Marktpreis entfernt.',
    },
    approach: {
      fa: 'روی همان پایگاه‌داده‌ی موجود یک لایه‌ی وب و API ساختم تا بدون مهاجرت داده بتوان دارایی‌ها را مرور و مدیریت کرد، و یک سرویس ارزش‌گذاری اضافه کردم که برای هر دارایی یک برآورد قیمت روز بازار محاسبه و ذخیره می‌کند. داشبورد مدیریتی با نمودار برای دید کلی.',
      en: 'I put a web and API layer over the existing database so assets could be browsed and managed without migrating data, and added a valuation service that computes and stores a current market-price estimate for each asset. A management dashboard with charts for the overall picture.',
      de: 'Ich habe eine Web- und API-Schicht über die bestehende Datenbank gelegt, damit Anlagen ohne Datenmigration durchsucht und verwaltet werden können, und einen Bewertungsdienst ergänzt, der für jede Anlage eine aktuelle Marktpreis-Schätzung berechnet und speichert. Ein Management-Dashboard mit Diagrammen für den Gesamtüberblick.',
    },
    result: {
      fa: 'دارایی‌ها از طریق یک داشبورد وب قابل مدیریت شدند و در کنار ارزش دفتری، یک برآورد به‌روز از ارزش بازار دارند.',
      en: 'Assets became manageable through a web dashboard and now carry a current market-value estimate alongside book value.',
      de: 'Anlagen wurden über ein Web-Dashboard verwaltbar und tragen nun neben dem Buchwert eine aktuelle Marktwert-Schätzung.',
    },
    stack: ['Django', 'REST API', 'SQL Server', 'React', 'Recharts'],
    links: {},
  },
  {
    slug: 'ticket-management-system',
    service: 'ticket-service',
    featured: true,
    arch: ['client', 'API', 'database'],
    title: {
      fa: 'سامانه مدیریت تیکت',
      en: 'Ticket Management System',
      de: 'Ticket-Management-System',
    },
    tagline: {
      fa: 'ثبت و پیگیری درخواست‌های پشتیبانی سازمان، با گردش‌کار وضعیت‌ها و نقش‌های کاربری.',
      en: 'Log and track support requests, with a status workflow and user roles.',
      de: 'Support-Anfragen erfassen und verfolgen — mit Status-Workflow und Benutzerrollen.',
    },
    problem: {
      fa: 'درخواست‌های پشتیبانی از راه‌های پراکنده می‌آمد و پیگیری وضعیت و مسئول هر مورد سخت بود.',
      en: 'Support requests arrived through scattered channels, and tracking the status and owner of each one was hard.',
      de: 'Support-Anfragen kamen über verstreute Kanäle, und Status und Zuständigkeit jeder einzelnen zu verfolgen war schwierig.',
    },
    approach: {
      fa: 'یک API با Django REST Framework و رابط React ساختم؛ هر تیکت شماره‌ی یکتا، نوع، اولویت، وضعیت و پیوست دارد و بر اساس نقش کاربر نمایش داده می‌شود. یک داشبورد هم برای دید سریع از وضعیت کلی.',
      en: 'I built a Django REST Framework API and a React interface; each ticket has a unique number, a type, a priority, a status, and attachments, and is shown according to the user’s role. A dashboard gives a quick read on the overall state.',
      de: 'Ich habe eine Django-REST-Framework-API und eine React-Oberfläche gebaut; jedes Ticket hat eine eindeutige Nummer, einen Typ, eine Priorität, einen Status und Anhänge und wird je nach Rolle des Nutzers angezeigt. Ein Dashboard gibt einen schnellen Überblick.',
    },
    result: {
      fa: 'هر درخواست از لحظه‌ی ثبت تا بسته‌شدن قابل ردیابی است و وضعیت کلی در داشبورد دیده می‌شود.',
      en: 'Every request is traceable from open to close, and the overall picture shows on the dashboard.',
      de: 'Jede Anfrage ist von der Erstellung bis zum Abschluss nachvollziehbar, und der Gesamtstand ist im Dashboard sichtbar.',
    },
    stack: ['Django', 'Django REST Framework', 'JWT', 'SQL Server', 'React', 'Tailwind CSS'],
    links: {
      code: 'https://github.com/erfanmohammadi1998/ticket-management-system',
    },
  },
  {
    slug: 'cv-management-system',
    service: 'cv-service',
    featured: true,
    arch: ['client', 'API', 'database'],
    title: {
      fa: 'سامانه مدیریت رزومه',
      en: 'CV Management System',
      de: 'Lebenslauf-Management-System',
    },
    tagline: {
      fa: 'نگهداری و جست‌وجوی رزومه‌ی متقاضیان، با سوابق شغلی، تحصیلی و مهارت‌ها.',
      en: 'Store and search candidate resumes — work history, education, and skills.',
      de: 'Bewerber-Lebensläufe speichern und durchsuchen — Berufserfahrung, Ausbildung und Fähigkeiten.',
    },
    problem: {
      fa: 'رزومه‌ها به‌صورت فایل‌های پراکنده بودند و پیدا کردن فرد مناسب برای یک موقعیت زمان‌بر بود.',
      en: 'Resumes lived as loose files, and finding the right person for a role took too long.',
      de: 'Lebensläufe lagen als lose Dateien vor, und die passende Person für eine Rolle zu finden dauerte zu lange.',
    },
    approach: {
      fa: 'یک مدل داده‌ی ساخت‌یافته برای متقاضی و زیرمجموعه‌هایش (سابقه، تحصیلات، مهارت) طراحی کردم و روی آن یک API با مستندات خودکار و یک داشبورد React برای ثبت و جست‌وجو ساختم.',
      en: 'I designed a structured data model for the candidate and its sub-parts (history, education, skills), then built an API with auto-generated docs and a React dashboard for entry and search.',
      de: 'Ich habe ein strukturiertes Datenmodell für den Bewerber und seine Teile (Verlauf, Ausbildung, Fähigkeiten) entworfen und darauf eine API mit automatischer Dokumentation und ein React-Dashboard für Erfassung und Suche gebaut.',
    },
    result: {
      fa: 'اطلاعات متقاضیان یک‌جا، قابل جست‌وجو و قابل فیلتر بر اساس مهارت و سابقه شد.',
      en: 'Candidate information became centralized, searchable, and filterable by skill and history.',
      de: 'Bewerberinformationen wurden zentral, durchsuchbar und nach Fähigkeit und Verlauf filterbar.',
    },
    stack: ['Django', 'Django REST Framework', 'JWT', 'OpenAPI', 'React', 'Vite', 'Tailwind CSS'],
    links: {
      code: 'https://github.com/erfanmohammadi1998/cv-management-system',
    },
  },
  {
    slug: 'ip-leak-killswitch',
    service: 'auth-service',
    featured: false,
    arch: ['watch loop', 'public IP', 'close apps'],
    title: {
      fa: 'محافظ نشت IP',
      en: 'IP Leak Kill-Switch',
      de: 'IP-Leak-Kill-Switch',
    },
    tagline: {
      fa: 'ابزار پایتونی که با تغییر IP عمومی، برنامه‌های حساس را می‌بندد تا IP واقعی لو نرود.',
      en: 'A Python tool that closes sensitive apps the moment your public IP changes, so your real IP never leaks.',
      de: 'Ein Python-Tool, das sensible Apps schließt, sobald sich die öffentliche IP ändert — damit die echte IP nie durchsickert.',
    },
    problem: {
      fa: 'اگر اتصال VPN بی‌صدا قطع شود، ترافیک از IP واقعی ادامه پیدا می‌کند بدون اینکه کاربر متوجه شود.',
      en: 'If a VPN drops silently, traffic keeps flowing from the real IP with no signal to the user.',
      de: 'Fällt ein VPN still aus, läuft der Verkehr über die echte IP weiter — ohne Hinweis an den Nutzer.',
    },
    approach: {
      fa: 'در بازه‌های کوتاه، IP عمومی دستگاه را بررسی می‌کند؛ اگر تغییر کند یا چند بار پیاپی قابل بررسی نباشد، فهرست برنامه‌های تعیین‌شده را می‌بندد. رفتار fail-safe: نبود اینترنت هم مثل نشت در نظر گرفته می‌شود.',
      en: 'It checks the machine’s public IP on a short interval; if it changes or can’t be checked several times in a row, it closes a configured list of apps. Fail-safe by design: no internet is treated the same as a leak.',
      de: 'Es prüft die öffentliche IP des Rechners in kurzen Abständen; ändert sie sich oder ist sie mehrmals hintereinander nicht prüfbar, schließt es eine konfigurierte Liste von Apps. Fail-safe: kein Internet wird wie ein Leak behandelt.',
    },
    result: {
      fa: 'یک اسکریپت تک‌فایلی و سبک، بدون سرویس پس‌زمینه یا نصب پیچیده.',
      en: 'A single lightweight script — no background service, no complex setup.',
      de: 'Ein einzelnes leichtes Skript — kein Hintergrunddienst, keine komplexe Einrichtung.',
    },
    stack: ['Python', 'requests', 'psutil'],
    links: {
      code: 'https://github.com/erfanmohammadi1998/ip_killswitch',
    },
  },
  {
    slug: 'tidaland-pet-shop',
    service: 'client',
    featured: false,
    arch: ['HTML', 'CSS', 'static host'],
    title: {
      fa: 'فروشگاه حیوانات خانگی تیدالند',
      en: 'TidaLand Pet Shop',
      de: 'TidaLand Zoohandlung',
    },
    tagline: {
      fa: 'یک وب‌سایت فروشگاهی واکنش‌گرا با HTML و CSS، با تمرکز روی رابط تمیز و بارگذاری سریع.',
      en: 'A responsive shop site in HTML and CSS, focused on a clean interface and fast loading.',
      de: 'Eine responsive Shop-Website in HTML und CSS, mit Fokus auf klarer Oberfläche und schnellem Laden.',
    },
    problem: {
      fa: 'نیاز به یک نمای فروشگاهی سبک بدون وابستگی به فریم‌ورک و قابل میزبانی روی هاست ساده.',
      en: 'A lightweight storefront was needed, with no framework dependency, hostable on plain static hosting.',
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
    featured: false,
    arch: ['system map', 'API console', 'GitHub Pages'],
    title: {
      fa: 'همین پورتفولیو',
      en: 'This Portfolio',
      de: 'Dieses Portfolio',
    },
    tagline: {
      fa: 'سایتی که الان روی آن هستید. صفحه‌ی اصلی یک نقشه‌ی معماری تعاملی است و یک کنسول API هم دارد.',
      en: 'The site you are on. Its home page is an interactive architecture map, with an API console.',
      de: 'Die Seite, auf der Sie sind. Ihre Startseite ist eine interaktive Architekturkarte, mit einer API-Konsole.',
    },
    problem: {
      fa: 'یک پورتفولیو که خودش هم یک نمونه‌ی کار فرانت‌اند باشد، نه فقط فهرستی از پروژه‌ها.',
      en: 'A portfolio that is also a frontend work sample, not just a list of projects.',
      de: 'Ein Portfolio, das selbst eine Frontend-Arbeitsprobe ist, nicht nur eine Projektliste.',
    },
    approach: {
      fa: 'با React و Vite ساخته شده؛ مسیر‌دهی سه‌زبانه (fa/en/de) با پشتیبانی راست‌به‌چپ، انیمیشن SVG دستی برای نقشه‌ی سیستم، و کنسولی که بخش‌ها را مثل مسیرهای یک API برمی‌گرداند.',
      en: 'React and Vite, trilingual routing (fa/en/de) with RTL support, a hand-built SVG system map, and a console that returns sections like API routes.',
      de: 'React und Vite, dreisprachiges Routing (fa/en/de) mit RTL-Unterstützung, eine handgebaute SVG-Systemkarte und eine Konsole, die Bereiche wie API-Routen zurückgibt.',
    },
    result: {
      fa: 'استقرار خودکار روی GitHub Pages با GitHub Actions روی دامنه‌ی اختصاصی.',
      en: 'Deployed automatically to GitHub Pages via GitHub Actions on a custom domain.',
      de: 'Automatische Bereitstellung auf GitHub Pages via GitHub Actions unter eigener Domain.',
    },
    stack: ['React', 'Vite', 'React Router', 'SVG', 'GitHub Actions'],
    links: {
      code: 'https://github.com/erfanmohammadi1998/portfolio',
      demo: 'https://erfanmohammadi.ir',
    },
  },
]
