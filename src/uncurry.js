// @flow

const uncurry = (f: () => any) =>
  (a: any, b: any): any =>
    f(a)(b)

export default uncurry
