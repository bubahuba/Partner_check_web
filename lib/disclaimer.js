export const documentationDisclaimer = {
  en: 'PartnerCheck is for fun and entertainment only. Do not make serious life decisions—such as marriage or divorce—based on what this app reveals about color matches or compatibility.',
  cz: 'PartnerCheck slouží pouze pro zábavu. Nepoužívejte ho k vážným životním rozhodnutím—jako je sňatek nebo rozvod—na základě toho, co aplikace ukáže o shodách barev nebo kompatibilitě.',
  sk: 'PartnerCheck slúži len na zábavu. Nepoužívajte ho na vážne životné rozhodnutia—ako sobáš alebo rozvod—na základe toho, čo aplikácia ukáže o zhodách farieb alebo kompatibilite.',
  pl: 'PartnerCheck służy wyłącznie rozrywce. Nie podejmuj poważnych decyzji życiowych—takich jak małżeństwo czy rozwód—na podstawie tego, co aplikacja ujawnia o dopasowaniu kolorów lub kompatybilności.',
  hu: 'A PartnerCheck csak szórakoztatásra szolgál. Ne hozzon komoly életdöntéseket—mint a házasság vagy a válás—a szín-egyezések vagy a kompatibilitás alapján.',
  fr: 'PartnerCheck est destiné au divertissement uniquement. Ne prenez pas de décisions de vie importantes—comme le mariage ou le divorce—en fonction des correspondances de couleurs ou des scores de compatibilité.',
  it: 'PartnerCheck è solo a scopo di intrattenimento. Non prendere decisioni di vita importanti—come matrimonio o divorzio—in base a ciò che l\'app rivela su abbinamenti di colori o compatibilità.',
  es: 'PartnerCheck es solo para diversión. No tomes decisiones importantes de vida—como matrimonio o divorcio—según lo que la app revele sobre coincidencias de colores o compatibilidad.',
  ja: 'PartnerCheckは娯楽目的のみです。色の一致や相性の結果に基づいて、結婚や離婚などの重大な人生の決断をしないでください。',
  zh: 'PartnerCheck 仅供娱乐。请勿根据应用显示的颜色匹配或相容性结果，做出结婚或离婚等重大人生决定。',
  hi: 'PartnerCheck केवल मनोरंजन के लिए है। रंग मेल या अनुकूलता के आधार पर शादी या तलाक जैसे गंभीर जीवन निर्णय न लें।',
  nl: 'PartnerCheck is alleen bedoeld voor entertainment. Neem geen belangrijke levensbeslissingen—zoals trouwen of scheiden—op basis van kleurmatches of compatibiliteit.',
  de: 'PartnerCheck dient nur der Unterhaltung. Treffen Sie keine wichtigen Lebensentscheidungen—wie Heirat oder Scheidung—auf Grundlage von Farbübereinstimmungen oder Kompatibilität.',
  pt: 'O PartnerCheck é apenas para diversão. Não tome decisões importantes de vida—como casamento ou divórcio—com base no que o app revela sobre combinações de cores ou compatibilidade.',
  ru: 'PartnerCheck предназначен только для развлечения. Не принимайте серьёзные жизненные решения—такие как брак или развод—на основе совпадений цветов или совместимости.',
  ua: 'PartnerCheck призначений лише для розваги. Не приймайте серйозних життєвих рішень—таких як шлюб чи розлучення—на основі збігів кольорів або сумісності.',
  ar: 'PartnerCheck للترفيه فقط. لا تتخذ قرارات حياتية خطيرة—مثل الزواج أو الطلاق—بناءً على ما يكشفه التطبيق عن تطابق الألوان أو التوافق.',
  he: 'PartnerCheck מיועד לבידור בלבד. אל תקבלו החלטות חיים משמעותיות—כמו נישואין או גירושין—על בסיס התאמות צבעים או תוצאות תאימות.',
}

export function getDocumentationDisclaimer(locale) {
  return documentationDisclaimer[locale] || documentationDisclaimer.en
}
