// schemas/service.js
export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre du service',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'features',
      title: 'Caractéristiques',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste des points clés du service'
    },
    {
      name: 'icon',
      title: 'Icône',
      type: 'string',
      options: {
        list: [
          {title: 'Éclair (Zap)', value: 'zap'},
          {title: 'Clé (Wrench)', value: 'wrench'},
          {title: 'Vent (Wind)', value: 'wind'},
          {title: 'Cible (Target)', value: 'target'},
          {title: 'Réglages (Settings)', value: 'settings'},
          {title: 'Alerte (Alert)', value: 'alert'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'color',
      title: 'Dégradé de couleur',
      type: 'string',
      options: {
        list: [
          {title: 'Gris foncé', value: 'from-zinc-700 to-zinc-900'},
          {title: 'Bleu', value: 'from-blue-600 to-blue-800'},
          {title: 'Rouge', value: 'from-red-600 to-red-800'},
          {title: 'Vert', value: 'from-green-600 to-green-800'},
          {title: 'Orange', value: 'from-orange-600 to-orange-800'},
          {title: 'Violet', value: 'from-purple-600 to-purple-800'},
        ]
      },
      initialValue: 'from-zinc-700 to-zinc-900'
    },
    {
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Ordre dans lequel le service apparaît (1, 2, 3...)',
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order'
    },
    prepare(selection) {
      const { title, order } = selection;
      return {
        title: `${order}. ${title}`
      };
    }
  }
};