import { render } from '@testing-library/react'

import CustomerServiceResume from '../lib/customer-service-resume'

describe('CustomerServiceResume', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomerServiceResume />)
    expect(baseElement).toBeTruthy()
  })
})
