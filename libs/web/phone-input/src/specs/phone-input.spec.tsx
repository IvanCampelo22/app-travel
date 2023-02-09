import { fireEvent, screen } from '@testing-library/dom'
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react'
import { renderWithTheme } from '@web/base-ui/utils'
import { useRef } from 'react'
import { PhoneInput } from '../lib/phone-input'

describe('<PhoneInput />', () => {
  it('should only accept numbers', () => {
    const { result } = renderHook(() => useRef<HTMLInputElement | null>(null))
    const ref = result.current
    renderWithTheme(<PhoneInput countryCode="BR" ref={ref} />)
    const element = screen.getByPlaceholderText('Phone')

    fireEvent.focus(element)

    fireEvent.keyDown(element, { key: 'p' })

    expect(element).toHaveValue('')
    expect(ref.current?.value).toBe('')
  })

  it('should render (XX) XXXXX-XXXX for BR countryCode', () => {
    const { result } = renderHook(() => useRef<HTMLInputElement | null>(null))
    const ref = result.current
    renderWithTheme(<PhoneInput countryCode="BR" ref={ref} />)
    const element = screen.getByPlaceholderText('Phone')

    fireEvent.focus(element)
    fireEvent.keyDown(element, { key: '8' })
    fireEvent.keyDown(element, { key: '1' })
    fireEvent.keyDown(element, { key: '9' })
    fireEvent.keyDown(element, { key: '8' })
    fireEvent.keyDown(element, { key: '1' })
    fireEvent.keyDown(element, { key: '2' })
    fireEvent.keyDown(element, { key: '1' })
    fireEvent.keyDown(element, { key: '3' })
    fireEvent.keyDown(element, { key: '2' })
    fireEvent.keyDown(element, { key: '4' })
    fireEvent.keyDown(element, { key: '1' })

    expect(element).toHaveValue('(81) 98121-3241')
    expect(ref.current?.value).toBe('(81) 98121-3241')
  })

  it('should render (XXX) XXX-XXXX for US countryCode', () => {
    const { result } = renderHook(() => useRef<HTMLInputElement | null>(null))
    const ref = result.current
    renderWithTheme(<PhoneInput countryCode="US" ref={ref} />)
    const element = screen.getByPlaceholderText('Phone')

    fireEvent.focus(element)
    fireEvent.keyDown(element, { key: '7' })
    fireEvent.keyDown(element, { key: '8' })
    fireEvent.keyDown(element, { key: '6' })
    fireEvent.keyDown(element, { key: '8' })
    fireEvent.keyDown(element, { key: '1' })
    fireEvent.keyDown(element, { key: '2' })
    fireEvent.keyDown(element, { key: '1' })
    fireEvent.keyDown(element, { key: '3' })
    fireEvent.keyDown(element, { key: '2' })
    fireEvent.keyDown(element, { key: '4' })

    expect(element).toHaveValue('(786) 812-1324')
    expect(ref.current?.value).toBe('(786) 812-1324')
  })

  it('should remove a digit after user press backspace key', () => {
    const { result } = renderHook(() => useRef<HTMLInputElement | null>(null))
    const ref = result.current
    renderWithTheme(<PhoneInput countryCode="BR" ref={ref} />)
    const element = screen.getByPlaceholderText('Phone')

    fireEvent.focus(element)

    fireEvent.keyDown(element, { key: '8' })
    fireEvent.keyDown(element, { key: '1' })
    expect(element).toHaveValue('(81)')
    expect(ref.current?.value).toBe('(81)')

    fireEvent.keyDown(element, { key: 'Backspace' })
    expect(element).toHaveValue('8')
    expect(ref.current?.value).toBe('8')
  })
})
