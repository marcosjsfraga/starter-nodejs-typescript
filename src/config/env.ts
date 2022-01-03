import path from 'path'
import { default as dotenv } from 'dotenv-safe'

const ENV: string = process.env.NODE_ENV || 'development' || 'test'

dotenv.config({
  path: path.join(__dirname, `../config/.env.${ENV}`),
  sample: path.join(__dirname, '../config/.env.example'),
})

process.stdout.write(`Loaded => enviroment: ${process.env.NODE_ENV}\n`)
