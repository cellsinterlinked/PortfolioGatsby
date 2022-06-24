import { FaProjectDiagram as icon } from 'react-icons/fa';

export default {
  name: 'project',
  title: 'Projects',
  icon,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'Name of the project',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 50,
      },
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'string',
      description: 'One paragraph description of the project',
    },
    {
      name: 'leftimage',
      title: 'Left Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description:
        'This image will be displayed behind the project description.',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'feature' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'leftimage',
      techology0: 'technologies.0.name',
      techology1: 'technologies.1.name',
      techology2: 'technologies.2.name',
      techology3: 'technologies.3.name',
    },
    prepare: ({ title, media, ...technologies }) => {
      const techs = Object.values(technologies).filter(Boolean);

      return {
        title,
        media,
        subtitle: techs.join(', '),
      };
    },
  },
};
