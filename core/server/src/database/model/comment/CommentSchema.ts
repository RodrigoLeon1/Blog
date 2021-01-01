import { Schema } from 'mongoose'

const CommentSchema: Schema = new Schema(
  {
    content: {
      type: Schema.Types.String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    articles: {
      type: Schema.Types.ObjectId,
      ref: 'Article',
    },
    status: {
      type: Schema.Types.Boolean,
      default: true,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

export default CommentSchema
