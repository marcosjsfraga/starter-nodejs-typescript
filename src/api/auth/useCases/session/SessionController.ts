import { Request, Response } from 'api/core/routes'
import { SessionUseCase } from './SessionUseCase'

class SessionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    const sessionUseCase = new SessionUseCase()

    const sessionInfo = await sessionUseCase.execute({ email, password })

    return response.json(sessionInfo)
  }
}

export { SessionController }
