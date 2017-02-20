// @flow

import { readFileSync } from 'fs'

const readJsonSync = (file: string) : string =>
  JSON.parse(readFileSync(file, 'utf8'))

export default readJsonSync
