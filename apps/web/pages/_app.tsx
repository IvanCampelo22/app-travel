import { Fira_Sans_Condensed } from '@next/font/google'
import { AppPropsWithLayout, customTheme, ThemeProvider } from '@web/base-ui'

const defaultFont = Fira_Sans_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin']
})

function App({ Component, pageProps }: AppPropsWithLayout) {
  const layout = Component.getLayout ?? ((page) => page)
  const element = layout(<Component {...pageProps} />)
  const theme = customTheme(defaultFont.style.fontFamily)
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}

export default App
