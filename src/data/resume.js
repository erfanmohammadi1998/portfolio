import { projects } from './projects'

// CV content, kept in step with the final PDFs (EN / DE / FA, Oct 2026).
// Used by the About, Skills and Resume pages and the home page timeline.

export const stats = [
  { value: 5, suffix: '+', label: { fa: 'سال سابقه‌ی کار حرفه‌ای', en: 'years of professional work', de: 'Jahre Berufserfahrung' } },
  { value: 15, suffix: '+', label: { fa: 'ماژول ERP طراحی و پیاده‌سازی‌شده', en: 'ERP modules delivered', de: 'umgesetzte ERP-Module' } },
  { value: projects.length, suffix: '', label: { fa: 'پروژه‌ی تحویل‌شده', en: 'shipped projects', de: 'ausgelieferte Projekte' } },
  { value: 420, suffix: '', label: { fa: 'ساعت دوره‌ی تخصصی', en: 'hours of training', de: 'Stunden Weiterbildung' } },
]

export const experience = [
  {
    key: 'alvan',
    current: true,
    period: { fa: 'مرداد ۱۴۰۱ تا امروز', en: 'Jul 2022 – present', de: '07/2022 – heute' },
    role: {
      fa: 'توسعه‌دهنده‌ی نرم‌افزار و کارشناس پایگاه داده',
      en: 'Software Developer & Database Specialist',
      de: 'Softwareentwickler & Datenbank-Spezialist',
    },
    org: {
      fa: 'رنگ و رزین الوان، تهران',
      en: 'Alvan Paint & Resin, Tehran',
      de: 'Alvan Paint & Resin, Teheran',
    },
    note: {
      fa: 'تولیدکننده‌ی رنگ و رزین',
      en: 'Manufacturer of paints and resins',
      de: 'Hersteller von Farben und Harzen',
    },
    bullets: {
      fa: [
        'توسعه و نگهداری نرم‌افزارهای سازمانی شرکت که فرایندهای حوزه‌های مالی، بازرگانی، زنجیره‌ی تأمین، کیفیت، فنی و منابع انسانی را به‌صورت یکپارچه پوشش می‌دهند.',
        'تحلیل نیازمندی‌ها در تعامل مستقیم با مدیران و کاربران واحدها و تبدیل فرایندهای کسب‌وکار به مدل داده و نرم‌افزار.',
        'طراحی و بهینه‌سازی پایگاه‌های داده‌ی Microsoft SQL Server: مدل‌سازی جداول و روابط، Stored Procedure، View، Function و کوئری‌های پیچیده‌ی T-SQL.',
        'بهبود کارایی سیستم با تحلیل Execution Plan، اصلاح ایندکس‌ها و بازنویسی کوئری‌های سنگین.',
        'توسعه‌ی سرویس‌های بک‌اند و REST API و بهبود رابط‌های کاربری وب.',
        'طراحی گزارش‌های مدیریتی و عملیاتی با Stimulsoft و Crystal Reports.',
        'راه‌اندازی محیط‌های توسعه و اجرا با Docker و مدیریت نسخه با Git.',
        'پشتیبان‌گیری، بازیابی و پایش پایگاه داده، مستندسازی فنی، بازبینی کد و رفع اشکال.',
      ],
      en: [
        'Develop and maintain the company’s in-house business software, covering finance, sales and purchasing, supply chain, quality, engineering and HR processes in one integrated system.',
        'Gather requirements directly with department managers and users and turn business processes into data models and software.',
        'Design and optimise Microsoft SQL Server databases: tables and relationships, stored procedures, views, functions and complex T-SQL.',
        'Performance tuning: reading execution plans, fixing indexes and rewriting slow queries to cut processing time.',
        'Build backend services and REST APIs and improve the web interfaces on top of them.',
        'Design management and operational reports with Stimulsoft and Crystal Reports.',
        'Set up development and runtime environments with Docker; version control with Git.',
        'Database backup, restore, monitoring and maintenance; technical documentation, code reviews and troubleshooting.',
      ],
      de: [
        'Entwicklung und Betreuung der unternehmensinternen Business-Software, die Prozesse aus Finanzen, Vertrieb und Einkauf, Supply Chain, Qualität, Technik und Personal in einem integrierten System abbildet.',
        'Anforderungsanalyse direkt mit Abteilungsleitern und Anwendern und Umsetzung der Geschäftsprozesse in Datenmodelle und Software.',
        'Entwurf und Optimierung von Microsoft-SQL-Server-Datenbanken: Tabellen und Beziehungen, Stored Procedures, Views, Functions und komplexe T-SQL-Abfragen.',
        'Performance-Tuning: Execution Plans lesen, Indizes optimieren und langsame Abfragen umschreiben.',
        'Entwicklung von Backend-Services und REST-APIs sowie Weiterentwicklung der Weboberflächen.',
        'Erstellung von Management- und Betriebsberichten mit Stimulsoft und Crystal Reports.',
        'Entwicklungs- und Laufzeitumgebungen mit Docker; Versionskontrolle mit Git.',
        'Backup, Restore, Monitoring und Wartung der Datenbanken; technische Dokumentation, Code-Reviews und Fehlerbehebung.',
      ],
    },
    tech: ['Python', 'Django', 'VB.NET', 'JavaScript', 'React', 'SQL Server', 'T-SQL', 'Docker', 'Git', 'Stimulsoft', 'Crystal Reports'],
  },
  {
    key: 'houshiva',
    current: true,
    period: { fa: '۱۴۰۵ تا امروز', en: '2026 – present', de: '2026 – heute' },
    role: {
      fa: 'بنیان‌گذار و توسعه‌دهنده (پاره‌وقت)',
      en: 'Founder & Software Developer (part-time)',
      de: 'Gründer & Softwareentwickler (nebenberuflich)',
    },
    org: { fa: 'هوشیوا، تهران', en: 'Houshiva, Tehran', de: 'Houshiva, Teheran' },
    note: {
      fa: 'استودیوی نرم‌افزار اختصاصی برای کسب‌وکارها',
      en: 'Software studio for custom business applications',
      de: 'Softwarestudio für individuelle Business-Software',
    },
    link: 'https://houshiva.ir',
    bullets: {
      fa: [
        'برای کسب‌وکارهای کوچک و متوسط نرم‌افزار اختصاصی می‌سازم: سایت، فروشگاه آنلاین، صندوق فروش، CRM، انبار و حسابداری، داشبورد و اتصال API؛ از بررسی نیاز تا استقرار و پشتیبانی.',
        'چند نمونه: بازسازی سایت یک شرکت از وردپرس به React و Django، پلتفرم سفارش و رزرو میز برای یک کافه با ورود پیامکی، و منوی دیجیتال با پنل مدیریت و سفارش آنلاین.',
      ],
      en: [
        'Custom software for small and mid-sized businesses: websites, online shops, POS, CRM, inventory and accounting systems, dashboards and API integrations, from requirements to deployment and support.',
        'A few references: relaunching a company website from WordPress to React + Django, an ordering and table-booking platform for a café with SMS one-time-password login, and a digital menu with admin panel and online ordering.',
      ],
      de: [
        'Individuelle Software für kleine und mittlere Unternehmen: Websites, Onlineshops, Kassensysteme, CRM, Lager- und Buchhaltungssysteme, Dashboards und API-Integrationen, von der Anforderungsanalyse bis zu Deployment und Support.',
        'Referenzen: Relaunch einer Firmenwebsite von WordPress auf React + Django, eine Bestell- und Reservierungsplattform für ein Café mit SMS-OTP-Login und eine digitale Speisekarte mit Admin-Panel und Online-Bestellung.',
      ],
    },
  },
  {
    key: 'training',
    period: { fa: 'تیر ۱۳۹۹ تا خرداد ۱۴۰۱', en: 'Jul 2020 – Jun 2022', de: '07/2020 – 06/2022' },
    role: {
      fa: 'دوره‌های تخصصی و پروژه‌های شخصی',
      en: 'Professional training & own projects',
      de: 'Fachliche Weiterbildung & eigene Projekte',
    },
    org: { fa: 'تهران', en: 'Tehran', de: 'Teheran' },
    bullets: {
      fa: [
        'بیش از ۳۵۰ ساعت دوره‌ی تخصصی گذراندم: SQL Server، بهینه‌سازی عملکرد، هوش تجاری، Power BI و پایتون.',
        'پروژه‌های شخصی: بانک رزومه با Django و React و سامانه‌ی ثبت حوادث شرکتی (۱۴۰۰).',
      ],
      en: [
        'Focused on databases and Python: 350+ hours of training in SQL Server, performance tuning, business intelligence, Power BI and Python.',
        'Own projects: a CV database with Django + React and an incident reporting system (2021).',
      ],
      de: [
        'Gezielte Spezialisierung auf Datenbanken und Python: über 350 Stunden Weiterbildung zu SQL Server, Performance-Tuning, Business Intelligence, Power BI und Python.',
        'Eigene Projekte: eine Lebenslauf-Datenbank mit Django + React und ein System zur Erfassung von Betriebsvorfällen (2021).',
      ],
    },
  },
  {
    key: 'service',
    period: { fa: 'خرداد ۱۳۹۷ تا خرداد ۱۳۹۹', en: 'Jun 2018 – Jun 2020', de: '06/2018 – 06/2020' },
    role: {
      fa: 'خدمت سربازی (پایان‌یافته)',
      en: 'Military service (mandatory, completed)',
      de: 'Wehrdienst (Wehrpflicht, abgeschlossen)',
    },
    org: { fa: 'ایران', en: 'Iran', de: 'Iran' },
    bullets: {
      fa: ['در کنار خدمت، سایت فروشگاه حیوانات خانگی را ساختم (۱۳۹۸).'],
      en: ['Alongside service: built a pet supplies web shop (2019).'],
      de: ['Nebenbei eigenes Projekt: Onlineshop für Tierbedarf (2019).'],
    },
  },
  {
    key: 'self-study',
    period: { fa: 'تیر ۱۳۹۶ تا اردیبهشت ۱۳۹۷', en: 'Jul 2017 – May 2018', de: '07/2017 – 05/2018' },
    role: {
      fa: 'یادگیری مستقل تا اعزام به خدمت',
      en: 'Self-study until military call-up',
      de: 'Selbststudium bis zur Einberufung',
    },
    org: { fa: 'تهران', en: 'Tehran', de: 'Teheran' },
    bullets: {
      fa: ['درس‌های دانشگاه را عمیق‌تر خواندم: برنامه‌نویسی، پایگاه داده و توسعه‌ی وب.'],
      en: ['Went deeper into my university courses: programming, databases and web development.'],
      de: ['Vertiefung der Studieninhalte: Programmierung, Datenbanken und Webentwicklung.'],
    },
  },
]

