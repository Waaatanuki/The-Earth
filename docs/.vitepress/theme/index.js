import DefaultTheme from 'vitepress/theme'
import MyImg from '../../components/MyImg.vue'
import 'uno.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('MyImg', MyImg)
  },
}
