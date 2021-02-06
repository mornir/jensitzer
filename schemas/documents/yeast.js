import { GiPowder } from 'react-icons/gi'

export default {
  name: 'yeast',
  title: 'Hefe',
  type: 'document',
  icon: GiPowder,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'number',
      title: 'Nummer',
      type: 'string',
      description: 'Nummer vom Hefestamm',
    },
  ],
  preview: {
    select: {
      name: 'name',
      number: 'number',
    },
    prepare({ name, number }) {
      if (number) {
        return {
          title: `${name} (${number})`,
        }
      }

      return {
        title: name,
      }
    },
  },
}
