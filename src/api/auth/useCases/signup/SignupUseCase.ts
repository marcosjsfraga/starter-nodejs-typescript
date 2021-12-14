import { User } from 'api/auth/models/User'
import { encrypt } from 'api/core/crypto'
import { getCustomRepository } from 'api/core/framework/orm'
import UsersRepository from 'api/auth/repositories/usersRepository'
import { AppError } from 'errors/AppError'

interface Request {
  name: string
  email: string
  password: string
  birthday: Date
}

class SignupUseCase {
  async execute({ name, email, password, birthday }: Request): Promise<User> {
    const signupRepository = getCustomRepository(UsersRepository)

    const userAlreadyexists = await signupRepository.findByEmail(email)

    if (userAlreadyexists) {
      throw new AppError('This email already booked')
    }

    const passwordHash = await encrypt({ data: password, strength: 8 })

    const user = signupRepository.create({ name, email, password: passwordHash, birthday })

    await signupRepository.save(user)

    return user
  }
}

export default SignupUseCase
