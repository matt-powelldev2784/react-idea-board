import { navItemsList } from './navItemsList'

describe('navItemsList', () => {
  // This test ensures that the navigation contains less than or equal to 4 items
  // This is important because the the desktop navigation ui doesn't have enough space to display more than 4 items
  test('should contain less than or equal to 4 items', () => {
    expect(navItemsList.length).toBeLessThanOrEqual(4)
  })
})
