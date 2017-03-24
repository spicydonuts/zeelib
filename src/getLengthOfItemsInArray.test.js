import test from 'tape'
import getLengthOfItemsInArray from './getLengthOfItemsInArray'

test('getLengthOfItemsInArray', (t) => {
  t.plan(1)
  t.equal(getLengthOfItemsInArray([ 1, 2, 3, 3 ], 3), 2, 'returns length of items in array')
})