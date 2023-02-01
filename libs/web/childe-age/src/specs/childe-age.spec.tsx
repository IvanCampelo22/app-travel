import { render } from '@testing-library/react'

import ChildeAge from '../lib/childe-age'

describe('<ChildeAge />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChildeAge />)
    expect(baseElement).toBeTruthy()
  })
})
