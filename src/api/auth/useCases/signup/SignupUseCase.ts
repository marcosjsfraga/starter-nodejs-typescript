import { User } from '@api/auth/models/User'
import { encrypt } from '@api/core/crypto'
import { AppError } from '@errors/AppError'
import UsersRepository from '@api/auth/repositories/UsersRepository'
import messages from '../../../core/messages'

interface Request {
  name: string
  email: string
  password: string
  birthday: Date
}

class SignupUseCase {
  async execute({ name, email, password, birthday }: Request): Promise<User> {
    const usersRepository = new UsersRepository()

    if (name === null || name === '') {
      throw new AppError(messages.NAME_IS_EMPTY)
    } else if (email === null || email === '') {
      throw new AppError('Email is empty.')
    } else if (password === null || password === '') {
      throw new AppError(messages.PASSWORD_IS_EMPTY)
    } else if (birthday === null) {
      throw new AppError(messages.BIRTHDAY_IS_EMPTY)
    } else if (await usersRepository.findByEmail(email)) {
      throw new AppError(messages.EMAIL_ALREADY_EXISTS)
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
