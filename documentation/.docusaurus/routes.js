
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: 'Teamwork_server/',
  component: ComponentCreator('Teamwork_server/','68b'),
  exact: true,
},
{
  path: 'Teamwork_server/blog',
  component: ComponentCreator('Teamwork_server/blog','8a2'),
  exact: true,
},
{
  path: 'Teamwork_server/blog/2020/04/14/blog-plugin',
  component: ComponentCreator('Teamwork_server/blog/2020/04/14/blog-plugin','83d'),
  exact: true,
},
{
  path: 'Teamwork_server/blog/2020/04/14/large-blog-post',
  component: ComponentCreator('Teamwork_server/blog/2020/04/14/large-blog-post','0c6'),
  exact: true,
},
{
  path: 'Teamwork_server/blog/hello-world',
  component: ComponentCreator('Teamwork_server/blog/hello-world','3c6'),
  exact: true,
},
{
  path: 'Teamwork_server/blog/hola',
  component: ComponentCreator('Teamwork_server/blog/hola','546'),
  exact: true,
},
{
  path: 'Teamwork_server/blog/tags',
  component: ComponentCreator('Teamwork_server/blog/tags','df8'),
  exact: true,
},
{
  path: 'Teamwork_server/blog/tags/blog',
  component: ComponentCreator('Teamwork_server/blog/tags/blog','c9e'),
  exact: true,
},
{
  path: 'Teamwork_server/blog/tags/docusaurus',
  component: ComponentCreator('Teamwork_server/blog/tags/docusaurus','626'),
  exact: true,
},
{
  path: 'Teamwork_server/blog/tags/facebook',
  component: ComponentCreator('Teamwork_server/blog/tags/facebook','d24'),
  exact: true,
},
{
  path: 'Teamwork_server/blog/tags/hello',
  component: ComponentCreator('Teamwork_server/blog/tags/hello','2b7'),
  exact: true,
},
{
  path: 'Teamwork_server/blog/tags/hola',
  component: ComponentCreator('Teamwork_server/blog/tags/hola','b18'),
  exact: true,
},
{
  path: 'Teamwork_server/blog/welcome',
  component: ComponentCreator('Teamwork_server/blog/welcome','c62'),
  exact: true,
},
{
  path: 'Teamwork_server/docs',
  component: ComponentCreator('Teamwork_server/docs','c2f'),
  
  routes: [
{
  path: 'Teamwork_server/docs/',
  component: ComponentCreator('Teamwork_server/docs/','87c'),
  exact: true,
},
{
  path: 'Teamwork_server/docs/doc2',
  component: ComponentCreator('Teamwork_server/docs/doc2','f53'),
  exact: true,
},
{
  path: 'Teamwork_server/docs/doc3',
  component: ComponentCreator('Teamwork_server/docs/doc3','9b0'),
  exact: true,
},
{
  path: 'Teamwork_server/docs/mdx',
  component: ComponentCreator('Teamwork_server/docs/mdx','a13'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
