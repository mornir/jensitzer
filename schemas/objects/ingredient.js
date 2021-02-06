import { GiCubes } from 'react-icons/gi'

export default {
  name: 'ingredient',
  title: 'Zutat',
  type: 'object',
  icon: GiCubes,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quantity',
      title: 'Menge',
      type: 'string',
    },
  ],
}
