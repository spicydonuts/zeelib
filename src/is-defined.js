// @flow

/**
 * Returns true if the value is defined
 * @example
 * isDefined(null) // => true
 */

const isDefined = (v: any): bool =>
  typeof v !== 'undefined'

export default isDefined
