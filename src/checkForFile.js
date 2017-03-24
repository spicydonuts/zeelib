// @flow

import { statSync } from 'fs'
import { resolve } from 'path'

const checkForFile = (a: string): bool => {
  try {
    statSync(resolve(a))
    return true
  } catch (_) {
    return false
  }
}

export default checkForFile