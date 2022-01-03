import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import SocketIO from 'socket.io'
import { resolvers, typeDefs } from '../../interfaces/graphql'

import '../../database'

let app: Application | null = null

class Application {
  public project: string
  public server: ApolloServer
  public http: express.Application
  public io: SocketIO

  constructor() {
    // SETTINGS
    this.project = 'project_name'
    this.config().then(async () => {
      // INTERFACES
      const { http, socketIO } = await import('../../interfaces')
      this.http = http
      this.io = socketIO
      // API ROUTES - graphQL is on /graphql
      // routes(http)

      // CREATE APOLLO SERVER
      this.server = new ApolloServer({
        typeDefs,
        resolvers,
      })

      // APPLY EXPRESS
      this.server.applyMiddleware({
        app: http,
      })

      process.stdout.write(`ApolloServer is running 🚀\n`)
    })
  }

  private async config(): Promise<void> {
    await import('../../config/env')
  }
}

function getServer(): Application {
  if (app !== null) return app

  app = new Application()
  return app
}

export default getServer()
