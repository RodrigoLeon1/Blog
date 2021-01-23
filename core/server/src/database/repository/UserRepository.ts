import bcrypt from 'bcrypt'
import User from '../model/user/IUser'

export default class UserRepository {
  public static async save(user: any) {
    const passwordHash = await bcrypt.hash(user.password, 10)
    await User.create({
      ...user,
      password: passwordHash,
    })
  }

  public static async findAll() {
    const users = await User.find().populate('articles')
    return users
  }

  public static async findById(id: string) {
    const user = await User.findById(id)
    return user
  }

  public static async findByEmail(email: string) {
    const user = await User.findOne({ email }).select('name email password')
    return user
  }

  public static async updateById(id: string, user: any) {
    await User.findByIdAndUpdate(id, user)
    return user
  }

  public static async deleteById(id: string) {
    await User.findByIdAndRemove(id)
  }
}
