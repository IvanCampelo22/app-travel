import { render } from '@testing-library/react'

import QuantityInput from '../lib/quantity-input'

describe('<QuantityInput />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuantityInput />)
    expect(baseElement).toBeTruthy()
  })
})
