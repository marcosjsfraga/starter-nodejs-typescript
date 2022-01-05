import { Router } from 'api/core/routes'
import { SessionController } from '../useCases/session/SessionController'

const sessionRoutes = Router()
const sessionController = new SessionController()

sessionRoutes.post('/', (request, respone) => {
  return sessionController.handle(request, respone)
})

export { sessionRoutes }
