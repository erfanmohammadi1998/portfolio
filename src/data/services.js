// Areas of expertise, each backed by delivered work. Shown on the home page
// and returned by GET /services. Formal, concrete, no library lists.

export const services = [
  {
    key: 'api',
    title: { fa: 'توسعه‌ی بک‌اند و API', en: 'Backend & API development', de: 'Backend- & API-Entwicklung' },
    body: {
      fa: 'طراحی و توسعه‌ی APIهای REST با Django؛ احراز هویت، سطوح دسترسی، صفحه‌بندی، فیلتر و مستندسازی خودکار.',
      en: 'Designing and building REST APIs with Django: authentication, access levels, pagination, filtering, and generated docs.',
      de: 'Entwurf und Bau von REST-APIs mit Django: Authentifizierung, Zugriffsebenen, Pagination, Filter und generierte Doku.',
    },
  },
  {
    key: 'database',
    title: { fa: 'طراحی و مدیریت پایگاه داده', en: 'Database design & administration', de: 'Datenbankdesign & -administration' },
    body: {
      fa: 'طراحی مدل داده‌ی رابطه‌ای، مدیریت و بهینه‌سازی SQL Server، کوئری‌نویسی پیشرفته و کار با پایگاه‌داده‌های موجود.',
      en: 'Relational data modeling, SQL Server administration and tuning, advanced query work, and integrating with existing databases.',
      de: 'Relationale Datenmodellierung, SQL-Server-Administration und -Tuning, fortgeschrittene Query-Arbeit und Integration bestehender Datenbanken.',
    },
  },
  {
    key: 'systems',
    title: { fa: 'سامانه‌های مدیریتی اختصاصی', en: 'Custom management systems', de: 'Individuelle Managementsysteme' },
    body: {
      fa: 'توسعه‌ی سامانه‌های اختصاصی متناسب با فرایند کسب‌وکار: مدیریت، حسابداری، CRM، فروش و گردش‌کار.',
      en: 'Systems built around the business process: management, accounting, CRM, sales, and workflow.',
      de: 'Systeme, die um den Geschäftsprozess herum gebaut sind: Management, Buchhaltung, CRM, Vertrieb und Workflow.',
    },
  },
  {
    key: 'bi',
    title: { fa: 'هوش تجاری و گزارش‌سازی', en: 'BI & reporting', de: 'BI & Reporting' },
    body: {
      fa: 'داشبورد مدیریتی و گزارش‌های تحلیلی با Power BI و SSIS؛ استخراج و آماده‌سازی داده از منابع مختلف.',
      en: 'Management dashboards and analytical reports with Power BI and SSIS; extracting and preparing data from multiple sources.',
      de: 'Management-Dashboards und analytische Berichte mit Power BI und SSIS; Extraktion und Aufbereitung von Daten aus verschiedenen Quellen.',
    },
  },
  {
    key: 'integration',
    title: { fa: 'یکپارچه‌سازی و استقرار', en: 'Integration & deployment', de: 'Integration & Deployment' },
    body: {
      fa: 'اتصال سامانه‌ها به یکدیگر و به سرویس‌های بیرونی، و استقرار پروژه‌ها روی محیط‌های مبتنی بر Docker.',
      en: 'Connecting systems to each other and to external services, and deploying projects on Docker-based environments.',
      de: 'Systeme miteinander und mit externen Diensten verbinden und Projekte auf Docker-basierten Umgebungen bereitstellen.',
    },
  },
  {
    key: 'ai',
    title: { fa: 'اتوماسیون و راهکارهای هوشمند', en: 'Automation & intelligent solutions', de: 'Automatisierung & intelligente Lösungen' },
    body: {
      fa: 'خودکارسازی فرایندهای تکراری و ادغام سرویس‌های هوش مصنوعی در جریان کار، جایی که ارزش عملی دارد.',
      en: 'Automating repetitive processes and bringing AI services into the workflow where they deliver practical value.',
      de: 'Automatisierung wiederkehrender Prozesse und Einbindung von KI-Diensten in den Workflow, wo sie praktischen Nutzen bringen.',
    },
  },
]
