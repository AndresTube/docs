import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/docs/',
  title: 'Aurus',
  description: 'A packet-based 3D menu system for Paper servers (1.20.1+)',

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/aurus/' },
      { text: 'BuiltByBit', link: 'https://builtbybit.com/resources/aurus.99051/' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Home', link: '/aurus/' },
          { text: 'Getting Started', link: '/aurus/getting-started' }
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Menu Configuration', link: '/aurus/menu-configuration' },
          { text: 'Areas', link: '/aurus/areas' },
          { text: 'Component Types', link: '/aurus/component-types' },
          { text: 'Actions', link: '/aurus/actions' },
          { text: 'Animations', link: '/aurus/animations' },
          { text: 'Placeholders', link: '/aurus/placeholders' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Commands & Permissions', link: '/aurus/commands' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Overview', link: '/aurus/api/' },
          { text: 'Getting Started', link: '/aurus/api/getting-started' },
          { text: 'Creating Menus', link: '/aurus/api/creating-menus' },
          { text: 'Managing Menus', link: '/aurus/api/managing-menus' },
          { text: 'Areas', link: '/aurus/api/areas' },
          { text: 'Components', link: '/aurus/api/components' },
          { text: 'Events', link: '/aurus/api/events' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AndresTube/aurus' },
      { icon: 'discord', link: 'https://discord.com/invite/w7ef4DCqvK' }
    ],

    footer: {
      message: 'Aurus — Packet-based 3D menus for Minecraft',
      copyright: '© 2025 Aurus'
    },

    search: {
      provider: 'local'
    }
  }
})
