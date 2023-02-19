import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@web/base-ui/utils'
import QuantityInput from '../lib/quantity-input'

describe('<QuantityInput />', () => {
  it('should render successfully with value 1', () => {
    renderWithTheme(
      <QuantityInput title="Teste" description="description" min={1} max={7} />
    )

    const input = screen.getByTestId('input')

    expect(input).toHaveValue('1')
  })
  it('should increase number', () => {
    renderWithTheme(
      <QuantityInput title="Teste" description="description" min={1} max={7} />
    )

    const input = screen.getByTestId('input')
    const buttonPlus = screen.getByTestId('plus')

    fireEvent.click(buttonPlus)

    expect(input).toHaveValue('2')
  })
  it('should decrease number', () => {
    renderWithTheme(
      <QuantityInput title="Teste" description="description" min={1} max={7} />
    )

    const input = screen.getByTestId('input')
    const buttonPlus = screen.getByTestId('plus')
    const buttonMinus = screen.getByTestId('minus')

    fireEvent.click(buttonPlus)

    expect(input).toHaveValue('2')

    fireEvent.click(buttonMinus)

    expect(input).toHaveValue('1')
  })
})
