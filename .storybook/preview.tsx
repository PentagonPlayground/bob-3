import React, { useState, useEffect } from 'react'
import type { Preview } from '@storybook/react'
import { ThemeContext } from '../components/ThemeContext'

import '../tailwind.css'

import { styles as kevinStyles } from '../themes/kevin/styles.ts'
import { styles as websiteStyles } from '../themes/website/styles.ts'

const stylesMap = {
  kevin: kevinStyles,
  website: websiteStyles,
}

const withThemeProvider = (Story, context) => {
  const selectedTheme = stylesMap[context.globals.theme]
  const [theme, setTheme] = useState(selectedTheme)
  useEffect(() => setTheme(selectedTheme))

  return (
    <ThemeContext.Provider value={theme}>
      <Story />
    </ThemeContext.Provider>
  )
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'kevin',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['kevin', 'website'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withThemeProvider],
}

export default preview
