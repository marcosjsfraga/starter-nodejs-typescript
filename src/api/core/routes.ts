import { Router, Request, Response, NextFunction } from 'express'

import { sessionRouter, signupRoutes } from 'api/auth/routes'

const routes = Router()

routes.use('/signup', signupRoutes)
routes.use('/session', sessionRouter)

export { routes, Request, Response, Router, NextFunction }
