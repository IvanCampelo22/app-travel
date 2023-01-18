import {
  AsYouType,
  CountryCode,
  validatePhoneNumberLength
} from 'libphonenumber-js'

namespace PhoneNumberUtils {
  export const isTooLong = (numbers: number[], countryCode: string) => {
    const number = format(numbers, countryCode)
    const result = validate(number, countryCode)
    return result === 'TOO_LONG'
  }

  export const format = (numbers: number[], countryCode: string) => {
    const number = numbers.join().replaceAll(',', '')
    return new AsYouType(countryCode as CountryCode).input(number)
  }

  export const validate = (formattedNumber: string, countryCode: string) => {
    return validatePhoneNumberLength(
      formattedNumber,
      countryCode as CountryCode
    )
  }

  export const isInvalid = (formattedNumber: string, countryCode: string) => {
    const result = validate(formattedNumber, countryCode as CountryCode)

    return (
      result === 'INVALID_COUNTRY' ||
      result === 'NOT_A_NUMBER' ||
      result === 'INVALID_LENGTH' ||
      result === 'TOO_SHORT'
    )
  }

  export const DIGITS = {
    Digit0: 0,
    Digit1: 1,
    Digit2: 2,
    Digit3: 3,
    Digit4: 4,
    Digit5: 5,
    Digit6: 6,
    Digit7: 7,
    Digit8: 8,
    Digit9: 9
  }

  export const BACKSPACE = 'Backspace'
  export const DELETE = 'Delete'
}

export { PhoneNumberUtils }
