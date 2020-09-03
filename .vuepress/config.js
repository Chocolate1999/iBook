module.exports = {
  title: "超逸の博客",
  description: '主要分享前端知识',
  // dest: 'public',
  base: '/ibook/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '文章', 
        icon: 'reco-message',
        items: [
          { text: '主题体验', link: '/docs/theme-reco/' },
          { text: '计算机网络', link: '/docs/network/' },
          { text: '操作系统', link: '/docs/os/' },
        ]
      },
      { text: '留言板', link: 'https://yangchaoyi.vip/contact/', icon: 'reco-message' },
      { text: 'GitHub', link: 'https://github.com/Chocolate1999', icon: 'reco-github' }
    ],
    sidebar: {
      // '/docs/theme-reco/': [
      //   '',
      //   'theme',
      //   'plugin',
      //   'api'
      // ],
      // '/docs/network/': [
      //   '',
      // ],
      // '/docs/os/': [
      //   '',
      // ]
    },  
    // type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: 'https://cdn.jsdelivr.net/gh/Chocolate1999/cdn/img/avatar.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Chocolate',
    // 作者头像
    authorAvatar: 'https://cdn.jsdelivr.net/gh/Chocolate1999/cdn/img/avatar.png',
    // 备案号
    record: '湘ICP备20002952号',
    // 项目开始时间
    startYear: '2020'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {}
  }
}  