export const education = [
  {
    period: { fa: '۱۴۰۵ تا امروز', en: 'Sep 2026 – present', de: '09/2026 – heute' },
    degree: {
      fa: 'کارشناسی مهندسی کامپیوتر - نرم‌افزار',
      en: 'Bachelor’s degree in Web Programming',
      de: 'Bachelorstudium Web-Programmierung',
    },
    school: {
      fa: 'موسسه‌ی آموزش عالی علمی‌کاربردی گسترش انفورماتیک ایران',
      en: 'Gostaresh Informatics Iran, University of Applied Science and Technology',
      de: 'Gostaresh Informatics Iran, Hochschule für angewandte Wissenschaften',
    },
    note: {
      fa: 'هم‌زمان با کار، در حال تحصیل',
      en: 'Part-time alongside work, expected 2028',
      de: 'Berufsbegleitend, Abschluss voraussichtlich 2028',
    },
  },
  {
    period: { fa: '۱۳۹۴ تا ۱۳۹۶', en: '2015 – 2017', de: '2015 – 2017' },
    degree: {
      fa: 'کاردانی نرم‌افزار کامپیوتر',
      en: 'Kārdāni (2-year degree, comparable to an Associate Degree) in Computer Software',
      de: 'Kārdāni (2-jähriger Hochschulabschluss, vergleichbar Associate Degree) in Computer-Software',
    },
    school: {
      fa: 'آموزشکده‌ی فنی دولتی امام صادق (ع)',
      en: 'Imam Sadegh Technical College (state)',
      de: 'Staatliche Technische Hochschule Imam Sadegh',
    },
    note: {
      fa: 'پذیرش از طریق کنکور سراسری، دوره‌ی روزانه‌ی دولتی',
      en: 'Admitted through the national university entrance exam (Konkur), full-time state programme',
      de: 'Zulassung über die landesweite Hochschulaufnahmeprüfung (Konkur), staatliches Vollzeitstudium',
    },
  },
  {
    period: { fa: '۱۳۹۱ تا ۱۳۹۴', en: '2012 – 2015', de: '2012 – 2015' },
    degree: {
      fa: 'دیپلم کامپیوتر (هنرستان فنی)',
      en: 'High school diploma in Computer Science (technical track)',
      de: 'Diplom, Fachrichtung Informatik (berufsbildender Zweig)',
    },
    school: {
      fa: 'هنرستان نمونه‌دولتی شهید نصیرزاده (با آزمون ورودی)',
      en: 'Shahid Nasirzadeh, selective state model school (entrance exam)',
      de: 'Honarestan Shahid Nasirzadeh, staatliche Modellschule mit Aufnahmeprüfung',
    },
  },
]

