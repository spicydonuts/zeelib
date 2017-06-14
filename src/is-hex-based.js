// @flow

import getHexRegex from './get-hex-regex'

/**
 * Returns true if the string is hex-based
 */

const isHexBased = (color: string): bool =>
  getHexRegex().test(color)

export default isHexBased