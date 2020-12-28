import Role from './Role'
import Post from './Post'

export default interface User {
  id: number
  name: string
  email?: string
  password?: string
  profilePicUrl?: string
  roles: Role[]
  posts: Post[]
  verified?: boolean
  status?: boolean
  createdAt?: Date
  updatedAt?: Date
}
