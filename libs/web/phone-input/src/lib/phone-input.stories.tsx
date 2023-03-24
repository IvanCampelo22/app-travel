import { PhoneInput } from './phone-input'

export default {
  title: 'Phone Input',
  component: PhoneInput
}

export const BR = () => <PhoneInput countryCode="BR" placeholder="Phone BR" />
export const US = () => <PhoneInput countryCode="US" placeholder="Phone US" />
