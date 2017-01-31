import { inspect } from 'util'

// options:
// bold, italic, underline, inverse,
// white, grey, black, blue, cyan, green, magenta, red, yellow
// usage:
// const c = require('./color')
// console.log(c.bold(c.blue('foo')))
const colorize = (color, text) => {
  const codes = inspect.colors[color]
  return `\x1b[${codes[0]}m${text}\x1b[${codes[1]}m`
}
const colors = () => {
  const val = {}
  Object.keys(inspect.colors).forEach(color => {
    val[color] = text => colorize(color, text)
  })
  return val
}

export default colors()