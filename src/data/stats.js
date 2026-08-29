// "At a glance" — key/value facts, shown on the home page and returned by
// GET /whoami in the API console.

export const stats = [
  {
    key: 'focus',
    label: { fa: 'تمرکز', en: 'Focus', de: 'Fokus' },
    value: {
      fa: 'بک‌اند و پایگاه داده',
      en: 'Backend & databases',
      de: 'Backend & Datenbanken',
    },
  },
  {
    key: 'core',
    label: { fa: 'هسته‌ی استک', en: 'Core stack', de: 'Kern-Stack' },
    value: { fa: 'Python · Django · DRF', en: 'Python · Django · DRF', de: 'Python · Django · DRF' },
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
