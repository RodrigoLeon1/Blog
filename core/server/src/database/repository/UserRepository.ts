import bcrypt from 'bcrypt'
import IUser from '../model/user/IUser'

export default class UserRepository {
  public static save(): string {
    return 'testing'
  }

  public static findAll(): string {
    return 'All users'
  }

  public static findById(id: number): string {
    return `User ${id}`
  }

  public static updateById(id: number): string {
    return `User ${id}`
  }

  public static deleteById(id: number): string {
    return `User ${id}`
  }
}
