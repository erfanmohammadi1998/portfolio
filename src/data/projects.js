// Projects, public and private. Private repos have no `code` link and carry
// `private: true`. `arch` drives the generated cover diagram. Each project has
// its own detail page at /:lang/projects/<slug> and feeds the API console.
//
// Writing guide: say what the product does and what changed for the user.
// No internal table names, no scraping targets, no library-list soup.

export const projects = [
  {
    slug: 'language-school-platform',
    service: 'ticket-service',
    private: true,
    featured: true,
    cover: '/shots/language-school-platform/02-admin-dashboard.png',
    gallery: [
      '/shots/language-school-platform/01-login.png',
      '/shots/language-school-platform/02-admin-dashboard.png',
      '/shots/language-school-platform/03-question-bank.png',
      '/shots/language-school-platform/04-student-dashboard.png',
      '/shots/language-school-platform/05-certificate.png',
      '/shots/language-school-platform/06-mobile.png',
    ],
    arch: ['client', 'API', 'tenants', 'database'],
    title: {
      fa: 'پلتفرم مدیریت آموزشگاه زبان',
      en: 'Language School Platform',
      de: 'Sprachschul-Plattform',
    },
    tagline: {
      fa: 'سامانه‌ی یکپارچه‌ی مدیریت آموزشگاه زبان؛ شامل ثبت‌نام، کلاس، آزمون، پرداخت، صدور گواهی و گزارش مالی.',
      en: 'An integrated management system for a language academy: enrollment, classes, exams, payments, certificates, and financial reporting.',
      de: 'Ein integriertes Managementsystem für eine Sprachakademie: Anmeldung, Kurse, Prüfungen, Zahlungen, Zertifikate und Finanzberichte.',
    },
    overview: {
      fa: 'یک پلتفرم وب که کل عملیات یک آموزشگاه زبان را در یک سامانه جمع می‌کند: پذیرش دانشجو، برنامه‌ی کلاس‌ها، آزمون آنلاین، پرداخت، کتابخانه‌ی ویدیو، صدور گواهی و گزارش مالی. همین کد می‌تواند برای یک آموزشگاه به‌صورت نصب مستقل اجرا شود، یا روی یک سرور چند آموزشگاه مستقل را با داده و برند جدا سرویس بدهد.',
      en: 'A web platform that puts the whole operation of a language academy into one system: admissions, class scheduling, online exams, payments, a video library, certificate issuing, and financial reporting. The same codebase can run as a standalone install for one academy, or serve several independent academies with separate data and branding on one server.',
      de: 'Eine Web-Plattform, die den gesamten Betrieb einer Sprachakademie in ein System bringt: Zulassung, Kursplanung, Online-Prüfungen, Zahlungen, eine Videobibliothek, Zertifikatsausstellung und Finanzberichte. Dieselbe Codebasis läuft als Einzelinstallation für eine Akademie oder bedient mehrere unabhängige Akademien mit getrennten Daten und Branding auf einem Server.',
    },
    problem: {
      fa: 'یک آموزشگاه معمولاً ثبت‌نام را در یک نرم‌افزار، حساب‌داری را در نرم‌افزار دیگر و آزمون‌ها را دستی مدیریت می‌کند. داده‌ها تکراری و ناهماهنگ می‌شوند، گزارش مالی دقیق سخت است، و راه‌اندازی برای یک مشتری جدید یعنی از نو ساختن همه‌چیز.',
      en: 'An academy typically runs enrollment in one tool, accounting in another, and exams by hand. Data gets duplicated and drifts out of sync, accurate financial reporting is hard, and onboarding a new client means rebuilding everything.',
      de: 'Eine Akademie führt Anmeldung meist in einem Tool, Buchhaltung in einem anderen und Prüfungen von Hand. Daten werden dupliziert und laufen auseinander, genaue Finanzberichte sind schwierig, und ein neuer Kunde bedeutet, alles neu aufzubauen.',
    },
    build: [
      {
        fa: 'هسته‌ی سامانه یک مدل «آموزشگاه» است که هر رکورد دیگر — کاربر، دوره، جلسه، پرداخت — به آن گره خورده. کاربر هر آموزشگاه فقط داده‌ی خودش را می‌بیند و ادمین آموزشگاه برند، رنگ، لوگو و سرویس پیامک/ایمیل/درگاه خودش را تنظیم می‌کند.',
        en: 'At the core is an "academy" model that every other record — user, course, session, payment — hangs off. Each academy’s users see only their own data, and its admin configures branding, colors, logo, and its own SMS / email / payment-gateway keys.',
        de: 'Im Kern steht ein „Akademie“-Modell, an dem jeder weitere Datensatz — Nutzer, Kurs, Sitzung, Zahlung — hängt. Die Nutzer jeder Akademie sehen nur ihre eigenen Daten, und ihr Admin konfiguriert Branding, Farben, Logo und eigene SMS-/E-Mail-/Gateway-Schlüssel.',
      },
      {
        fa: 'در اولین اجرا به‌جای یک دیتابیس از پیش پر شده، یک ویزارد راه‌اندازی باز می‌شود و مشتری خودش آموزشگاه و حساب مدیر اول را می‌سازد.',
        en: 'On first run, instead of a pre-seeded database, a setup wizard opens and the client creates their academy and first admin account themselves.',
        de: 'Beim Erststart öffnet sich statt einer vorbefüllten Datenbank ein Setup-Assistent, und der Kunde legt Akademie und erstes Admin-Konto selbst an.',
      },
      {
        fa: 'آزمون آنلاین یک بانک سؤال دارد؛ سؤال‌های چندگزینه‌ای خودکار تصحیح می‌شوند و سؤال‌های تشریحی به استاد ارجاع می‌شوند. آزمون تعیین سطح هم بر همین پایه کار می‌کند.',
        en: 'Online exams draw from a question bank; multiple-choice answers are graded automatically and written answers go to the teacher. The placement test runs on the same machinery.',
        de: 'Online-Prüfungen greifen auf einen Fragenpool zu; Multiple-Choice wird automatisch bewertet, Freitext geht an die Lehrkraft. Der Einstufungstest nutzt dieselbe Mechanik.',
      },
      {
        fa: 'گواهی پایان دوره به‌صورت PDF با برند آموزشگاه تولید می‌شود، یک QR کد و صفحه‌ی تأیید عمومی دارد، و متن فارسی در آن به‌درستی حروف‌چینی و راست‌به‌چپ می‌شود.',
        en: 'Course certificates are generated as branded PDFs with a QR code and a public verification page, with Persian text correctly shaped and laid out right-to-left.',
        de: 'Kurszertifikate werden als gebrandete PDFs mit QR-Code und öffentlicher Prüfseite erzeugt, mit korrekt gesetztem, rechtsläufigem persischem Text.',
      },
      {
        fa: 'بخش گزارش، درآمد ماهانه، مطالبات معوق و حقوق اساتید را محاسبه می‌کند و خروجی اکسل می‌دهد.',
        en: 'The reporting section computes monthly revenue, outstanding receivables, and teacher payroll, and exports to Excel.',
        de: 'Der Berichtsbereich berechnet Monatsumsatz, offene Forderungen und Lehrergehälter und exportiert nach Excel.',
      },
    ],
    features: [
      { fa: 'چند-آموزشگاهی با داده‌ی کاملاً ایزوله', en: 'Multi-tenant with fully isolated data', de: 'Mandantenfähig mit vollständig isolierten Daten' },
      { fa: 'ویزارد راه‌اندازی اولیه', en: 'First-run setup wizard', de: 'Setup-Assistent beim Erststart' },
      { fa: 'کلاس‌بندی و برنامه‌ی هفتگی خودکار', en: 'Class scheduling with an auto weekly timetable', de: 'Kurseinteilung mit automatischem Wochenplan' },
      { fa: 'حضور و غیاب', en: 'Attendance tracking', de: 'Anwesenheitserfassung' },
      { fa: 'پرداخت: نقدی، کارت‌خوان، درگاه', en: 'Payments: cash, card reader, gateway', de: 'Zahlungen: bar, Kartenleser, Gateway' },
      { fa: 'آزمون آنلاین و تعیین سطح', en: 'Online exams and placement test', de: 'Online-Prüfungen und Einstufungstest' },
      { fa: 'کتابخانه‌ی ویدیو با پلن اشتراک', en: 'Video library with subscription plans', de: 'Videobibliothek mit Abo-Plänen' },
      { fa: 'گواهی PDF با QR و تأیید عمومی', en: 'PDF certificates with QR and public verification', de: 'PDF-Zertifikate mit QR und öffentlicher Prüfung' },
      { fa: 'گزارش مالی با خروجی اکسل', en: 'Financial reports with Excel export', de: 'Finanzberichte mit Excel-Export' },
      { fa: 'پیامک/ایمیل قابل تنظیم برای هر آموزشگاه', en: 'Per-academy SMS / email configuration', de: 'SMS-/E-Mail-Konfiguration je Akademie' },
    ],
    result: {
      fa: 'یک کدبیس واحد که کل چرخه‌ی عملیاتی و مالی آموزشگاه را پوشش می‌دهد. با یک حساب اپراتور پلتفرم می‌توان آموزشگاه جدید ساخت و وضعیت اشتراک آن را مدیریت کرد، بدون تغییر کد.',
      en: 'One codebase covering the academy’s whole operational and financial cycle. A platform-operator account can create a new academy and manage its subscription state with no code change.',
      de: 'Eine Codebasis, die den gesamten operativen und finanziellen Zyklus der Akademie abdeckt. Ein Plattformbetreiber-Konto kann eine neue Akademie anlegen und deren Abo-Status ohne Codeänderung verwalten.',
    },
    role: {
      fa: 'طراحی و پیاده‌سازی کامل بک‌اند و فرانت‌اند.',
      en: 'Full design and implementation of both backend and frontend.',
      de: 'Vollständige Konzeption und Umsetzung von Backend und Frontend.',
    },
    stack: ['Django', 'Django REST Framework', 'JWT', 'ReportLab', 'openpyxl', 'React', 'Chart.js', 'moment-jalaali'],
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
    overview: {
      fa: 'یک سامانه‌ی وب برای مدیریت دارایی‌های ثابت یک سازمان که علاوه بر اطلاعات پایه، برای هر دارایی یک برآورد از قیمت روز بازار هم نگه می‌دارد تا ارزش دفتری با ارزش واقعی قابل مقایسه باشد.',
      en: 'A web system for managing an organization’s fixed assets that, on top of the basic records, keeps a current market-price estimate for each asset so book value can be compared with real value.',
      de: 'Ein Web-System zur Verwaltung des Anlagevermögens einer Organisation, das zusätzlich zu den Stammdaten für jede Anlage eine aktuelle Marktpreis-Schätzung führt, damit sich Buchwert und realer Wert vergleichen lassen.',
    },
    problem: {
      fa: 'اطلاعات دارایی‌ها سال‌ها در یک پایگاه‌داده‌ی قدیمی جمع شده بود اما هیچ رابط کاربری نداشت و فقط از طریق ابزارهای پایگاه‌داده قابل دسترسی بود. از طرف دیگر، ارزش ثبت‌شده‌ی خیلی از دارایی‌ها با قیمت امروز بازار فاصله‌ی زیادی داشت و به‌روزرسانی دستی آن عملی نبود.',
      en: 'Asset data had accumulated for years in a legacy database with no interface, reachable only through database tools. Meanwhile the recorded value of many assets had drifted far from today’s market price, and updating it by hand was not practical.',
      de: 'Die Anlagendaten hatten sich über Jahre in einer Altdatenbank ohne Oberfläche angesammelt, erreichbar nur über Datenbank-Tools. Zugleich hatte sich der erfasste Wert vieler Anlagen weit vom heutigen Marktpreis entfernt, und eine manuelle Aktualisierung war nicht praktikabel.',
    },
    build: [
      {
        fa: 'یک لایه‌ی API و وب روی همان پایگاه‌داده‌ی موجود ساختم — بدون مهاجرت داده و بدون تغییر ساختار جدول‌های قدیمی — تا دارایی‌ها، محل‌ها و وضعیت‌ها از طریق مرورگر قابل جست‌وجو و فیلتر باشند.',
        en: 'I built an API and web layer over the existing database — no data migration, no change to the legacy table structure — so assets, locations, and statuses could be searched and filtered from a browser.',
        de: 'Ich habe eine API- und Web-Schicht über die bestehende Datenbank gebaut — ohne Datenmigration, ohne Änderung der Alt-Tabellenstruktur —, damit Anlagen, Standorte und Status im Browser durchsuchbar und filterbar sind.',
      },
      {
        fa: 'برای ارزش‌گذاری، یک سرویس اضافه کردم که از مشخصات هر دارایی یک عبارت جست‌وجو می‌سازد، بازار را بررسی می‌کند و نزدیک‌ترین نتیجه را با قیمت و منبع ذخیره می‌کند. این کار با یک سقف روزانه انجام می‌شود تا فشار زیادی به منبع بیرونی نیاید.',
        en: 'For valuation I added a service that builds a search query from each asset’s attributes, checks the market, and stores the closest result with its price and source. It runs under a daily cap so it never leans too hard on the outside source.',
        de: 'Für die Bewertung habe ich einen Dienst ergänzt, der aus den Attributen jeder Anlage eine Suchanfrage baut, den Markt prüft und das nächstliegende Ergebnis mit Preis und Quelle speichert. Er läuft unter einem Tageslimit, um die externe Quelle nicht zu überlasten.',
      },
      {
        fa: 'داشبورد با نمودار، ترکیب وضعیت دارایی‌ها و اختلاف ارزش دفتری و بازار را نشان می‌دهد.',
        en: 'A dashboard with charts shows the mix of asset statuses and the gap between book and market value.',
        de: 'Ein Dashboard mit Diagrammen zeigt die Verteilung der Anlagenstatus und die Lücke zwischen Buch- und Marktwert.',
      },
    ],
    features: [
      { fa: 'مرور و جست‌وجوی دارایی‌ها، محل‌ها و وضعیت‌ها', en: 'Browse and search assets, locations, and statuses', de: 'Anlagen, Standorte und Status durchsuchen' },
      { fa: 'فیلتر بر اساس وضعیت مجاز', en: 'Filter by permitted status', de: 'Filter nach zulässigem Status' },
      { fa: 'برآورد قیمت روز بازار برای هر دارایی', en: 'Current market-price estimate per asset', de: 'Aktuelle Marktpreis-Schätzung je Anlage' },
      { fa: 'به‌روزرسانی زمان‌بندی‌شده با سقف روزانه', en: 'Scheduled updates under a daily cap', de: 'Geplante Aktualisierung unter Tageslimit' },
      { fa: 'داشبورد و نمودار', en: 'Dashboard and charts', de: 'Dashboard und Diagramme' },
      { fa: 'کار روی پایگاه‌داده‌ی موجود بدون تغییر ساختار', en: 'Runs on the existing database with no structural change', de: 'Läuft auf der bestehenden Datenbank ohne Strukturänderung' },
    ],
    result: {
      fa: 'دارایی‌ها از یک داشبورد وب قابل مدیریت شدند و هر کدام کنار ارزش دفتری یک برآورد به‌روز از ارزش بازار دارند.',
      en: 'Assets became manageable from a web dashboard, each carrying a current market-value estimate next to book value.',
      de: 'Anlagen wurden über ein Web-Dashboard verwaltbar und tragen je eine aktuelle Marktwert-Schätzung neben dem Buchwert.',
    },
    role: {
      fa: 'طراحی و پیاده‌سازی بک‌اند و سرویس ارزش‌گذاری؛ همکاری در فرانت‌اند.',
      en: 'Design and implementation of the backend and the valuation service; contributed to the frontend.',
      de: 'Konzeption und Umsetzung von Backend und Bewertungsdienst; Mitarbeit am Frontend.',
    },
    stack: ['Django', 'REST API', 'SQL Server', 'React', 'Recharts'],
    links: {},
  },
  {
    slug: 'management-dashboard',
    service: 'datastore',
    private: true,
    featured: true,
    arch: ['sources', 'ETL', 'warehouse', 'dashboard'],
    title: {
      fa: 'داشبورد مدیریتی و تحلیل عملکرد سازمان',
      en: 'Enterprise Management Dashboard & Analytics',
      de: 'Management-Dashboard & Analytics',
    },
    tagline: {
      fa: 'داشبورد مدیریتی برای پایش شاخص‌های کلیدی سازمان، با گردآوری و آماده‌سازی داده از چند منبع.',
      en: 'A management dashboard for tracking the organization’s key metrics, with data gathered and prepared from several sources.',
      de: 'Ein Management-Dashboard zur Verfolgung der wichtigsten Kennzahlen, mit Daten aus mehreren Quellen.',
    },
    overview: {
      fa: 'یک داشبورد مدیریتی که شاخص‌های کلیدی واحدهای مختلف سازمان را در یک نما گرد می‌آورد. داده از سامانه‌های داخلی و پایگاه‌های داده‌ی مختلف استخراج، پاک‌سازی و در یک انبار داده‌ی مشترک آماده می‌شود تا گزارش‌ها همیشه از یک منبع واحد بیایند.',
      en: 'A management dashboard that brings the key metrics of different business units into one view. Data is extracted from internal systems and databases, cleaned, and prepared in a shared data store so every report draws from one source.',
      de: 'Ein Management-Dashboard, das die Kennzahlen verschiedener Geschäftsbereiche in einer Ansicht zusammenführt. Daten werden aus internen Systemen und Datenbanken extrahiert, bereinigt und in einem gemeinsamen Datenspeicher aufbereitet.',
    },
    problem: {
      fa: 'گزارش‌های مدیریتی از منابع پراکنده و با تعریف‌های متفاوت تهیه می‌شد. مقایسه‌ی اعداد بین واحدها و اطمینان از درستی آن‌ها زمان‌بر بود.',
      en: 'Management reports were produced from scattered sources with inconsistent definitions. Comparing numbers across units and trusting them took a lot of time.',
      de: 'Management-Berichte entstanden aus verstreuten Quellen mit uneinheitlichen Definitionen. Zahlen über Bereiche hinweg zu vergleichen und ihnen zu vertrauen kostete viel Zeit.',
    },
    build: [
      {
        fa: 'فرایندهای استخراج و انتقال داده (ETL) با SSIS طراحی شد تا داده‌ی سامانه‌های مبدأ به‌صورت زمان‌بندی‌شده در یک انبار داده جمع شود.',
        en: 'ETL processes were built with SSIS so data from the source systems lands in a data warehouse on a schedule.',
        de: 'ETL-Prozesse wurden mit SSIS gebaut, sodass Daten aus den Quellsystemen geplant in ein Data Warehouse gelangen.',
      },
      {
        fa: 'تعریف هر شاخص یک بار و در یک جا مشخص شد؛ گزارش‌ها و داشبوردهای Power BI روی همان مدل ساخته شدند.',
        en: 'Each metric was defined once, in one place; the Power BI reports and dashboards were built on that model.',
        de: 'Jede Kennzahl wurde einmal, an einer Stelle definiert; die Power-BI-Berichte und -Dashboards bauen darauf auf.',
      },
    ],
    features: [
      { fa: 'گردآوری داده از چند سامانه و پایگاه داده', en: 'Data from several systems and databases', de: 'Daten aus mehreren Systemen und Datenbanken' },
      { fa: 'فرایند ETL زمان‌بندی‌شده', en: 'Scheduled ETL pipeline', de: 'Geplante ETL-Pipeline' },
      { fa: 'تعریف واحد و یکسان برای هر شاخص', en: 'A single, shared definition per metric', de: 'Eine einheitliche Definition je Kennzahl' },
      { fa: 'داشبورد و گزارش‌های Power BI', en: 'Power BI dashboards and reports', de: 'Power-BI-Dashboards und -Berichte' },
    ],
    result: {
      fa: 'مدیریت یک نمای واحد و قابل‌اتکا از عملکرد سازمان دارد و گزارش‌ها دیگر با هم تناقض ندارند.',
      en: 'Management has one reliable view of performance, and reports no longer contradict each other.',
      de: 'Das Management hat eine verlässliche Sicht auf die Leistung, und Berichte widersprechen sich nicht mehr.',
    },
    role: {
      fa: 'طراحی مدل داده، فرایند ETL و داشبوردها.',
      en: 'Data model, ETL pipeline, and dashboard design.',
      de: 'Datenmodell, ETL-Pipeline und Dashboard-Design.',
    },
    stack: ['SQL Server', 'SSIS', 'T-SQL', 'Power BI', 'Data warehousing'],
    links: {},
  },
  {
    slug: 'document-management',
    service: 'cv-service',
    private: true,
    featured: false,
    arch: ['upload', 'OCR', 'index', 'search'],
    title: {
      fa: 'سامانه‌ی مدیریت مستندات هوشمند',
      en: 'Intelligent Document Management System',
      de: 'Intelligentes Dokumentenmanagement-System',
    },
    tagline: {
      fa: 'بایگانی و جست‌وجوی اسناد سازمانی، با استخراج متن از تصویر و PDF برای جست‌وجوی محتوایی.',
      en: 'Archiving and searching organizational documents, with text extracted from images and PDFs for full-text search.',
      de: 'Archivierung und Suche von Unternehmensdokumenten, mit Textextraktion aus Bildern und PDFs für Volltextsuche.',
    },
    overview: {
      fa: 'سامانه‌ای برای بایگانی منظم اسناد سازمانی که علاوه بر نگهداری فایل، متن داخل اسناد اسکن‌شده و PDF را استخراج می‌کند تا جست‌وجو روی محتوای واقعی سند انجام شود، نه فقط نام فایل.',
      en: 'A system for organized archiving of company documents that, beyond storing the file, extracts the text inside scanned documents and PDFs so search runs over the actual content, not just the file name.',
      de: 'Ein System zur geordneten Archivierung von Firmendokumenten, das über die Ablage hinaus den Text in gescannten Dokumenten und PDFs extrahiert, damit die Suche über den echten Inhalt läuft.',
    },
    problem: {
      fa: 'اسناد در پوشه‌های شبکه پخش بودند. پیدا کردن یک سند خاص به حافظه‌ی افراد وابسته بود و اسناد اسکن‌شده اصلاً قابل جست‌وجو نبودند.',
      en: 'Documents were spread across network folders. Finding a specific one depended on people’s memory, and scanned documents were not searchable at all.',
      de: 'Dokumente lagen verstreut in Netzwerkordnern. Ein bestimmtes zu finden hing vom Gedächtnis der Leute ab, und gescannte Dokumente waren gar nicht durchsuchbar.',
    },
    build: [
      {
        fa: 'هر سند هنگام بارگذاری دسته‌بندی و برچسب‌گذاری می‌شود. برای فایل‌های تصویری و PDF، متن با پردازش نوری (OCR) استخراج و همراه سند نمایه می‌شود.',
        en: 'Each document is categorized and tagged on upload. For image files and PDFs, the text is pulled out with OCR and indexed alongside the document.',
        de: 'Jedes Dokument wird beim Hochladen kategorisiert und verschlagwortet. Bei Bilddateien und PDFs wird der Text per OCR extrahiert und mit dem Dokument indexiert.',
      },
      {
        fa: 'جست‌وجو روی عنوان، برچسب و متن استخراج‌شده کار می‌کند و دسترسی به هر دسته بر اساس نقش کاربر کنترل می‌شود.',
        en: 'Search works over the title, tags, and extracted text, and access to each category is controlled by user role.',
        de: 'Die Suche läuft über Titel, Schlagwörter und extrahierten Text, und der Zugriff auf jede Kategorie wird per Rolle gesteuert.',
      },
    ],
    features: [
      { fa: 'بایگانی دسته‌بندی‌شده و برچسب‌گذاری', en: 'Categorized archiving and tagging', de: 'Kategorisierte Archivierung und Verschlagwortung' },
      { fa: 'استخراج متن از تصویر و PDF (OCR)', en: 'Text extraction from images and PDFs (OCR)', de: 'Textextraktion aus Bildern und PDFs (OCR)' },
      { fa: 'جست‌وجوی محتوایی روی متن اسناد', en: 'Full-text search over document content', de: 'Volltextsuche über Dokumentinhalte' },
      { fa: 'کنترل دسترسی بر اساس نقش', en: 'Role-based access control', de: 'Rollenbasierte Zugriffskontrolle' },
    ],
    result: {
      fa: 'اسناد در یک بایگانی واحد و قابل جست‌وجو قرار گرفتند و پیدا کردن یک سند دیگر به حافظه‌ی افراد وابسته نیست.',
      en: 'Documents moved into one searchable archive, and finding one no longer depends on anyone’s memory.',
      de: 'Dokumente kamen in ein durchsuchbares Archiv, und ein Dokument zu finden hängt nicht mehr vom Gedächtnis ab.',
    },
    role: {
      fa: 'طراحی و پیاده‌سازی بک‌اند، خط پردازش OCR و جست‌وجو.',
      en: 'Backend design and implementation, the OCR pipeline, and search.',
      de: 'Backend-Design und -Umsetzung, die OCR-Pipeline und Suche.',
    },
    stack: ['Django', 'PostgreSQL', 'OCR', 'Full-text search', 'React'],
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
      en: 'Log and track internal support requests, with a status workflow and user roles.',
      de: 'Interne Support-Anfragen erfassen und verfolgen — mit Status-Workflow und Benutzerrollen.',
    },
    overview: {
      fa: 'یک سامانه‌ی فول‌استک برای ثبت و پیگیری درخواست‌های پشتیبانی داخل سازمان. هر درخواست یک شماره، نوع، اولویت و وضعیت دارد و بسته به نقش کاربر (کارمند، پشتیبان، مدیر) نمای متفاوتی می‌بیند.',
      en: 'A full-stack system for logging and tracking internal support requests. Each request has a number, type, priority, and status, and shows a different view depending on the user’s role (employee, support, manager).',
      de: 'Ein Full-Stack-System zum Erfassen und Verfolgen interner Support-Anfragen. Jede Anfrage hat Nummer, Typ, Priorität und Status und zeigt je nach Rolle (Mitarbeiter, Support, Manager) eine andere Ansicht.',
    },
    problem: {
      fa: 'درخواست‌های همکاران از ایمیل، تلفن و پیام‌رسان می‌آمد. مشخص نبود هر درخواست دست کیست، در چه مرحله‌ای است و چند مورد باز مانده. گزارش‌گیری هم عملاً ممکن نبود.',
      en: 'Requests from colleagues came in by email, phone, and chat. It was unclear who owned each one, what stage it was at, or how many were still open. Reporting was effectively impossible.',
      de: 'Anfragen von Kolleg:innen kamen per E-Mail, Telefon und Chat. Unklar war, wer zuständig war, in welcher Phase eine Anfrage steckte oder wie viele noch offen waren. Auswertung war praktisch unmöglich.',
    },
    build: [
      {
        fa: 'بک‌اند یک API با Django REST Framework است روی SQL Server، با احراز هویت JWT و دسترسی مبتنی بر نقش.',
        en: 'The backend is a Django REST Framework API on SQL Server, with JWT auth and role-based access.',
        de: 'Das Backend ist eine Django-REST-Framework-API auf SQL Server, mit JWT-Auth und rollenbasiertem Zugriff.',
      },
      {
        fa: 'مدل تیکت شامل نوع (ایراد، پیشنهاد، درخواست قابلیت، سؤال)، اولویت، وضعیت (جدید، در حال بررسی، انجام‌شده، رد‌شده)، واحد سازمانی و پیوست است. شماره‌ی تیکت هنگام ثبت به‌صورت خودکار ساخته می‌شود.',
        en: 'The ticket model carries a type (bug, suggestion, feature request, question), priority, status (new, reviewing, done, rejected), organizational unit, and an attachment. The ticket number is generated automatically on creation.',
        de: 'Das Ticket-Modell trägt Typ (Bug, Vorschlag, Feature-Wunsch, Frage), Priorität, Status (neu, in Prüfung, erledigt, abgelehnt), Organisationseinheit und einen Anhang. Die Ticketnummer wird bei der Erstellung automatisch vergeben.',
      },
      {
        fa: 'فرانت‌اند React با Tailwind: داشبورد وضعیت، فهرست با فیلتر، صفحه‌ی جزئیات و فرم ثبت تیکت جدید.',
        en: 'The React + Tailwind frontend has a status dashboard, a filterable list, a detail page, and a new-ticket form.',
        de: 'Das React-+-Tailwind-Frontend hat ein Status-Dashboard, eine filterbare Liste, eine Detailseite und ein Formular für neue Tickets.',
      },
    ],
    features: [
      { fa: 'احراز هویت JWT و نقش‌های کاربری', en: 'JWT auth and user roles', de: 'JWT-Auth und Benutzerrollen' },
      { fa: 'شماره‌ی خودکار تیکت', en: 'Auto-generated ticket numbers', de: 'Automatische Ticketnummern' },
      { fa: 'نوع، اولویت و وضعیت', en: 'Type, priority, and status', de: 'Typ, Priorität und Status' },
      { fa: 'پیوست فایل', en: 'File attachments', de: 'Datei-Anhänge' },
      { fa: 'داشبورد وضعیت', en: 'Status dashboard', de: 'Status-Dashboard' },
      { fa: 'فهرست با فیلتر', en: 'Filterable list', de: 'Filterbare Liste' },
      { fa: 'API استاندارد REST', en: 'A standard REST API', de: 'Eine Standard-REST-API' },
    ],
    result: {
      fa: 'هر درخواست از ثبت تا بستن قابل ردیابی است و مدیر در داشبورد یک نگاه کلی از بار کاری و موارد باز دارد.',
      en: 'Every request is traceable from open to close, and a manager gets a single view of the workload and open items on the dashboard.',
      de: 'Jede Anfrage ist von der Erstellung bis zum Abschluss nachvollziehbar, und eine Führungskraft hat im Dashboard einen Gesamtblick auf Auslastung und offene Punkte.',
    },
    stack: ['Django', 'Django REST Framework', 'JWT', 'SQL Server', 'React', 'Tailwind CSS', 'Axios'],
    links: {
      code: 'https://github.com/erfanmohammadi1998/ticket-management-system',
    },
  },
  {
    slug: 'rezumeban',
    service: 'cv-service',
    private: true,
    featured: true,
    cover: '/shots/rezumeban/01.png',
    arch: ['candidates', 'pipeline', 'API', 'database'],
    title: {
      fa: 'رزومه‌بان',
      en: 'Rezumeban (ATS)',
      de: 'Rezumeban (ATS)',
    },
    tagline: {
      fa: 'سامانه‌ی جذب و استخدام: آگهی شغلی، بانک متقاضی، فرایند مصاحبه و گزارش، همه در یک داشبورد.',
      en: 'A recruitment platform: job postings, a candidate bank, the interview pipeline, and reporting, in one dashboard.',
      de: 'Eine Recruiting-Plattform: Stellenanzeigen, Bewerberdatenbank, Interview-Pipeline und Reporting in einem Dashboard.',
    },
    overview: {
      fa: 'رزومه‌بان یک سامانه‌ی جذب و استخدام است: از انتشار آگهی شغلی و دریافت رزومه، تا پیگیری مصاحبه‌ها و گزارش‌گیری از روند استخدام. نسخه‌ی اولیه‌ی همین محصول به‌عنوان یک بانک رزومه‌ی ساده شروع شد و بعد به یک سامانه‌ی کامل جذب و استخدام رشد کرد.',
      en: 'Rezumeban is a recruitment platform: from publishing a job post and collecting resumes to tracking interviews and reporting on the hiring pipeline. It started as a simple resume bank and grew into a full ATS.',
      de: 'Rezumeban ist eine Recruiting-Plattform: von der Stellenanzeige und dem Sammeln von Bewerbungen bis zur Interview-Verfolgung und Auswertung des Einstellungsprozesses. Begonnen als einfache Lebenslauf-Datenbank, gewachsen zu einem vollständigen ATS.',
    },
    problem: {
      fa: 'رزومه‌ها در ایمیل و فایل‌های پراکنده جمع می‌شدند. مشخص نبود هر متقاضی در کدام مرحله از فرایند جذب است و چند موقعیت شغلی هنوز باز مانده.',
      en: 'Resumes piled up in email and scattered files. It was unclear which stage each candidate was at, or how many roles were still open.',
      de: 'Bewerbungen sammelten sich in E-Mails und verstreuten Dateien. Unklar war, in welcher Phase jeder Kandidat steckte oder wie viele Stellen noch offen waren.',
    },
    build: [
      {
        fa: 'مدل داده‌ی جذب: آگهی شغلی، متقاضی، درخواست و مصاحبه، با وضعیت مشخص برای هر مرحله. داشبورد استخدام و کاندیدها روی همین مدل ساخته شده.',
        en: 'A hiring data model: job post, candidate, application, and interview, each with a clear status. The hiring and candidate dashboards sit on top of this model.',
        de: 'Ein Recruiting-Datenmodell: Stellenanzeige, Kandidat, Bewerbung und Interview, je mit klarem Status. Die Dashboards für Hiring und Kandidaten bauen darauf auf.',
      },
      {
        fa: 'نمودار روند درخواست‌ها در ۳۰ روز اخیر، پایپ‌لاین استخدام (درخواست جدید، بررسی رزومه، مصاحبه تلفنی) و فهرست مصاحبه‌های پیش‌رو در یک نگاه.',
        en: 'A 30-day application trend chart, a hiring pipeline (new request, resume review, phone screen), and upcoming interviews all in one view.',
        de: 'Ein 30-Tage-Trenddiagramm für Bewerbungen, eine Hiring-Pipeline (neue Anfrage, Lebenslaufprüfung, Telefoninterview) und anstehende Interviews auf einen Blick.',
      },
    ],
    features: [
      { fa: 'انتشار و مدیریت آگهی شغلی', en: 'Publish and manage job postings', de: 'Stellenanzeigen veröffentlichen und verwalten' },
      { fa: 'بانک متقاضی با جست‌وجو و فیلتر', en: 'Candidate bank with search and filter', de: 'Bewerberdatenbank mit Suche und Filter' },
      { fa: 'پایپ‌لاین مصاحبه و پیگیری وضعیت', en: 'Interview pipeline and status tracking', de: 'Interview-Pipeline und Statusverfolgung' },
      { fa: 'داشبورد و گزارش روند استخدام', en: 'Hiring dashboard and reports', de: 'Hiring-Dashboard und Berichte' },
      { fa: 'جست‌وجوی سریع با Ctrl+K', en: 'Quick search with Ctrl+K', de: 'Schnellsuche mit Strg+K' },
    ],
    result: {
      fa: 'روند جذب از آگهی تا استخدام در یک سامانه دیده می‌شود؛ مسئول استخدام در هر لحظه می‌داند چند موقعیت باز، چند مصاحبه پیش‌رو و چند متقاضی در کدام مرحله است.',
      en: 'The hiring flow, from posting to offer, is visible in one system; whoever runs hiring always knows how many roles are open, how many interviews are coming up, and where each candidate stands.',
      de: 'Der Einstellungsprozess, von der Anzeige bis zum Angebot, ist in einem System sichtbar; wer die Einstellung verantwortet, weiß jederzeit, wie viele Stellen offen sind, welche Interviews anstehen und wo jeder Kandidat steht.',
    },
    stack: ['Django', 'Django REST Framework', 'JWT', 'React', 'Recharts'],
    links: {},
  },
  {
    slug: 'houshiva-asset',
    service: 'datastore',
    private: true,
    featured: true,
    cover: '/shots/houshiva-asset/01.png',
    arch: ['scan', 'API', 'database', 'reports'],
    title: {
      fa: 'هوشیوا اموال',
      en: 'Houshiva Asset',
      de: 'Houshiva Asset',
    },
    tagline: {
      fa: 'سامانه‌ی جمعداری اموال سازمان؛ ثبت با QR کد، شمارش دوره‌ای با دوربین موبایل و گزارش مغایرت.',
      en: 'An organizational asset-inventory system: QR-coded records, mobile-camera counting, and discrepancy reports.',
      de: 'Ein Anlagenverzeichnis für Organisationen: QR-codierte Datensätze, Zählung per Handykamera und Abweichungsberichte.',
    },
    overview: {
      fa: 'محصولی برای جمعداری فیزیکی اموال سازمان: هر قلم دارایی یک کد QR می‌گیرد، شمارش دوره‌ای با دوربین موبایل انجام می‌شود و سامانه به‌صورت خودکار مغایرت بین آنچه ثبت شده و آنچه واقعاً پیدا شده را گزارش می‌کند.',
      en: 'A product for the physical inventory of an organization’s assets: every item gets a QR code, periodic counting is done with a phone camera, and the system automatically reports the gap between what’s recorded and what’s actually found.',
      de: 'Ein Produkt für die physische Inventur von Anlagen: jede Position erhält einen QR-Code, die periodische Zählung erfolgt per Handykamera, und das System meldet automatisch die Lücke zwischen Erfassung und tatsächlichem Bestand.',
    },
    problem: {
      fa: 'شمارش سالانه‌ی اموال با کاغذ و اکسل انجام می‌شد؛ پیدا کردن اقلام بدون پلاک یا جابه‌جا شده زمان زیادی می‌گرفت و مغایرت‌ها دیر کشف می‌شدند.',
      en: 'Annual asset counts ran on paper and spreadsheets; finding unlabeled or relocated items took a long time, and discrepancies surfaced late.',
      de: 'Die jährliche Inventur lief auf Papier und in Tabellen; unetikettierte oder verlagerte Positionen zu finden dauerte lange, Abweichungen kamen spät ans Licht.',
    },
    build: [
      {
        fa: 'هر دارایی یک کد یکتا و QR دارد؛ شمارش با دوربین گوشی انجام می‌شود و بدون نیاز به اسکنر اختصاصی، محل و وضعیت هر قلم ثبت می‌شود.',
        en: 'Every asset has a unique code and a QR label; counting runs off the phone camera, so location and status get logged without a dedicated scanner.',
        de: 'Jede Anlage hat einen eindeutigen Code und ein QR-Label; die Zählung läuft über die Handykamera, sodass Standort und Status ohne eigenen Scanner erfasst werden.',
      },
      {
        fa: 'داشبورد وضعیت کلی اموال (ارزش، تعداد، وضعیت استفاده) و گزارش خودکار مغایرت بین شمارش جدید و رکورد قبلی را نشان می‌دهد.',
        en: 'A dashboard shows the overall asset picture (value, count, usage status) and an automatic report flags the gap between the new count and the previous record.',
        de: 'Ein Dashboard zeigt das Gesamtbild der Anlagen (Wert, Anzahl, Nutzungsstatus), ein automatischer Bericht markiert die Lücke zwischen neuer Zählung und vorherigem Datensatz.',
      },
    ],
    features: [
      { fa: 'ثبت دارایی با کد QR', en: 'QR-coded asset records', de: 'QR-codierte Anlagenerfassung' },
      { fa: 'شمارش دوره‌ای با دوربین موبایل', en: 'Periodic counting via phone camera', de: 'Periodische Zählung per Handykamera' },
      { fa: 'گزارش خودکار مغایرت', en: 'Automatic discrepancy reports', de: 'Automatische Abweichungsberichte' },
      { fa: 'داشبورد ارزش و وضعیت اموال', en: 'Asset value and status dashboard', de: 'Dashboard für Anlagenwert und -status' },
      { fa: 'تنظیم بدون کد برای هر سازمان', en: 'No-code setup per organization', de: 'No-Code-Einrichtung je Organisation' },
    ],
    result: {
      fa: 'شمارش اموال از یک کار سالانه‌ی کاغذی به یک فرایند مداوم و قابل ردیابی تبدیل شد؛ مغایرت‌ها زود دیده می‌شوند نه در پایان سال.',
      en: 'Asset counting went from an annual paper exercise to an ongoing, traceable process; discrepancies show up early, not at year-end.',
      de: 'Die Inventur wurde von einer jährlichen Papierübung zu einem laufenden, nachvollziehbaren Prozess; Abweichungen zeigen sich früh, nicht erst zum Jahresende.',
    },
    stack: ['Django', 'REST API', 'PostgreSQL', 'React'],
    links: {},
  },
  {
    slug: 'nikiteb',
    service: 'client',
    featured: true,
    cover: '/shots/nikiteb/01.png',
    arch: ['client', 'API', 'database'],
    title: {
      fa: 'نیکی‌پژوه — بازطراحی وب‌سایت شرکتی',
      en: 'Niki Pajouh — Corporate Website Rebuild',
      de: 'Niki Pajouh — Firmenwebsite-Neubau',
    },
    tagline: {
      fa: 'بازنویسی کامل وب‌سایت یک شرکت تجهیزات پزشکی از وردپرس به React و Django.',
      en: 'A full rebuild of a medical-equipment company’s website, from WordPress to React and Django.',
      de: 'Ein kompletter Neuaufbau der Website eines Medizintechnik-Unternehmens, von WordPress zu React und Django.',
    },
    overview: {
      fa: 'وب‌سایت شرکتی «نیکی‌پژوه» (تجهیزات پزشکی) از یک قالب وردپرسی به یک اپلیکیشن اختصاصی با React در فرانت و Django در بک‌اند بازنویسی شد تا سرعت، مدیریت محتوا و مقیاس‌پذیری بهتر شود.',
      en: 'The corporate site for Niki Pajouh (medical equipment) was rebuilt from a WordPress theme into a custom application — React on the frontend, Django on the backend — for better speed, content management, and scalability.',
      de: 'Die Firmenwebsite von Niki Pajouh (Medizintechnik) wurde von einem WordPress-Theme zu einer individuellen Anwendung umgebaut — React im Frontend, Django im Backend — für bessere Geschwindigkeit, Content-Verwaltung und Skalierbarkeit.',
    },
    problem: {
      fa: 'وب‌سایت روی یک قالب عمومی وردپرس اجرا می‌شد: بارگذاری کند، سفارشی‌سازی محدود، و معرفی محصولات متعدد شرکت به شکل مناسب ممکن نبود.',
      en: 'The site ran on a generic WordPress theme: slow to load, limited customization, and not well suited to presenting the company’s many products.',
      de: 'Die Website lief auf einem generischen WordPress-Theme: langsam, wenig anpassbar und für die vielen Produkte des Unternehmens nicht gut geeignet.',
    },
    build: [
      {
        fa: 'فرانت‌اند از صفر با React ساخته شد و بک‌اند با Django مدیریت محتوا (محصولات، دسته‌بندی‌ها، مجوزها و مقالات) را از طریق یک API ارائه می‌دهد.',
        en: 'The frontend was rebuilt from scratch in React, with a Django backend serving content management (products, categories, certifications, articles) through an API.',
        de: 'Das Frontend wurde von Grund auf in React neu gebaut, ein Django-Backend liefert Content-Management (Produkte, Kategorien, Zertifikate, Artikel) über eine API.',
      },
    ],
    features: [
      { fa: 'معرفی محصولات با دسته‌بندی', en: 'Categorized product catalog', de: 'Kategorisierter Produktkatalog' },
      { fa: 'مدیریت محتوا از پنل اختصاصی', en: 'Content management from a custom panel', de: 'Content-Management über ein eigenes Panel' },
      { fa: 'پشتیبانی دوزبانه (فارسی/انگلیسی)', en: 'Bilingual support (Persian/English)', de: 'Zweisprachig (Persisch/Englisch)' },
      { fa: 'حالت روز/شب', en: 'Light/dark mode', de: 'Hell-/Dunkelmodus' },
    ],
    result: {
      fa: 'وب‌سایت از یک قالب عمومی به یک اپلیکیشن اختصاصی و سریع‌تر با مدیریت محتوای واقعی تبدیل شد.',
      en: 'The site went from a generic theme to a custom, faster application with real content management.',
      de: 'Die Website wurde von einem generischen Theme zu einer individuellen, schnelleren Anwendung mit echtem Content-Management.',
    },
    stack: ['React', 'Django', 'REST API', 'PostgreSQL'],
    links: {},
  },
  {
    slug: 'rccoffee',
    service: 'client',
    featured: false,
    cover: '/shots/rccoffee/01.png',
    arch: ['menu', 'orders', 'API', 'admin'],
    title: {
      fa: 'آرسی‌کافه — منوی دیجیتال و سفارش آنلاین',
      en: 'RC Coffee — Digital Menu & Ordering',
      de: 'RC Coffee — Digitale Speisekarte & Bestellung' ,
    },
    tagline: {
      fa: 'منوی دیجیتال یک کافه با بیش از هفتاد آیتم، سفارش آنلاین و پنل مدیریت قیمت و موجودی.',
      en: 'A digital menu for a cafe with 70+ items, online ordering, and an admin panel for prices and stock.',
      de: 'Eine digitale Speisekarte für ein Café mit über 70 Artikeln, Online-Bestellung und Admin-Panel für Preise und Bestand.',
    },
    overview: {
      fa: 'یک پلتفرم منوی دیجیتال برای کافه: دسته‌بندی آیتم‌ها، جست‌وجو، سفارش آنلاین و رزرو میز در سمت مشتری، و مدیریت قیمت، موجودی و آیتم‌ها از یک پنل مدیریت.',
      en: 'A digital-menu platform for a cafe: categorized items, search, online ordering, and table reservation on the customer side, with price, stock, and item management from an admin panel.',
      de: 'Eine Digital-Menü-Plattform für ein Café: kategorisierte Artikel, Suche, Online-Bestellung und Tischreservierung für Gäste, mit Preis-, Bestands- und Artikelverwaltung im Admin-Panel.',
    },
    problem: {
      fa: 'منوی کاغذی برای هر تغییر قیمت باید چاپ می‌شد و سفارش‌گیری تلفنی برای ساعات شلوغ کافه کافی نبود.',
      en: 'A paper menu had to be reprinted for every price change, and phone orders didn’t scale for the cafe’s busy hours.',
      de: 'Eine Papierkarte musste bei jeder Preisänderung neu gedruckt werden, und Telefonbestellungen skalierten nicht für Stoßzeiten.',
    },
    build: [
      {
        fa: 'منو با دسته‌بندی، جست‌وجو و زمان آماده‌سازی هر آیتم ساخته شد؛ سبد خرید و ثبت سفارش آنلاین به آن اضافه شد.',
        en: 'The menu was built with categories, search, and a prep-time estimate per item; a cart and online order flow were added on top.',
        de: 'Die Speisekarte entstand mit Kategorien, Suche und Zubereitungszeit je Artikel; Warenkorb und Online-Bestellablauf kamen dazu.',
      },
      {
        fa: 'پنل مدیریت امکان به‌روزرسانی قیمت، موجودی و افزودن آیتم جدید را بدون نیاز به توسعه‌دهنده می‌دهد.',
        en: 'The admin panel lets staff update prices, stock, and add new items without needing a developer.',
        de: 'Das Admin-Panel erlaubt dem Personal, Preise und Bestand zu aktualisieren und neue Artikel hinzuzufügen — ohne Entwickler.',
      },
    ],
    features: [
      { fa: 'منوی دسته‌بندی‌شده با جست‌وجو', en: 'Categorized, searchable menu', de: 'Kategorisierte, durchsuchbare Speisekarte' },
      { fa: 'سفارش آنلاین و سبد خرید', en: 'Online ordering and cart', de: 'Online-Bestellung und Warenkorb' },
      { fa: 'رزرو میز', en: 'Table reservation', de: 'Tischreservierung' },
      { fa: 'پنل مدیریت قیمت و موجودی', en: 'Admin panel for price and stock', de: 'Admin-Panel für Preis und Bestand' },
    ],
    result: {
      fa: 'به‌روزرسانی قیمت و منو در چند ثانیه انجام می‌شود و سفارش آنلاین بار سفارش‌گیری تلفنی را کم کرده است.',
      en: 'Price and menu updates take seconds, and online ordering has taken load off phone orders.',
      de: 'Preis- und Menü-Updates dauern Sekunden, und Online-Bestellungen entlasten die Telefonbestellungen.',
    },
    stack: ['React', 'Django', 'REST API'],
    links: {},
  },
  {
    slug: 'shiva-gallery',
    service: 'client',
    featured: false,
    cover: '/shots/shiva-gallery/01.png',
    arch: ['storefront', 'API', 'database'],
    title: {
      fa: 'گالری شیوا — فروشگاه پوشاک زنانه',
      en: 'Shiva Gallery — Women’s Fashion Store',
      de: 'Shiva Gallery — Damenmode-Shop',
    },
    tagline: {
      fa: 'فروشگاه آنلاین پوشاک زنانه با سبد خرید، پرداخت آنلاین و پنل مدیریت.',
      en: 'An online women’s clothing store with a cart, online payment, and an admin panel.',
      de: 'Ein Online-Shop für Damenmode mit Warenkorb, Online-Zahlung und Admin-Panel.',
    },
    overview: {
      fa: 'یک فروشگاه آنلاین برای یک برند پوشاک زنانه، با ویترین محصول، سبد خرید، درگاه پرداخت و پنل مدیریت برای افزودن و ویرایش محصولات.',
      en: 'An online storefront for a women’s clothing brand, with a product catalog, cart, payment gateway, and an admin panel for adding and editing products.',
      de: 'Ein Online-Storefront für eine Damenmode-Marke, mit Produktkatalog, Warenkorb, Zahlungs-Gateway und Admin-Panel für Produktpflege.',
    },
    problem: {
      fa: 'برند فقط از طریق شبکه‌های اجتماعی می‌فروخت و پیگیری سفارش و موجودی از طریق پیام دستی به‌صرفه نبود.',
      en: 'The brand sold only through social media, and tracking orders and stock over direct messages didn’t scale.',
      de: 'Die Marke verkaufte nur über soziale Medien, und Bestell- und Bestandsverfolgung per Direktnachricht war nicht mehr praktikabel.',
    },
    build: [
      {
        fa: 'یک فروشگاه استاندارد با کاتالوگ محصول، سبد خرید و ثبت‌نام کاربر ساخته شد تا فرایند خرید از گفت‌وگوی دستی به یک مسیر خرید معمول منتقل شود.',
        en: 'A standard storefront was built with a product catalog, cart, and user accounts, moving checkout from manual chat to a normal purchase flow.',
        de: 'Ein Standard-Storefront mit Produktkatalog, Warenkorb und Nutzerkonten wurde gebaut, um den Checkout von manuellem Chat zu einem normalen Kaufablauf zu verlagern.',
      },
    ],
    features: [
      { fa: 'کاتالوگ محصول', en: 'Product catalog', de: 'Produktkatalog' },
      { fa: 'سبد خرید و حساب کاربری', en: 'Cart and user accounts', de: 'Warenkorb und Nutzerkonten' },
      { fa: 'پرداخت آنلاین', en: 'Online payment', de: 'Online-Zahlung' },
      { fa: 'پنل مدیریت محصولات', en: 'Product admin panel', de: 'Produkt-Admin-Panel' },
    ],
    result: {
      fa: 'خرید از یک فرایند دستی روی چت به یک فروشگاه استاندارد با پیگیری سفارش منتقل شد.',
      en: 'Buying moved from manual chat to a standard store with order tracking.',
      de: 'Der Einkauf wurde von manuellem Chat zu einem Standard-Shop mit Bestellverfolgung.',
    },
    stack: ['React', 'Django', 'REST API'],
    links: {},
  },
  {
    slug: 'karnama',
    service: 'cv-service',
    featured: false,
    cover: '/shots/karnama/01.png',
    arch: ['mobile', 'search', 'API', 'database'],
    title: {
      fa: 'کارنما — جست‌وجوی شغل',
      en: 'Karnama — Job Search',
      de: 'Karnama — Jobsuche',
    },
    tagline: {
      fa: 'اپلیکیشن موبایل‌محور برای جست‌وجوی همزمان شغل در چند سایت کاریابی، ساخت رزومه و پیگیری درخواست‌ها.',
      en: 'A mobile-first app that searches several job sites at once, builds a Persian resume, and tracks applications.',
      de: 'Eine Mobile-First-App, die mehrere Jobbörsen gleichzeitig durchsucht, einen persischen Lebenslauf erstellt und Bewerbungen verfolgt.',
    },
    overview: {
      fa: 'کارنما به کاربر کمک می‌کند هم‌زمان چند سایت کاریابی را جست‌وجو کند، رزومه‌ی فارسی بسازد و پیگیری‌های استخدام (تماس، مصاحبه، پیشنهاد) را در یک‌جا ببیند.',
      en: 'Karnama helps a job seeker search several job sites at once, build a Persian resume, and see hiring follow-ups (calls, interviews, offers) in one place.',
      de: 'Karnama hilft Jobsuchenden, mehrere Jobbörsen gleichzeitig zu durchsuchen, einen persischen Lebenslauf zu erstellen und Follow-ups (Anrufe, Interviews, Angebote) an einem Ort zu sehen.',
    },
    problem: {
      fa: 'جست‌وجوی شغل یعنی باز کردن چند سایت جدا و پیگیری دستی هر درخواست در ذهن یا یک فایل جداگانه.',
      en: 'Job hunting meant opening several separate sites and tracking each application by memory or in a separate file.',
      de: 'Jobsuche bedeutete, mehrere separate Seiten zu öffnen und jede Bewerbung im Kopf oder in einer separaten Datei zu verfolgen.',
    },
    build: [
      {
        fa: 'یک رابط موبایل‌محور ساخته شد که جست‌وجو را روی چند منبع هم‌زمان می‌فرستد و نتیجه را یک‌جا نشان می‌دهد؛ کارت‌های وضعیت (آگهی ذخیره‌شده، رزومه، هشدار فعال، در حال پیگیری) دید سریع می‌دهند.',
        en: 'A mobile-first interface sends the search to several sources at once and shows results in one feed; status cards (saved ads, resumes, active alerts, in-progress applications) give a quick read.',
        de: 'Eine Mobile-First-Oberfläche schickt die Suche gleichzeitig an mehrere Quellen und zeigt Ergebnisse in einem Feed; Status-Karten (gespeicherte Anzeigen, Lebensläufe, aktive Alarme, laufende Bewerbungen) geben einen schnellen Überblick.',
      },
    ],
    features: [
      { fa: 'جست‌وجوی هم‌زمان چند سایت کاریابی', en: 'Simultaneous multi-site job search', de: 'Gleichzeitige Jobsuche über mehrere Seiten' },
      { fa: 'ساخت رزومه‌ی فارسی', en: 'Persian resume builder', de: 'Persischer Lebenslauf-Ersteller' },
      { fa: 'پیگیری درخواست‌ها و مصاحبه‌ها', en: 'Application and interview tracking', de: 'Verfolgung von Bewerbungen und Interviews' },
      { fa: 'پیشنهاد شغلی بر اساس پروفایل', en: 'Profile-based job suggestions', de: 'Profilbasierte Jobvorschläge' },
    ],
    result: {
      fa: 'جست‌وجو و پیگیری استخدام از چند سایت پراکنده به یک اپلیکیشن واحد منتقل شد.',
      en: 'Job search and application tracking moved from several scattered sites into a single app.',
      de: 'Jobsuche und Bewerbungsverfolgung wurden von mehreren verstreuten Seiten in eine einzige App verlagert.',
    },
    stack: ['React', 'Django', 'REST API'],
    links: {},
  },
  {
    slug: 'barber-shop-landing',
    service: 'client',
    featured: false,
    cover: '/shots/barber-shop/01.jpg',
    arch: ['landing', 'static host'],
    title: {
      fa: 'لندینگ‌پیج آرایشگاه مردانه',
      en: 'Barbershop Landing Page',
      de: 'Landingpage für einen Barbershop',
    },
    tagline: {
      fa: 'صفحه‌ی تک‌صفحه‌ای معرفی یک آرایشگاه مردانه: خدمات، تیم و نظرات مشتریان.',
      en: 'A single-page site for a men’s barbershop: services, staff, and customer reviews.',
      de: 'Eine One-Page-Website für einen Herrenfriseur: Leistungen, Team und Kundenbewertungen.',
    },
    overview: {
      fa: 'یک صفحه‌ی تبلیغاتی تک‌صفحه‌ای برای یک آرایشگاه مردانه، با معرفی خدمات، تیم و نظرات مشتریان، طراحی‌شده برای جذب سریع مشتری از طریق شبکه‌های اجتماعی.',
      en: 'A single-page promotional site for a men’s barbershop, presenting services, staff, and customer reviews — built for quick conversions from social media traffic.',
      de: 'Eine One-Page-Werbeseite für einen Herrenfriseur mit Leistungen, Team und Kundenbewertungen — gebaut für schnelle Conversions aus Social-Media-Traffic.',
    },
    problem: {
      fa: 'کسب‌وکار فقط یک صفحه‌ی اینستاگرام داشت و راهی برای معرفی حرفه‌ای خدمات و جلب اعتماد مشتری جدید نبود.',
      en: 'The business had only an Instagram page, with no professional way to present services and earn a new customer’s trust.',
      de: 'Das Geschäft hatte nur eine Instagram-Seite, keine professionelle Möglichkeit, Leistungen zu zeigen und das Vertrauen neuer Kunden zu gewinnen.',
    },
    build: [
      {
        fa: 'یک صفحه‌ی فرود سریع و سبک با بخش‌های خدمات، معرفی تیم و نظرات مشتریان طراحی شد.',
        en: 'A fast, lightweight landing page was designed with services, team, and testimonial sections.',
        de: 'Eine schnelle, leichte Landingpage mit Leistungen, Team und Kundenstimmen wurde gestaltet.',
      },
    ],
    features: [
      { fa: 'معرفی خدمات و قیمت', en: 'Services and pricing', de: 'Leistungen und Preise' },
      { fa: 'معرفی تیم', en: 'Team introduction', de: 'Team-Vorstellung' },
      { fa: 'نظرات مشتریان', en: 'Customer reviews', de: 'Kundenbewertungen' },
    ],
    result: {
      fa: 'کسب‌وکار یک صفحه‌ی حرفه‌ای برای معرفی خودش پیدا کرد که می‌تواند در شبکه‌های اجتماعی به اشتراک بگذارد.',
      en: 'The business got a professional page to introduce itself, shareable across social media.',
      de: 'Das Geschäft bekam eine professionelle Seite zur Selbstdarstellung, teilbar über soziale Medien.',
    },
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    links: {},
  },
  {
    slug: 'industrial-automation-tools',
    service: 'auth-service',
    featured: false,
    arch: ['device', 'script', 'report'],
    title: {
      fa: 'ابزارهای اتوماسیون خط تولید',
      en: 'Production-Line Automation Tools',
      de: 'Automatisierungs-Tools für die Fertigungslinie',
    },
    tagline: {
      fa: 'دو ابزار پایتونی برای به‌روزرسانی خودکار و تست کیفیت مودم روی خط تولید صنعتی، و یک نرم‌افزار چاپ برچسب کارتن.',
      en: 'Two Python tools for automatic modem updates and quality testing on an industrial line, plus a carton-label printing tool.',
      de: 'Zwei Python-Tools für automatische Modem-Updates und Qualitätstests auf einer Industrielinie, plus ein Tool für den Kartonetikettendruck.',
    },
    overview: {
      fa: 'مجموعه‌ای از ابزارهای پایتونی برای خط تولید: به‌روزرسانی خودکار فریمور مودم روی دستگاه‌ها، تست کیفیت پیش از بسته‌بندی، و چاپ برچسب کارتن مادر با سرعت و دقت بالا — هر سه بدون دخالت دستی در فرایند تکراری.',
      en: 'A set of Python tools for a production line: automatic modem firmware updates on devices, quality testing before packaging, and high-speed, accurate master-carton label printing — all removing manual work from a repetitive process.',
      de: 'Eine Reihe von Python-Tools für eine Fertigungslinie: automatische Modem-Firmware-Updates auf Geräten, Qualitätstests vor der Verpackung und schnelles, präzises Bedrucken von Master-Karton-Etiketten — alles nimmt manuelle Arbeit aus einem sich wiederholenden Prozess.',
    },
    problem: {
      fa: 'به‌روزرسانی و تست هر دستگاه به‌صورت دستی زمان‌بر بود و در حجم بالای تولید، خطای انسانی و کندی در خط تولید ایجاد می‌کرد. چاپ برچسب کارتن هم دستی و مستعد خطا بود.',
      en: 'Updating and testing each device by hand was slow, and at production volume it introduced human error and bottlenecks. Carton labeling was manual and error-prone too.',
      de: 'Manuelles Aktualisieren und Testen jedes Geräts war langsam und führte bei hohem Produktionsvolumen zu menschlichen Fehlern und Engpässen. Auch die Kartonbeschriftung war manuell und fehleranfällig.',
    },
    build: [
      {
        fa: 'ابزار به‌روزرسانی، فریمور را روی هر مودم متصل به خط به‌صورت خودکار نصب و نتیجه را ثبت می‌کند؛ ابزار تست کیفیت وضعیت هر دستگاه را قبل از بسته‌بندی بررسی می‌کند.',
        en: 'The update tool flashes firmware onto each modem connected to the line automatically and logs the result; the quality-test tool checks each device’s status before packaging.',
        de: 'Das Update-Tool spielt die Firmware automatisch auf jedes angeschlossene Modem und protokolliert das Ergebnis; das Qualitätstest-Tool prüft jedes Gerät vor der Verpackung.',
      },
      {
        fa: 'نرم‌افزار چاپ برچسب، اطلاعات کارتن مادر را از سیستم می‌خواند و برچسب را با دقت و سرعت بالا چاپ می‌کند.',
        en: 'The label-printing tool reads master-carton data from the system and prints labels at high speed and accuracy.',
        de: 'Das Etikettendruck-Tool liest Master-Karton-Daten aus dem System und druckt Etiketten schnell und präzise.',
      },
    ],
    features: [
      { fa: 'به‌روزرسانی خودکار فریمور مودم', en: 'Automatic modem firmware updates', de: 'Automatische Modem-Firmware-Updates' },
      { fa: 'تست کیفیت پیش از بسته‌بندی', en: 'Pre-packaging quality tests', de: 'Qualitätstests vor der Verpackung' },
      { fa: 'چاپ برچسب کارتن مادر', en: 'Master-carton label printing', de: 'Master-Karton-Etikettendruck' },
      { fa: 'ثبت خودکار نتیجه‌ی هر دستگاه', en: 'Automatic per-device result logging', de: 'Automatische Protokollierung je Gerät' },
    ],
    result: {
      fa: 'به‌روزرسانی، تست و برچسب‌زنی از کارهای دستی و کند به فرایندهایی خودکار، سریع‌تر و با خطای کمتر تبدیل شدند.',
      en: 'Updating, testing, and labeling went from slow manual work to faster, automated processes with fewer errors.',
      de: 'Update, Test und Etikettierung wurden von langsamer Handarbeit zu schnelleren, automatisierten Prozessen mit weniger Fehlern.',
    },
    stack: ['Python'],
    links: {},
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
    overview: {
      fa: 'یک اسکریپت پایتونی که به‌عنوان یک لایه‌ی محافظ ساده کار می‌کند: اگر IP عمومی دستگاه تغییر کند (مثلاً چون VPN قطع شده)، بلافاصله مرورگرها و برنامه‌های حساس را می‌بندد تا هیچ درخواستی از IP واقعی خارج نشود.',
      en: 'A Python script that acts as a simple protective layer: if the machine’s public IP changes (say, because a VPN dropped), it immediately closes browsers and sensitive apps so nothing goes out from the real IP.',
      de: 'Ein Python-Skript als einfache Schutzschicht: Ändert sich die öffentliche IP des Rechners (etwa weil ein VPN ausgefallen ist), schließt es sofort Browser und sensible Apps, damit nichts über die echte IP hinausgeht.',
    },
    problem: {
      fa: 'VPN‌ها گاهی بی‌صدا قطع می‌شوند. کاربر متوجه نمی‌شود و ترافیک از IP واقعی ادامه پیدا می‌کند. راهکارهای سطح شبکه پیچیده‌اند و همیشه در دسترس نیستند.',
      en: 'VPNs sometimes drop silently. The user doesn’t notice, and traffic keeps going from the real IP. Network-level solutions are complex and not always available.',
      de: 'VPNs fallen manchmal still aus. Der Nutzer bemerkt es nicht, und der Verkehr läuft weiter über die echte IP. Lösungen auf Netzwerkebene sind komplex und nicht immer verfügbar.',
    },
    build: [
      {
        fa: 'اسکریپت در بازه‌های کوتاه و قابل تنظیم، IP عمومی را از چند سرویس بیرونی می‌گیرد و با IP هدف مقایسه می‌کند.',
        en: 'On a short, configurable interval the script fetches the public IP from a few outside services and compares it with the target IP.',
        de: 'In kurzen, einstellbaren Abständen holt das Skript die öffentliche IP von einigen externen Diensten und vergleicht sie mit der Ziel-IP.',
      },
      {
        fa: 'اگر IP فرق کند یا چند بار پیاپی اصلاً قابل بررسی نباشد (مثلاً قطع کامل اینترنت)، فهرستی از فرایندهای تعیین‌شده را با psutil می‌بندد. رفتار fail-safe: نبود اینترنت هم مثل نشت در نظر گرفته می‌شود.',
        en: 'If the IP differs, or can’t be checked several times in a row (a full internet outage), it closes a configured list of processes via psutil. Fail-safe: no internet is treated the same as a leak.',
        de: 'Weicht die IP ab oder ist sie mehrmals hintereinander nicht prüfbar (kompletter Internetausfall), schließt es per psutil eine konfigurierte Prozessliste. Fail-safe: kein Internet gilt wie ein Leak.',
      },
      {
        fa: 'همه‌ی تنظیمات — IP هدف، بازه، تعداد خطای مجاز، فهرست برنامه‌ها — بالای فایل است. بدون سرویس پس‌زمینه، فقط یک اسکریپت.',
        en: 'All settings — target IP, interval, allowed failures, app list — sit at the top of the file. No background service, just a script.',
        de: 'Alle Einstellungen — Ziel-IP, Intervall, erlaubte Fehler, App-Liste — stehen oben in der Datei. Kein Hintergrunddienst, nur ein Skript.',
      },
    ],
    features: [
      { fa: 'بررسی دوره‌ای IP عمومی', en: 'Periodic public-IP checks', de: 'Regelmäßige Prüfung der öffentlichen IP' },
      { fa: 'بستن خودکار فهرست برنامه‌ها هنگام تغییر IP', en: 'Auto-close a list of apps on IP change', de: 'App-Liste bei IP-Wechsel automatisch schließen' },
      { fa: 'رفتار fail-safe در قطع اینترنت', en: 'Fail-safe on internet loss', de: 'Fail-safe bei Internetausfall' },
      { fa: 'تنظیمات ساده در یک فایل', en: 'Simple single-file configuration', de: 'Einfache Ein-Datei-Konfiguration' },
      { fa: 'بدون سرویس پس‌زمینه', en: 'No background service', de: 'Kein Hintergrunddienst' },
    ],
    result: {
      fa: 'یک ابزار سبک که با pip نصب و با یک دستور اجرا می‌شود.',
      en: 'A lightweight tool installed with pip and run with a single command.',
      de: 'Ein leichtes Tool, mit pip installiert und mit einem Befehl gestartet.',
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
    overview: {
      fa: 'یک وب‌سایت فروشگاهی چندصفحه‌ای برای یک پت‌شاپ، ساخته‌شده فقط با HTML و CSS. تمرکز روی چیدمان واکنش‌گرا، رابط تمیز و بارگذاری سریع بدون هیچ فریم‌ورکی.',
      en: 'A multi-page storefront for a pet shop, built with just HTML and CSS. The focus is a responsive layout, a clean interface, and fast loading with no framework.',
      de: 'Eine mehrseitige Storefront für eine Zoohandlung, gebaut nur mit HTML und CSS. Der Fokus liegt auf responsivem Layout, klarer Oberfläche und schnellem Laden ohne Framework.',
    },
    problem: {
      fa: 'نیاز به یک نمای فروشگاهی سبک بود که روی هاست استاتیک ساده میزبانی شود و وابستگی به build یا فریم‌ورک نداشته باشد.',
      en: 'A lightweight storefront was needed that hosts on plain static hosting with no build step or framework dependency.',
      de: 'Gebraucht wurde eine leichte Storefront, die auf einfachem Static-Hosting ohne Build-Schritt oder Framework-Abhängigkeit läuft.',
    },
    build: [
      {
        fa: 'ساختار چندصفحه‌ای (غذا، اسباب‌بازی، مراقبت) با CSS دستی و بدون کتابخانه.',
        en: 'A multi-page structure (food, toys, care) with hand-written CSS and no libraries.',
        de: 'Eine mehrseitige Struktur (Futter, Spielzeug, Pflege) mit handgeschriebenem CSS und ohne Bibliotheken.',
      },
      {
        fa: 'چیدمان واکنش‌گرا برای موبایل و دسکتاپ.',
        en: 'A responsive layout for mobile and desktop.',
        de: 'Ein responsives Layout für Mobil und Desktop.',
      },
    ],
    features: [
      { fa: 'طراحی واکنش‌گرا', en: 'Responsive design', de: 'Responsives Design' },
      { fa: 'چند صفحه‌ی دسته‌بندی', en: 'Several category pages', de: 'Mehrere Kategorieseiten' },
      { fa: 'بدون فریم‌ورک', en: 'No framework', de: 'Kein Framework' },
      { fa: 'میزبانی روی GitHub Pages', en: 'Hosted on GitHub Pages', de: 'Gehostet auf GitHub Pages' },
    ],
    result: {
      fa: 'روی GitHub Pages منتشر شده و روی موبایل و دسکتاپ روان است.',
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
    overview: {
      fa: 'همین سایت. به‌جای یک فهرست معمولی، صفحه‌ی اصلی یک نقشه‌ی معماری تعاملی است و یک کنسول دارد که بخش‌های سایت را مثل مسیرهای یک API برمی‌گرداند.',
      en: 'This site. Instead of a plain list, its home page is an interactive architecture map, and it has a console that returns the site’s sections like API routes.',
      de: 'Diese Seite. Statt einer schlichten Liste ist ihre Startseite eine interaktive Architekturkarte, und sie hat eine Konsole, die die Bereiche wie API-Routen zurückgibt.',
    },
    problem: {
      fa: 'یک پورتفولیو که خودش هم یک نمونه‌ی کار فرانت‌اند باشد، نه فقط فهرستی از پروژه‌ها.',
      en: 'A portfolio that is also a frontend work sample, not just a list of projects.',
      de: 'Ein Portfolio, das selbst eine Frontend-Arbeitsprobe ist, nicht nur eine Projektliste.',
    },
    build: [
      {
        fa: 'React و Vite بدون فریم‌ورک اضافه. مسیر‌دهی سه‌زبانه (fa/en/de) با پشتیبانی کامل راست‌به‌چپ.',
        en: 'React and Vite with nothing extra. Trilingual routing (fa/en/de) with full right-to-left support.',
        de: 'React und Vite ohne Extras. Dreisprachiges Routing (fa/en/de) mit voller RTL-Unterstützung.',
      },
      {
        fa: 'نقشه‌ی سیستم یک SVG دست‌ساز با انیمیشن است؛ هر گره به یک بخش واقعی می‌رود.',
        en: 'The system map is a hand-built animated SVG; each node routes to a real section.',
        de: 'Die Systemkarte ist ein handgebautes animiertes SVG; jeder Knoten führt zu einem echten Bereich.',
      },
      {
        fa: 'کنسول با Ctrl+K باز می‌شود و به دستورهایی مثل GET /projects جواب JSON می‌دهد.',
        en: 'The console opens with Ctrl+K and answers commands like GET /projects with JSON.',
        de: 'Die Konsole öffnet mit Strg+K und beantwortet Befehle wie GET /projects mit JSON.',
      },
    ],
    features: [
      { fa: 'نقشه‌ی معماری تعاملی', en: 'Interactive architecture map', de: 'Interaktive Architekturkarte' },
      { fa: 'کنسول API با Ctrl+K', en: 'API console on Ctrl+K', de: 'API-Konsole per Strg+K' },
      { fa: 'سه‌زبانه با راست‌به‌چپ', en: 'Trilingual with RTL', de: 'Dreisprachig mit RTL' },
      { fa: 'استقرار خودکار روی GitHub Pages', en: 'Auto-deploy to GitHub Pages', de: 'Automatische Bereitstellung auf GitHub Pages' },
    ],
    result: {
      fa: 'با هر push روی main به‌صورت خودکار build و منتشر می‌شود.',
      en: 'Every push to main builds and publishes it automatically.',
      de: 'Jeder Push auf main baut und veröffentlicht sie automatisch.',
    },
    stack: ['React', 'Vite', 'React Router', 'SVG', 'GitHub Actions'],
    links: {
      code: 'https://github.com/erfanmohammadi1998/portfolio',
      demo: 'https://erfanmohammadi.ir',
    },
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) || null
}
