import {
  Entity,
  getRepository,
  getCustomRepository,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  EntityRepository,
  Repository,
} from 'typeorm'

type SerializerProps = { [key: string]: any }

abstract class ModelBase {
  abstract serializer(data: SerializerProps): SerializerProps
}

export {
  ModelBase,
  Entity,
  getRepository,
  getCustomRepository,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  EntityRepository,
  Repository,
}
