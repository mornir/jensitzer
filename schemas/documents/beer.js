import { GiBeerBottle } from 'react-icons/gi';

export default {
  name: 'beer',
  title: 'Bier',
  type: 'document',
  icon: GiBeerBottle,
  fields: [
    {
      name: 'number',
      title: 'Nummer',
      type: 'number',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'string',
    },
    {
      name: 'abv',
      title: 'Alkoholgrad',
      type: 'number',
    },
    {
      name: 'malts',
      title: 'Malz',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'malt' },
          ]
        }
      ],
    },
    {
      name: 'hops',
      title: 'Hopfen',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'hop' },
          ]
        }
      ],
    },
    {
      name: 'yeasts',
      title: 'Hefe',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'yeast' },
          ]
        }
      ],
    },
  ],
}