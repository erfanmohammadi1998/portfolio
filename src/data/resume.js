// CV data, in the person's own words where possible. Rendered on /:lang/resume
// as a print-friendly page. German falls back to the English content.

export const resume = {
  summary: {
    fa: 'توسعه‌دهنده نرم‌افزار با تمرکز بر توسعه بک‌اند، طراحی و مدیریت پایگاه‌های داده و پیاده‌سازی راهکارهای نرم‌افزاری. تجربه در توسعه سرویس‌های سمت سرور، طراحی رابط کاربری، بهینه‌سازی و مدیریت SQL Server، و استقرار پروژه‌ها روی Docker. کار روی راهکارهای مبتنی بر تحلیل داده و مدل‌های هوشمند برای حل مسئله. علاقه‌مند به معماری نرم‌افزار و بهینه‌سازی عملکرد سیستم‌ها، با تجربه‌ی طراحی صفر تا صد پروژه‌های مختلف.',
    en: 'Software developer focused on backend development, database design and administration, and delivering software solutions. Experienced in server-side services, UI design, optimizing and managing Microsoft SQL Server, and deploying projects on Docker. Works on data-driven solutions and intelligent automation. Interested in software architecture and system performance, with hands-on experience taking projects from zero to done.',
  },

  experience: [
    {
      role: { fa: 'بنیان‌گذار و توسعه‌دهنده', en: 'Founder & Developer' },
      company: { fa: 'هوشیوا', en: 'Houshiva' },
      period: { fa: 'اکنون', en: 'Present' },
      bullets: [
        { fa: 'اجرای پروژه‌های نرم‌افزاری اختصاصی برای کسب‌وکارها: سامانه‌های مدیریتی، فروشگاه آنلاین، CRM و اتوماسیون.', en: 'Delivering custom software for businesses: management systems, e-commerce, CRM, and automation.' },
        { fa: 'ارتباط مستقیم با کارفرما، طراحی راهکار متناسب با فرایند کسب‌وکار و پشتیبانی بلندمدت.', en: 'Direct client contact, solutions shaped around each business process, and long-term support.' },
      ],
    },
    {
      role: { fa: 'توسعه‌دهنده نرم‌افزار و کارشناس پایگاه داده', en: 'Software Developer & Database Specialist' },
      company: { fa: 'رنگ و رزین الوان', en: 'Alvan Paint & Resin' },
      period: { fa: 'مرداد ۱۴۰۱ — اکنون', en: 'Jul 2022 — Present' },
      bullets: [
        { fa: 'توسعه‌ی سامانه‌های داخلی سازمانی: بک‌اند، پایگاه داده و رابط کاربری.', en: 'Building internal enterprise systems end to end: backend, database, and UI.' },
        { fa: 'طراحی، مدیریت و بهینه‌سازی پایگاه‌های داده‌ی SQL Server و کوئری‌نویسی پیشرفته.', en: 'Designing, administering, and tuning SQL Server databases; advanced query work.' },
        { fa: 'گزارش‌سازی و هوش تجاری با Power BI، SSIS و ابزارهای گزارش (Crystal, Stimulsoft).', en: 'Reporting and BI with Power BI, SSIS, and reporting tools (Crystal, Stimulsoft).' },
        { fa: 'استقرار و یکپارچه‌سازی پروژه‌ها روی Docker و GitLab.', en: 'Deploying and integrating projects on Docker and GitLab.' },
        { fa: 'راهکارهای مبتنی بر تحلیل داده و اتوماسیون هوشمند برای فرایندهای کسب‌وکار.', en: 'Data-analysis and intelligent-automation solutions for business processes.' },
      ],
    },
  ],

  education: [
    {
      degree: { fa: 'کارشناسی مهندسی کامپیوتر — نرم‌افزار', en: 'B.Sc. Computer / Software Engineering' },
      school: { fa: 'دانشگاه علمی کاربردی، واحد ۳۳', en: 'University of Applied Science, Unit 33' },
      period: { fa: '۱۴۰۴ — ۱۴۰۵', en: '2025 — 2026' },
    },
    {
      degree: { fa: 'کاردانی نرم‌افزار کامپیوتر', en: 'Associate Degree, Computer Software' },
      school: { fa: 'آموزشکده فنی امام صادق (ع)', en: 'Imam Sadegh Technical College' },
      period: { fa: '۱۳۹۴ — ۱۳۹۶', en: '2015 — 2017' },
    },
  ],

  skillGroups: [
    {
      level: { fa: 'پیشرفته', en: 'Advanced' },
      items: ['SQL Server', 'T-SQL', 'MySQL', 'PostgreSQL', 'Python', 'Django', 'Git', 'Crystal Reports'],
    },
    {
      level: { fa: 'متوسط', en: 'Intermediate' },
      items: ['REST API', 'React', 'Power BI', 'SSIS', 'Stimulsoft Reports', 'Docker', 'GitLab', 'JavaScript', 'HTML & CSS', 'Excel', 'Access', 'VBScript'],
    },
    {
      level: { fa: 'مقدماتی', en: 'Beginner' },
      items: ['TypeScript', 'OpenCV', 'Selenium'],
    },
  ],

  languages: [{ name: { fa: 'انگلیسی', en: 'English' }, level: { fa: 'پیشرفته', en: 'Advanced' } }],

  courses: [
    { title: 'Performance & Tuning in SQL Server', provider: 'Nikamooz', hours: 75, year: 2021 },
    { title: 'Business Intelligence', provider: 'Nikamooz', hours: 90, year: 2020 },
    { title: 'Advanced Query — Window Functions & Columnstore', provider: 'Nikamooz', hours: 30, year: 2020 },
    { title: 'Query Writing in SQL Server', provider: 'Nikamooz', hours: 45, year: 2020 },
    { title: 'Python Programming', provider: 'Tehran Technical Complex', hours: 60, year: 2021 },
    { title: 'Advanced Python', provider: 'Nikamooz', hours: 30, year: 2021 },
    { title: 'Power BI Desktop', provider: 'Nikamooz', hours: 30, year: 2021 },
    { title: 'Data Analysis', provider: 'MFT', hours: 30, year: 2023 },
  ],

  interests: {
    fa: ['توسعه‌ی نرم‌افزار و برنامه‌نویسی', 'علوم داده و هوش مصنوعی', 'طراحی رابط و تجربه‌ی کاربری'],
    en: ['Software development', 'Data science & AI', 'UI / UX design'],
  },
}
