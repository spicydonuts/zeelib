import test from 'tape'
import capitalizeFirstChar from './capitalize-first-char'

test('capitalizeFirstChar', (t) => {
  t.equal(capitalizeFirstChar('things and stuff'), 'Things and stuff', 'works')
  t.end()
})
