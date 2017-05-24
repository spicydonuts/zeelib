// @flow

/**
 * Adds ordinal onto number
 * Example: 1 -> '1st'
 */

const getOrdinal = (n: number): string => {
  const s = [ 'th', 'st', 'nd', 'rd' ]
  const v = n % 100
  return n + (s[(v - 20) % 10] || s[v] || s[0])
}

export default getOrdinal
