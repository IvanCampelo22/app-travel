import '@testing-library/jest-dom'
import { renderWithTheme } from '@web/base-ui/utils'
import CustomerServiceResume from '../lib/customer-service-resume'

describe('<CustomerServiceResume />', () => {
  it('should render successfully', () => {
    renderWithTheme(<CustomerServiceResume />)
  })
})
