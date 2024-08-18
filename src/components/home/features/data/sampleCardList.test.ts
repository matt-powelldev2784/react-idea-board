import { sampleCardsList } from './sampleCardsList'

//length of sampleCardsList should always be 3 so the ui doesn't break
describe('sampleCardsList', () => {
  it('should always have a length of 3', () => {
    expect(sampleCardsList.length).toBe(3)
  })
})
