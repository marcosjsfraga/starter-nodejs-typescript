import './env'
import { createConnection, getConnection, getConnectionOptions } from 'typeorm'

beforeEach(async () => {
  const defaultOptions = await getConnectionOptions()
  const options = Object.assign(defaultOptions, {
    database: process.env.DATABASE_NAME + '_test',
    synchronize: true,
    dropSchema: true,
    logging: false,
  })
  await createConnection(options)
})

afterEach(async () => {
  const conn = getConnection()
  if (conn.isConnected) {
    await conn.close()
  }
})

process.env.DEBUG = 'false'
