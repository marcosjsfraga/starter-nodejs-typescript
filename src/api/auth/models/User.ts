import {
  ModelBase,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'api/core/framework/orm'

export interface UserData {
  id: string
  name: string
  email: string
  birthday: Date
}

@Entity('users')
class User extends ModelBase {
  @PrimaryGeneratedColumn('uuid')
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

  serializer(user: UserData): UserData {
    const { id, name, email, birthday } = user

    return { id, name, email, birthday }
  }
}

export { User }
