import './env'
import { createConnection, getConnection, getConnectionOptions } from 'typeorm'

beforeAll(async () => {
  // console.log('...CREATE DATABASE...')
  // const connection = await createConnection()
  // await connection.query(`CREATE DATABASE ${process.env.DATABASE_NAME} WITH OWNER = postgres`) // IF NOT EXISTS
  // await connection.close()
})

beforeEach(async () => {
  const defaultOptions = await getConnectionOptions()
  const options = Object.assign(defaultOptions, {
    database: process.env.DATABASE_NAME,
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
