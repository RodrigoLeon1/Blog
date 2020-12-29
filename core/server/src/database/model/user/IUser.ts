import mongoose, { Document } from 'mongoose'
import Role from '../role/Role'
import Post from '../post/Post'
import Comment from '../comment/Comment'
import UserSchema from './UserSchema'

export const DOCUMENT_NAME = 'User'
export const COLLECTION_NAME = 'users'

export interface IUser extends Document {
  id: number
  name: string
  email: string
  password: string
  profileImgUrl?: string
  // roles: Role[]
  // posts?: Post[]
  // comments?: Comment[]
  verified?: boolean
  status?: boolean
  createdAt?: Date
  updatedAt?: Date
}

// Export the model and return your IUser interface
export default mongoose.model<IUser>(DOCUMENT_NAME, UserSchema, COLLECTION_NAME)
