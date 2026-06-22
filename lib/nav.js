export const navLabels = {
  documentation: {
    en: 'Documentation',
    cz: 'Dokumentace',
    sk: 'Dokumentácia',
    pl: 'Dokumentacja',
    hu: 'Dokumentáció',
    fr: 'Documentation',
    it: 'Documentazione',
    es: 'Documentación',
    ja: 'ドキュメント',
    zh: '文档',
    hi: 'दस्तावेज़',
    nl: 'Documentatie',
    de: 'Dokumentation',
    pt: 'Documentação',
    ru: 'Документация',
    ua: 'Документація',
    ar: 'التوثيق',
    he: 'תיעוד',
  },
}

export function getNavLabel(key, locale) {
  return navLabels[key]?.[locale] || navLabels[key]?.en || ''
}
