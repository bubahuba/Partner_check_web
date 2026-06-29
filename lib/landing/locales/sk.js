export default {
  tagline: 'Skrytý vzorec v každom telefónnom čísle',
  headline: 'Náhoda',
  headlineAccent: 'neexistuje',
  subheadline:
    'Každý človek má číslo. Posledných 6 číslic sa stane vonkajšou farbou—ja, ktoré ukazujete svetu. Otočte ich a objaví sa druhá farba: vaša skrytá vnútorná odtieň. Každý odtieň nesie náladu, osobnosť a psychologický význam. PartnerCheck vám umožní preskúmať obe vrstvy—a zistiť, kto vám naozaj sedí.',
  chain: [
    { icon: 'person', text: 'Každý človek má telefón' },
    { icon: 'digits', text: 'Každý telefón má 6 číslic' },
    { icon: 'color', text: 'Tieto číslice sa stanú vašou vonkajšou farbou' },
    { icon: 'reverse', text: 'Otočte ich a odhaľte vnútornú farbu' },
    { icon: 'mind', text: 'Každá farba má náladu, osobnosť a význam' },
  ],
  punchline: 'Náhoda neexistuje!',
  dualColor: {
    title: 'Dve farby. Dve vrstvy vás.',
    outerLabel: 'Vonkajšia farba',
    outerDescription:
      'Posledných 6 číslic telefónneho čísla. Vaša povrchová farba, osobnosť, ktorú vystavujete.',
    innerLabel: 'Vnútorná farba',
    innerDescription:
      'Rovnaké hex číslice obrátené—pás v spodnej časti tej istej karty. Vaša skrytá farba: nálada, temperament a psychologický podtón.',
  },
  psychology: {
    title: 'Farba je viac než kód',
    description:
      'V PartnerChecku každý odtieň hovorí. Teplé tóny naznačujú energiu a otvorenosť; chladné hĺbku a zdržanlivosť. Sýte farby pôsobia odvážne; tlmené introspektívne. Vonkajšia a vnútorná farba spolu vykreslia plnší obraz toho, kto niekto je—a či sa vaše vzorce zhodujú.',
    traits: ['Osobnosť', 'Nálada', 'Temperament', 'Skrytý význam'],
  },
  ordering: {
    title: 'Zoraďte a nájdite najlepšiu zhodu',
    description:
      'Vyberte ľubovoľný kontakt ako kotvu a klepnite na ikonu grafu—zoznam sa zoradí podľa skóre kompatibility. Počítajú sa zhody vonkajšia–vonkajšia, vnútorná–vnútorná aj medzi vrstvami. Najsilnejšie spojenia vyplávajú hore, aby ste na prvý pohľad videli najlepší fit.',
    hint: 'Kedykoľvek zmeňte kotvu a zoraďte zoznam z pohľadu niekoho iného.',
    rankedLabel: 'Zoradené podľa zhody · kotva: Alex',
    scores: { strong: 'Silná', medium: 'Stredná', low: 'Slabá' },
    chartCaption: 'Ikona grafu · zoradiť podľa počtu zhôd',
  },
  favorites: {
    title: 'Vytvorte zoznam obľúbených',
    description:
      'Klepnite na srdce pri kontakte a označte ho ako obľúbený. Potom otvorte zobrazenie obľúbených v hornej lište—zoznam sa zúži na ľudí, na ktorých vám najviac záleží, aby ste mohli porovnávať farby a zhody bez prechádzania všetkých kontaktov.',
    hint: 'Kedykoľvek sa vráťte ku všetkým kontaktom. Obľúbené zostávajú uložené v zariadení.',
    viewLabel: 'Zobrazenie obľúbených',
    hudOn: 'HUD · obľúbené zapnuté',
    heartCaption: 'Ikona srdca · označiť kontakt ako obľúbený',
  },
  features: [
    {
      title: 'Odhalenie vonkajšia → vnútorná',
      description:
        'Prechádzajte kontakty a odkrývajte povrch. Vnútorná farba z obrátených číslic je vždy tam—čaká, kým ju uvidíte.',
    },
    {
      title: 'Preskúmajte a zoraďte zhody',
      description:
        'Spárujte kontakty vedľa seba a cítite vibrácie, keď sa farby zhodujú. Potom zoraďte celý zoznam podľa sily zhody a zistite, kto je navrchu.',
    },
    {
      title: 'Uložte, na kom vám záleží',
      description:
        'Označte srdcom kontakty, ktoré chcete mať blízko. Vytvorte osobný zoznam obľúbených a jedným klepnutím naň prepnite, keď budete chcieť ísť hlbšie.',
    },
    {
      title: 'Vaše údaje zostávajú vaše',
      description: 'Kontakty, ktoré si vyberiete, uložené lokálne v zariadení. Prístup len na čítanie. Žiadne servery.',
    },
  ],
  matchQuestion: 'Ladí teda? Neladí?',
  ctaPrimary: 'Stiahnuť PartnerCheck',
  ctaWebApp: 'Spustiť v prehliadači',
  ctaSecondary: 'Súkromie a oprávnenia',
  platforms: 'Dostupné pre iOS a Android',
  ui: {
    oneCardTwoLayers: 'Jedna karta · dve vrstvy',
    sameContactReversed: 'Rovnaký kontakt · číslice obrátené',
    innerColorStrip: 'Vnútorná farba',
    outerTooltip: 'Vonkajšia',
    innerTooltip: 'Vnútorná',
  },
}
