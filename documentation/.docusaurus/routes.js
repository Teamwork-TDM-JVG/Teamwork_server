
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/Teamwork_server/',
  component: ComponentCreator('/Teamwork_server/','b4a'),
  exact: true,
},
{
  path: '/Teamwork_server/blog',
  component: ComponentCreator('/Teamwork_server/blog','fcc'),
  exact: true,
},
{
  path: '/Teamwork_server/blog/2020/04/14/blog-plugin',
  component: ComponentCreator('/Teamwork_server/blog/2020/04/14/blog-plugin','a75'),
  exact: true,
},
{
  path: '/Teamwork_server/blog/2020/04/14/large-blog-post',
  component: ComponentCreator('/Teamwork_server/blog/2020/04/14/large-blog-post','9a9'),
  exact: true,
},
{
  path: '/Teamwork_server/blog/hello-world',
  component: ComponentCreator('/Teamwork_server/blog/hello-world','099'),
  exact: true,
},
{
  path: '/Teamwork_server/blog/hola',
  component: ComponentCreator('/Teamwork_server/blog/hola','c5d'),
  exact: true,
},
{
  path: '/Teamwork_server/blog/tags',
  component: ComponentCreator('/Teamwork_server/blog/tags','1d3'),
  exact: true,
},
{
  path: '/Teamwork_server/blog/tags/blog',
  component: ComponentCreator('/Teamwork_server/blog/tags/blog','95e'),
  exact: true,
},
{
  path: '/Teamwork_server/blog/tags/docusaurus',
  component: ComponentCreator('/Teamwork_server/blog/tags/docusaurus','1c8'),
  exact: true,
},
{
  path: '/Teamwork_server/blog/tags/facebook',
  component: ComponentCreator('/Teamwork_server/blog/tags/facebook','659'),
  exact: true,
},
{
  path: '/Teamwork_server/blog/tags/hello',
  component: ComponentCreator('/Teamwork_server/blog/tags/hello','a1a'),
  exact: true,
},
{
  path: '/Teamwork_server/blog/tags/hola',
  component: ComponentCreator('/Teamwork_server/blog/tags/hola','20a'),
  exact: true,
},
{
  path: '/Teamwork_server/blog/welcome',
  component: ComponentCreator('/Teamwork_server/blog/welcome','4fa'),
  exact: true,
},
{
  path: '/Teamwork_server/docs',
  component: ComponentCreator('/Teamwork_server/docs','f8f'),
  
  routes: [
{
  path: '/Teamwork_server/docs/',
  component: ComponentCreator('/Teamwork_server/docs/','d49'),
  exact: true,
},
{
  path: '/Teamwork_server/docs/doc2',
  component: ComponentCreator('/Teamwork_server/docs/doc2','4ed'),
  exact: true,
},
{
  path: '/Teamwork_server/docs/doc3',
  component: ComponentCreator('/Teamwork_server/docs/doc3','a36'),
  exact: true,
},
{
  path: '/Teamwork_server/docs/mdx',
  component: ComponentCreator('/Teamwork_server/docs/mdx','359'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
