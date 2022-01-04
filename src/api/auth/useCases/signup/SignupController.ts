import { Request, Response } from '../../../../api/core/routes'
import SignupUseCase from './SignupUseCase'

class SignupController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, birthday } = request.body

    const signupUseCase = new SignupUseCase()

    const user = await signupUseCase.execute({ name, email, password, birthday })

    return response.status(200).json(user)
  }
}

export default SignupController
