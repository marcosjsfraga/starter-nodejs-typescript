import { ModelBase, Entity, Column, CreateDateColumn, UpdateDateColumn } from '@api/core/framework/orm'
import { PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

export interface UserData {
  id: string
  name: string
  email: string
  birthday: Date
}

@Entity('users')
class User extends ModelBase {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column('timestamp with time zone')
  birthday: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    super()
    if (!this.id) {
      this.id = uuid()
    }
  }

  serializer(user: UserData): UserData {
    const { id, name, email, birthday } = user

    return { id, name, email, birthday }
  }
}

export { User }
