import express, { Router, Request, Response, NextFunction } from 'express'

import { authRoutes } from 'api/auth'

function routes(http: express.Application): void {
  authRoutes(http)
  http.get('/', (req, res) => res.send('Restful is working!!!'))
}

export { routes, Request, Response, Router, NextFunction }
