import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'

const envFile = process.env.CONFIG || path.resolve(process.cwd(), '.env')
if (fs.existsSync(envFile)) {
  const parseResult = dotenv.config({ path: envFile })
  if (parseResult.error) {
    console.error('Could not parse config', parseResult.error)
    process.exit(1)
  }
} else {
  console.log(`No .env file detected at ${envFile}, will skip reading configuration from there.`)
}


export const getConfig = key => process.env[key]
