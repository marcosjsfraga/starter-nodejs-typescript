import { Router, Request, Response, NextFunction } from 'express'

import { sessionRoutes, signupRoutes } from 'api/auth/routes'

const routes = Router()

routes.use('/signup', signupRoutes)
routes.use('/session', sessionRoutes)

export { routes, Request, Response, Router, NextFunction }
