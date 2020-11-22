export default {
  "title": "Teamwork",
  "tagline": "Teamwork changes everything",
  "url": "https://teamwork.com",
  "baseUrl": "/Teamwork_server/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "Teamwork-TDM-JVG",
  "projectName": "Teamwork_server",
  "themeConfig": {
    "navbar": {
      "title": "Teamwork",
      "logo": {
        "alt": "Teamwork Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Jaimy",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            },
            {
              "label": "Github",
              "href": "https://github.com/JaimyVanGyseghem"
            }
          ]
        },
        {
          "title": "Thibaut",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            },
            {
              "label": "Github",
              "href": "https://github.com/pgmgent-thibdema"
            }
          ]
        },
        {
          "title": "Organisation",
          "items": [
            {
              "label": "Github",
              "href": "https://github.com/Teamwork-TDM-JVG"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Teamwork, Inc. Built with Docusaurus by Jaimy and Thibaut."
    }
  },
  "presets": [
    [
      "@docusaurus/preset-bootstrap",
      {
        "docs": {
          "sidebarPath": "D:\\Websites\\Teamwork\\SERVER\\documentation\\sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};