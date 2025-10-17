// schemas/settings.js
export default {
  name: 'settings',
  title: 'Paramètres du site',
  type: 'document',
  fields: [
    {
      name: 'nomGarage',
      title: 'Nom du garage',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'telephone',
      title: 'Téléphone',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'adresse',
      title: 'Adresse',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    },
    {
      name: 'horaires',
      title: 'Horaires',
      type: 'text',
      rows: 3,
      description: 'Format: Lun-Ven: 9h-18h, Sam: 9h-12h',
      validation: Rule => Rule.required()
    },
    {
      name: 'instagram',
      title: 'Lien Instagram',
      type: 'url',
      description: 'Lien complet vers votre profil Instagram'
    },
    {
      name: 'facebook',
      title: 'Lien Facebook',
      type: 'url',
      description: 'Lien complet vers votre page Facebook'
    },
    {
      name: 'mapUrl',
      title: 'URL Google Maps (Embed)',
      type: 'url',
      description: 'URL iframe de Google Maps pour afficher la carte sur le site',
      placeholder: 'https://www.google.com/maps/embed?pb=...'
    },
    {
      name: 'description',
      title: 'Description du garage',
      type: 'text',
      rows: 4,
      description: 'Description courte utilisée pour le SEO'
    }
  ],
  preview: {
    select: {
      title: 'nomGarage',
      subtitle: 'email'
    }
  }
};