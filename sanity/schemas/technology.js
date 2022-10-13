import { SiReactos as icon } from 'react-icons/si';

export default {
  name: 'technology',
  title: 'Technology',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Technology Name',
      type: 'string',
      description: 'Name of the technology',
    },
    {
      name: 'image',
      title: 'Technology Image',
      type: 'image',
      description: 'Official icon of the technology',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare: ({ media, title }) => ({
      title,
      media,
    }),
  },
};
