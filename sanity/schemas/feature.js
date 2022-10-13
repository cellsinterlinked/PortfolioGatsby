import { MdFeaturedPlayList as icon } from 'react-icons/md';

export default {
  name: 'feature',
  title: 'Feature',
  type: 'document',
  icon,
  fields: [
    {
      name: 'feature',
      title: 'Feature',
      type: 'string',
      description: 'Description of Feature',
    },
  ],
  preview: {
    select: {
      title: 'feature',
    },
    prepare: ({ title }) => ({
      title,
    }),
  },
};
