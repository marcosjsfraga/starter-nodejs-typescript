import { createConnection } from 'typeorm'

createConnection()

// import { Connection, createConnection, getConnectionOptions } from 'typeorm'

// export default async (host = 'database'): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions()

//   return createConnection(
//     Object.assign(defaultOptions, {
//       host,
//       database: process.env.NODE_ENV === 'test' ? 'starter_test' : defaultOptions.database,
//     })
//   )
// }
