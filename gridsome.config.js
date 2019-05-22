/* eslint no-param-reassign: "error" */

module.exports = {
  siteName: 'Gridsome starter bootstrap',
  siteDescription: 'A starter project for Gridsome with Bootstrap and some other useful tools.',
  siteUrl: 'https://gridsome-boilerplate.netlify.com/',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-10',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
      },
    },
  ],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'img-src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src',
        };

        return options;
      });
  },
  css: {
    loaderOptions: {
      scss: {},
    },
  },
};
