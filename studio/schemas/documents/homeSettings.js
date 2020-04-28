export default {
    name: 'homeSettings',
    type: 'document',
    title: 'Homepage Settings',
    __experimental_actions: [
      // 'create',
      'update',
      // 'delete',
      'publish'
    ],
    fields: [
      {
        name: 'headline',
        type: 'string',
        title: 'Headline'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'simplePortableText'
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'figure'
      }
    ]
  }
  