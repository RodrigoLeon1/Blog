import bcrypt from 'bcrypt'
import User, { IUser } from '../model/user/IUser'

export default class UserRepository {
  //
  public static async save(name: string, email: string, password: string) {
    const passwordHash = await bcrypt.hash(password, 10)
    await User.create({
      name,
      email,
      password: passwordHash,
      articles: [],
      comments: [],
    })
  }

  public static async findAll() {
    const users = await User.find()
    return users
  }

  public static async findById(id: string) {
    const user = await User.findById(id)
    return user
  }

  public static async updateById(id: string, userUpdated: IUser) {
    await User.findByIdAndUpdate(id, {})
  }

  public static async deleteById(id: string) {
    await User.findByIdAndDelete(id)
  }
}
