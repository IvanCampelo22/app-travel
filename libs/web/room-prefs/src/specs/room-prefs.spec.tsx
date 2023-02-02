import { render } from '@testing-library/react'

import RoomPrefs from '../lib/room-prefs'

describe('<RoomPrefs />', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RoomPrefs />)
    expect(baseElement).toBeTruthy()
  })
})
