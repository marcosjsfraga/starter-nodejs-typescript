import { User } from 'api/auth/models/User'
import { encrypt } from 'api/core/crypto'
import { AppError } from 'errors/AppError'
import UsersRepository from 'api/auth/repositories/UsersRepository'

interface Request {
  name: string
  email: string
  password: string
  birthday: Date
}

class SignupUseCase {
  async execute({ name, email, password, birthday }: Request): Promise<User> {
    const usersRepository = new UsersRepository()

    if (await usersRepository.findByEmail(email)) {
      throw new AppError('This email is already booked.')
    }

    const user = new User()
    user.name = name
    user.email = email
    user.password = await encrypt({ data: password, strength: 8 })
    user.birthday = birthday

    const userCreated = usersRepository.create(user)

    return userCreated
  }
}

export default SignupUseCase
