export const translations = {
  fa: {
    dir: 'rtl',

    nav: {
      home: 'خانه',
      about: 'درباره',
      projects: 'نمونه‌کارها',
      skills: 'مهارت‌ها',
      contact: 'تماس',
    },

    brand: 'عرفان محمدی',

    boot: [
      'راه‌اندازی محیط',
      'بارگذاری ماژول‌ها',
      'اتصال به سرویس پروفایل',
      'GET /profile · 200',
      'آماده.',
    ],

    hero: {
      status: 'در دسترس برای پروژه و همکاری',
      name: 'عرفان محمدی',
      role: 'توسعه‌دهنده‌ی بک‌اند پایتون و پایگاه داده',
      tagline:
        'بک‌اند و APIهای سامانه‌های سازمانی را می‌سازم؛ با تمرکز بر طراحی درستِ پایگاه داده، پایداری و کدی که در بلندمدت قابل نگهداری بماند.',
      cta1: 'دیدن نمونه‌کارها',
      cta2: 'تماس',
    },

    map: {
      tag: 'نقشه‌ی سیستم',
      title: 'این سایت را مثل یک معماری بخوانید.',
      hint: 'روی هر گره کلیک کنید تا به همان بخش بروید؛ یا کنسول را باز کنید و درخواست بفرستید.',
      openConsole: 'باز کردن کنسول API',
      nodes: {
        'client': 'معرفی و سابقه',
        'api-gateway': 'همه‌ی نمونه‌کارها',
        'auth-service': 'راه‌های تماس',
        'ticket-service': 'یک پروژه‌ی واقعی',
        'ai-service': 'مهارت‌ها و ابزارها',
        'datastore': 'پایگاه داده',
      },
    },

    console: {
      title: 'کنسول API',
      subtitle: 'این پورتفولیو را مثل یک API صدا بزنید.',
      prompt: '~/erfan',
      placeholder: 'یک دستور بنویسید و Enter بزنید؛ مثلاً GET /projects',
      welcome: 'برای فهرست دستورها «help» را بزنید.',
      close: 'بستن',
      toggleHint: 'Ctrl + K',
      helpTitle: 'دستورهای در دسترس',
      notFound: 'دستور پیدا نشد',
      tryHelp: '«help» را امتحان کنید.',
      routing: 'در حال رفتن به',
      commands: {
        help: 'نمایش همین فهرست',
        'GET /about': 'خلاصه‌ی سابقه و تخصص',
        'GET /projects': 'فهرست نمونه‌کارها',
        'GET /projects/:slug': 'جزئیات یک پروژه',
        'GET /skills': 'مهارت‌ها بر اساس حوزه',
        'GET /services': 'حوزه‌های کاری',
        'POST /contact': 'راه‌های تماس',
        whoami: 'معرفی یک‌خطی',
        open: 'باز کردن یک مسیر؛ مثلاً open /projects',
        clear: 'پاک کردن صفحه',
      },
      whoami:
        'عرفان محمدی — توسعه‌دهنده‌ی بک‌اند پایتون، با تمرکز بر طراحی API و پایگاه داده برای سامانه‌های سازمانی.',
    },

    intro: {
      tag: 'معرفی',
      title: 'کوتاه درباره‌ی کاری که می‌کنم',
      body:
        'روی بک‌اند و APIهای سامانه‌های تحت وب و راهکارهای اتوماسیون در محیط سازمانی کار می‌کنم. تمرکزم روی طراحی درستِ داده، کارایی و کدی است که در بلندمدت قابل نگهداری بماند.',
      cta: 'سابقه‌ی کامل',
    },

    stats: { tag: 'در یک نگاه', title: 'خلاصه‌ی حرفه‌ای' },
    stack: { tag: 'فناوری‌ها', title: 'ابزارها و فناوری‌های کاری' },

    featured: {
      tag: 'منتخب کارها',
      title: 'چند پروژه که ارزش توضیح دارند.',
      all: 'دیدن همه‌ی نمونه‌کارها',
    },

    services: {
      tag: 'چه کاری انجام می‌دهم',
      title: 'حوزه‌هایی که در آن‌ها کار تحویل داده‌ام.',
    },

    about: {
      title: 'درباره',
      subtitle: 'از برنامه‌نویسی پایگاه داده و سامانه‌های دسکتاپ تا بک‌اند و API‌های وب.',
      intro:
        'توسعه‌دهنده‌ی بک‌اند با تمرکز بر طراحی API، مدل‌سازی داده و سامانه‌های سازمانی.\n\nدر هر پروژه به طراحی درستِ پایگاه داده، امنیت، مستندسازی و نگهداشت‌پذیری اهمیت می‌دهم تا محصول در بلندمدت هم قابل توسعه بماند.\n\nیادگیری مستمر و به‌کارگیری فناوری‌های روز، بخشی ثابت از کار من است.',
      timelineTag: 'مسیر حرفه‌ای',
      timeline: [
        {
          time: 'پایه',
          title: 'برنامه‌نویسی پایگاه داده و دسکتاپ',
          body:
            'توسعه‌ی نرم‌افزارهای دسکتاپ و پایگاه داده در محیط سازمانی؛ کار با SQL Server، رویه‌های ذخیره‌شده، بهینه‌سازی کوئری و گزارش‌گیری.',
        },
        {
          time: 'گسترش',
          title: 'حرکت به بک‌اند وب و طراحی API',
          body:
            'توسعه با پایتون و Django و طراحی REST API با نگاه به قرارداد، امنیت و نسخه‌بندی.',
        },
        {
          time: 'اکنون',
          title: 'بک‌اند سامانه‌های داده‌محور',
          body:
            'تمرکز روی طراحی API و پایگاه داده برای سامانه‌های سازمانی، و ادغام سرویس‌های هوش مصنوعی در گردش‌کار.',
        },
      ],
      nowTag: '// اکنون',
      now:
        'در حال کار روی بک‌اند سامانه‌های سازمانی داده‌محور و طراحی API و مدل داده‌ی آن‌ها.',
      detailsTag: 'مشخصات',
      labels: {
        name: 'نام',
        role: 'عنوان',
        location: 'محل',
        email: 'ایمیل',
        phone: 'تلفن',
        availability: 'وضعیت',
      },
    },

    projects: {
      title: 'نمونه‌کارها',
      subtitle: 'منتخبی از پروژه‌های اجراشده — عمومی و خصوصی.',
      labels: {
        problem: 'مسئله',
        approach: 'راهکار',
        result: 'نتیجه',
        stack: 'فناوری‌ها',
        code: 'کد روی گیت‌هاب',
        demo: 'نسخه‌ی زنده',
        private: 'مخزن خصوصی',
        privateNote: 'کد این پروژه خصوصی است؛ جزئیات بیشتر بر اساس درخواست.',
        more: 'مسئله، راهکار، نتیجه',
        less: 'بستن',
      },
      emptyTitle: 'نمونه‌کاری ثبت نشده',
      emptyBody: 'به‌زودی.',
    },

    skills: {
      title: 'مهارت‌ها',
      subtitle: 'فناوری‌ها، ابزارها و حوزه‌های تخصصی.',
      filterAll: 'همه',
      emptyTitle: 'به‌زودی',
      emptyBody: 'فهرست کامل به‌زودی تکمیل می‌شود.',
      categories: {
        backend: { title: 'توسعه‌ی بک‌اند', description: 'طراحی API، منطق کسب‌وکار و سرویس‌های سمت سرور.' },
        database: { title: 'پایگاه داده', description: 'طراحی، مدل‌سازی و بهینه‌سازی پایگاه‌های داده‌ی رابطه‌ای.' },
        frontend: { title: 'رابط کاربری', description: 'ساخت داشبورد و رابط کاربری برای مصرف APIها.' },
        ai: { title: 'هوش مصنوعی و اتوماسیون', description: 'ادغام سرویس‌های هوش مصنوعی و خودکارسازی فرایندها.' },
        enterprise: { title: 'نرم‌افزار سازمانی', description: 'طراحی و توسعه‌ی سامانه‌های اختصاصی و سیستم‌های داخلی.' },
        tools: { title: 'ابزارهای توسعه', description: 'ابزارها و محیط‌های کار در چرخه‌ی توسعه.' },
        engineering: { title: 'مهندسی نرم‌افزار', description: 'معماری، کد تمیز، تست و نگهداشت سیستم.' },
      },
    },

    contact: {
      title: 'تماس',
      subtitle: 'برای همکاری، اجرای پروژه، مشاوره‌ی فنی یا فرصت شغلی در دسترسم.',
      responseTag: '200 OK',
      cta: 'ارسال ایمیل',
      copied: 'کپی شد',
      copy: 'کپی',
      labels: {
        email: 'ایمیل',
        phone: 'تلفن',
        location: 'محل',
        github: 'گیت‌هاب',
        linkedin: 'لینکدین',
        website: 'وب‌سایت',
      },
    },

    notFound: {
      code: '404',
      title: 'این مسیر تعریف نشده',
      body: 'ممکن است صفحه جابه‌جا شده باشد یا نشانی درست نباشد.',
      back: 'بازگشت به خانه',
    },
  },

  en: {
    dir: 'ltr',

    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },

    brand: 'Erfan Mohammadi',

    boot: [
      'booting environment',
      'loading modules',
      'connecting to profile service',
      'GET /profile · 200',
      'ready.',
    ],

    hero: {
      status: 'Available for projects and collaboration',
      name: 'Erfan Mohammadi',
      role: 'Python Backend Developer · Databases',
      tagline:
        'I build the backend and APIs for enterprise systems — with a focus on sound database design, reliability, and code that stays maintainable.',
      cta1: 'View projects',
      cta2: 'Contact',
    },

    map: {
      tag: 'system map',
      title: 'Read this site like an architecture.',
      hint: 'Click any node to jump to that section — or open the console and send a request.',
      openConsole: 'Open API console',
      nodes: {
        'client': 'background',
        'api-gateway': 'all projects',
        'auth-service': 'ways to reach me',
        'ticket-service': 'a real project',
        'ai-service': 'skills and tools',
        'datastore': 'databases',
      },
    },

    console: {
      title: 'API console',
      subtitle: 'Call this portfolio like an API.',
      prompt: '~/erfan',
      placeholder: 'type a command and hit Enter — e.g. GET /projects',
      welcome: 'Type "help" for the command list.',
      close: 'Close',
      toggleHint: 'Ctrl + K',
      helpTitle: 'Available commands',
      notFound: 'command not found',
      tryHelp: 'try "help".',
      routing: 'routing to',
      commands: {
        help: 'show this list',
        'GET /about': 'background and focus, summarized',
        'GET /projects': 'list the projects',
        'GET /projects/:slug': 'one project in detail',
        'GET /skills': 'skills by area',
        'GET /services': 'capability areas',
        'POST /contact': 'ways to reach me',
        whoami: 'one-line intro',
        open: 'open a route — e.g. open /projects',
        clear: 'clear the screen',
      },
      whoami:
        'Erfan Mohammadi — Python backend developer, focused on API design and databases for enterprise systems.',
    },

    intro: {
      tag: 'Introduction',
      title: 'Briefly, what I do',
      body:
        'I work on the backend and APIs of web applications and on automation in an enterprise setting. The focus is sound data design, performance, and code that stays maintainable over time.',
      cta: 'Full background',
    },

    stats: { tag: 'At a glance', title: 'The professional short version' },
    stack: { tag: 'Technology', title: 'Tools & technologies I work with' },

    featured: {
      tag: 'Selected work',
      title: 'A few projects worth explaining.',
      all: 'See all projects',
    },

    services: {
      tag: 'What I do',
      title: 'Areas I have shipped work in.',
    },

    about: {
      title: 'About',
      subtitle: 'From database programming and desktop systems to web backends and APIs.',
      intro:
        'Backend developer, focused on API design, data modeling, and enterprise systems.\n\nOn every project I care about sound database design, security, documentation, and maintainability — so the product stays extensible over time.\n\nContinuous learning and current technology are a constant part of how I work.',
      timelineTag: 'Career path',
      timeline: [
        {
          time: 'foundation',
          title: 'Database & desktop programming',
          body:
            'Building desktop and database software in an enterprise environment — SQL Server, stored procedures, query optimization, and reporting.',
        },
        {
          time: 'expansion',
          title: 'Moving to web backends and API design',
          body:
            'Building with Python and Django and designing REST APIs with an eye on contract, security, and versioning.',
        },
        {
          time: 'now',
          title: 'Backend for data-driven systems',
          body:
            'Focused on API and database design for enterprise systems, and bringing AI services into the workflow.',
        },
      ],
      nowTag: '// now',
      now:
        'Working on the backend of data-driven enterprise systems and the design of their APIs and data models.',
      detailsTag: 'Details',
      labels: {
        name: 'Name',
        role: 'Title',
        location: 'Based in',
        email: 'Email',
        phone: 'Phone',
        availability: 'Status',
      },
    },

    projects: {
      title: 'Projects',
      subtitle: 'A selection of completed work — public and private.',
      labels: {
        problem: 'Problem',
        approach: 'Approach',
        result: 'Result',
        stack: 'Stack',
        code: 'Code on GitHub',
        demo: 'Live version',
        private: 'Private repository',
        privateNote: 'The code for this project is private; more detail on request.',
        more: 'Problem, approach, result',
        less: 'Close',
      },
      emptyTitle: 'No projects listed',
      emptyBody: 'Coming soon.',
    },

    skills: {
      title: 'Skills',
      subtitle: 'Technologies, tools, and areas of expertise.',
      filterAll: 'All',
      emptyTitle: 'Coming soon',
      emptyBody: 'The full list is on its way.',
      categories: {
        backend: { title: 'Backend Development', description: 'API design, business logic, and server-side services.' },
        database: { title: 'Database Systems', description: 'Designing, modeling, and optimizing relational databases.' },
        frontend: { title: 'User Interface', description: 'Building dashboards and interfaces that consume the APIs.' },
        ai: { title: 'AI & Automation', description: 'Integrating AI services and automating workflows.' },
        enterprise: { title: 'Enterprise Software', description: 'Custom business applications and internal systems.' },
        tools: { title: 'Development Tools', description: 'Tools and environments across the development cycle.' },
        engineering: { title: 'Software Engineering', description: 'Architecture, clean code, testing, and maintenance.' },
      },
    },

    contact: {
      title: 'Contact',
      subtitle: 'Available for collaboration, a project, technical advice, or a role.',
      responseTag: '200 OK',
      cta: 'Send an email',
      copied: 'Copied',
      copy: 'Copy',
      labels: {
        email: 'Email',
        phone: 'Phone',
        location: 'Based in',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        website: 'Website',
      },
    },

    notFound: {
      code: '404',
      title: 'This route is not defined',
      body: 'The page may have moved, or the address is not quite right.',
      back: 'Back to home',
    },
  },

  de: {
    dir: 'ltr',

    nav: {
      home: 'Start',
      about: 'Über mich',
      projects: 'Projekte',
      skills: 'Fähigkeiten',
      contact: 'Kontakt',
    },

    brand: 'Erfan Mohammadi',

    boot: [
      'Umgebung wird gestartet',
      'Module werden geladen',
      'Verbindung zum Profildienst',
      'GET /profile · 200',
      'bereit.',
    ],

    hero: {
      status: 'Verfügbar für Projekte und Zusammenarbeit',
      name: 'Erfan Mohammadi',
      role: 'Python Backend Developer · Datenbanken',
      tagline:
        'Ich baue Backend und APIs für Unternehmenssysteme — mit Fokus auf solidem Datenbankdesign, Zuverlässigkeit und wartbarem Code.',
      cta1: 'Projekte ansehen',
      cta2: 'Kontakt',
    },

    map: {
      tag: 'Systemkarte',
      title: 'Lies diese Seite wie eine Architektur.',
      hint: 'Klick auf einen Knoten, um zum Bereich zu springen — oder öffne die Konsole und sende eine Anfrage.',
      openConsole: 'API-Konsole öffnen',
      nodes: {
        'client': 'Werdegang',
        'api-gateway': 'alle Projekte',
        'auth-service': 'Kontaktmöglichkeiten',
        'ticket-service': 'ein echtes Projekt',
        'ai-service': 'Fähigkeiten und Werkzeuge',
        'datastore': 'Datenbanken',
      },
    },

    console: {
      title: 'API-Konsole',
      subtitle: 'Ruf dieses Portfolio wie eine API auf.',
      prompt: '~/erfan',
      placeholder: 'Befehl eingeben und Enter drücken — z. B. GET /projects',
      welcome: 'Tippe "help" für die Befehlsliste.',
      close: 'Schließen',
      toggleHint: 'Strg + K',
      helpTitle: 'Verfügbare Befehle',
      notFound: 'Befehl nicht gefunden',
      tryHelp: 'versuch "help".',
      routing: 'weiter zu',
      commands: {
        help: 'diese Liste anzeigen',
        'GET /about': 'Werdegang und Schwerpunkt, zusammengefasst',
        'GET /projects': 'Projekte auflisten',
        'GET /projects/:slug': 'ein Projekt im Detail',
        'GET /skills': 'Fähigkeiten nach Bereich',
        'GET /services': 'Kompetenzbereiche',
        'POST /contact': 'Kontaktmöglichkeiten',
        whoami: 'Kurzvorstellung',
        open: 'eine Route öffnen — z. B. open /projects',
        clear: 'Bildschirm leeren',
      },
      whoami:
        'Erfan Mohammadi — Python Backend Developer, mit Fokus auf API-Design und Datenbanken für Unternehmenssysteme.',
    },

    intro: {
      tag: 'Einführung',
      title: 'Kurz gesagt: was ich mache',
      body:
        'Ich arbeite am Backend und an den APIs von Webanwendungen sowie an Automatisierung im Unternehmensumfeld. Der Fokus liegt auf solidem Datendesign, Leistung und wartbarem Code.',
      cta: 'Vollständiger Werdegang',
    },

    stats: { tag: 'Auf einen Blick', title: 'Die fachliche Kurzfassung' },
    stack: { tag: 'Technologie', title: 'Werkzeuge & Technologien, mit denen ich arbeite' },

    featured: {
      tag: 'Ausgewählte Arbeiten',
      title: 'Ein paar Projekte, die eine Erklärung wert sind.',
      all: 'Alle Projekte ansehen',
    },

    services: {
      tag: 'Was ich mache',
      title: 'Bereiche, in denen ich Arbeit ausgeliefert habe.',
    },

    about: {
      title: 'Über mich',
      subtitle: 'Von Datenbankprogrammierung und Desktop-Systemen zu Web-Backends und APIs.',
      intro:
        'Backend Developer, mit Fokus auf API-Design, Datenmodellierung und Unternehmenssysteme.\n\nBei jedem Projekt achte ich auf solides Datenbankdesign, Sicherheit, Dokumentation und Wartbarkeit — damit das Produkt langfristig erweiterbar bleibt.\n\nKontinuierliches Lernen und aktuelle Technologien gehören fest zu meiner Arbeitsweise.',
      timelineTag: 'Werdegang',
      timeline: [
        {
          time: 'Grundlage',
          title: 'Datenbank- & Desktop-Programmierung',
          body:
            'Entwicklung von Desktop- und Datenbanksoftware im Unternehmensumfeld — SQL Server, Stored Procedures, Query-Optimierung und Reporting.',
        },
        {
          time: 'Erweiterung',
          title: 'Wechsel zu Web-Backends und API-Design',
          body:
            'Entwicklung mit Python und Django und Entwurf von REST-APIs mit Blick auf Vertrag, Sicherheit und Versionierung.',
        },
        {
          time: 'jetzt',
          title: 'Backend für datengetriebene Systeme',
          body:
            'Fokus auf API- und Datenbankdesign für Unternehmenssysteme und die Einbindung von KI-Diensten in den Workflow.',
        },
      ],
      nowTag: '// jetzt',
      now:
        'Arbeit am Backend datengetriebener Unternehmenssysteme und am Entwurf ihrer APIs und Datenmodelle.',
      detailsTag: 'Details',
      labels: {
        name: 'Name',
        role: 'Titel',
        location: 'Standort',
        email: 'E-Mail',
        phone: 'Telefon',
        availability: 'Status',
      },
    },

    projects: {
      title: 'Projekte',
      subtitle: 'Eine Auswahl abgeschlossener Arbeiten — öffentlich und privat.',
      labels: {
        problem: 'Problem',
        approach: 'Ansatz',
        result: 'Ergebnis',
        stack: 'Stack',
        code: 'Code auf GitHub',
        demo: 'Live-Version',
        private: 'Privates Repository',
        privateNote: 'Der Code dieses Projekts ist privat; mehr Details auf Anfrage.',
        more: 'Problem, Ansatz, Ergebnis',
        less: 'Schließen',
      },
      emptyTitle: 'Keine Projekte gelistet',
      emptyBody: 'Demnächst.',
    },

    skills: {
      title: 'Fähigkeiten',
      subtitle: 'Technologien, Werkzeuge und fachliche Schwerpunkte.',
      filterAll: 'Alle',
      emptyTitle: 'Demnächst',
      emptyBody: 'Die vollständige Liste folgt.',
      categories: {
        backend: { title: 'Backend-Entwicklung', description: 'API-Design, Geschäftslogik und serverseitige Services.' },
        database: { title: 'Datenbanksysteme', description: 'Entwurf, Modellierung und Optimierung relationaler Datenbanken.' },
        frontend: { title: 'Benutzeroberfläche', description: 'Dashboards und Oberflächen, die die APIs nutzen.' },
        ai: { title: 'KI & Automatisierung', description: 'Integration von KI-Diensten und Automatisierung von Abläufen.' },
        enterprise: { title: 'Unternehmenssoftware', description: 'Individuelle Geschäftsanwendungen und interne Systeme.' },
        tools: { title: 'Entwicklungswerkzeuge', description: 'Werkzeuge und Umgebungen über den gesamten Entwicklungszyklus.' },
        engineering: { title: 'Software Engineering', description: 'Architektur, Clean Code, Tests und Wartung.' },
      },
    },

    contact: {
      title: 'Kontakt',
      subtitle: 'Verfügbar für Zusammenarbeit, ein Projekt, technische Beratung oder eine Stelle.',
      responseTag: '200 OK',
      cta: 'E-Mail senden',
      copied: 'Kopiert',
      copy: 'Kopieren',
      labels: {
        email: 'E-Mail',
        phone: 'Telefon',
        location: 'Standort',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        website: 'Website',
      },
    },

    notFound: {
      code: '404',
      title: 'Diese Route ist nicht definiert',
      body: 'Die Seite wurde vielleicht verschoben oder die Adresse stimmt nicht ganz.',
      back: 'Zurück zum Start',
    },
  },
}

export const supportedLangs = ['fa', 'en', 'de']
export const defaultLang = 'fa'
