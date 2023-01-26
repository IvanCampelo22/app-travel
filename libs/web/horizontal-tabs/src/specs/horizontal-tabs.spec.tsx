import { render } from '@testing-library/react'

import HorizontalTabs from '../lib/horizontal-tabs'

describe('HorizontalTabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HorizontalTabs />)
    expect(baseElement).toBeTruthy()
  })
})
