import mongoose, { Document } from 'mongoose'
import { IComment } from '../comment/IComment'
import { IUser } from '../user/IUser'
import ArticleSchema from './ArticleSchema'

export const DOCUMENT_NAME = 'Article'
export const COLLECTION_NAME = 'articles'

export interface IArticle extends Document {
  name: string
  content: string
  user: IUser['_id']
  comments: [IComment['_id']]
  likes?: number
  isPublished?: boolean
  status?: boolean
}

// Export the model and return IArticle interface
export default mongoose.model<IArticle>(
  DOCUMENT_NAME,
  ArticleSchema,
  COLLECTION_NAME
)
