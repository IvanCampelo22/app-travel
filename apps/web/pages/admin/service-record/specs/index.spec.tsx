import { render } from '@testing-library/react'

import ServiceRecord from '../index'

describe('ServiceRecord', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServiceRecord />)
    expect(baseElement).toBeTruthy()
  })
})
