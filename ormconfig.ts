import './src/config/env'

export default {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: [__dirname + '/src/database/migrations/*.ts'],
  entities: [__dirname + '/src/api/**/models/*.ts'],
  cli: {
    migrationsDir: __dirname + '/src/database/migrations',
    entitiesDir: __dirname + '/src/api/**/models',
  },
}
