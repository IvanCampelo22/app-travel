import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from '@web/base-ui'
import { MoneyInput } from '../lib/money-input'

describe('MoneyInput', () => {
  it('should render R$ 0,00 on focus', () => {
    renderWithTheme(<MoneyInput countryCode="US" placeholder="Price" />)

    const element = screen.getByPlaceholderText('Price')

    element.focus()

    expect(element).toHaveValue('$0.00')
  })

  it('should render empty string on blue', () => {
    renderWithTheme(<MoneyInput countryCode="US" placeholder="Price" />)

    const element = screen.getByPlaceholderText('Price')
    element.focus()
    element.blur()

    expect(element).toHaveValue('')
  })

  it('should render $1.50', () => {
    renderWithTheme(<MoneyInput countryCode="US" placeholder="Price" />)

    const element = screen.getByPlaceholderText('Price')
    element.focus()
    fireEvent.keyDown(element, { key: '1' })
    fireEvent.keyDown(element, { key: '5' })
    fireEvent.keyDown(element, { key: '0' })

    expect(element).toHaveValue('$1.50')
  })

  it('should remove last digit on press backspace', () => {
    renderWithTheme(<MoneyInput countryCode="US" placeholder="Price" />)

    const element = screen.getByPlaceholderText('Price')
    element.focus()
    fireEvent.keyDown(element, { key: 'Backspace' })
    expect(element).toHaveValue('$0.00')

    fireEvent.keyDown(element, { key: '1' })
    fireEvent.keyDown(element, { key: '5' })
    fireEvent.keyDown(element, { key: '0' })
    fireEvent.keyDown(element, { key: 'Backspace' })

    expect(element).toHaveValue('$0.15')
  })

  it('should remove last digit on press delete', () => {
    renderWithTheme(<MoneyInput countryCode="US" placeholder="Price" />)

    const element = screen.getByPlaceholderText('Price')
    element.focus()
    fireEvent.keyDown(element, { key: 'Delete' })
    expect(element).toHaveValue('$0.00')

    fireEvent.keyDown(element, { key: '1' })
    fireEvent.keyDown(element, { key: '5' })
    fireEvent.keyDown(element, { key: '0' })
    fireEvent.keyDown(element, { key: 'Delete' })

    expect(element).toHaveValue('$0.15')
  })

  it('should render $1,850.15', () => {
    renderWithTheme(<MoneyInput countryCode="US" placeholder="Price" />)

    const element = screen.getByPlaceholderText('Price')
    element.focus()

    fireEvent.keyDown(element, { key: '1' })
    fireEvent.keyDown(element, { key: '8' })
    fireEvent.keyDown(element, { key: '5' })
    fireEvent.keyDown(element, { key: '0' })
    fireEvent.keyDown(element, { key: '1' })
    fireEvent.keyDown(element, { key: '5' })

    expect(element).toHaveValue('$1,850.15')
  })
})
