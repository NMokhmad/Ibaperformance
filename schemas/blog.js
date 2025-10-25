// schemas/blog.js
export default {
  name: 'blog',
  title: 'Articles de Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Résumé court',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Contenu de l\'article',
      type: 'blockContent',
      // OU utilise 'text' si tu n'as pas blockContent
      // type: 'text',
      // rows: 20,
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Guides', value: 'guides'},
          {title: 'Tutoriels', value: 'tutoriels'},
          {title: 'Actualités', value: 'actualites'},
          {title: 'Conseils', value: 'conseils'},
          {title: 'Préparation', value: 'preparation'},
          {title: 'Technique', value: 'technique'},
          {title: 'Performance', value: 'performance'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'categoryLabel',
      title: 'Label de catégorie (affichage)',
      type: 'string',
      description: 'Ex: "Guide Pratique", "Tutoriel Vidéo"'
    },
    {
      name: 'date',
      title: 'Date de publication',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Temps de lecture (minutes)',
      type: 'number',
      description: 'Nombre de minutes estimées pour lire l\'article',
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'tags',
      title: 'Tags/Mots-clés',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ajoute jusqu\'à 5 tags pertinents'
    },
    {
      name: 'author',
      title: 'Auteur',
      type: 'string',
      description: 'Nom de la personne qui a écrit l\'article'
    },
    {
      name: 'published',
      title: 'Publié',
      type: 'boolean',
      description: 'L\'article apparaîtra sur le site s\'il est coché',
      initialValue: true
    },
    {
      name: 'featured',
      title: 'Article vedette',
      type: 'boolean',
      description: 'Cocher pour afficher cet article en vedette en haut',
      initialValue: false
    },
    {
      name: 'seoTitle',
      title: 'Titre SEO',
      type: 'string',
      description: 'Titre pour les moteurs de recherche (60 caractères max)'
    },
    {
      name: 'seoDescription',
      title: 'Meta description',
      type: 'text',
      rows: 2,
      description: 'Description pour Google (160 caractères max)'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      date: 'date',
      category: 'category'
    },
    prepare(selection) {
      const { title, date, category } = selection;
      const publishDate = new Date(date).toLocaleDateString('fr-FR');
      return {
        title: title,
        subtitle: `${category} • ${publishDate}`
      };
    }
  }
};