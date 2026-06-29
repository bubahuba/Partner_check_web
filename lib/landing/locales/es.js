export default {
  tagline: 'El patrón oculto en cada número de teléfono',
  headline: 'La coincidencia',
  headlineAccent: 'no existe',
  subheadline:
    'Cada persona tiene un número. Los últimos 6 dígitos se convierten en un color exterior—el yo que muestras al mundo. Invíertelos y aparece un segundo color: tu matiz interior oculto. Cada tono lleva humor, personalidad y significado psicológico. PartnerCheck te deja explorar ambos—y descubrir quién encaja de verdad.',
  chain: [
    { icon: 'person', text: 'Cada persona tiene un teléfono' },
    { icon: 'digits', text: 'Cada teléfono tiene 6 dígitos' },
    { icon: 'color', text: 'Esos dígitos se convierten en tu color exterior' },
    { icon: 'reverse', text: 'Inviértelos para revelar el color interior' },
    { icon: 'mind', text: 'Cada color tiene humor, personalidad y significado' },
  ],
  punchline: '¡No hay coincidencia!',
  dualColor: {
    title: 'Dos colores. Dos capas de ti.',
    outerLabel: 'Color exterior',
    outerDescription:
      'Los últimos 6 dígitos del número. Tu color de superficie, la personalidad que proyectas.',
    innerLabel: 'Color interior',
    innerDescription:
      'Los mismos dígitos hex invertidos—la franja en la parte inferior de la misma tarjeta. Tu matiz oculto: humor, temperamento y subtono psicológico.',
  },
  psychology: {
    title: 'El color es más que un código',
    description:
      'En PartnerCheck, cada matiz habla. Los tonos cálidos sugieren energía y apertura; los fríos, profundidad y reserva. Los colores saturados son audaces; los apagados, introspectivos. Colores exterior e interior juntos pintan un retrato más completo—y si vuestros patrones encajan.',
    traits: ['Personalidad', 'Humor', 'Temperamento', 'Significado oculto'],
  },
  ordering: {
    title: 'Ordena para encontrar tu mejor match',
    description:
      'Elige cualquier contacto como ancla y toca el icono de gráfico—la lista se reordena por puntuación de compatibilidad. Cuentan las coincidencias exterior–exterior, interior–interior y cruzadas. Las conexiones más fuertes suben arriba para ver el mejor encaje de un vistazo.',
    hint: 'Cambia de ancla cuando quieras para clasificar la lista desde la perspectiva de otra persona.',
    rankedLabel: 'Ordenado por match · ancla: Alex',
    scores: { strong: 'Fuerte', medium: 'Media', low: 'Baja' },
    chartCaption: 'Icono de gráfico · reordenar por número de coincidencias',
  },
  favorites: {
    title: 'Crea una lista de favoritos',
    description:
      'Toca el corazón en un contacto para marcarlo como favorito. Luego abre la vista de favoritos desde la barra superior—la lista se reduce a las personas que más te importan, para comparar colores y matches sin recorrer todos los contactos.',
    hint: 'Vuelve a todos los contactos cuando quieras. Tus favoritos quedan guardados en el dispositivo.',
    viewLabel: 'Vista de favoritos',
    hudOn: 'HUD · favoritos activos',
    heartCaption: 'Icono de corazón · marcar contacto como favorito',
  },
  features: [
    {
      title: 'Revelación exterior → interior',
      description:
        'Desliza contactos y quita la superficie. El color interior de los dígitos invertidos siempre está ahí—esperando ser visto.',
    },
    {
      title: 'Explora y clasifica matches',
      description:
        'Coloca contactos lado a lado y siente vibraciones cuando los colores encajan. Luego ordena toda la lista por fuerza de match y descubre quién está arriba.',
    },
    {
      title: 'Guarda a quien importa',
      description:
        'Marca con corazón los contactos que quieres cerca. Crea una lista personal de favoritos y cámbiala con un toque cuando quieras profundizar.',
    },
    {
      title: 'Tus datos siguen siendo tuyos',
      description: 'Contactos que eliges, almacenados localmente en tu dispositivo. Acceso solo lectura. Cero servidores.',
    },
  ],
  matchQuestion: '¿Encaja o no?',
  ctaPrimary: 'Obtener PartnerCheck',
  ctaWebApp: 'Ejecutar en el navegador',
  ctaSecondary: 'Privacidad y permisos',
  platforms: 'Disponible en iOS y Android',
  ui: {
    oneCardTwoLayers: 'Una tarjeta · dos capas',
    sameContactReversed: 'Mismo contacto · dígitos invertidos',
    innerColorStrip: 'Color interior',
    outerTooltip: 'Exterior',
    innerTooltip: 'Interior',
  },
}
