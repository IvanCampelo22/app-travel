import { MantineProvider, MantineProviderProps } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { GlobalStyles } from './global-styles'

type ThemeProviderProps = MantineProviderProps & {
  children: React.ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, ...others } = props
  return (
    <MantineProvider {...others} withGlobalStyles withNormalizeCSS>
      <GlobalStyles />
      <NotificationsProvider position="top-center" zIndex={2077}>
        {children}
      </NotificationsProvider>
    </MantineProvider>
  )
}

export { ThemeProvider }
