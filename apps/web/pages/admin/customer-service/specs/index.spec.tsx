import { render } from '@testing-library/react'

import CustomerService from '../index'

describe('CustomerService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomerService />)
    expect(baseElement).toBeTruthy()
  })
})
