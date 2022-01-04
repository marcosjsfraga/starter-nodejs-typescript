import { User, UserData } from '../../../../api/auth/models'
import { compare } from '../../../../api/core/crypto'
import { generateJwtToken } from '../../../../api/core/jwt'
import { AppError } from '../../../../errors/AppError'
import { getCustomRepository } from '../../../../api/core/framework/orm'
import UsersRepository from '../../../../api/auth/repositories/usersRepository'

interface Request {
  email: string
  password: string
}

interface Response {
  user: UserData
  token: string
}

class SessionUseCase {
  async execute({ email, password }: Request): Promise<Response> {
    const usersReposiotry = getCustomRepository(UsersRepository)

    const userFiltered = await usersReposiotry.findByEmail(email)

    if (!userFiltered) {
      throw new AppError('Email or password incorrect')
    }

    const passswordMatch = await compare(password, userFiltered.password)

    if (!passswordMatch) {
      throw new AppError('Email or password incorrect')
    }

    const user = new User()

    const userSerialized = user.serializer(userFiltered)

    const accessToken = generateJwtToken({ serializerData: userSerialized, subject: userFiltered.id })

    return { user: userSerialized, token: accessToken }
  }
}

export { SessionUseCase }
