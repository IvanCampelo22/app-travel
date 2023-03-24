import { customTheme, ThemeProvider } from '@web/base-ui'

function ThemeWrapper(props: { children: React.ReactNode }) {
  const fonts =
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'

  const theme = customTheme(fonts)
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

// enhance your stories with decorator that uses ThemeWrapper
export const decorators = [
  // eslint-disable-next-line @typescript-eslint/ban-types
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>
]
