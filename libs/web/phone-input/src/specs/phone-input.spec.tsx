import { fireEvent, screen } from '@testing-library/dom'
import '@testing-library/jest-dom'
import { renderHook } from '@testing-library/react'
import { renderWithTheme } from '@web/base-ui'
import { useRef } from 'react'
import { PhoneInput } from '../lib/phone-input'

describe('<PhoneInput />', () => {
  it('should render (81) 98121-3241 for countryCode BR', () => {
    const { result } = renderHook(() => useRef<HTMLInputElement | null>(null))

    renderWithTheme(
      <PhoneInput countryCode="BR" placeholder="Phone" ref={result.current} />
    )

    const element = screen.getByPlaceholderText('Phone')
    element.focus()

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
    expect(result.current.current?.value).toBe('(81) 98121-3241')

    fireEvent.keyDown(element, { key: '4' })
    expect(element).toHaveValue('(81) 98121-3241')

    fireEvent.keyDown(element, { key: 'G' })
    expect(element).toHaveValue('(81) 98121-3241')

    fireEvent.keyDown(element, { key: 'Backspace' })
    expect(element).toHaveValue('(81) 98121-324')

    fireEvent.keyDown(element, { key: 'Backspace' })
    fireEvent.keyDown(element, { key: 'Backspace' })
    fireEvent.keyDown(element, { key: 'Backspace' })
    fireEvent.keyDown(element, { key: 'Backspace' })
    fireEvent.keyDown(element, { key: 'Backspace' })
    fireEvent.keyDown(element, { key: 'Backspace' })
    fireEvent.keyDown(element, { key: 'Backspace' })
    fireEvent.keyDown(element, { key: 'Backspace' })
    fireEvent.keyDown(element, { key: 'Backspace' })
    expect(element).toHaveValue('8')

    fireEvent.keyDown(element, { key: 'Backspace' })
    expect(element).toHaveValue('')
  })
})
