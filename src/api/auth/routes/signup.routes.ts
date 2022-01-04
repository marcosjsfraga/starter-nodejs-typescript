import { Router } from '@api/core/routes'
import SignupController from '@api/auth/useCases/signup/SignupController'

const signupRoutes = Router()
const signupController = new SignupController()

signupRoutes.post('/', (request, response) => {
  return signupController.handle(request, response)
})

export { signupRoutes }
