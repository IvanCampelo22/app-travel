import { AppPropsWithLayout, ThemeProvider } from '@web/base-ui'

function App({ Component, pageProps }: AppPropsWithLayout) {
  const layout = Component.getLayout ?? ((page) => page)
  const element = layout(<Component {...pageProps} />)

  return <ThemeProvider>{element}</ThemeProvider>
}

export default App
