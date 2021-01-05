import mongoose, { Document } from 'mongoose'
import TagSchema from './TagSchema'

export const DOCUMENT_NAME = 'Tag'
export const COLLECTION_NAME = 'tags'

export interface ITag extends Document {
  name: string
}

// Export the model and return ITag interface
export default mongoose.model<ITag>(DOCUMENT_NAME, TagSchema, COLLECTION_NAME)
