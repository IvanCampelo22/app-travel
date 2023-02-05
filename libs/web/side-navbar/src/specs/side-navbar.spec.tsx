import { render } from '@testing-library/react'

import SideNavbar from '../lib/side-navbar'

describe('<SideNavbar />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SideNavbar />)
    expect(baseElement).toBeTruthy()
  })
})
