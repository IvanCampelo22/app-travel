import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@web/base-ui'
import QuantityInput from '../lib/quantity-input'

describe('<QuantityInput />', () => {
  it('should render successfully with value 1', () => {
    renderWithTheme(<QuantityInput />)

    const element = screen.getByTestId('input')

    element.focus()

    expect(element).toHaveValue('1')
  })
})
