export default {
  name: 'realisations',
  title: 'Réalisations',
  type: 'document',
  fields: [
    {
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titre' },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description courte',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'fullDescription',
      title: 'Description complète',
      type: 'text',
      rows: 10,
    },
    {
      name: 'categorie',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Reprogrammation', value: 'reprogrammation'},
          {title: 'Préparation moteur', value: 'moteur'},
          {title: 'Échappement', value: 'echappement'},
          {title: 'Admission', value: 'admission'},
          {title: 'Esthétique', value: 'esthetique'},
          {title: 'Suspension', value: 'suspension'},
          {title: 'Freinage', value: 'freinage'},
          {title: 'Préparation circuit', value: 'circuit'},
          {title: 'Pack performance', value: 'pack'},
          {title: 'Installation racing', value: 'pieces'},
          {title: 'Préparations extrêmes', value: 'extreme'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'before',
      title: 'Puissance avant (ch)',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'after',
      title: 'Puissance après (ch)',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'beforeTorque',
      title: 'Couple avant (Nm)',
      type: 'number'
    },
    {
      name: 'afterTorque',
      title: 'Couple après (Nm)',
      type: 'number'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'specs',
      title: 'Spécifications/Modifications',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'technicalData',
      title: 'Données techniques',
      type: 'object',
      fields: [
        {
          name: 'vehicle',
          title: 'Véhicule',
          type: 'string'
        },
        {
          name: 'year',
          title: 'Année',
          type: 'string'
        },
        {
          name: 'engine',
          title: 'Moteur',
          type: 'string'
        },
        {
          name: 'transmission',
          title: 'Transmission',
          type: 'string'
        },
        {
          name: 'mileage',
          title: 'Kilométrage',
          type: 'string'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'titre',
      media: 'images.0',
      before: 'before',
      after: 'after',
    },
    prepare(selection) {
      const { title, before, after } = selection;
      return {
        title: title,
        subtitle: `${before}ch → ${after}ch`
      };
    }
  }
}