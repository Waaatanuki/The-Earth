import { readdirSync, readFileSync } from 'node:fs'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'

const npcDirectory = new URL('../npc/', import.meta.url)
const characters = readdirSync(npcDirectory)
  .filter(file => file.endsWith('.md'))
  .sort()
  .map((file) => {
    const content = readFileSync(new URL(file, npcDirectory), 'utf-8')
    const id = file.slice(0, -3)

    return {
      text: content.match(/^# (.+)$/m)?.[1].replace(/^\[.*?\]\s*/, '') ?? id,
      link: `/npc/${id}`,
    }
  })

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'The Earth',
  description: 'About Earth',
  lang: 'zh-CN',
  base: '/The-Earth/',
  head: [
    [
      'link',
      { rel: 'icon', href: '/The-Earth/favicon.ico' },
    ],
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
      webUpdateNotice({ logVersion: true }),
    ],
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          options: {
            // 索引和查询使用相同的中文分词，支持检索技能正文中的词语
            tokenize: text => Array.from(
              new Intl.Segmenter('zh-CN', { granularity: 'word' }).segment(text),
            ).filter(segment => segment.isWordLike).map(segment => segment.segment),
          },
          searchOptions: {
            combineWith: 'AND',
          },
        },
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            displayDetails: '显示详细结果',
            resetButtonTitle: '清空搜索',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关结果',
            footer: {
              selectText: '打开',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },
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
          {
            text: 'SSR 角色',
            collapsed: true,
            items: characters,
          },
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
          { text: '天元', link: '/build/tengen' },
          { text: '极法', link: '/build/rushizero' },
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
