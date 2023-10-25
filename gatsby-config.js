const { resolve } = require("path");

const config = require('./SiteConfig');
const sassConfig = require('./sass-loader.config');

function urljoin(...parts) {
  return parts.reduce((prev, curr) => {
    return prev.replace(/\/+$/, '') + '/' + curr.replace(/^\/+/, '');
  });
}

module.exports = {
  pathPrefix: config.pathPrefix === '' ? '/' : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
        config.pathPrefix
      )}/logos/logo-512.png`,
      copyright: config.copyright,
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-plugin-sass',
      options: sassConfig,
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
        ],
      },
    },
    ...(config.googleAnalyticsID
      ? [
          {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
              trackingId: config.googleAnalyticsID,
            },
          },
        ]
      : []),
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix || '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/logos/logo-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logos/logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: process.env.NODE_ENV !== 'production',
        analyzerPort: 3001,
        disable: process.env.APP_ANALYZE !== 'true',
        openAnalyzer: process.env.APP_ANALYZE === 'true',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          // TODO: uncomment this when we want to use content folder again
          // ref.query.allMarkdownRemark;
          ret.allIoEventsYaml = ref.query.allIoEventsYaml;
          ret.generator = 'GatsbyJS Advanced Starter';
          return ret;
        },
        query: `
    {
      site {
        siteMetadata {
          rssMetadata {
            site_url
            feed_url
            title
            description
            image_url
            copyright
          }
        }
      }
    }
    `,
        feeds: [
          {
            title: 'Default feed title',
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allIoEventsYaml.nodes.map((node) => ({
                date: node.date,
                title: node.title,
                description: node.description,
                url: rssMetadata.site_url + node.event_url,
                custom_elements: [{ 'content:encoded': node.html }],
              }));
            },
            // TODO: uncomment this when we want to use content folder again
            //             {
            //               allMarkdownRemark(
            //                 limit: 1000,
            //                 sort: { order: DESC, fields: [fields___date] },
            //               ) {
            //                 edges {
            //                   node {
            //                     excerpt
            //                     html
            //                     timeToRead
            //                     fields {
            //                       slug
            //                       date
            //                     }
            //                     frontmatter {
            //                       title
            //                       cover
            //                       date
            //                       category
            //                       tags
            //                     }
            //                   }
            //                 }
            //               }
            //             }
            //           `,
            query: `
        {
          allIoEventsYaml {
            nodes {
              title
              date
              event_url
              location {
                name
                address
                url
                facebook
                description
                map
              }
              talks {
                title
                authors {
                  name
                  twitter
                  github
                  website
                }
              }
            }
          }
        }
        `,
            output: config.siteRss,
          },
        ],
      },
    },
    // 'gatsby-plugin-extract-schema',
  ],
};
