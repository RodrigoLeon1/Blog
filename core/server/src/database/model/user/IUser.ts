import mongoose, { Document } from 'mongoose'
import { IArticle } from '../article/IArticle'
import { IComment } from '../comment/IComment'
import UserSchema from './UserSchema'

export const DOCUMENT_NAME = 'User'
export const COLLECTION_NAME = 'users'

export interface IUser extends Document {
  name: string
  email: string
  password: string
  profileImgUrl?: string
  articles: [IArticle['_id']]
  comments: [IComment['_id']]
  status?: boolean
}

// Export the model and return IUser interface
export default mongoose.model<IUser>(DOCUMENT_NAME, UserSchema, COLLECTION_NAME)