export const training = [
  { year: { fa: '۱۴۰۴', en: '2025', de: '2025' }, title: 'AI Engineering', provider: 'Neo Learn', hours: 30 },
  { year: { fa: '۱۴۰۲', en: '2023', de: '2023' }, title: 'Data Analysis', provider: { fa: 'مجتمع فنی تهران', en: 'Tehran Technical Complex', de: 'Tehran Technical Complex' }, hours: 30 },
  { year: { fa: '۱۴۰۰', en: '2021', de: '2021' }, title: 'SQL Server Performance & Tuning', provider: { fa: 'نیک‌آموز', en: 'Nikamooz', de: 'Nikamooz' }, hours: 75 },
  { year: { fa: '۱۴۰۰', en: '2021', de: '2021' }, title: 'Power BI Desktop', provider: { fa: 'نیک‌آموز', en: 'Nikamooz', de: 'Nikamooz' }, hours: 30 },
  { year: { fa: '۱۴۰۰', en: '2021', de: '2021' }, title: 'Python Programming', provider: { fa: 'مجتمع فنی تهران', en: 'Tehran Technical Complex', de: 'Tehran Technical Complex' }, hours: 60 },
  { year: { fa: '۱۴۰۰', en: '2021', de: '2021' }, title: 'Advanced Python', provider: { fa: 'نیک‌آموز', en: 'Nikamooz', de: 'Nikamooz' }, hours: 30 },
  { year: { fa: '۱۳۹۹', en: '2020', de: '2020' }, title: 'Business Intelligence', provider: { fa: 'نیک‌آموز', en: 'Nikamooz', de: 'Nikamooz' }, hours: 90 },
  { year: { fa: '۱۳۹۹', en: '2020', de: '2020' }, title: 'SQL Server Querying', provider: { fa: 'نیک‌آموز', en: 'Nikamooz', de: 'Nikamooz' }, hours: 45 },
  { year: { fa: '۱۳۹۹', en: '2020', de: '2020' }, title: 'Advanced T-SQL: Window Functions & Columnstore Index', provider: { fa: 'نیک‌آموز', en: 'Nikamooz', de: 'Nikamooz' }, hours: 30 },
]

