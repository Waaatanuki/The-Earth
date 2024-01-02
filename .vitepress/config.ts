import { defineConfig } from 'vitepress'
import { webUpdateNotice } from '@plugin-web-update-notification/vite'

export default () => defineConfig({
  vite: {
    plugins: [webUpdateNotice({ logVersion: true }),]
  }
})