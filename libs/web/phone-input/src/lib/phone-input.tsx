/* eslint-disable react/display-name */
import { TextInput, TextInputProps } from '@mantine/core'
import React, { KeyboardEvent, useRef } from 'react'
import { PhoneNumberUtils } from '../utils/phone-input.utils'

interface PhoneInputProps extends TextInputProps {
  countryCode: string
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ countryCode, ...others }: PhoneInputProps, ref) => {
    const numbers: number[] = []
    const numbersRef = useRef(numbers)
    const digits = Array(10)
      .fill(0)
      .map((_, i) => `${i}`)

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      const { key } = event

      if (
        key === PhoneNumberUtils.BACKSPACE ||
        key === PhoneNumberUtils.DELETE
      ) {
        numbersRef.current.pop()
      } else if (digits.includes(key)) {
        numbersRef.current.push(Number(key))

        if (PhoneNumberUtils.isTooLong(numbersRef.current, countryCode))
          numbersRef.current.pop()
      }

      event.currentTarget.value = PhoneNumberUtils.format(
        numbersRef.current,
        countryCode
      )
    }

    return (
      <TextInput
        {...others}
        size="md"
        autoComplete="off"
        onKeyDown={handleKeyDown}
        ref={ref}
      />
    )
  }
)

export { PhoneInput }