// Levels: 3 = advanced, 2 = good, 1 = basic (as in the CV).
export const skillGroups = [
  {
    key: 'backend',
    items: [
      { name: 'Python', level: 3 },
      { name: 'Django', level: 3 },
      { name: 'REST APIs', level: 3 },
      { name: 'VB.NET', level: 2 },
    ],
  },
  {
    key: 'database',
    items: [
      { name: 'MS SQL Server', level: 3 },
      { name: 'T-SQL', level: 3 },
      { name: 'PostgreSQL', level: 3 },
      { name: 'MySQL', level: 3 },
      { name: 'SSIS', level: 1 },
    ],
  },
  {
    key: 'frontend',
    items: [
      { name: 'React', level: 2 },
      { name: 'JavaScript', level: 2 },
      { name: 'HTML / CSS', level: 2 },
      { name: 'TypeScript', level: 1 },
    ],
  },
  {
    key: 'devops',
    items: [
      { name: 'Git', level: 3 },
      { name: 'Docker', level: 2 },
      { name: 'GitLab', level: 2 },
    ],
  },
  {
    key: 'bi',
    items: [
      { name: 'Crystal Reports', level: 3 },
      { name: 'Stimulsoft Reports', level: 2 },
      { name: 'Power BI', level: 2 },
      { name: 'Excel', level: 2 },
      { name: 'Access', level: 2 },
    ],
  },
  {
    key: 'other',
    items: [
      { name: 'Claude / Codex', level: 2 },
    ],
  },
]

