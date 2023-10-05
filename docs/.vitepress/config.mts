import { defineConfig } from 'vitepress'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "The Earth",
  description: "About Earth",
  base: '/The-Earth/',
  vite: {
    plugins: [webUpdateNotice({ logVersion: true }),]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '为什么玩土', link: '/begining/why' },
          { text: '简介', link: '/begining/introduction' },
        ]
      },
      {
        text: '基础',
        items: [
          { text: '角色', link: '/essential/character' },
          { text: '武器', link: '/essential/weapon' },
          { text: '召唤', link: '/essential/summon' }
        ]
      },
      {
        text: '实战构筑',
        items: [
          { text: '0键周回', link: '/build/0tk' },
          { text: '战货HL', link: '/build/tokenHL' },
          { text: '古战场', link: '/build/guildWar' },
          { text: '猎金', link: '/build/goldBrick' },
          { text: '猎砂', link: '/build/sandglass' },
          { text: '极巴', link: '/build/superBahamut' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Waaatanuki/The-Earth' }
    ],
    lastUpdated: {
      text: '最后更新于 ',
    }
  }
})
