import '@testing-library/jest-dom'
import { renderWithTheme } from '@web/base-ui/utils'

import SideNavbar from '../lib/side-navbar'

describe('<SideNavbar />', () => {
  it('should render successfully', () => {
    renderWithTheme(<SideNavbar />)
  })
})
