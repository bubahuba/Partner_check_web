export default {
  tagline: 'Skrytý vzorec v každém telefonním čísle',
  headline: 'Náhoda',
  headlineAccent: 'neexistuje',
  subheadline:
    'Každý člověk má číslo. Posledních 6 číslic se stane vnější barvou—já, které ukazujete světu. Otočte je a objeví se druhá barva: vaše skrytá vnitřní odstín. Každý odstín nese náladu, osobnost a psychologický význam. PartnerCheck vám umožní prozkoumat obě vrstvy—a zjistit, kdo vám skutečně sedí.',
  chain: [
    { icon: 'person', text: 'Každý člověk má telefon' },
    { icon: 'digits', text: 'Každý telefon má 6 číslic' },
    { icon: 'color', text: 'Tyto číslice se stanou vaší vnější barvou' },
    { icon: 'reverse', text: 'Otočte je a odhalte vnitřní barvu' },
    { icon: 'mind', text: 'Každá barva má náladu, osobnost a význam' },
  ],
  punchline: 'Náhoda neexistuje!',
  dualColor: {
    title: 'Dvě barvy. Dvě vrstvy vás.',
    outerLabel: 'Vnější barva',
    outerDescription:
      'Posledních 6 číslic telefonního čísla. Vaše povrchová barva, osobnost, kterou vystavujete.',
    innerLabel: 'Vnitřní barva',
    innerDescription:
      'Stejné hex číslice obrácené—pruh ve spodní části stejné karty. Vaše skrytá barva: nálada, temperament a psychologický podtón.',
  },
  psychology: {
    title: 'Barva je víc než kód',
    description:
      'V PartnerChecku každý odstín mluví. Teplé tóny naznačují energii a otevřenost; chladné hloubku a zdrženlivost. Syté barvy působí odvážně; tlumené introspektivně. Vnější a vnitřní barva dohromady vykreslí plnější obraz toho, kdo někdo je—a zda se vaše vzorce shodují.',
    traits: ['Osobnost', 'Nálada', 'Temperament', 'Skrytý význam'],
  },
  ordering: {
    title: 'Seřaďte a najděte nejlepší shodu',
    description:
      'Vyberte libovolný kontakt jako kotvu a klepněte na ikonu grafu—seznam se seřadí podle skóre kompatibility. Počítají se shody vnější–vnější, vnitřní–vnitřní i mezi vrstvami. Nejsilnější propojení vyplují nahoru, abyste na první pohled viděli nejlepší fit.',
    hint: 'Kdykoli změňte kotvu a seřaďte seznam z pohledu někoho jiného.',
    rankedLabel: 'Seřazeno podle shody · kotva: Alex',
    scores: { strong: 'Silná', medium: 'Střední', low: 'Slabá' },
    chartCaption: 'Ikona grafu · seřadit podle počtu shod',
  },
  favorites: {
    title: 'Sestavte seznam oblíbených',
    description:
      'Klepněte na srdce u kontaktu a označte ho jako oblíbený. Pak otevřete zobrazení oblíbených v horní liště—seznam se zuží na lidi, na kterých vám nejvíc záleží, abyste mohli porovnávat barvy a shody bez procházení všech kontaktů.',
    hint: 'Kdykoli se vraťte ke všem kontaktům. Oblíbené zůstávají uložené v zařízení.',
    viewLabel: 'Zobrazení oblíbených',
    hudOn: 'HUD · oblíbené zapnuto',
    heartCaption: 'Ikona srdce · označit kontakt jako oblíbený',
  },
  features: [
    {
      title: 'Odhalení vnější → vnitřní',
      description:
        'Procházejte kontakty a odkrývejte povrch. Vnitřní barva z obrácených číslic je vždy tam—čeká, až ji uvidíte.',
    },
    {
      title: 'Prozkoumejte a seřaďte shody',
      description:
        'Spárujte kontakty vedle sebe a cítěte vibrace, když se barvy shodují. Pak seřaďte celý seznam podle síly shody a zjistěte, kdo je nahoře.',
    },
    {
      title: 'Uložte, na kom vám záleží',
      description:
        'Označte srdcem kontakty, které chcete mít blízko. Vytvořte osobní seznam oblíbených a jedním klepnutím na něj přepněte, až budete chtít jít hlouběji.',
    },
    {
      title: 'Vaše data zůstávají vaše',
      description: 'Kontakty, které si vyberete, uložené lokálně v zařízení. Přístup jen ke čtení. Žádné servery.',
    },
  ],
  matchQuestion: 'Ladí tedy, nebo ne?',
  ctaPrimary: 'Stáhnout PartnerCheck',
  ctaSecondary: 'Soukromí a oprávnění',
  platforms: 'Dostupné pro iOS a Android',
  ui: {
    oneCardTwoLayers: 'Jedna karta · dvě vrstvy',
    sameContactReversed: 'Stejný kontakt · číslice obrácené',
    innerColorStrip: 'Vnitřní barva',
    outerTooltip: 'Vnější',
    innerTooltip: 'Vnitřní',
  },
}
