<div align="center"  style="margin-bottom: 30px;">
  <a alt="Saglac IO website" href="https://saglac.io" target="_blank">
    <img src="static/images/logos/SaglacIO_Logo_Meetups.png" alt="Logo" height="200px"/>
  </a>
</div>

<div align="center" style="margin-bottom: 30px;">
  <a href="https://github.com/emileber/gatsby-test/actions">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/emileber/gatsby-test/CI?style=for-the-badge">
  </a>
  <a href="https://github.com/vagr9k/gatsby-advanced-starter/stargazers">
    <img alt="Netlify" src="https://img.shields.io/netlify/e87be4c0-c010-480b-b40f-45ecdcea0ef4?style=for-the-badge">
  </a>
  <a href="https://github.com/emileber/gatsby-test/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/emileber/gatsby-test?style=for-the-badge" alt="Project License" />
  </a>
</div>

# Saglac IO website

Made in our free time with [Gatsby](https://github.com/gatsbyjs/gatsby/). Based on [`Vagr9K/gatsby-advanced-starter`](https://github.com/Vagr9K/gatsby-advanced-starter/) with a huge amount of improvements.

It is built with the [JAMStack](https://jamstack.org/), which means it's static files enhanced with some JavaScript here and there. Our files are then hosted on Netlify, which really pairs well with Gatsby and the open-source ecosystem.

## How to add an event?

Log into our [Netlify **Admin CMS** app](https://saglac.io/admin) using your pre-authorized Github account to automagically update the relational YAML data files used in the static rendering of the website.

Make sure the **Authors** and **Locations** have the necessary models before creating a new event.

## Development

Use node version 14

Install the project:

```sh
git clone https://github.com/saglacio/saglac.io.git saglacio
cd saglacio
# Install the dependencies
npm i
# Start the development server
npm start
```

To ease the development, there are some tools already installed.

### GraphiQL

An in-browser IDE for exploring GraphQL data available in our Gatsby setup.

While the development server is started (with the previous command), the IDE should be avaible at:

[http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)

### Storybook

> Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular.

![Saglac IO storybook](docs/images/2020-01-storybook-screenshot.png)

Since we're developing the website with React components, a Storybook app is available in development:

```sh
# Run this in another shell in parallel with the dev server
npm run storybook
```

Then, it should automatically navigate to `http://localhost:6006/`.

Otherwise, it's always available on the public website under [`https://saglac.io/storybook`](https://saglac.io/storybook/?path=/info/).

### Admin CMS

> [**Netlify CMS**](https://www.netlifycms.org/)  
> Open source content management for your Git workflow

_Note that while it works in development, it will commit changes to the remote `master` branch._

The configuration file reside in the `static` directory and it is fetched by the frontend app to bootstrap itself.

    static/admin/config.yml

It manages the YAML under the `data/` directory.

### Webpack Bundle Analyzer

The plugin is configured. Just run

```sh
npm run analyze
```

Then it should automatically open the browser page.

# Author

Emile Bergeron ([@emileber](https://github.com/emileber))
