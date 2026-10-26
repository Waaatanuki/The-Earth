import DefaultTheme from 'vitepress/theme'
import MyImg from '../../components/MyImg.vue'
import Layout from './Layout.vue'
import 'uno.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    ctx.app.component('MyImg', MyImg)
  },
}
