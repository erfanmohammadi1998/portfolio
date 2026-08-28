// "At a glance" — key/value facts, shown on the home page and returned by
// GET /whoami in the API console. Keep these honest and low-maintenance.

export const stats = [
  {
    key: 'focus',
    label: { fa: 'تمرکز', en: 'Focus', de: 'Fokus' },
    value: {
      fa: 'بک‌اند و فول‌استک',
      en: 'Backend & full stack',
      de: 'Backend & Full Stack',
    },
  },
  {
    key: 'core',
    label: { fa: 'هسته‌ی استک', en: 'Core stack', de: 'Kern-Stack' },
    value: { fa: 'Python · Django · React', en: 'Python · Django · React', de: 'Python · Django · React' },
  },
  {
    key: 'data',
    label: { fa: 'داده', en: 'Data', de: 'Daten' },
    value: { fa: 'SQL Server · PostgreSQL', en: 'SQL Server · PostgreSQL', de: 'SQL Server · PostgreSQL' },
  },
  {
    key: 'based',
    label: { fa: 'محل', en: 'Based in', de: 'Standort' },
    value: { fa: 'تهران، ایران', en: 'Tehran, Iran', de: 'Teheran, Iran' },
  },
]
