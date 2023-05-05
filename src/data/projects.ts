
/* eslint-disable global-require */

import {translate} from '@docusaurus/Translate';
import _ from 'lodash';

const Projects: Project[] = [
  {
    title: 'My Cloud Journey',
    description:' 🖥️ Personal website that highlights my experiences, expertise, blog and tutorials in the cloud computing domains.',
    preview: require('@site/static/img/projects/docusaurus/fernandogprieto.png'),
    website: 'https://www.fernandogprieto.com/',
    source: 'https://gitlab.com/fernandogprieto/fgp-website',
    docs: 'https://www.fernandogprieto.com/docs/docusuarus-intro',
    tags: ['opensource', 'favorite', 'personal', 'i18n'],
    type: 'Personal',
  },
  {
    title: 'Cloud Resume Challenge',
    description:
    ' 📚 Build and deploy a personal resume website using Google Cloud Platform services, showcasing cloud technology expertise and hands-on experience.',
    preview: require('@site/static/img/projects/docusaurus/crc-gcp.png'),
    website: 'https://www.fernandogprieto.dev',
    source: 'https://gitlab.com/fernandogprieto/cloud-resume-challenge-frontend',
    docs: 'https://www.fernandogprieto.com/docs/crc-gcp-intro',
    tags: ['opensource', 'favorite'],
    type: 'Personal',
  },
  /*{
    title: 'TSEI.JP',
    description: 'TSEI.JP personal website, articles and docs',
    preview: null,
    website: 'https://tsei.jp/',
    source: null,
    docs: null,
    tags: ['personal'],
    type: 'Collaboration',
  },*/
  {
    title: 'Dotfiles',
    description: 'This collection features my meticulously assembled personal dotfiles, tailored to optimize my development environment for peak efficiency and seamless workflow..',
    website: 'https://gitlab.com/fernandogprieto/dotfiles',
    tags: ['opensource'],
    type: 'Other',
  },
];

export type Project = {
  title: string;
  description: string;
  preview?: string | null;
  website: string;
  source?: string | null;
  docs?: string | null;
  tags: TagType[];
  type: ProjectType;
};

export type ProjectType = 'Personal' | 'Collaboration' | 'Other';

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'i18n'
  | 'large'
  | 'personal';

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        'favorite sites that you must absolutely check out!',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  opensource: {
    label: translate({message: 'Open-Source'}),
    description: translate({
      message: 'Open-Source can be useful for inspiration!',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },

  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: 'Docusaurus sites associated to a commercial product!',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },

  i18n: {
    label: translate({message: 'I18n'}),
    description: translate({
      message:
        'Translated  sites using the i18n support .',
      id: 'showcase.tag.i18n.description',
    }),
    color: '#127f82',
  },

  large: {
    label: translate({message: 'Large'}),
    description: translate({
      message:
        'Very large sites, including many more pages than the average!',
      id: 'showcase.tag.large.description',
    }),
    color: '#8c2f00',
  },

  personal: {
    label: translate({message: 'Personal'}),
    description: translate({
      message:
        'Personal websites, blog and documentation',
      id: 'showcase.tag.personal.description',
    }),
    color: '#14cfc3',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
export const groupByProjects = _.groupBy(Projects, 'type');
