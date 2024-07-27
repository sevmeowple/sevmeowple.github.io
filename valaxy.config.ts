import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '七庙庙のPage',
      cloud: {
        enable: true,
      },
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      }
    ],

    footer: {
      since: 2022,
      icon: {
        enable: true,
        // name: 'i-ri-compasses-3-line'
        title: '七庙庙のPage',
        url: 'https://sevmeowple.github.io/'
      }
      // powered: false
      // beian: {
      //   enable: true,
      //   icp: '苏ICP备17038157号',
      // },
    },
    colors: {
      primary: '#ffa1a1',
    },
    bg_image: {
      enable: true,
      url: '/images/bg.jpg',
      opacity: 0.5,
      dark: '/images/bg_dark.jpg',
    },
    fireworks: {
      enable: true,
      colors: ['#ffa1a1', '#ff6b6b', '#ff6b64']
    },
    types: {
      'card':
      {
        color: '#ffa1a1',
        icon: 'i-ri-compasses-3-line',
      }
    },
  },
  unocss: { safelist },
})
