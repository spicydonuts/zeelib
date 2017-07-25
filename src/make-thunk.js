/* eslint-disable standard/no-callback-literal */

const makeThunk = (fn, ...args) => {
  console.error('`makeThunk` is deprecated.')
  let v = {}
  let fns = []

  fn(...args, function wait (...args) {
    if (!('args' in v)) {
      v.args = args
    }
    if (fns.length > 0) {
      while (fns.length > 0) {
        fns.shift()(...v.args)
      }
    }
  })
  return function thunk (cb) {
    if ('args' in v) {
      cb(...v.args)
    } else {
      fns.push(cb)
    }
  }
}

export default makeThunk
