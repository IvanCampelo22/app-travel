import '@testing-library/jest-dom'
import { renderWithTheme } from '@web/base-ui/utils'
import HorizontalTabs from '../lib/horizontal-tabs'

describe('<HorizontalTabs />', () => {
  it('should render successfully', () => {
    renderWithTheme(<HorizontalTabs />)
  })
})
