// "What I do" cards on the home page. Written plainly, each one backed by
// work that is on the portfolio or in the CV.

export const services = [
  {
    key: 'backend',
    icon: 'server',
    size: 'wide',
    title: { fa: 'بک‌اند با پایتون و جنگو', en: 'Backend with Python & Django', de: 'Backend mit Python & Django' },
    body: {
      fa: 'API می‌نویسم که تیم فرانت از کار با آن لذت ببرد: احراز هویت، نقش‌ها و دسترسی‌ها، کارهای پس‌زمینه با Celery و مستندات خودکار. منطق کسب‌وکار را جایی می‌گذارم که بعداً هم پیدایش کنید.',
      en: 'APIs a frontend team actually enjoys using: auth, roles and permissions, background jobs with Celery and generated docs. I put the business logic where you can still find it a year later.',
      de: 'APIs, mit denen ein Frontend-Team gern arbeitet: Authentifizierung, Rollen und Rechte, Hintergrundjobs mit Celery und generierte Doku. Die Geschäftslogik liegt da, wo man sie auch in einem Jahr noch findet.',
    },
    tags: ['Django', 'DRF', 'Celery', 'JWT'],
  },
  {
    key: 'database',
    icon: 'database',
    size: 'tall',
    title: { fa: 'طراحی و تیونینگ دیتابیس', en: 'Database design & tuning', de: 'Datenbankdesign & Tuning' },
    body: {
      fa: 'مدل داده‌ای که با رشد کار نشکند. کوئری کند را از روی Execution Plan پیدا می‌کنم، ایندکس درست می‌گذارم و گزارشی را که چند دقیقه طول می‌کشید به چند ثانیه می‌رسانم.',
      en: 'Data models that don’t break as the business grows. I find slow queries from the execution plan, fix the indexes and get the report that took minutes down to seconds.',
      de: 'Datenmodelle, die beim Wachstum nicht brechen. Langsame Abfragen finde ich über den Execution Plan, setze die richtigen Indizes und bringe Berichte von Minuten auf Sekunden.',
    },
    tags: ['SQL Server', 'T-SQL', 'PostgreSQL'],
  },
  {
    key: 'erp',
    icon: 'layers',
    title: { fa: 'سامانه‌های سازمانی', en: 'Business systems', de: 'Unternehmenssysteme' },
    body: {
      fa: 'انبار، فروش، حسابداری، منابع انسانی و کنترل کیفیت؛ سامانه‌ای که دقیقاً با روال کار همان شرکت جور باشد.',
      en: 'Inventory, sales, accounting, HR, quality control. Software shaped around how that company really works.',
      de: 'Lager, Vertrieb, Buchhaltung, Personal, Qualität. Software, die zu den echten Abläufen der Firma passt.',
    },
    tags: ['ERP', 'Workflow'],
  },
  {
    key: 'bi',
    icon: 'chart',
    title: { fa: 'گزارش و داشبورد', en: 'Reports & dashboards', de: 'Berichte & Dashboards' },
    body: {
      fa: 'داده‌ی پراکنده را با SSIS یک‌جا جمع می‌کنم و با Power BI، Crystal یا Stimulsoft گزارشی می‌سازم که مدیر واقعاً بخواندش.',
      en: 'I pull scattered data together with SSIS and build reports in Power BI, Crystal or Stimulsoft that managers actually read.',
      de: 'Verstreute Daten führe ich mit SSIS zusammen und baue Berichte in Power BI, Crystal oder Stimulsoft, die das Management wirklich liest.',
    },
    tags: ['Power BI', 'SSIS', 'Crystal'],
  },
  {
    key: 'web',
    icon: 'browser',
    title: { fa: 'وب‌اپ و سایت', en: 'Web apps & sites', de: 'Web-Apps & Websites' },
    body: {
      fa: 'پنل مدیریت، فروشگاه، PWA و سایت شرکتی با React؛ سریع، ریسپانسیو و راست‌چین درست.',
      en: 'Admin panels, shops, PWAs and company sites in React. Fast, responsive and properly right-to-left when needed.',
      de: 'Admin-Panels, Shops, PWAs und Firmenseiten mit React. Schnell, responsive und bei Bedarf sauber von rechts nach links.',
    },
    tags: ['React', 'PWA'],
  },
  {
    key: 'ai',
    icon: 'spark',
    size: 'wide',
    title: { fa: 'اتوماسیون و هوش مصنوعی', en: 'Automation & AI', de: 'Automatisierung & KI' },
    body: {
      fa: 'از ابزار پایتونی خط تولید تا تشخیص دیوار در عکس با بینایی ماشین. جایی که کار تکراری است یا تصمیم به داده نیاز دارد، ماشین را به کار می‌گیرم.',
      en: 'From Python tools on a production line to finding walls in a photo with computer vision. Wherever work is repetitive or a decision needs data, I put a machine on it.',
      de: 'Von Python-Tools an der Fertigungslinie bis zur Wanderkennung im Foto per Computer Vision. Wo Arbeit sich wiederholt oder Entscheidungen Daten brauchen, setze ich die Maschine ein.',
    },
    tags: ['Python', 'OpenCV', 'PyTorch', 'LLMs'],
  },
]

export const process = [
  {
    title: { fa: 'گوش می‌دهم', en: 'Listen', de: 'Zuhören' },
    body: {
      fa: 'اول با کسی که هر روز با سیستم کار می‌کند حرف می‌زنم، نه فقط با مدیر.',
      en: 'First I talk to the people who will use it every day, not only to the manager.',
      de: 'Zuerst spreche ich mit denen, die es täglich nutzen, nicht nur mit der Leitung.',
    },
  },
  {
    title: { fa: 'داده را مدل می‌کنم', en: 'Model the data', de: 'Daten modellieren' },
    body: {
      fa: 'قبل از هر خط کد، جدول‌ها و رابطه‌ها را می‌کشم. بیشتر مشکلات بعدی همین‌جا حل می‌شوند.',
      en: 'Before any code I draw the tables and relations. Most later problems get solved right here.',
      de: 'Vor dem ersten Code zeichne ich Tabellen und Beziehungen. Die meisten späteren Probleme lösen sich genau hier.',
    },
  },
  {
    title: { fa: 'می‌سازم و تست می‌کنم', en: 'Build & test', de: 'Bauen & testen' },
    body: {
      fa: 'در قدم‌های کوچک تحویل می‌دهم تا زود ببینید و زود نظر بدهید.',
      en: 'I ship in small steps so you see it early and can push back early.',
      de: 'Ich liefere in kleinen Schritten, damit Sie früh sehen und früh eingreifen können.',
    },
  },
  {
    title: { fa: 'کنارش می‌مانم', en: 'Stay with it', de: 'Dranbleiben' },
    body: {
      fa: 'بعد از تحویل هم پشتیبانی، پایش و بهبود ادامه دارد.',
      en: 'After launch I keep supporting, monitoring and improving it.',
      de: 'Nach dem Start betreue, überwache und verbessere ich weiter.',
    },
  },
]
