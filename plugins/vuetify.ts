import { createVuetify, ThemeDefinition } from 'vuetify'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { mdi, aliases as allAliases } from 'vuetify/iconsets/mdi-svg'
const aliases = allAliases

const LightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#282828',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'LightTheme',
      themes: {
        LightTheme,
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi }
    }
  })

  nuxtApp.vueApp.use(vuetify)

})
