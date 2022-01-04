import { Router } from '../../../api/core/routes'
import { SessionController } from '../useCases/session/SessionController'

const sessionRouter = Router()
const sessionController = new SessionController()

sessionRouter.post('/', (request, respone) => {
  return sessionController.handle(request, respone)
})

export { sessionRouter }
