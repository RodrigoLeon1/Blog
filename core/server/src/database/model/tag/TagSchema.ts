import { Schema } from 'mongoose'

const TagSchema: Schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      maxlength: 100,
    },
    articles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Article',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default TagSchema
