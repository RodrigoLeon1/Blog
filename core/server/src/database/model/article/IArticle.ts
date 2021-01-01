import mongoose, { Document } from 'mongoose'
import { IUser } from '../user/IUser'
import PostSchema from './ArticleSchema'

export const DOCUMENT_NAME = 'Article'
export const COLLECTION_NAME = 'articles'

export interface IArticle extends Document {
  name: string
  content: string
  user: IUser['_id']
  likes?: number
  status?: boolean
}

// Export the model and return IArticle interface
export default mongoose.model<IArticle>(
  DOCUMENT_NAME,
  PostSchema,
  COLLECTION_NAME
)
