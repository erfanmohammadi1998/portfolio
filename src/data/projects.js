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
    arch: ['client', 'API', 'tenants', 'database'],
    title: {
      fa: 'پلتفرم مدیریت آموزشگاه زبان',
      en: 'Language School Platform',
      de: 'Sprachschul-Plattform',
    },
    tagline: {
      fa: 'مدیریت کامل یک آموزشگاه زبان در یک سامانه — از ثبت‌نام و کلاس تا آزمون، پرداخت، صدور گواهی و گزارش مالی.',
      en: 'A whole language academy in one system — enrollment and classes through exams, payments, certificates, and financial reporting.',
      de: 'Eine ganze Sprachakademie in einem System — von Anmeldung und Kursen bis zu Prüfungen, Zahlungen, Zertifikaten und Finanzberichten.',
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
      fa: 'نگهداری ساخت‌یافته‌ی رزومه‌ی متقاضیان، با سوابق شغلی، تحصیلی و مهارت‌های قابل جست‌وجو.',
      en: 'Structured storage of candidate resumes — searchable work history, education, and skills.',
      de: 'Strukturierte Ablage von Bewerber-Lebensläufen — durchsuchbare Berufserfahrung, Ausbildung und Fähigkeiten.',
    },
    overview: {
      fa: 'یک سامانه برای نگهداری ساخت‌یافته‌ی رزومه‌ی متقاضیان — به‌جای پوشه‌ای از فایل‌های PDF — که هر رزومه را به سوابق شغلی، تحصیلات و مهارت‌های قابل جست‌وجو می‌شکند.',
      en: 'A system for holding candidate resumes in a structured form — instead of a folder of PDFs — breaking each resume into searchable work history, education, and skills.',
      de: 'Ein System, das Bewerber-Lebensläufe strukturiert hält — statt eines Ordners voller PDFs — und jeden Lebenslauf in durchsuchbare Berufserfahrung, Ausbildung und Fähigkeiten zerlegt.',
    },
    problem: {
      fa: 'رزومه‌ها به‌صورت فایل نگه داشته می‌شدند. برای پیدا کردن «کسی که چند سال Django کار کرده و لیسانس نرم‌افزار دارد» باید ده‌ها فایل باز می‌شد.',
      en: 'Resumes were kept as files. Finding "someone with a few years of Django and a software degree" meant opening dozens of them.',
      de: 'Lebensläufe wurden als Dateien abgelegt. „Jemand mit einigen Jahren Django und einem Software-Abschluss“ zu finden hieß, Dutzende davon zu öffnen.',
    },
    build: [
      {
        fa: 'مدل داده در Django: یک متقاضی با چند سابقه‌ی شغلی، چند رکورد تحصیلی و چند مهارت (هر کدام با سطح). این ساختار جست‌وجو و فیلتر روی هر بخش را ممکن می‌کند.',
        en: 'The Django data model: one candidate with several work-experience entries, several education records, and several skills (each with a level). This structure makes each part searchable and filterable.',
        de: 'Das Django-Datenmodell: ein Bewerber mit mehreren Berufserfahrungen, mehreren Ausbildungseinträgen und mehreren Fähigkeiten (je mit Niveau). Diese Struktur macht jeden Teil durchsuchbar und filterbar.',
      },
      {
        fa: 'API با Django REST Framework و احراز هویت JWT، به‌همراه مستندات OpenAPI که به‌صورت خودکار از خود کد تولید می‌شود.',
        en: 'A Django REST Framework API with JWT auth, plus OpenAPI docs generated automatically from the code itself.',
        de: 'Eine Django-REST-Framework-API mit JWT-Auth, dazu OpenAPI-Doku, die automatisch aus dem Code selbst erzeugt wird.',
      },
      {
        fa: 'فرانت‌اند React (Vite و Tailwind) با داشبورد، فهرست متقاضیان و فرم‌های ثبت.',
        en: 'A React frontend (Vite and Tailwind) with a dashboard, a candidate list, and intake forms.',
        de: 'Ein React-Frontend (Vite und Tailwind) mit Dashboard, Bewerberliste und Erfassungsformularen.',
      },
    ],
    features: [
      { fa: 'مدل ساخت‌یافته: متقاضی، سابقه، تحصیلات، مهارت', en: 'Structured model: candidate, history, education, skill', de: 'Strukturiertes Modell: Bewerber, Verlauf, Ausbildung, Fähigkeit' },
      { fa: 'جست‌وجو و فیلتر روی مهارت و سابقه', en: 'Search and filter over skill and history', de: 'Suche und Filter über Fähigkeit und Verlauf' },
      { fa: 'احراز هویت JWT', en: 'JWT authentication', de: 'JWT-Authentifizierung' },
      { fa: 'مستندات API خودکار (OpenAPI / Swagger)', en: 'Auto API docs (OpenAPI / Swagger)', de: 'Automatische API-Doku (OpenAPI / Swagger)' },
      { fa: 'داشبورد و فهرست متقاضیان', en: 'Dashboard and candidate list', de: 'Dashboard und Bewerberliste' },
    ],
    result: {
      fa: 'اطلاعات متقاضیان از فایل‌های پراکنده به یک منبع ساخت‌یافته و قابل جست‌وجو تبدیل شد و از طریق API هم قابل استفاده است.',
      en: 'Candidate information went from scattered files to a structured, searchable source that is also usable through the API.',
      de: 'Bewerberinformationen wurden von verstreuten Dateien zu einer strukturierten, durchsuchbaren Quelle, die auch über die API nutzbar ist.',
    },
    stack: ['Django', 'Django REST Framework', 'JWT', 'drf-spectacular', 'React', 'Vite', 'Tailwind CSS'],
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
