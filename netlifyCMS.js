/* eslint-disable import/first */

// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true;

import CMS from 'netlify-cms';

CMS.init({
  config: {
    backend: {
      name: 'git-gateway',
      repo: 'chpmnrssll/gridsome-boilerplate',
      squash_merges: true,
    },
    load_config_file: false,
    media_folder: '/uploads',
    public_folder: '/uploads',
    collections: [
      {
        label: 'Posts',
        name: 'posts',
        folder: 'blog',
        create: true,
        slug: '{{slug}}',
        fields: [
          { label: 'Title', name: 'title', widget: 'string' },
          { label: 'Excerpt', name: 'excerpt', widget: 'string' },
          { label: 'Publish Date', name: 'date', widget: 'datetime' },
          { label: 'Image', name: 'image', widget: 'file' },
          { label: 'Body', name: 'body', widget: 'markdown' },
        ],
      },
    ],
  },
});
