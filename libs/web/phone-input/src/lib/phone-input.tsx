/* eslint-disable react/display-name */
import { TextInput, TextInputProps } from '@mantine/core'
import React, { KeyboardEvent, useRef } from 'react'
import { PhoneNumberUtils } from './phone-input.utils'

interface PhoneInputProps extends TextInputProps {
  countryCode: string
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ countryCode, placeholder, ...others }: PhoneInputProps, ref) => {
    const numbersRef = useRef<number[]>([])

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      const { key } = event

      if (PhoneNumberUtils.BACKSPACE_OR_DELETE.includes(key)) {
        numbersRef.current.pop()
      } else if (PhoneNumberUtils.DIGITS.includes(key)) {
        numbersRef.current.push(Number(key))

        if (PhoneNumberUtils.isTooLong(numbersRef.current, countryCode))
          numbersRef.current.pop()
      }

      event.currentTarget.value = PhoneNumberUtils.format(
        numbersRef.current,
        countryCode
      )
      event.preventDefault()
    }

    return (
      <TextInput
        {...others}
        placeholder={placeholder ? placeholder : 'Phone'}
        size="md"
        autoComplete="off"
        onKeyDown={handleKeyDown}
        ref={ref}
      />
    )
  }
)

export { PhoneInput }
