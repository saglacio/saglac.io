const config = {
  siteTitle: 'Saglac IO conference & meetups', // Site title.
  siteTitleShort: 'Saglac IO', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'GatsbyJS Advanced Starter', // Alternative site title for SEO.
  siteLogo: '/admin/logos/SaglacIO_Logo_Meetups_Inverted.png', // Logo used for SEO and manifest.
  siteUrl: 'https://emileber-gatsby-test.netlify.app/', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Rencontre technologique du Saguenay&mdash;Lac-St-Jean', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'YYYY/MM/DD', // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  username: "L'organisation du Saglac IO", // Username to display in the author segment.
  email: 'info@saglac.io', // Email used for RSS feed's author segment
  twitter: 'saglacio',
  userLocation: 'Saguenay, Qc, CA', // User location to display in the author segment.
  // userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  // userDescription:
  //   "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  facebookPage: 'https://www.facebook.com/saglacio', // Facebook Page URL.
  twitterPage: 'https://twitter.com/saglacio', // Twitter Page URL.
  linkedInPage: 'https://www.linkedin.com/company/saglac-io', // LinkedIn Page URL.

  // TO REMOVE: Links to social profiles/projects you want to display in the author segment/navigation bar.
  // userLinks: [
  //   {
  //     label: 'GitHub',
  //     url: 'https://github.com/Vagr9K/gatsby-advanced-starter',
  //     iconClassName: 'fa fa-github',
  //   },
  //   {
  //     label: 'Twitter',
  //     url: 'https://twitter.com/Vagr9K',
  //     iconClassName: 'fa fa-twitter',
  //   },
  //   {
  //     label: 'Email',
  //     url: 'mailto:vagr9k@gmail.com',
  //     iconClassName: 'fa fa-envelope',
  //   },
  // ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: `Copyright © 2013-${new Date().getFullYear()}. SagLacIO`,
  themeColor: '#7ecdc3', // Used for setting manifest and progress theme colors.
  backgroundColor: '#161843e6', // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') {
  config.siteUrl = config.siteUrl.slice(0, -1);
}

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') {
  config.siteRss = `/${config.siteRss}`;
}

module.exports = config;
