import Post from '../post/Post'
import User from '../user/UserSchema'

export default interface Comment {
  id: number
  content: string
  post: Post
  // user: User
  status?: boolean
  createdAt?: Date
  updatedAt?: Date
}