export const languages = [
  { name: { fa: 'فارسی', en: 'Persian', de: 'Persisch' }, level: { fa: 'زبان مادری', en: 'Native', de: 'Muttersprache' }, value: 100 },
  { name: { fa: 'انگلیسی', en: 'English', de: 'Englisch' }, level: { fa: 'خوب (سطح B)، مسلط در ارتباط فنی', en: 'Good (B level), confident in technical communication', de: 'Gute Kenntnisse (B-Niveau), sicher in technischer Kommunikation' }, value: 70 },
  { name: { fa: 'آلمانی', en: 'German', de: 'Deutsch' }, level: { fa: 'مقدماتی (A2)', en: 'Basic (A2)', de: 'Grundkenntnisse (A2)' }, value: 35 },
]

// "Selected projects" as listed in the CV, including the two that are not
// on the portfolio page (AI assistant, asset valuation).
export const cvProjects = [
  { year: { fa: '۱۴۰۵', en: '2026', de: '2026' }, title: { fa: 'داشبورد مدیریتی و تحلیل عملکرد سازمان', en: 'Management dashboard & performance analytics', de: 'Management-Dashboard & Unternehmensanalyse' }, slug: 'management-dashboard-analytics' },
  { year: { fa: '۱۴۰۵', en: '2026', de: '2026' }, title: { fa: 'هوش بازار؛ مقایسه‌ی قیمت کالا در بازارهای مختلف', en: 'Market intelligence tool: comparing product prices across markets', de: 'Marktanalyse-Tool: Vergleich von Warenpreisen über Märkte hinweg' }, slug: 'market-intelligence-platform' },
  { year: { fa: '۱۴۰۵', en: '2026', de: '2026' }, title: { fa: 'دستیار هوش مصنوعی مبتنی بر مدل‌های زبانی بزرگ', en: 'AI assistant built on large language models', de: 'KI-Assistent auf Basis großer Sprachmodelle' } },
  { year: { fa: '۱۴۰۴', en: '2025', de: '2025' }, title: { fa: 'سیستم هوشمند استعلام قیمت کالا و ارزش‌گذاری اموال', en: 'Smart price inquiry & asset valuation system (Django, React, SQL Server)', de: 'Intelligentes Preisanfrage- & Vermögensbewertungssystem (Django, React, SQL Server)' } },
  { year: { fa: '۱۴۰۳', en: '2024', de: '2024' }, title: { fa: 'سیستم مدیریت مستندات هوشمند سازمانی', en: 'Smart document management system', de: 'Intelligentes Dokumentenmanagementsystem' }, slug: 'document-management' },
  { year: { fa: '۱۴۰۲', en: '2023', de: '2023' }, title: { fa: 'سیستم مدیریت آموزشگاه زبان و بانک آموزش ویدیویی اشتراکی', en: 'Language school management system with a subscription video platform', de: 'Sprachschul-Managementsystem mit Video-Lernplattform im Abo' }, slug: 'avana-language-academy' },
]
