import { render } from '@testing-library/react'

import { NavbarLinksGroup } from '../lib/navbar-links-group'

describe('NavbarLinksGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavbarLinksGroup />)
    expect(baseElement).toBeTruthy()
  })
})
