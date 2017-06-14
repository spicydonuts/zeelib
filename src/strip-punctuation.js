/* eslint-disable no-useless-escape */
// @flow

/**
 * Strip punctuation from string
 */

const stripPunctuation = (str: string): string =>
  str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/\s{2,}/g, ' ')

export default stripPunctuation