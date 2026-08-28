export const translations = {
  fa: {
    dir: 'rtl',

    nav: {
      home: 'خانه',
      about: 'درباره من',
      projects: 'نمونه‌کارها',
      skills: 'مهارت‌ها',
      tutorials: 'آموزش‌ها',
      contact: 'تماس',
    },

    hero: {
      eyebrow: 'در دسترس برای همکاری',
      name: 'عرفان محمدی',
      role: 'مهندس نرم‌افزار — بک‌اند و فول‌استک',
      tagline:
        'سیستم‌هایی می‌سازم که زیر بار واقعی سرپا می‌مانند و رابط‌هایی که حس کار جانبی نمی‌دهند. همین صفحه یک نمونه‌ی کوچک از هر دو است.',
      cta1: 'دیدن نمونه‌کارها',
      cta2: 'تماس با من',
    },

    map: {
      tag: 'نقشه‌ی سیستم',
      title: 'این سایت را مثل یک معماری بخوان.',
      hint: 'روی هر گره کلیک کن تا به آن بخش بروی — یا کنسول را باز کن و درخواست بزن.',
      openConsole: 'باز کردن کنسول API',
      nodes: {
        'client': 'کیست که درخواست می‌زند — درباره‌ی من',
        'api-gateway': 'ورودی همه‌ی کارها — نمونه‌کارها',
        'auth-service': 'گرفتن دسترسی — راه‌های تماس',
        'ticket-service': 'یک پروژه‌ی واقعی — سامانه‌ی تیکت',
        'ai-service': 'هوش مصنوعی و اتوماسیون — مهارت‌ها',
        'datastore': 'لایه‌ی داده — پایگاه داده',
      },
    },

    console: {
      title: 'کنسول API',
      subtitle: 'این پورتفولیو را مثل یک API صدا بزن.',
      hintPrefix: 'دستورها:',
      prompt: 'erfan.dev',
      placeholder: 'یک دستور بنویس و Enter بزن — مثلاً GET /projects',
      welcome: 'به کنسول خوش آمدی. «help» را بزن تا فهرست دستورها را ببینی.',
      close: 'بستن',
      toggleHint: 'Ctrl + K',
      helpTitle: 'دستورهای موجود',
      notFound: 'دستور پیدا نشد',
      tryHelp: '«help» را امتحان کن.',
      routing: 'در حال رفتن به',
      commands: {
        help: 'نمایش همین فهرست',
        'GET /about': 'خلاصه‌ی «درباره‌ی من»',
        'GET /projects': 'فهرست نمونه‌کارها',
        'GET /projects/:slug': 'جزئیات یک پروژه',
        'GET /skills': 'مهارت‌ها بر اساس حوزه',
        'POST /contact': 'راه‌های تماس',
        whoami: 'معرفی یک‌خطی',
        open: 'باز کردن یک مسیر — مثلاً open /projects',
        clear: 'پاک کردن صفحه',
      },
      whoami:
        'عرفان محمدی — مهندس نرم‌افزار. گرایش بک‌اند، توانمند در فول‌استک، بی‌علاقه به قالب‌های آماده.',
    },

    intro: {
      tag: 'معرفی',
      title: 'نگاهی کوتاه',
      body:
        'در طراحی و توسعه‌ی نرم‌افزارهای تحت وب، سامانه‌های اختصاصی و راهکارهای اتوماسیون کار می‌کنم. هدفم محصولی است که هم نیاز کسب‌وکار را پاسخ دهد و هم از نظر کیفیت فنی، کارایی و نگهداشت‌پذیری در سطح خوبی بماند.',
      cta: 'بیشتر درباره‌ی من',
    },

    stats: {
      tag: 'در یک نگاه',
      title: 'خلاصه‌ی وضعیت',
    },

    stack: {
      tag: 'فناوری‌ها',
      title: 'ابزارها و فناوری‌ها',
    },

    featured: {
      tag: 'منتخب کارها',
      title: 'چند پروژه که ارزش گفتن دارند.',
      all: 'دیدن همه‌ی نمونه‌کارها',
    },

    testimonials: {
      tag: 'همکاری‌ها',
      title: 'دیدگاه همکاران و مشتریان',
      emptyTitle: 'هنوز دیدگاهی ثبت نشده',
      emptyBody: 'بعد از تکمیل پروژه‌های بیشتر، بازخورد همکاران و مشتریان این‌جا منتشر می‌شود.',
    },

    about: {
      title: 'درباره‌ی من',
      subtitle: 'مسیر کوتاهی از دسکتاپ و پایگاه داده تا وب و هوش مصنوعی.',
      intro:
        'مهندس نرم‌افزارم و روی طراحی، توسعه و پیاده‌سازی سامانه‌های تحت وب، نرم‌افزارهای اختصاصی و اتوماسیون فرایندها کار می‌کنم.\n\nدر اجرای پروژه‌ها به معماری، کیفیت پیاده‌سازی، امنیت، مستندسازی و نگهداشت‌پذیری اهمیت می‌دهم تا محصول علاوه بر نیاز امروز، فردا هم قابل توسعه و پشتیبانی باشد.\n\nبه یادگیری مستمر، استفاده از فناوری‌های روز و به‌اشتراک‌گذاری دانش از راه آموزش و محتوای فنی علاقه دارم.',
      timelineTag: 'مسیر',
      timeline: [
        {
          time: 'شروع',
          title: 'دسکتاپ و برنامه‌نویسی پایگاه داده',
          body:
            'کار را با نرم‌افزارهای دسکتاپ و پایگاه داده شروع کردم؛ VB.NET، Windows Forms، گزارش‌سازی و T-SQL روی SQL Server. همان‌جا یاد گرفتم مدل داده‌ی درست، نصف کار است.',
        },
        {
          time: 'گذار',
          title: 'حرکت به سمت وب و بک‌اند',
          body:
            'از فرم‌های دسکتاپ رسیدم به API و وب. Python و Django و طراحی REST؛ و این نگاه که یک endpoint سریع اگر رابطش ضعیف باشد، ارزشی ندارد.',
        },
        {
          time: 'اکنون',
          title: 'فول‌استک، معماری و هوش مصنوعی',
          body:
            'حالا روی نرم‌افزارهای سازمانی، سامانه‌های داده‌محور و فول‌استک تمرکز دارم و سرویس‌های هوش مصنوعی را در جریان کار می‌آورم — با تأکید بر کد تمیز و معماری.',
        },
      ],
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
      subtitle: 'منتخبی از پروژه‌های اجراشده و در حال توسعه.',
      labels: {
        problem: 'مسئله',
        approach: 'راهکار',
        result: 'نتیجه',
        stack: 'فناوری‌ها',
        code: 'کد روی گیت‌هاب',
        demo: 'نسخه‌ی زنده',
      },
      emptyTitle: 'نمونه‌کاری ثبت نشده',
      emptyBody: 'به‌زودی.',
    },

    skills: {
      title: 'مهارت‌ها',
      subtitle: 'فناوری‌ها، ابزارها و حوزه‌های تخصصی.',
      filterAll: 'همه',
      emptyTitle: 'در حال تکمیل',
      emptyBody: 'فهرست کامل به‌زودی.',
      categories: {
        frontend: { title: 'توسعه‌ی فرانت‌اند', description: 'ساخت رابط‌های کاربری مدرن، واکنش‌گرا و بهینه.' },
        backend: { title: 'توسعه‌ی بک‌اند', description: 'پیاده‌سازی APIها، منطق کسب‌وکار و سرویس‌های سمت سرور.' },
        database: { title: 'پایگاه داده', description: 'طراحی، مدل‌سازی و بهینه‌سازی پایگاه‌های داده.' },
        ai: { title: 'هوش مصنوعی و اتوماسیون', description: 'یکپارچه‌سازی سرویس‌های هوش مصنوعی و خودکارسازی فرایندها.' },
        enterprise: { title: 'نرم‌افزار سازمانی', description: 'طراحی و توسعه‌ی سامانه‌های اختصاصی سازمانی.' },
        tools: { title: 'ابزارهای توسعه', description: 'ابزارها و محیط‌های کار در فرایند توسعه.' },
        engineering: { title: 'مهندسی نرم‌افزار', description: 'معماری، کد تمیز، تست و نگهداشت سیستم.' },
      },
    },

    tutorials: {
      title: 'آموزش‌ها',
      subtitle: 'یادداشت‌های فنی و تجربه‌های توسعه.',
      emptyTitle: 'در حال آماده‌سازی',
      emptyBody: 'مطالب آموزشی به‌زودی این‌جا منتشر می‌شوند.',
    },

    contact: {
      title: 'تماس',
      subtitle: 'برای همکاری، اجرای پروژه، مشاوره‌ی فنی یا فرصت شغلی، خوشحال می‌شوم بشنوم.',
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

    footer: {
      rights: 'ساخته‌شده از صفر، بدون قالب آماده.',
      built: 'React + Vite',
    },

    notFound: {
      code: '404',
      title: 'این مسیر تعریف نشده',
      body: 'ممکن است صفحه جابه‌جا شده باشد یا آدرس درست نباشد.',
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
      tutorials: 'Tutorials',
      contact: 'Contact',
    },

    hero: {
      eyebrow: 'Available for collaboration',
      name: 'Erfan Mohammadi',
      role: 'Software Engineer — Backend & Full Stack',
      tagline:
        "I build systems that stay up under real load, and interfaces that don't feel like an afterthought. This page is a small proof of both.",
      cta1: 'View projects',
      cta2: 'Get in touch',
    },

    map: {
      tag: 'system map',
      title: 'Read this site like an architecture.',
      hint: 'Click any node to jump to that section — or open the console and send a request.',
      openConsole: 'Open API console',
      nodes: {
        'client': "who's calling — about me",
        'api-gateway': 'entry point to the work — projects',
        'auth-service': 'get access — ways to reach me',
        'ticket-service': 'a real project — ticket system',
        'ai-service': 'AI & automation — skills',
        'datastore': 'the data layer — databases',
      },
    },

    console: {
      title: 'API console',
      subtitle: 'Call this portfolio like an API.',
      hintPrefix: 'Commands:',
      prompt: 'erfan.dev',
      placeholder: 'type a command and hit Enter — e.g. GET /projects',
      welcome: 'Welcome to the console. Type "help" for the command list.',
      close: 'Close',
      toggleHint: 'Ctrl + K',
      helpTitle: 'Available commands',
      notFound: 'command not found',
      tryHelp: 'try "help".',
      routing: 'routing to',
      commands: {
        help: 'show this list',
        'GET /about': 'the "about me" summary',
        'GET /projects': 'list the projects',
        'GET /projects/:slug': 'one project in detail',
        'GET /skills': 'skills by area',
        'POST /contact': 'ways to reach me',
        whoami: 'one-line intro',
        open: 'open a route — e.g. open /projects',
        clear: 'clear the screen',
      },
      whoami:
        'Erfan Mohammadi — software engineer. Backend-leaning, full-stack capable, allergic to templates.',
    },

    intro: {
      tag: 'Introduction',
      title: 'A brief introduction',
      body:
        'I design and build web applications, custom software, and automation solutions. The goal is always a product that answers the business need and still holds up on technical quality, performance, and maintainability.',
      cta: 'More about me',
    },

    stats: { tag: 'At a glance', title: 'The short version' },
    stack: { tag: 'Technology', title: 'Tools & technologies' },

    featured: {
      tag: 'Selected work',
      title: 'A few projects worth talking about.',
      all: 'See all projects',
    },

    testimonials: {
      tag: 'Collaboration',
      title: 'Client & colleague feedback',
      emptyTitle: 'No testimonials yet',
      emptyBody: 'Feedback from clients and collaborators will be published here as more projects wrap up.',
    },

    about: {
      title: 'About',
      subtitle: 'A short path from desktop and databases to the web and AI.',
      intro:
        'I am a software engineer working on the design and development of web applications, custom software, and process automation.\n\nAcross projects I care about architecture, implementation quality, security, documentation, and maintainability — so a product answers today’s need and can still be extended and supported tomorrow.\n\nI enjoy continuous learning, using current technology, and sharing knowledge through writing and teaching.',
      timelineTag: 'Path',
      timeline: [
        {
          time: 'start',
          title: 'Desktop & database programming',
          body:
            'I started with desktop applications and databases — VB.NET, Windows Forms, reporting, and T-SQL on SQL Server. That is where I learned a correct data model is half the work.',
        },
        {
          time: 'transition',
          title: 'Moving to the web and the backend',
          body:
            'From desktop forms to APIs and the web: Python, Django, REST design — and the view that a fast endpoint means little if the interface consuming it feels cheap.',
        },
        {
          time: 'now',
          title: 'Full stack, architecture, and AI',
          body:
            'Today I focus on enterprise software, data-driven systems, and full-stack work, bringing AI services into the workflow — with an emphasis on clean code and architecture.',
        },
      ],
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
      subtitle: 'A selection of completed and in-progress work.',
      labels: {
        problem: 'Problem',
        approach: 'Approach',
        result: 'Result',
        stack: 'Stack',
        code: 'Code on GitHub',
        demo: 'Live version',
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
        frontend: { title: 'Frontend Development', description: 'Building responsive, accessible, modern user interfaces.' },
        backend: { title: 'Backend Development', description: 'APIs, business logic, and server-side applications.' },
        database: { title: 'Database Systems', description: 'Designing, modeling, and optimizing relational databases.' },
        ai: { title: 'AI & Automation', description: 'Integrating AI services and automating workflows.' },
        enterprise: { title: 'Enterprise Software', description: 'Custom business applications and internal systems.' },
        tools: { title: 'Development Tools', description: 'Tools and environments used throughout development.' },
        engineering: { title: 'Software Engineering', description: 'Architecture, clean code, testing, and maintenance.' },
      },
    },

    tutorials: {
      title: 'Tutorials',
      subtitle: 'Technical notes and development insights.',
      emptyTitle: 'Content coming soon',
      emptyBody: 'Technical articles and tutorials will be published here soon.',
    },

    contact: {
      title: 'Contact',
      subtitle: 'For collaboration, a project, technical advice, or a role — I’d be glad to hear from you.',
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

    footer: {
      rights: 'Built from scratch, no template.',
      built: 'React + Vite',
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
      home: 'Startseite',
      about: 'Über mich',
      projects: 'Projekte',
      skills: 'Fähigkeiten',
      tutorials: 'Tutorials',
      contact: 'Kontakt',
    },

    hero: {
      eyebrow: 'Verfügbar für Zusammenarbeit',
      name: 'Erfan Mohammadi',
      role: 'Software Engineer — Backend & Full Stack',
      tagline:
        'Ich baue Systeme, die unter echter Last stabil bleiben, und Oberflächen, die nicht wie eine Nebensache wirken. Diese Seite ist ein kleiner Beleg für beides.',
      cta1: 'Projekte ansehen',
      cta2: 'Kontakt aufnehmen',
    },

    map: {
      tag: 'Systemkarte',
      title: 'Lies diese Seite wie eine Architektur.',
      hint: 'Klick auf einen Knoten, um zum Bereich zu springen — oder öffne die Konsole und sende eine Anfrage.',
      openConsole: 'API-Konsole öffnen',
      nodes: {
        'client': 'wer anfragt — über mich',
        'api-gateway': 'Einstieg in die Arbeit — Projekte',
        'auth-service': 'Zugang bekommen — Kontaktwege',
        'ticket-service': 'ein echtes Projekt — Ticket-System',
        'ai-service': 'KI & Automatisierung — Fähigkeiten',
        'datastore': 'die Datenebene — Datenbanken',
      },
    },

    console: {
      title: 'API-Konsole',
      subtitle: 'Ruf dieses Portfolio wie eine API auf.',
      hintPrefix: 'Befehle:',
      prompt: 'erfan.dev',
      placeholder: 'Befehl eingeben und Enter drücken — z. B. GET /projects',
      welcome: 'Willkommen in der Konsole. Tippe "help" für die Befehlsliste.',
      close: 'Schließen',
      toggleHint: 'Strg + K',
      helpTitle: 'Verfügbare Befehle',
      notFound: 'Befehl nicht gefunden',
      tryHelp: 'versuch "help".',
      routing: 'weiter zu',
      commands: {
        help: 'diese Liste anzeigen',
        'GET /about': 'die "Über mich"-Zusammenfassung',
        'GET /projects': 'Projekte auflisten',
        'GET /projects/:slug': 'ein Projekt im Detail',
        'GET /skills': 'Fähigkeiten nach Bereich',
        'POST /contact': 'Kontaktwege',
        whoami: 'Kurzvorstellung',
        open: 'eine Route öffnen — z. B. open /projects',
        clear: 'Bildschirm leeren',
      },
      whoami:
        'Erfan Mohammadi — Software Engineer. Backend-orientiert, full-stack-fähig, allergisch gegen Vorlagen.',
    },

    intro: {
      tag: 'Einführung',
      title: 'Kurz vorgestellt',
      body:
        'Ich entwerfe und entwickle Webanwendungen, individuelle Software und Automatisierungslösungen. Ziel ist immer ein Produkt, das den fachlichen Bedarf deckt und zugleich bei technischer Qualität, Leistung und Wartbarkeit besteht.',
      cta: 'Mehr über mich',
    },

    stats: { tag: 'Auf einen Blick', title: 'Die Kurzfassung' },
    stack: { tag: 'Technologie', title: 'Werkzeuge & Technologien' },

    featured: {
      tag: 'Ausgewählte Arbeiten',
      title: 'Ein paar Projekte, über die es sich zu reden lohnt.',
      all: 'Alle Projekte ansehen',
    },

    testimonials: {
      tag: 'Zusammenarbeit',
      title: 'Kunden- & Kollegenstimmen',
      emptyTitle: 'Noch keine Stimmen',
      emptyBody: 'Rückmeldungen von Kunden und Kollegen werden hier veröffentlicht, sobald weitere Projekte abgeschlossen sind.',
    },

    about: {
      title: 'Über mich',
      subtitle: 'Ein kurzer Weg von Desktop und Datenbanken hin zu Web und KI.',
      intro:
        'Ich bin Software Engineer und arbeite an der Konzeption und Entwicklung von Webanwendungen, individueller Software und Prozessautomatisierung.\n\nIn Projekten lege ich Wert auf Architektur, Umsetzungsqualität, Sicherheit, Dokumentation und Wartbarkeit — damit ein Produkt den heutigen Bedarf deckt und morgen noch erweiterbar und wartbar ist.\n\nKontinuierliches Lernen, aktuelle Technologien und das Teilen von Wissen durch Schreiben und Lehren sind Teil meiner Arbeit.',
      timelineTag: 'Weg',
      timeline: [
        {
          time: 'Start',
          title: 'Desktop- & Datenbankprogrammierung',
          body:
            'Begonnen habe ich mit Desktop-Anwendungen und Datenbanken — VB.NET, Windows Forms, Reporting und T-SQL auf SQL Server. Dort habe ich gelernt: ein korrektes Datenmodell ist die halbe Arbeit.',
        },
        {
          time: 'Übergang',
          title: 'Wechsel zu Web und Backend',
          body:
            'Von Desktop-Formularen zu APIs und Web: Python, Django, REST-Design — und die Sicht, dass ein schneller Endpunkt wenig wert ist, wenn die Oberfläche billig wirkt.',
        },
        {
          time: 'jetzt',
          title: 'Full Stack, Architektur und KI',
          body:
            'Heute konzentriere ich mich auf Unternehmenssoftware, datengetriebene Systeme und Full-Stack-Arbeit und bringe KI-Dienste in den Workflow — mit Fokus auf Clean Code und Architektur.',
        },
      ],
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
      subtitle: 'Eine Auswahl abgeschlossener und laufender Arbeiten.',
      labels: {
        problem: 'Problem',
        approach: 'Ansatz',
        result: 'Ergebnis',
        stack: 'Stack',
        code: 'Code auf GitHub',
        demo: 'Live-Version',
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
        frontend: { title: 'Frontend-Entwicklung', description: 'Moderne, responsive und zugängliche Oberflächen.' },
        backend: { title: 'Backend-Entwicklung', description: 'APIs, Geschäftslogik und serverseitige Anwendungen.' },
        database: { title: 'Datenbanksysteme', description: 'Entwurf, Modellierung und Optimierung relationaler Datenbanken.' },
        ai: { title: 'KI & Automatisierung', description: 'Integration von KI-Diensten und Automatisierung von Abläufen.' },
        enterprise: { title: 'Unternehmenssoftware', description: 'Individuelle Geschäftsanwendungen und interne Systeme.' },
        tools: { title: 'Entwicklungswerkzeuge', description: 'Werkzeuge und Umgebungen im gesamten Entwicklungsprozess.' },
        engineering: { title: 'Software Engineering', description: 'Architektur, Clean Code, Tests und Wartung.' },
      },
    },

    tutorials: {
      title: 'Tutorials',
      subtitle: 'Technische Notizen und Erfahrungen aus der Entwicklung.',
      emptyTitle: 'Inhalte folgen',
      emptyBody: 'Fachartikel und Tutorials werden hier bald veröffentlicht.',
    },

    contact: {
      title: 'Kontakt',
      subtitle: 'Für Zusammenarbeit, ein Projekt, technische Beratung oder eine Stelle — ich höre gern von Ihnen.',
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

    footer: {
      rights: 'Von Grund auf gebaut, ohne Vorlage.',
      built: 'React + Vite',
    },

    notFound: {
      code: '404',
      title: 'Diese Route ist nicht definiert',
      body: 'Die Seite wurde vielleicht verschoben oder die Adresse stimmt nicht ganz.',
      back: 'Zurück zur Startseite',
    },
  },
}

export const supportedLangs = ['fa', 'en', 'de']
export const defaultLang = 'fa'
