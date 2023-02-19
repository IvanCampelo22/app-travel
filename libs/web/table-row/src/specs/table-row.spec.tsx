import '@testing-library/jest-dom'
import { renderWithTheme } from '@web/base-ui/utils'
import TableRow from '../lib/table-row'

describe('<TableRow />', () => {
  it('should render successfully', () => {
    renderWithTheme(<TableRow />)
  })
})
