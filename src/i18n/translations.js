export const translations = {
  fa: {
    dir: 'rtl',

    nav: {
      home: 'خانه',
      about: 'درباره',
      projects: 'نمونه‌کارها',
      skills: 'مهارت‌ها',
      contact: 'تماس',
      resume: 'رزومه',
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
      status: 'آماده‌ی همکاری در پروژه‌های جدید',
      name: 'عرفان محمدی',
      role: 'توسعه‌دهنده‌ی بک‌اند و پایگاه داده · مهندس نرم‌افزار',
      tagline:
        'توسعه‌ی بک‌اند، طراحی و مدیریت پایگاه داده، و پیاده‌سازی سامانه‌های نرم‌افزاری اختصاصی برای کسب‌وکار.',
      cta1: 'مشاهده‌ی نمونه‌کارها',
      cta2: 'تماس',
      cta3: 'دانلود رزومه',
    },

    map: {
      tag: 'نمای معماری',
      title: 'ساختار این وب‌سایت بر پایه‌ی یک معماری نرم‌افزاری چیده شده است.',
      hint: 'با انتخاب هر گره به بخش مربوط هدایت می‌شوید. برای دریافت پاسخ‌ها به‌صورت داده، کنسول را باز کنید.',
      openConsole: 'باز کردن کنسول API',
      nodes: {
        'client': 'معرفی و سابقه',
        'api-gateway': 'فهرست نمونه‌کارها',
        'auth-service': 'راه‌های تماس',
        'ticket-service': 'یک پروژه‌ی نمونه',
        'ai-service': 'مهارت‌ها و ابزارها',
        'datastore': 'پایگاه داده',
      },
    },

    console: {
      title: 'کنسول API',
      subtitle: 'این وب‌سایت را می‌توان مانند یک API فراخوانی کرد.',
      prompt: '~/erfan',
      placeholder: 'یک دستور وارد کنید و Enter بزنید؛ برای نمونه GET /projects',
      welcome: 'برای مشاهده‌ی فهرست دستورها، «help» را وارد کنید.',
      close: 'بستن',
      toggleHint: 'Ctrl + K',
      helpTitle: 'دستورهای در دسترس',
      notFound: 'دستور یافت نشد',
      tryHelp: '«help» را وارد کنید.',
      routing: 'در حال هدایت به',
      commands: {
        help: 'نمایش این فهرست',
        'GET /about': 'خلاصه‌ی سابقه و تخصص',
        'GET /projects': 'فهرست نمونه‌کارها',
        'GET /projects/:slug': 'جزئیات یک پروژه',
        'GET /skills': 'مهارت‌ها بر اساس حوزه',
        'GET /services': 'حوزه‌های تخصصی',
        'POST /contact': 'راه‌های تماس',
        whoami: 'معرفی کوتاه',
        open: 'باز کردن یک مسیر؛ برای نمونه open /projects',
        clear: 'پاک کردن صفحه',
      },
      whoami:
        'عرفان محمدی — توسعه‌دهنده‌ی بک‌اند و پایگاه داده. مهندس نرم‌افزار، فعال در حوزه‌ی سامانه‌های سازمانی.',
    },

    intro: {
      tag: 'معرفی',
      title: 'زمینه‌ی فعالیت',
      body:
        'فعالیت من در توسعه‌ی بک‌اند، طراحی و مدیریت پایگاه داده و پیاده‌سازی سامانه‌های نرم‌افزاری اختصاصی برای کسب‌وکار است. تمرکز اصلی بر معماری درست، عملکرد پایدار و کدی است که در بلندمدت قابل نگهداری و توسعه بماند.',
      cta: 'سابقه‌ی کامل',
    },

    stats: { tag: 'در یک نگاه', title: 'نمای کلی حرفه‌ای' },
    stack: { tag: 'فناوری‌ها', title: 'فناوری‌ها و ابزارهای کاری' },

    featured: {
      tag: 'منتخب پروژه‌ها',
      title: 'منتخبی از پروژه‌های شاخص.',
      all: 'مشاهده‌ی همه‌ی نمونه‌کارها',
    },

    services: {
      tag: 'حوزه‌های تخصصی',
      title: 'خدمات و توانمندی‌های فنی.',
    },

    about: {
      title: 'درباره',
      subtitle: 'توسعه‌دهنده‌ی نرم‌افزار در حوزه‌ی بک‌اند، پایگاه داده و سامانه‌های سازمانی.',
      intro:
        'توسعه‌دهنده‌ی نرم‌افزار با تمرکز بر توسعه‌ی بک‌اند، طراحی و مدیریت پایگاه داده و پیاده‌سازی راهکارهای نرم‌افزاری.\n\nدارای تجربه در توسعه‌ی سرویس‌های سمت سرور، طراحی رابط کاربری، بهینه‌سازی و مدیریت SQL Server، و استقرار پروژه‌ها روی Docker. همچنین کار روی راهکارهای مبتنی بر تحلیل داده و اتوماسیون هوشمند برای فرایندهای کسب‌وکار.\n\nعلاقه‌مند به معماری نرم‌افزار و بهینه‌سازی عملکرد سیستم‌ها، با تجربه‌ی طراحی و اجرای پروژه‌ها به‌صورت کامل.',
      experienceTag: 'سوابق شغلی',
      educationTag: 'تحصیلات',
      coursesTag: 'دوره‌های تخصصی',
      timelineTag: 'مسیر حرفه‌ای',
      timeline: [
        {
          time: 'پایه',
          title: 'برنامه‌نویسی پایگاه داده و دسکتاپ',
          body:
            'آغاز فعالیت با توسعه‌ی نرم‌افزارهای دسکتاپ و پایگاه داده در محیط سازمانی؛ کار با SQL Server، رویه‌های ذخیره‌شده، بهینه‌سازی کوئری و گزارش‌سازی.',
        },
        {
          time: 'گسترش',
          title: 'ورود به توسعه‌ی وب و طراحی API',
          body:
            'توسعه با Python و Django و طراحی REST API با توجه به قرارداد، امنیت و نسخه‌بندی.',
        },
        {
          time: 'اکنون',
          title: 'بک‌اند سامانه‌های داده‌محور و مدیریت پایگاه داده',
          body:
            'تمرکز بر طراحی API و پایگاه داده برای سامانه‌های سازمانی، هوش تجاری و گزارش‌سازی، و ادغام راهکارهای هوشمند در فرایندها.',
        },
      ],
      nowTag: '// اکنون',
      now:
        'توسعه‌ی بک‌اند سامانه‌های سازمانی داده‌محور و مدیریت پایگاه داده، در کنار اجرای پروژه‌های نرم‌افزاری اختصاصی برای کسب‌وکارها در قالب مجموعه‌ی هوشیوا.',
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
      subtitle: 'منتخبی از پروژه‌های اجراشده؛ عمومی و خصوصی.',
      labels: {
        problem: 'مسئله',
        approach: 'راهکار',
        result: 'نتیجه',
        stack: 'فناوری‌ها',
        code: 'کد روی گیت‌هاب',
        demo: 'نسخه‌ی زنده',
        private: 'مخزن خصوصی',
        privateNote: 'کد این پروژه خصوصی است؛ ارائه‌ی جزئیات بیشتر بر اساس درخواست امکان‌پذیر است.',
        overview: 'نمای کلی',
        whatIBuilt: 'شرح راهکار',
        features: 'قابلیت‌ها',
        role: 'نقش',
        view: 'مشاهده‌ی پروژه',
        back: 'بازگشت به نمونه‌کارها',
      },
      emptyTitle: 'نمونه‌کاری ثبت نشده است',
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
        database: { title: 'پایگاه داده', description: 'طراحی، مدل‌سازی، مدیریت و بهینه‌سازی پایگاه‌های داده‌ی رابطه‌ای.' },
        bi: { title: 'هوش تجاری و گزارش‌سازی', description: 'گزارش‌سازی و تحلیل داده با Power BI، SSIS و ابزارهای گزارش.' },
        frontend: { title: 'رابط کاربری', description: 'ساخت داشبورد و رابط کاربری برای مصرف APIها.' },
        ai: { title: 'هوش مصنوعی و اتوماسیون', description: 'ادغام سرویس‌های هوش مصنوعی و خودکارسازی فرایندها.' },
        devops: { title: 'استقرار و ابزارها', description: 'استقرار روی Docker، مدیریت مخزن با Git و GitLab.' },
        engineering: { title: 'مهندسی نرم‌افزار', description: 'معماری، کد تمیز، بهینه‌سازی عملکرد و نگهداشت سیستم.' },
      },
    },

    contact: {
      title: 'تماس',
      subtitle: 'برای همکاری در پروژه، مشاوره‌ی فنی یا فرصت شغلی در دسترس هستم.',
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
        company: 'مجموعه',
      },
    },

    resume: {
      title: 'رزومه',
      subtitle: 'عرفان محمدی — توسعه‌دهنده‌ی بک‌اند و پایگاه داده.',
      print: 'چاپ / ذخیره‌ی PDF',
      sections: {
        summary: 'خلاصه',
        experience: 'سوابق شغلی',
        education: 'تحصیلات',
        skills: 'مهارت‌های نرم‌افزاری',
        languages: 'زبان‌ها',
        courses: 'دوره‌های تخصصی',
        interests: 'زمینه‌های مورد علاقه',
        contact: 'اطلاعات تماس',
      },
      hoursLabel: 'ساعت',
    },

    notFound: {
      code: '404',
      title: 'این مسیر تعریف نشده است',
      body: 'ممکن است صفحه جابه‌جا شده باشد یا نشانی درست وارد نشده باشد.',
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
      resume: 'Resume',
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
      status: 'Open to new projects and collaboration',
      name: 'Erfan Mohammadi',
      role: 'Backend & Database Developer · Software Engineer',
      tagline:
        'Backend development, database design and administration, and custom software systems for business.',
      cta1: 'View projects',
      cta2: 'Contact',
      cta3: 'Download résumé',
    },

    map: {
      tag: 'architecture view',
      title: 'This site is laid out as a software architecture.',
      hint: 'Select a node to jump to that section. Open the console to get the responses as data.',
      openConsole: 'Open API console',
      nodes: {
        'client': 'background',
        'api-gateway': 'all projects',
        'auth-service': 'ways to reach me',
        'ticket-service': 'a sample project',
        'ai-service': 'skills and tools',
        'datastore': 'databases',
      },
    },

    console: {
      title: 'API console',
      subtitle: 'This site can be called like an API.',
      prompt: '~/erfan',
      placeholder: 'enter a command and press Enter — e.g. GET /projects',
      welcome: 'Enter "help" for the command list.',
      close: 'Close',
      toggleHint: 'Ctrl + K',
      helpTitle: 'Available commands',
      notFound: 'command not found',
      tryHelp: 'enter "help".',
      routing: 'routing to',
      commands: {
        help: 'show this list',
        'GET /about': 'background and focus, summarized',
        'GET /projects': 'list the projects',
        'GET /projects/:slug': 'one project in detail',
        'GET /skills': 'skills by area',
        'GET /services': 'areas of expertise',
        'POST /contact': 'ways to reach me',
        whoami: 'short intro',
        open: 'open a route — e.g. open /projects',
        clear: 'clear the screen',
      },
      whoami:
        'Erfan Mohammadi — backend and database developer. Software engineer working on enterprise systems.',
    },

    intro: {
      tag: 'Introduction',
      title: 'Field of work',
      body:
        'My work is in backend development, database design and administration, and building custom software systems for business. The focus is sound architecture, stable performance, and code that stays maintainable and extensible over time.',
      cta: 'Full background',
    },

    stats: { tag: 'At a glance', title: 'Professional overview' },
    stack: { tag: 'Technology', title: 'Technologies and tools' },

    featured: {
      tag: 'Selected projects',
      title: 'A selection of notable projects.',
      all: 'View all projects',
    },

    services: {
      tag: 'Areas of expertise',
      title: 'Services and technical capabilities.',
    },

    about: {
      title: 'About',
      subtitle: 'Software developer working in backend, databases, and enterprise systems.',
      intro:
        'Software developer focused on backend development, database design and administration, and delivering software solutions.\n\nExperienced in server-side services, UI design, optimizing and managing Microsoft SQL Server, and deploying projects on Docker. Also builds data-driven solutions and intelligent automation for business processes.\n\nInterested in software architecture and system performance, with hands-on experience taking projects from start to delivery.',
      experienceTag: 'Experience',
      educationTag: 'Education',
      coursesTag: 'Training',
      timelineTag: 'Career path',
      timeline: [
        {
          time: 'foundation',
          title: 'Database & desktop programming',
          body:
            'Started with desktop and database software in an enterprise environment — SQL Server, stored procedures, query optimization, and reporting.',
        },
        {
          time: 'expansion',
          title: 'Into web development and API design',
          body:
            'Building with Python and Django and designing REST APIs with attention to contract, security, and versioning.',
        },
        {
          time: 'now',
          title: 'Backend for data-driven systems and database administration',
          body:
            'Focused on API and database design for enterprise systems, BI and reporting, and integrating intelligent solutions into processes.',
        },
      ],
      nowTag: '// now',
      now:
        'Backend development for data-driven enterprise systems and database administration, alongside delivering custom software for businesses through Houshiva.',
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
        privateNote: 'The code for this project is private; further detail is available on request.',
        overview: 'Overview',
        whatIBuilt: 'The solution',
        features: 'Features',
        role: 'Role',
        view: 'View project',
        back: 'Back to projects',
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
        database: { title: 'Databases', description: 'Design, modeling, administration, and optimization of relational databases.' },
        bi: { title: 'BI & Reporting', description: 'Reporting and data analysis with Power BI, SSIS, and reporting tools.' },
        frontend: { title: 'User Interface', description: 'Dashboards and interfaces that consume the APIs.' },
        ai: { title: 'AI & Automation', description: 'Integrating AI services and automating processes.' },
        devops: { title: 'Deployment & Tools', description: 'Deploying on Docker, repository management with Git and GitLab.' },
        engineering: { title: 'Software Engineering', description: 'Architecture, clean code, performance tuning, and maintenance.' },
      },
    },

    contact: {
      title: 'Contact',
      subtitle: 'Available for project collaboration, technical consulting, or a role.',
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
        company: 'Studio',
      },
    },

    resume: {
      title: 'Résumé',
      subtitle: 'Erfan Mohammadi — Backend & Database Developer.',
      print: 'Print / Save as PDF',
      sections: {
        summary: 'Summary',
        experience: 'Experience',
        education: 'Education',
        skills: 'Software skills',
        languages: 'Languages',
        courses: 'Training',
        interests: 'Areas of interest',
        contact: 'Contact',
      },
      hoursLabel: 'h',
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
      resume: 'Lebenslauf',
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
      status: 'Offen für neue Projekte und Zusammenarbeit',
      name: 'Erfan Mohammadi',
      role: 'Backend- & Datenbank-Entwickler · Software Engineer',
      tagline:
        'Backend-Entwicklung, Datenbankdesign und -administration sowie individuelle Softwaresysteme für Unternehmen.',
      cta1: 'Projekte ansehen',
      cta2: 'Kontakt',
      cta3: 'Lebenslauf herunterladen',
    },

    map: {
      tag: 'Architektur-Ansicht',
      title: 'Diese Seite ist als Softwarearchitektur aufgebaut.',
      hint: 'Wählen Sie einen Knoten, um zum Bereich zu springen. Öffnen Sie die Konsole, um die Antworten als Daten zu erhalten.',
      openConsole: 'API-Konsole öffnen',
      nodes: {
        'client': 'Werdegang',
        'api-gateway': 'alle Projekte',
        'auth-service': 'Kontaktmöglichkeiten',
        'ticket-service': 'ein Beispielprojekt',
        'ai-service': 'Fähigkeiten und Werkzeuge',
        'datastore': 'Datenbanken',
      },
    },

    console: {
      title: 'API-Konsole',
      subtitle: 'Diese Seite lässt sich wie eine API aufrufen.',
      prompt: '~/erfan',
      placeholder: 'Befehl eingeben und Enter drücken — z. B. GET /projects',
      welcome: 'Geben Sie "help" für die Befehlsliste ein.',
      close: 'Schließen',
      toggleHint: 'Strg + K',
      helpTitle: 'Verfügbare Befehle',
      notFound: 'Befehl nicht gefunden',
      tryHelp: 'geben Sie "help" ein.',
      routing: 'weiter zu',
      commands: {
        help: 'diese Liste anzeigen',
        'GET /about': 'Werdegang und Schwerpunkt, zusammengefasst',
        'GET /projects': 'Projekte auflisten',
        'GET /projects/:slug': 'ein Projekt im Detail',
        'GET /skills': 'Fähigkeiten nach Bereich',
        'GET /services': 'Fachbereiche',
        'POST /contact': 'Kontaktmöglichkeiten',
        whoami: 'Kurzvorstellung',
        open: 'eine Route öffnen — z. B. open /projects',
        clear: 'Bildschirm leeren',
      },
      whoami:
        'Erfan Mohammadi — Backend- und Datenbank-Entwickler. Software Engineer im Bereich Unternehmenssysteme.',
    },

    intro: {
      tag: 'Einführung',
      title: 'Tätigkeitsbereich',
      body:
        'Meine Arbeit liegt in Backend-Entwicklung, Datenbankdesign und -administration sowie im Bau individueller Softwaresysteme für Unternehmen. Der Fokus liegt auf solider Architektur, stabiler Leistung und wartbarem Code.',
      cta: 'Vollständiger Werdegang',
    },

    stats: { tag: 'Auf einen Blick', title: 'Beruflicher Überblick' },
    stack: { tag: 'Technologie', title: 'Technologien und Werkzeuge' },

    featured: {
      tag: 'Ausgewählte Projekte',
      title: 'Eine Auswahl bemerkenswerter Projekte.',
      all: 'Alle Projekte ansehen',
    },

    services: {
      tag: 'Fachbereiche',
      title: 'Leistungen und technische Fähigkeiten.',
    },

    about: {
      title: 'Über mich',
      subtitle: 'Softwareentwickler in Backend, Datenbanken und Unternehmenssystemen.',
      intro:
        'Softwareentwickler mit Schwerpunkt Backend-Entwicklung, Datenbankdesign und -administration sowie Auslieferung von Softwarelösungen.\n\nErfahren in serverseitigen Diensten, UI-Design, Optimierung und Verwaltung von Microsoft SQL Server sowie Deployment auf Docker. Baut außerdem datengetriebene Lösungen und intelligente Automatisierung für Geschäftsprozesse.\n\nInteressiert an Softwarearchitektur und Systemleistung, mit praktischer Erfahrung, Projekte von Anfang bis Auslieferung zu führen.',
      experienceTag: 'Berufserfahrung',
      educationTag: 'Ausbildung',
      coursesTag: 'Weiterbildung',
      timelineTag: 'Werdegang',
      timeline: [
        {
          time: 'Grundlage',
          title: 'Datenbank- & Desktop-Programmierung',
          body:
            'Beginn mit Desktop- und Datenbanksoftware im Unternehmensumfeld — SQL Server, Stored Procedures, Query-Optimierung und Reporting.',
        },
        {
          time: 'Erweiterung',
          title: 'Einstieg in Webentwicklung und API-Design',
          body:
            'Entwicklung mit Python und Django und Entwurf von REST-APIs mit Blick auf Vertrag, Sicherheit und Versionierung.',
        },
        {
          time: 'jetzt',
          title: 'Backend für datengetriebene Systeme und Datenbankadministration',
          body:
            'Fokus auf API- und Datenbankdesign für Unternehmenssysteme, BI und Reporting sowie die Einbindung intelligenter Lösungen in Prozesse.',
        },
      ],
      nowTag: '// jetzt',
      now:
        'Backend-Entwicklung für datengetriebene Unternehmenssysteme und Datenbankadministration, dazu individuelle Software für Unternehmen über Houshiva.',
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
        privateNote: 'Der Code dieses Projekts ist privat; weitere Details auf Anfrage.',
        overview: 'Überblick',
        whatIBuilt: 'Die Lösung',
        features: 'Funktionen',
        role: 'Rolle',
        view: 'Projekt ansehen',
        back: 'Zurück zu den Projekten',
      },
      emptyTitle: 'Keine Projekte gelistet',
      emptyBody: 'Demnächst.',
    },

    skills: {
      title: 'Fähigkeiten',
      subtitle: 'Technologien, Werkzeuge und Fachbereiche.',
      filterAll: 'Alle',
      emptyTitle: 'Demnächst',
      emptyBody: 'Die vollständige Liste folgt.',
      categories: {
        backend: { title: 'Backend-Entwicklung', description: 'API-Design, Geschäftslogik und serverseitige Services.' },
        database: { title: 'Datenbanken', description: 'Entwurf, Modellierung, Administration und Optimierung relationaler Datenbanken.' },
        bi: { title: 'BI & Reporting', description: 'Reporting und Datenanalyse mit Power BI, SSIS und Reporting-Tools.' },
        frontend: { title: 'Benutzeroberfläche', description: 'Dashboards und Oberflächen, die die APIs nutzen.' },
        ai: { title: 'KI & Automatisierung', description: 'Integration von KI-Diensten und Automatisierung von Prozessen.' },
        devops: { title: 'Deployment & Werkzeuge', description: 'Deployment auf Docker, Repository-Verwaltung mit Git und GitLab.' },
        engineering: { title: 'Software Engineering', description: 'Architektur, Clean Code, Performance-Tuning und Wartung.' },
      },
    },

    contact: {
      title: 'Kontakt',
      subtitle: 'Verfügbar für Projektzusammenarbeit, technische Beratung oder eine Stelle.',
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
        company: 'Studio',
      },
    },

    resume: {
      title: 'Lebenslauf',
      subtitle: 'Erfan Mohammadi — Backend- & Datenbank-Entwickler.',
      print: 'Drucken / als PDF speichern',
      sections: {
        summary: 'Zusammenfassung',
        experience: 'Berufserfahrung',
        education: 'Ausbildung',
        skills: 'Software-Kenntnisse',
        languages: 'Sprachen',
        courses: 'Weiterbildung',
        interests: 'Interessengebiete',
        contact: 'Kontakt',
      },
      hoursLabel: 'Std.',
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
