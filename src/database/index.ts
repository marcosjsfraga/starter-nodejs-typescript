import { createConnection, getConnectionOptions } from 'typeorm'
import '../config/env'

const default_database = process.env.DATABASE_NAME
const database = process.env.NODE_ENV === 'test' ? default_database + '_test' : default_database
getConnectionOptions().then((defaultOptions) => {
  const opt = Object.assign(defaultOptions, {
    database: database,
  })

  createConnection(opt)
})
