import { render } from '@testing-library/react'
import React from 'react'

import Header from '../src/lib/header'

describe('<Header />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header title="teste" subtitle="teste" />)
    expect(baseElement).toBeTruthy()
  })
})
