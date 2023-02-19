import '@testing-library/jest-dom'
import { renderWithTheme } from '@web/base-ui/utils'
import RoomPrefs from '../lib/room-prefs'

describe('<RoomPrefs />', () => {
  it('should render successfully', () => {
    renderWithTheme(<RoomPrefs />)
  })
})
