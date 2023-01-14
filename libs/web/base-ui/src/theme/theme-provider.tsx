import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { GlobalStyles } from './global-styles'
import { customTheme } from './theme'

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
      <GlobalStyles />
      <NotificationsProvider position="top-center" zIndex={2077}>
        {children}
      </NotificationsProvider>
    </MantineProvider>
  )
}

export { ThemeProvider }
