export default {
  name: 'realisation',
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
      title: 'Description',
      type: 'text',
      rows: 4
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'categorie',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Préparation moteur', value: 'moteur'},
          {title: 'Échappement', value: 'echappement'},
          {title: 'Admission', value: 'admission'},
          {title: 'Esthétique', value: 'esthetique'},
          {title: 'Suspension', value: 'suspension'},
          {title: 'Freinage', value: 'freinage'},
        ]
      }
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'titre',
      media: 'images.0',
      date: 'date'
    }
  }
}