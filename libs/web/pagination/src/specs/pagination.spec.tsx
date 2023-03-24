import '@testing-library/jest-dom'
import { renderWithTheme } from '@web/base-ui/utils'
import Pagination from '../lib/pagination'

describe('<Pagination />', () => {
  it('should render successfully', () => {
    renderWithTheme(<Pagination />)
  })
})
