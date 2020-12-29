import Comment from '../comment/Comment'
import User from '../user/UserSchema'

export default interface Post {
  id: number
  name: string
  content: string
  // user: User
  // comments?: Comment[]
  status?: boolean
  createdAt?: Date
  updatedAt?: Date
}
