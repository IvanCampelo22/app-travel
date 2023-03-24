import '@testing-library/jest-dom'
import { renderWithTheme } from '@web/base-ui/utils'
import Filter from '../lib/filter'

describe('<Filter />', () => {
  it('should render successfully', () => {
    renderWithTheme(<Filter />)
  })
})
