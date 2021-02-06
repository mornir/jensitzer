import { GiBeerBottle } from 'react-icons/gi'

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
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Beschreibung',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'abv',
      title: 'Alkoholgrad',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'bottledOn',
      title: 'Abgefüllt am',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    {
      name: 'malts',
      title: 'Malz',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'reference',
          to: [{ type: 'malt' }],
        },
      ],
    },
    {
      name: 'hops',
      title: 'Hopfen',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'reference',
          to: [{ type: 'hop' }],
        },
      ],
    },
    {
      name: 'yeasts',
      title: 'Hefe',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'reference',
          to: [{ type: 'yeast' }],
        },
      ],
    },
    {
      name: 'ingredients',
      title: 'Andere Zutaten',
      type: 'array',
      of: [{ type: 'ingredient' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      number: 'number',
      description: 'description',
    },
    prepare({ name, number, description }) {
      return {
        title: `${number}: ${name}`,
        subtitle: description,
      }
    },
  },
  orderings: [
    {
      title: 'Beer Number',
      name: 'beerNumber',
      by: [{ field: 'number', direction: 'asc' }],
    },
  ],
}
