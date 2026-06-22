export default {
  tagline: 'Le motif caché dans chaque numéro de téléphone',
  headline: 'Le hasard',
  headlineAccent: "n'existe pas",
  subheadline:
    'Chaque personne a un numéro. Les 6 derniers chiffres deviennent une couleur extérieure—le moi que vous montrez au monde. Inversez-les et une seconde couleur apparaît : votre teinte intérieure cachée. Chaque nuance porte humeur, personnalité et sens psychologique. PartnerCheck vous laisse explorer les deux—et découvrir qui correspond vraiment.',
  chain: [
    { icon: 'person', text: 'Chaque personne a un téléphone' },
    { icon: 'digits', text: 'Chaque téléphone a 6 chiffres' },
    { icon: 'color', text: 'Ces chiffres deviennent votre couleur extérieure' },
    { icon: 'reverse', text: 'Inversez-les pour révéler la couleur intérieure' },
    { icon: 'mind', text: 'Chaque couleur a humeur, personnalité et sens' },
  ],
  punchline: "Il n'y a pas de hasard !",
  dualColor: {
    title: 'Deux couleurs. Deux couches de vous.',
    outerLabel: 'Couleur extérieure',
    outerDescription:
      'Les 6 derniers chiffres du numéro. Votre couleur de surface, la personnalité que vous projetez.',
    innerLabel: 'Couleur intérieure',
    innerDescription:
      'Les mêmes chiffres hex inversés—la bande en bas de la même carte. Votre teinte cachée : humeur, tempérament et sous-ton psychologique.',
  },
  psychology: {
    title: 'La couleur est plus qu\'un code',
    description:
      'Dans PartnerCheck, chaque nuance parle. Les tons chauds suggèrent énergie et ouverture ; les tons froids, profondeur et retenue. Les couleurs saturées sont audacieuses ; les atténuées, introspectives. Couleurs extérieure et intérieure peignent ensemble un portrait plus complet—et si vos motifs s\'alignent.',
    traits: ['Personnalité', 'Humeur', 'Tempérament', 'Sens caché'],
  },
  ordering: {
    title: 'Triez pour trouver votre meilleure affinité',
    description:
      'Choisissez n\'importe quel contact comme ancre et touchez l\'icône graphique—la liste se réordonne par score de compatibilité. Comptent les correspondances extérieur–extérieur, intérieur–intérieur et croisées. Les connexions les plus fortes remontent en haut pour repérer le meilleur match d\'un coup d\'œil.',
    hint: 'Changez d\'ancre à tout moment pour classer la liste du point de vue de quelqu\'un d\'autre.',
    rankedLabel: 'Classé par affinité · ancre : Alex',
    scores: { strong: 'Forte', medium: 'Moyenne', low: 'Faible' },
    chartCaption: 'Icône graphique · réordonner par nombre de correspondances',
  },
  favorites: {
    title: 'Composez une liste de favoris',
    description:
      'Touchez le cœur sur un contact pour le marquer favori. Puis ouvrez la vue favoris depuis la barre du haut—la liste se limite aux personnes qui comptent le plus, pour comparer couleurs et affinités sans parcourir tous les contacts.',
    hint: 'Revenez à tous les contacts quand vous voulez. Vos favoris restent enregistrés sur votre appareil.',
    viewLabel: 'Vue favoris',
    hudOn: 'HUD · favoris activés',
    heartCaption: 'Icône cœur · marquer le contact comme favori',
  },
  features: [
    {
      title: 'Révélation extérieur → intérieur',
      description:
        'Parcourez les contacts et levez la surface. La couleur intérieure des chiffres inversés est toujours là—en attente d\'être vue.',
    },
    {
      title: 'Explorez et classez les affinités',
      description:
        'Placez des contacts côte à côte et sentez les vibrations quand les couleurs s\'alignent. Puis triez toute la liste par force d\'affinité pour voir qui est en tête.',
    },
    {
      title: 'Gardez ceux qui comptent',
      description:
        'Mettez un cœur aux contacts que vous voulez garder proches. Créez une liste de favoris personnelle et basculez dessus en un tap pour approfondir.',
    },
    {
      title: 'Vos données restent les vôtres',
      description: 'Contacts choisis par vous, stockés localement sur votre appareil. Accès lecture seule. Zéro serveur.',
    },
  ],
  matchQuestion: 'Ça matche, ou pas ?',
  ctaPrimary: 'Obtenir PartnerCheck',
  ctaSecondary: 'Confidentialité et autorisations',
  platforms: 'Disponible sur iOS et Android',
  ui: {
    oneCardTwoLayers: 'Une carte · deux couches',
    sameContactReversed: 'Même contact · chiffres inversés',
    innerColorStrip: 'Couleur intérieure',
    outerTooltip: 'Extérieur',
    innerTooltip: 'Intérieur',
  },
  demoContacts: [
    { mood: 'Passionné · Audacieux' },
    { mood: 'Calme · Curieux' },
    { mood: 'Ancré · Chaleureux' },
  ],
}
