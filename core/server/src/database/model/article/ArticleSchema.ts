import { Schema } from 'mongoose'

const ArticleSchema: Schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      maxlength: 100,
    },
    content: {
      type: Schema.Types.String,
      required: true,
    },
    likes: {
      type: Schema.Types.Number,
      required: false,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    isPublished: {
      type: Schema.Types.Boolean,
      default: true,
      select: false,
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

export default ArticleSchema
