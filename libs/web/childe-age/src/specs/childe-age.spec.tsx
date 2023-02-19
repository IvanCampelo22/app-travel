import '@testing-library/jest-dom'
import { renderWithTheme } from '@web/base-ui/utils'
import ChildeAge from '../lib/childe-age'

describe('<ChildAge />', () => {
  it('should render successfully', () => {
    renderWithTheme(<ChildeAge />)
  })
})
