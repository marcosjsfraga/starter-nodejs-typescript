import { EntityRepository, Repository } from 'api/core/framework/orm'
import { User } from 'api/auth/models'

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | null> {
    const findEmail = await this.findOne({
      where: { email },
    })

    return findEmail || null
  }
}

export default UsersRepository
