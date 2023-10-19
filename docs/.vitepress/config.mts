import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'The Earth',
  description: 'About Earth',
  base: '/The-Earth/',
  head: [
    ['link', { rel: 'icon', href: '/The-Earth/favicon.ico' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-QHXEE5Y30K' },
    ],
    [
      'script',
      {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-QHXEE5Y30K');`,
    ],
  ],
  vite: {
    plugins: [
      Unocss(),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],
    sidebar: [
      // {
      //   text: '例子',
      //   items: [
      //     { text: 'api', link: '/api-examples' },
      //     { text: 'md', link: '/markdown-examples' },
      //   ]
      // },
      {
        text: '开始',
        items: [
          { text: '为什么玩土', link: '/begining/why' },
          { text: '简介', link: '/begining/introduction' },
        ],
      },
      {
        text: '基础',
        items: [
          { text: '角色', link: '/essential/character' },
          { text: '武器', link: '/essential/weapon' },
          { text: '召唤', link: '/essential/summon' },
        ],
      },
      {
        text: '实战构筑',
        items: [
          { text: '通常周回', link: '/build/common' },
          { text: '沙盒', link: '/build/sandbox' },
          { text: '猎金', link: '/build/goldBrick' },
          { text: '猎砂', link: '/build/sandglass' },
          { text: '古战场', link: '/build/guildWar' },
          { text: '极巴', link: '/build/superBahamut' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Waaatanuki/The-Earth' },
    ],
    lastUpdated: {
      text: '最后更新于 ',
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    outline: {
      level: 'deep',
      label: '本页目录',
    },
  },
})
