import { featureCardList } from './featureCardList'

//length of featureCardList should always be 3 so the ui doesn't break
describe('featureCardList', () => {
  it('should always have a length of 3', () => {
    expect(featureCardList.length).toBe(3)
  })
})
