export default {
  name: 'settings',
  title: 'Paramètres du site',
  type: 'document',
  fields: [
    {
      name: 'nomGarage',
      title: 'Nom du garage',
      type: 'string'
    },
    {
      name: 'telephone',
      title: 'Téléphone',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'adresse',
      title: 'Adresse',
      type: 'text'
    },
    {
      name: 'instagram',
      title: 'Lien Instagram',
      type: 'url'
    },
    {
      name: 'horaires',
      title: 'Horaires',
      type: 'text'
    }
  ]
}