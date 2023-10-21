import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './tailwind.postcss'

export default {
  ...DefaultTheme,
  Layout: MyLayout
}
