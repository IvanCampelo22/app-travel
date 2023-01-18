import { TextInput, TextInputProps } from '@mantine/core'
import clm from 'country-locale-map'
import { FocusEvent, KeyboardEvent } from 'react'
import { formatMoney } from './money-input.utils'

type MoneyInputProps = TextInputProps & {
  countryCode: string
}

const MoneyInput = (props: MoneyInputProps) => {
  const { countryCode, ...others } = props
  const country = clm.getCountryByAlpha2(countryCode)
  const initialValue = '0.00'
  let currentValue = initialValue
  let integerPart = ['0']
  let decimalPart = ['0', '0']

  const digits = Array(10)
    .fill(0)
    .map((_, i) => `${i}`)

  const hasInitialValue = () => {
    return currentValue === initialValue
  }

  const handleBackspace = (event: KeyboardEvent<HTMLInputElement>) => {
    if (hasInitialValue()) return
    decimalPart = [integerPart.pop() as string, decimalPart[0]]
    currentValue = [...integerPart, '.', ...decimalPart]
      .join()
      .replaceAll(',', '')
    event.currentTarget.value = formatMoney(
      currentValue,
      country?.default_locale.replace('_', '-') as string,
      country?.currency as string
    )
  }

  const handleDigit = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
    integerPart = [...integerPart, decimalPart[0]]
    decimalPart = [decimalPart[1], key]
    currentValue = [...integerPart, '.', ...decimalPart]
      .join()
      .replaceAll(',', '')
    event.currentTarget.value = formatMoney(
      currentValue,
      country?.default_locale.replace('_', '-') as string,
      country?.currency as string
    )
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
    event.preventDefault()
    if (digits.includes(key)) {
      handleDigit(event)
      return
    } else {
      if (key === 'Backspace' || key === 'Delete') {
        handleBackspace(event)
      }
    }
  }

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length === 0) {
      event.currentTarget.value = formatMoney(
        initialValue,
        country?.default_locale.replace('_', '-') as string,
        country?.currency as string
      )
    }
  }

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (hasInitialValue()) event.currentTarget.value = ''
  }

  return (
    <TextInput
      size="md"
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleOnBlur}
      {...others}
    />
  )
}

export { MoneyInput }
