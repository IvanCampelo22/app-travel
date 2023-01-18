import { MantineThemeOverride } from '@mantine/core'

const customTheme = (fontFamily: string): MantineThemeOverride => ({
  fontFamily: fontFamily,
  headings: {
    fontFamily: fontFamily
  },
  colors: {
    gray: [
      '#F9FAFB',
      '#F2F4F7',
      '#EAECF0',
      '#D0D5DD',
      '#98A2B3',
      '#667085',
      '#475467',
      '#344054',
      '#1D2939',
      '#101828'
    ],
    red: [
      '#FEF3F2',
      '#FEE4E2',
      '#FECDCA',
      '#FDA29B',
      '#F97066',
      '#F04438',
      '#D92D20',
      '#B42318',
      '#912018',
      '#7A271A'
    ],
    yellow: [
      '#FFFAEB',
      '#FEF0C7',
      '#FEDF89',
      '#FEC84B',
      '#FDB022',
      '#F79009',
      '#DC6803',
      '#B54708',
      '#93370D',
      '#7A2E0E'
    ],
    green: [
      '#ECFDF3',
      '#D1FADF',
      '#A6F4C5',
      '#6CE9A6',
      '#32D583',
      '#12B76A',
      '#039855',
      '#027A48',
      '#05603A',
      '#054F31'
    ],
    blue: [
      '#EFF8FF',
      '#D1E9FF',
      '#B2DDFF',
      '#84CAFF',
      '#53B1FD',
      '#2E90FA',
      '#1570EF',
      '#175CD3',
      '#1849A9',
      '#194185'
    ]
  },
  primaryColor: 'blue',
  components: {
    Input: {
      styles: (theme) => ({
        input: {
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          border: '1px solid #D0D5DD',
          ':focus': {
            boxShadow: `0 0 0 1px ${theme.colors.blue[8]}`
          }
        }
      })
    }
  }
})

export { customTheme }
