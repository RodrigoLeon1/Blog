import mongoose, { Document } from 'mongoose'
import { IArticle } from '../article/IArticle'
import { IUser } from '../user/IUser'
import CommentSchema from './CommentSchema'

export const DOCUMENT_NAME = 'Article'
export const COLLECTION_NAME = 'articles'

export interface IComment extends Document {
  content: string
  user: IUser['_id']
  article: IArticle['_id']
  status?: boolean
}

// Export the model and return IComment interface
export default mongoose.model<IComment>(
  DOCUMENT_NAME,
  CommentSchema,
  COLLECTION_NAME
)
