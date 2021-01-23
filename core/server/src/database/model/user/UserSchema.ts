import { Schema } from 'mongoose'

const UserSchema: Schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      maxlength: 100,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
      select: false,
    },
    profileImgUrl: {
      type: Schema.Types.String,
      required: false,
    },
    articles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Article',
      },
    ],
    comments: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment',
        },
      ],
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

export default UserSchema
