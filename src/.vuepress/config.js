const { description } = require('../../package')

module.exports = {

  title: 'Navigate Commodities',
  description: description,

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      // {
      //   text: 'Services',
      //   type: 'links',
      //   items: [],
      // },
      {
        text: 'Insights',
        link: '/insights/index.html'
      },
      {
        text: 'About Us',
        link: '/about-us.html'
      },
      {
        text: 'Pricing',
        link: '/pricing.html'
      },
      {
        text: 'Contact Us',
        link: '/contact-us.html'
      },
      {
        text: 'Login',
        'link': 'https://members.navigatecommodities.com/'
      },
      {
        text: 'Free Sign Up',
        'link': '/trial-signup.html'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    // '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-medium-zoom',
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/insights/',
          itemPermalink: '/insights/:year/:month/:day/:slug',
          layout: 'Blog',
          itemLayout: 'PostPost',
        },
      ],
    }]
  ]
}
