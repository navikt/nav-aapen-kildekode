import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

const envFile = process.env.CONFIG || path.resolve(process.cwd(), '.env')
const parseResult = dotenv.config({ path: envFile })

if (parseResult.error) {
  console.error('Could not parse config', parseResult.error);
  process.exit(1);
}

export const getConfig = key => process.env[key]

export const getSecret = key => {
  const secretFile = path.resolve('secrets', key)
  if (fs.existsSync(secretFile)) {
    console.error(`Could not read secret ${key}: file ${secretFile} does not exist.`)
    process.exit(1)
  } else {
    return fs.readFileSync(secretFile, 'utf-8')
  }
}
