import './env'
// import { createConnection } from 'typeorm'

module.exports = async () => {
  // const connection = await createConnection()
  // const database = process.env.DATABASE_NAME + '_test'
  // console.log('abacaxi ------')
  // // DROP AND CREATE TEST DB
  // // await connection?.query(`DROP SCHEMA IF EXISTS ${database};`)
  // await connection?.query(`CREATE SCHEMA ${database} IF NOT EXISTS;`)
  // await connection?.close()
  // const client = await MongoClient.connect(
  //   `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
  //   { useNewUrlParser: true, useUnifiedTopology: true }
  // )
  // const db = client.db('test')
  // await db
  //   .addUser(process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, { roles: ['dbAdmin', 'readWrite'] })
  //   // eslint-disable-next-line @typescript-eslint/no-empty-function
  //   .catch(() => {})
  // client.close()
}
