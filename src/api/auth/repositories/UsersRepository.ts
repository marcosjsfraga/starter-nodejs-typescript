import { EntityRepository, getRepository } from '../../../api/core/framework/orm'
import { User } from '../../../api/auth/models'

@EntityRepository(User)
class UsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    const repository = getRepository(User)

    const findEmail = await repository.findOne({
      where: { email },
    })

    return findEmail || null
  }

  async create(user: User): Promise<User | null> {
    const repository = getRepository(User)

    const userCreated = repository.create(user)
    await repository.save(user)

    return userCreated || null
  }
}

export default UsersRepository
