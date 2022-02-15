import express from 'express'
import { SessionController } from './useCases/session/SessionController'
import { SignupController } from './useCases/signup/SignupController'

const sessionController = new SessionController()
const signupController = new SignupController()

const authRoutes = (http: express.Application): void => {
  http.post('/signup', signupController.handle)
  http.post('/signin', sessionController.handle)
}

export { authRoutes }
