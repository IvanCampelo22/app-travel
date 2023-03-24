import '@testing-library/jest-dom'
import { renderWithTheme } from '@web/base-ui/utils'
import Header from '../lib/header'

describe('<Header />', () => {
  it('should render successfully', () => {
    renderWithTheme(<Header title="Teste" subtitle="Teste" />)
  })
})
