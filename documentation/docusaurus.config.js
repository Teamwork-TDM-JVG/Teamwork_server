module.exports = {
  title: 'Teamwork',
  tagline: 'Teamwork changes everything',
  url: 'https://teamwork.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Teamwork-TDM-JVG', // Usually your GitHub org/user name.
  projectName: 'Teamwork_server', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Teamwork',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Jaimy',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Github',
              href: 'https://github.com/JaimyVanGyseghem'
            }
          ],
        },
        {
          title: 'Thibaut',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Github',
              href: 'https://github.com/pgmgent-thibdema'
            }
          ],
        },
        {
          title: 'Organisation',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/Teamwork-TDM-JVG'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Teamwork, Inc. Built with Docusaurus by Jaimy and Thibaut.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-bootstrap',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
      },
    ],
  ],
};
