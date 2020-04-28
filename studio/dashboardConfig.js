export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea862d72e14f8e8129ee74a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zdys6mie',
                  apiId: '00ee6e3f-b8ae-4640-bd5e-71175c85cf85'
                },
                {
                  buildHookId: '5ea862d753ff0acdffa0e07c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pv4zfk6v',
                  apiId: 'd8335398-433e-4761-92b3-628fbae2254d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gravityatl/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pv4zfk6v.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
