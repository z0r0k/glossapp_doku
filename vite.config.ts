import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
        ],
        sidebar: {
          '/docu/': [
            {
              title: 'Administrative punkte',
              collapsible: true,
              items: [
                {
                  title: 'Host',
                  to: '/docu/admin/host/',
                },
                {
                  title: 'Dienste',
                  to: '/docu/admin/dienste/',
                },
                {
                  title: 'Wozu Dienste benötigt',
                  to: '/docu/admin/wozu_dienste/',
                },
                {
                  title: 'Synergie der Dienste',
                  to: '/docu/admin/synergie_dienste/',
                },
                {
                  title: 'Tools und Frameworks',
                  to: '/docu/admin/aufbau/',
                },
              ],

            },
            {
              title: 'Organisatorisches',
              collapsible: true,
              items: [
                {
                  title: 'Weiter arbeiten',
                  to: '/docu/orga/weiter_arbeiten/',
                },
                {
                  title: 'Verantwortungen',
                  to: '/docu/orga/verantwortlich/',
                },
              ]
            },
            {
              title: 'Entwicklung',
              collapsible: true,
              items: [
                {
                  title: 'Frameworks im Einsatz',
                  to: '/docu/entwicklung/framework/',
                },
              ]
            }

          ],
        },
        github: 'https://github.com/z0r0k/glossapp_doku',
        logo: '/sveltepress.svg',
      }),
      siteConfig: {
        title: 'Glossapp',
        description: 'Dokumentation der Glossapp',
      },
    }),
  ],
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
})

export default config
